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
  /** Morally binding residency affirmation (UI + API). */
  oath: boolean;
};

const DATA_PATH = path.join(process.cwd(), "data", "signatures.json");
const BLOB_PATHNAME = "dabondata/signatures.json";
const QC_PROBE_ID = "mu7v0ye3-6xmheb";
const QC_PROBE_NAME = "gus qc probe";

function isVercel(): boolean {
  return Boolean(process.env.VERCEL);
}

function hasBlobToken(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function isQcProbe(signature: Signature): boolean {
  return (
    signature.id === QC_PROBE_ID ||
    signature.name.trim().toLowerCase() === QC_PROBE_NAME
  );
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

async function persistStore(list: Signature[]): Promise<boolean> {
  if (hasBlobToken()) {
    const wrote = await writeBlobStore(list);
    if (wrote) return true;
    if (isVercel()) return false;
  } else if (isVercel()) {
    return false;
  }
  await writeFileStore(list);
  return true;
}

/** Live store minus the QC probe. Rewrites Blob/file when the probe is present. */
async function loadCleanStore(): Promise<Signature[]> {
  const fromBlob = hasBlobToken() ? await readBlobStore() : null;
  if (fromBlob) {
    const cleaned = fromBlob.filter((s) => !isQcProbe(s));
    if (cleaned.length !== fromBlob.length) {
      await writeBlobStore(cleaned);
    }
    return cleaned;
  }
  const fromFile = await readFileStore();
  const cleaned = fromFile.filter((s) => !isQcProbe(s));
  if (cleaned.length !== fromFile.length && !isVercel()) {
    await writeFileStore(cleaned);
  }
  return cleaned;
}

export async function listSignatures(): Promise<Signature[]> {
  const cleaned = await loadCleanStore();
  return cleaned.slice().reverse();
}

export async function removeSignatures(filter: {
  id?: string;
  name?: string;
}): Promise<
  { ok: true; removed: number } | { ok: false; error: string; status: number }
> {
  const id = filter.id?.trim();
  const name = filter.name?.trim();
  if (!id && !name) {
    return { ok: false, error: "Provide id or name to remove.", status: 400 };
  }
  const fromBlob = hasBlobToken() ? await readBlobStore() : null;
  if (hasBlobToken() && fromBlob === null) {
    return { ok: false, error: "Could not read signature store.", status: 500 };
  }
  const existing = fromBlob ?? (await readFileStore());
  const remaining = existing.filter((s) => {
    if (id && s.id === id) return false;
    if (name && s.name.trim().toLowerCase() === name.toLowerCase()) return false;
    return true;
  });
  const removed = existing.length - remaining.length;
  if (removed === 0) {
    return { ok: true, removed: 0 };
  }
  const wrote = await persistStore(remaining);
  if (!wrote) {
    return { ok: false, error: "Could not write signature store.", status: 500 };
  }
  return { ok: true, removed };
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
  if (!input.oath) {
    return {
      ok: false,
      error: "Residency affirmation is required before you sign.",
      status: 400,
    };
  }
  // New signatures: Doubs / Adamstown / Buckeystown only ("Other" kept on type for older rows).
  const allowed: Community[] = ["Doubs", "Adamstown", "Buckeystown"];
  if (!allowed.includes(input.community)) {
    return {
      ok: false,
      error: "Choose Doubs, Adamstown, or Buckeystown.",
      status: 400,
    };
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
    const existing = await loadCleanStore();
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

  const existing = await loadCleanStore();
  await writeFileStore([...existing, signature]);
  return { ok: true, signature };
}
