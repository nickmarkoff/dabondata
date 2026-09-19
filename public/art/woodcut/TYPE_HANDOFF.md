# Type pass — printed / old-timey official (Pea Eye → Call)

Nick liked woodcut borders. Fonts must read **stamped county filing / 19th-c broadside**, not modern web serif.

## Lock
| Role | Face | Weight |
|------|------|--------|
| Display (DAB ENERGY TRUST, H1/H2) | **EB Garamond** | 700–800 |
| Body / cards / packet text | **Libre Caslon Text** | 400 / 700 |
| Alt / captions | Libre Baskerville | 400 / 700 |
| Ink | `#1A1814` (near-black sepia) | — soft `#2C2820` |

**Do not** use Source Serif 4 or Playfair Display as primary (too “web serif / magazine”).

## Google Fonts
```
https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;0,800;1,500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap
```

## CSS tokens (drop-in)
```css
--font-display: "EB Garamond", "Libre Baskerville", "Libre Caslon Text", Georgia, serif;
--font-body: "Libre Caslon Text", "EB Garamond", "Libre Baskerville", Georgia, serif;
--color-ink: #1A1814;
```
`.dab-title` / masthead: `font-family: var(--font-display); font-weight: 800; letter-spacing: 0.02em; color: var(--color-ink);`
Body: `font-family: var(--font-body); color: var(--color-ink);`
Small labels / date: same family, `letter-spacing: 0.06em; text-transform: uppercase;` (optional).

## Tokens updated
- `site_art/tokens/tokens.json` + `tokens.css`
- `public/art/tokens/…`
- `site/app/tokens.css` (if present)

Wire on dab-on-data with the woodcut shell. Ping Pea Eye / Gus after deploy for live QC.
