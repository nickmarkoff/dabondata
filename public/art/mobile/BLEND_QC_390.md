# BLEND QC — mobile 390 one-unit (Pea Eye)

Nick’s bar: matched parchment `#F2E8D5`, single ornate frame, type-only masthead + divider keyed to paper — no stacked chrome, checkerboard, or visible seams.

Date: 2026-09-18 (ET)

## Verdict summary

| Asset | Result | Notes |
|-------|--------|-------|
| `mobile/masthead_390_compact.png` | **PASS** | Type-only; towns Doubs · Adamstown · Buckeystown; title DAB ENERGY TRUST; no bulbs/rails; parchment locked to `#F2E8D5`. |
| `mastheads/masthead_dab_energy_trust_390.{png,jpg}` | **PASS** | Same bytes as compact masthead (synced). |
| `mobile/divider_390.{png,jpg}` | **PASS** (fixed) | Was vignette/cream band → seam vs page paper. Flattened paper pixels to `#F2E8D5`. Ornament kept. |
| `dividers/divider_gilt_electric.{png,jpg}` | **PASS** (fixed) | Synced to flattened divider. |
| `mobile/page_border_390x844_transparent.png` | **PASS** | Single ornate phone frame; interior fully transparent (no baked checkerboard). Corner bulbs/rails live on the **border** (intended), not the masthead. |
| `mobile/HERO_390_unit.png` (+ preview jpg) | **PASS** (recomposed) | One document: parchment fill + type mast + flattened divider + border overlay. Top inset **82px** (was 72) → title clearance ~24px below rail open. |

## Checks performed (Pillow)

1. **Checkerboard / gray plates** — No baked transparency checker in interiors. Divider gray% ≈ 0. Masthead stray near-gray locked to parchment. Border hole alpha = 0 throughout content well.
2. **Parchment vs `#F2E8D5`** — Masthead + divider paper forced exact `(242,232,213)`. HERO center fill exact parchment. Post-fix divider edge seam strength **0.000** (was ~2.2).
3. **Double frames on masthead** — None. Masthead is type + thin typographic rules only (no side rails / hanging bulbs).
4. **Title clip in HERO** — Pre-fix: mast at y=72, title top y=83 (~14px clearance). Post-fix: inset **82**, title top y=**93** (~**24px** clearance). Not clipped by top ornament.
5. **Towns / title copy** — Unchanged: **DAB ENERGY TRUST** / **Doubs · Adamstown · Buckeystown**.

## Changes made

1. Flattened divider parchment/vignette band → `#F2E8D5` (~23.8k px), saved to `mobile/divider_390.{png,jpg}` and `dividers/divider_gilt_electric.{png,jpg}`.
2. Locked masthead near-parchment / stray gray → `#F2E8D5` (~1.2k px); wrote `mobile/masthead_390_compact.png` + `mastheads/masthead_dab_energy_trust_390.{png,jpg}`.
3. Recomposed `HERO_390_unit.png` + `HERO_390_unit_preview.jpg`: base parchment → mast @ y=82 → divider @ y=185 → `page_border` alpha composite.
4. Mirrored all fixed files to `/workspace/energy-dividend/DABonData/site_art/` same relative paths.

## Not changed (by design)

- Page-border corner Edison bulbs + side insulator rails (carry the single ornate frame; masthead stays type-only).
- Divider gilt/electric ornament itself (insulators + medallion) — keyed to parchment, not removed.
- Next.js app code (untouched per brief).

## Success criteria

- HERO_390 reads as **one document** (matched paper, one frame, type + divider, no checkerboard, no divider plate seam).
- This report lists concrete **PASS/FAIL**.
- Fixes saved in `public/art` and mirrored to `site_art`.
