# Home masthead — strike-through fix + iron frames (Pea Eye → Call)

## Problem
Double rule was cutting **through** “DAB ENERGY TRUST” in the masthead PNG.

## Delivered
`public/art/mobile/masthead_390_compact.png` (mirrored in site_art + mastheads/masthead_type_only_390.png)

1. **Rule under title** — 13px clear gap after true ink bbox (not through glyphs).
2. **Iron brackets** on “Our Home, Our Coalition” only.
3. **Iron cartouche** around date line.
4. Transparent bg (fiber paper shows through). Sepia ink `#1A1814`.

Standalone ornaments: `public/art/ornaments/iron_bracket_{left,right}.png` (+ `_lg`), `iron_cartouche_date.png`.

Preview: `public/art/mobile/PREVIEW_masthead_iron.jpg`

Superseded for live wire by the 390×250 clear-gap plate — see `MASTHEAD_CLEAR_GAP.md`.

## Wire
Swap the home masthead `src` to the new PNG (same path). No CSS underline / border-bottom on the title.

Optional if you move masthead to HTML text:
```css
.dab-coalition { display:inline-flex; align-items:center; gap:.4rem; }
.dab-coalition::before, .dab-coalition::after {
  content:""; width:20px; height:32px; background-size:contain; background-repeat:no-repeat;
}
.dab-coalition::before { background-image:url(/art/ornaments/iron_bracket_left.png); }
.dab-coalition::after  { background-image:url(/art/ornaments/iron_bracket_right.png); }
.dab-date {
  display:inline-block; padding:.3rem .8rem;
  background:url(/art/ornaments/iron_cartouche_date.png) center/100% 100% no-repeat;
}
```

## Do not
- `text-decoration: underline` on the title
- Stretch a rule as a background behind the title letters
