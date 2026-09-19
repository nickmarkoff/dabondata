# Masthead lock — Option D (full cartouche)

Nick picked **D** (2026-09-19): full woodcut cartouche with bulb crest + industrial foot.

## Swap
Replace live mobile masthead with:
- `public/art/mobile/masthead_390_compact.png` ← D on-paper (drop-in; already promoted)
- Alt transparent ink: `public/art/mobile/masthead_390_grand_D_ink.png` (if CSS already tiles paper)

Backup of prior: `masthead_390_compact_PRE_GRAND_D.png`

## Locked copy (baked in PNG)
- Title: DAB ENERGY TRUST
- Towns: Doubs · Adamstown · Buckeystown
- Plate: Our Home, Our Coalition
- Tag: We like it here. / Keep Frederick looking like Frederick.
- Date: — Sept 18, 2026 —

## Notes
- Title→rule clear gap ≥18px — do not CSS-underline the title
- Hero masthead ornament only; keep page woodcut border as outer sheet
- If double-chrome at desktop, reduce masthead scale/padding — do not strip the cartouche
- Meddon on /sign unchanged

Live wire: `SiteShell` + `.dab-masthead` at **390×389** (`height: auto`). Default src is the on-paper compact; ink-only is an unused alt while paper tiles behind the sheet.

Blend pass (2026-09-19): live compact is now a feathered cartouche with transparent exterior — see `BLEND_HANDOFF.md`. Do not restore the opaque cooler plate.

## Preview
Attached `PREVIEW_D.jpg` (handoff). Supersedes the 390×250 clear-gap plate.
