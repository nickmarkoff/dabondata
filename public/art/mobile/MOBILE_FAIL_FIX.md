# Mobile 390 FAIL — art response (Pea Eye)

Live QC confirmed checkerboard divider + stretched frame covering masthead.

## Art shipped (wire these)
Prefer **PNG** (true transparency), not the old tall JPEG:

| Path | Size | Notes |
|------|------|-------|
| `dividers/divider_gilt_electric.png` | 390×78 | sitewide |
| `mobile/divider_390.png` | 390×78 | phone |
| `mobile/divider_rule_340.png` | 340×68 | matches `width={340}` |
| `*.jpg` parchment-backed | same | only if PNG path blocked |

**Do not** serve any 680×382 (or similar) JPEG with baked grid. Markup `height:auto` will paint the whole plate.

## Border art fringe @390×844
Opaque margins ≈ **T=69 R=45 B=69 L=45** px.
Shell `--border-w:28` / 52px inset is under-sized vs art.

## Call CSS (not art)
1. Pin page frame to viewport: `position:fixed; inset:0; height:100dvh; background-size:100% 100%` — do not stretch to document height.
2. Shell pad ≥ fringe (≈ top 69 / sides 45).
3. Nav: nowrap + min-height 44; Sign: reuse masthead image or clamp title; checkbox 22px; inputs/button min 48; drop double navy frame on oath/wall.
4. Content column currently ~271px — reduce competing padding so art can read at 390.

Masthead file OK — fix column width, not type art.
