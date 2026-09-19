# Home masthead blend fix — Pea Eye

Nick: color bleeding between front-page masthead and paper background.

## Cause
Option D cartouche PNG was a **fully opaque** plate; corner/edge parchment ran cooler/grayer (~218,212,200) against warm woodcut paper tile (~234,220,185).

## Fix (art)
`public/art/mobile/masthead_390_compact.png` rebuilt:
1. Exterior outside cartouche ornament → transparent (page paper shows through)
2. Interior parchment color-matched toward `woodcut/paper_tile.png`
3. Soft feather at plate edge (no hard cream halo)

Backup: `masthead_390_compact_PRE_BLEND.png`

## Wire
Same path — redeploy / hard-refresh. CSS: `.dab-masthead` / `.dab-header-hero` have no background-color, box-shadow, or filter that reintroduces a plate.

## QC
Verify at **390**: masthead corners should not show a cooler gray rectangle against the warm paper.
Preview: `v3/site-qc/home-blend-fix/PREVIEW_blend_on_paper.jpg`
