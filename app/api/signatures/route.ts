import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import {
  addSignature,
  listSignatures,
  removeSignatures,
} from "@/lib/signatures";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function adminAuthorized(req: Request): boolean {
  const header = req.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const secret =
    process.env.SIGNATURES_ADMIN_SECRET || process.env.BLOB_READ_WRITE_TOKEN;
  if (!secret || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(secret);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function GET() {
  const signatures = await listSignatures();
  return NextResponse.json({ signatures });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const b = body as Record<string, unknown>;
  const result = await addSignature({
    name: String(b.name ?? ""),
    community: b.community as
      | "Doubs"
      | "Adamstown"
      | "Buckeystown"
      | "Other",
    note: b.note != null ? String(b.note) : undefined,
    consent: Boolean(b.consent),
    oath: Boolean(b.oath),
  });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ signature: result.signature }, { status: 201 });
}

export async function DELETE(req: Request) {
  if (!adminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const url = new URL(req.url);
  let id = url.searchParams.get("id") ?? undefined;
  let name = url.searchParams.get("name") ?? undefined;

  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    try {
      const body = (await req.json()) as Record<string, unknown>;
      if (!id && body.id != null) id = String(body.id);
      if (!name && body.name != null) name = String(body.name);
    } catch {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }
  }

  const result = await removeSignatures({ id, name });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ removed: result.removed });
}
