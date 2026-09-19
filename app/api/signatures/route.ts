import { NextResponse } from "next/server";
import { addSignature, listSignatures } from "@/lib/signatures";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
