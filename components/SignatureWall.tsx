"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { Community, Signature } from "@/lib/signatures";

/** Signers must pick a proposed Tier 1 community — no freeloader "Other". */
const COMMUNITIES: Community[] = ["Doubs", "Adamstown", "Buckeystown"];

export function SignatureWall() {
  const [signatures, setSignatures] = useState<Signature[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [okMsg, setOkMsg] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/signatures", { cache: "no-store" });
      const data = (await res.json()) as { signatures?: Signature[] };
      setSignatures(data.signatures ?? []);
    } catch {
      setError("Could not load signatures.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setOkMsg(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      community: String(fd.get("community") ?? "") as Community,
      note: String(fd.get("note") ?? ""),
      consent: fd.get("consent") === "on",
      oath: fd.get("oath") === "on",
    };
    try {
      const res = await fetch("/api/signatures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Could not save signature.");
        return;
      }
      setOkMsg("Thank you — your name is on the wall.");
      form.reset();
      await refresh();
    } catch {
      setError("Network error — try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="dab-sign">
      <aside className="dab-sign-oath" aria-label="Residency affirmation">
        <h3 className="dab-iron-phrase">Affirmation before you sign</h3>
        <p>
          By putting my name on this wall, I affirm — as a matter of honor among
          neighbors — that I am a resident of the proposed{" "}
          <strong>DAB ENERGY TRUST</strong> area:{" "}
          <strong>Doubs</strong>, <strong>Adamstown</strong>, or{" "}
          <strong>Buckeystown</strong> (Adamstown CDP, Buckeystown CDP, or a
          Doubs service address on the published Doubs list when Council adopts
          it). I am not signing for Frederick City or any place outside these
          three communities.
        </p>
        <p>
          I understand this Trust is exclusive by design — for our home, our
          coalition — and that my name stands as a public witness that I live
          here and ask County leaders to attach DAB ENERGY TRUST to the next
          CDI / DRRA deal.
        </p>
        <p className="dab-sign-oath-close">
          So help me God.
        </p>
      </aside>

      <form className="dab-sign-form" onSubmit={onSubmit}>
        <label className="dab-sign-consent dab-sign-oath-check">
          <input name="oath" type="checkbox" required />
          I affirm I am a resident of Doubs, Adamstown, or Buckeystown as
          described above — so help me God.
        </label>
        <label>
          Full name <span aria-hidden>*</span>
          <input
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label>
          Community <span aria-hidden>*</span>
          <select name="community" required defaultValue="">
            <option value="" disabled>
              Choose community
            </option>
            {COMMUNITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Optional note
          <textarea
            name="note"
            rows={3}
            maxLength={280}
            placeholder="A short line, if you like"
          />
        </label>
        <label className="dab-sign-consent">
          <input name="consent" type="checkbox" required />
          I consent to listing my name publicly on this signature wall.
        </label>
        {error ? <p className="dab-sign-error">{error}</p> : null}
        {okMsg ? <p className="dab-sign-ok">{okMsg}</p> : null}
        <button type="submit" disabled={submitting}>
          {submitting ? "Signing…" : "Sign the wall"}
        </button>
      </form>

      <section className="dab-sign-wall" aria-live="polite">
        <h3>Public signatures</h3>
        {loading ? <p className="dab-sign-meta">Loading…</p> : null}
        {!loading && signatures.length === 0 ? (
          <p className="dab-sign-meta">Be the first neighbor on the parchment.</p>
        ) : null}
        <ol className="dab-sign-list">
          {signatures.map((s, i) => (
            <li
              key={s.id}
              className={i % 2 === 0 ? "dab-sign-ink-a" : "dab-sign-ink-b"}
              style={{ ["--rot" as string]: `${((i * 7) % 11) - 5}deg` }}
            >
              <span className="dab-sign-name">{s.name}</span>
              <span className="dab-sign-place">{s.community}</span>
              {s.note ? <span className="dab-sign-note">{s.note}</span> : null}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
