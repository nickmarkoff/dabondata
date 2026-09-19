# Woodcut shell art — Pea Eye → Call / Gus

Nick (via Gus): ornate photographic rails → **inked woodcut on the sheet**; paper like a physical broadside; border **scrolls with the paper** (not fixed to viewport); type that feels penned/printed.

## Direction (one sheet)
The page is a **printed broadside** you hold. Border ink is **on** the paper (flat letterpress/woodcut line), not a gold 3D frame floating over the UI. Thinner rails. Paper shows fiber and uneven print. When you scroll, **border + paper move together** as one document.

## Assets (`public/art/woodcut/`)
| File | Use |
|------|-----|
| `border_portrait_transparent.png` | Desktop/tablet page frame (thin woodcut) |
| `border_390x844_transparent.png` | Phone frame |
| `paper_tile.png` / `paper_tile_1024.png` | CSS `background-image` repeat (fiber stock) |
| `PREVIEW_portrait.jpg` / `PREVIEW_390.jpg` | Visual refs |
| Also mirrored: `borders/page_border_woodcut_portrait_transparent.png`, `mobile/page_border_woodcut_390x844_transparent.png`, `textures/paper_woodcut_tile.png` |

## Call — wire notes (critical)
1. **Kill viewport-fixed frame.** Remove `position: fixed` / `height: 100dvh` on the border overlay. Put border on `.dab-page` (or the paper sheet wrapper) as `position: absolute; inset: 0` **inside a relatively positioned document** that grows with content — so the frame scrolls with the sheet.
2. **Paper:** `background-color: #F2E8D5; background-image: url(/art/woodcut/paper_tile.png); background-size: 480px` (or 512). Prefer woodcut tile over smooth parchment chrome.
3. **Swap border URLs** from gilt-electric photo rails → woodcut paths above. Keep shell padding modest (~28–36px) — new rails are thinner.
4. **Do not** reintroduce thick gilt 3D borders or corner bulb PNGs as separate overlays.

## Type (printed / official)
Pick **one** display + body that feel stamped/penned, not modern UI:
- **Display (titles):** `Source Serif 4` or `Libre Baskerville` or `EB Garamond` — high-contrast serif like a filing / declaration.
- **Body:** `Source Serif 4` or `Libre Caslon Text` at comfortable size.
- **Optional small caps / labels:** same family, letter-spacing 0.06em.
- Avoid: Inter, system UI sans, decorative scripts on body.
- Ink color: near-black sepia `#1A1814` on the fiber paper.

Google fonts example:
`https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;600;700&display=swap`

## Divider / masthead
Keep type-only masthead; re-tint if needed to match warmer fiber paper. Prefer thin woodcut divider (existing `divider_rule_340.png`) over heavy gilt plate.

## QC bar
- Rails look **printed**, not photographed metal.
- Paper feels **holdable**.
- Scroll: border rides with content (one sheet).
- No double chrome.

Pea Eye standing by for visual QC after Call lands it.
