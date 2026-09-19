# FLAIR PASS — movement heat (Pea Eye → Call)

Nick: site feels weak / won’t spark a movement. Keep woodcut paper + Meddon on `/sign` names + certificate bones. Turn up hero, iron word-frames, contrast, CTA levy energy.

Live ref: https://dab-on-data.vercel.app/

## Do not touch
- Woodcut `paper_tile` background
- **Meddon** on signature names (`/sign`) — leave as locked
- Don’t add wedding gilt chrome or thick 3D frames

## Assets (under `public/art/`, mirrored in `site_art/`)

### Hero
| File | Use |
|------|-----|
| `mobile/masthead_390_compact.png` | Home hero swap (also `masthead_390_flair.png`) |
| `mastheads/masthead_type_only_390.png` | Same, type-only path |

Title rule has **≥8px clear** below glyph ink. Coalition line sits in an iron word-frame. Date gets bold iron brackets.

### Iron ornaments (select phrases only)
| File | Use |
|------|-----|
| `ornaments/iron_bracket_{left,right}_bold.png` | Flank key phrases |
| `ornaments/iron_bracket_{left,right}_hero.png` | Larger hero/CTA bands |
| `ornaments/iron_word_frame_{200,280,340}.png` | Stretch/center behind 1 phrase |
| `ornaments/iron_corner_{tl,tr,bl,br}.png` | Optional CSS corner wrap |

**Where to use frames (tasteful, not every line):**
1. Home coalition line (already in masthead PNG)
2. Involve page lead line / “Our community knows better…”
3. Sign page oath title
4. One doc-card eyebrow max

### CTA — host-town levy (not brochure)
| File | Use |
|------|-----|
| `cta/btn_get_involved.png` | Baked label (or use plate + CSS text) |
| `cta/btn_sign_declaration.png` | Secondary outline levy |
| `cta/btn_sign_compact.png` | Compact |
| `cta/plate_primary.png` / `plate_secondary.png` | Prefer these + CSS label for a11y |

## CSS tokens to land
```css
:root {
  --color-ink: #12100c;          /* heavier resolve */
  --color-ink-soft: #2a241c;
  --color-navy: #08162d;         /* CTA fill */
  --color-levy-gilt: #c8aa5c;    /* iron-gilt tick only */
  --fw-display: 800;
  --fw-card-title: 700;
}

/* Display titles — stamped, not light */
h1, h2, .dab-doc-card h3, .involve-banner {
  font-family: var(--font-display);
  font-weight: var(--fw-card-title);
  color: var(--color-ink);
}

/* Word-frame helper */
.dab-iron-phrase {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.35rem 0.75rem;
  background: url(/art/ornaments/iron_word_frame_280.png) center / 100% 100% no-repeat;
  font-weight: 700;
  color: var(--color-ink);
}

/* Levy CTA */
.involve-btn.primary, .dab-sign-form button, a.involve-btn.primary {
  min-height: 52px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: var(--color-navy);
  color: #fff8ea;
  border: 1px solid var(--color-levy-gilt);
  box-shadow: inset 0 0 0 1px rgba(255,248,234,0.12);
  /* optional plate: background-image: url(/art/cta/plate_primary.png); background-size: 100% 100%; */
}
.involve-btn:not(.primary) {
  min-height: 52px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.03em;
  border: 2px solid var(--color-navy);
  color: var(--color-navy);
  background: #fff8ea;
}

/* Kill any title underline that cuts glyphs */
.dab-masthead, h1.dab-title { text-decoration: none; border-bottom: 0; }
```

## Wire order
1. Swap hero masthead PNG
2. Bump ink + card title weights
3. Restyle Involve/Sign CTAs to levy tokens (plates optional)
4. Add `.dab-iron-phrase` on 1–2 key lines only
5. Leave Meddon signature names alone

## QC bar
- Hero feels like a broadside, not a blog header
- Rule never through glyphs
- CTAs read “sign the roll,” not “learn more”
- Paper still fibrous; Meddon still on `/sign` names

Preview: `public/art/PREVIEW_flair_pass.jpg`

Live hero plate: `public/art/mobile/masthead_390_compact.png` (390×250, 16px clear gap — see `mobile/MASTHEAD_CLEAR_GAP.md`).
