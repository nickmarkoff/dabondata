# Signature wall type — Pea Eye → Call / Gus

Nick wants **military-scribe / quilled Continental clerk** names on the dab-on-data signature wall — not modern wedding script.

## Pick
**Meddon** (Google Fonts) — based on an 18th-century legal manuscript hand. Closest free stand-in for period muster-roll clerk (paid “Military Scribe” is the museum match; Meddon is the Google-safe cousin).

**Not:** Italianno, Pinyon Script, Great Vibes, Allura (invitation chrome).
**Runner-up if Meddon feels thin on mobile:** Homemade Apple at `clamp(1.45rem, 4vw, 1.9rem)` — more irregular, less period-true.

## Tokens
See `SIGNATURE_FONT.css` (also below).

```css
--font-signature: "Meddon", "Homemade Apple", cursive;
--fs-signature: clamp(1.55rem, 4.2vw, 2.05rem);
--color-signature: #1A1814; /* same ink as body */
```

Google Fonts:
`https://fonts.googleapis.com/css2?family=Meddon&display=swap`

## Wire
- Apply only to signature **names** (`.dab-sign-name`), not wall chrome / headers.
- Weight 400 only (single-cut face).
- Keep EB Garamond / Libre Caslon for the rest of the page.
