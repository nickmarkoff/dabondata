import { promises as fs } from "fs";
import path from "path";

export type Community = "Doubs" | "Adamstown" | "Buckeystown" | "Other";

export type Signature = {
  id: string;
  name: string;
  community: Community;
  note?: string;
  createdAt: string;
};

export type SignatureInput = {
  name: string;
  community: Community;
  note?: string;
  consent: boolean;
};

const DATA_PATH = path.join(process.cwd(), "data", "signatures.json");
const BLOB_PATHNAME = "dabondata/signatures.json";

function isVercel(): boolean {
  return Boolean(process.env.VERCEL);
}

function hasBlobToken(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readFileStore(): Promise<Signature[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw) as Signature[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeFileStore(list: Signature[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(list, null, 2) + "\n", "utf8");
}

async function readBlobStore(): Promise<Signature[] | null> {
  if (!hasBlobToken()) return null;
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: BLOB_PATHNAME });
    const hit = blobs.find((b) => b.pathname === BLOB_PATHNAME);
    if (!hit) return [];
    const res = await fetch(hit.url, { cache: "no-store" });
    if (!res.ok) return [];
    const parsed = (await res.json()) as Signature[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return null;
  }
}

async function writeBlobStore(list: Signature[]): Promise<boolean> {
  if (!hasBlobToken()) return false;
  try {
    const { put } = await import("@vercel/blob");
    await put(BLOB_PATHNAME, JSON.stringify(list, null, 2), {
      access: "public",
      contentType: "application/json",
      allowOverwrite: true,
      addRandomSuffix: false,
    });
    return true;
  } catch {
    return false;
  }
}

export async function listSignatures(): Promise<Signature[]> {
  const fromBlob = await readBlobStore();
  if (fromBlob) return fromBlob.slice().reverse();
  const fromFile = await readFileStore();
  return fromFile.slice().reverse();
}

export async function addSignature(
  input: SignatureInput,
): Promise<
  { ok: true; signature: Signature } | { ok: false; error: string; status: number }
> {
  const name = input.name?.trim().replace(/\s+/g, " ") ?? "";
  if (name.length < 2 || name.length > 80) {
    return {
      ok: false,
      error: "Full name is required (2–80 characters).",
      status: 400,
    };
  }
  if (!input.consent) {
    return {
      ok: false,
      error: "Consent to public listing is required.",
      status: 400,
    };
  }
  const allowed: Community[] = ["Doubs", "Adamstown", "Buckeystown", "Other"];
  if (!allowed.includes(input.community)) {
    return { ok: false, error: "Choose a community.", status: 400 };
  }
  const note = (input.note ?? "").trim().slice(0, 280);

  const signature: Signature = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    community: input.community,
    note: note || undefined,
    createdAt: new Date().toISOString(),
  };

  if (hasBlobToken()) {
    const existing = (await readBlobStore()) ?? (await readFileStore());
    const wrote = await writeBlobStore([...existing, signature]);
    if (!wrote) {
      return {
        ok: false,
        error: "Could not write to Blob storage.",
        status: 500,
      };
    }
    return { ok: true, signature };
  }

  if (isVercel()) {
    return {
      ok: false,
      error:
        "Signature storage on Vercel needs BLOB_READ_WRITE_TOKEN (Vercel Blob). Locally, signatures save to data/signatures.json.",
      status: 503,
    };
  }

  const existing = await readFileStore();
  await writeFileStore([...existing, signature]);
  return { ok: true, signature };
}
