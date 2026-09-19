# One-unit blend lock (Pea Eye QC)

## Problem
Old masthead had its own side frames + hanging bulbs. Stacked inside the page border → double chrome, parchment mismatch, hard card seam.

## Fix
1. Masthead = **type only** on matched parchment `#F2E8D5` (no inner frame, no bulbs).
2. Page border alone carries ornament + corner bulbs (pale square overlays keyed out).
3. `HERO_UNIT_unified(.png|_390)` = one composed document with soft masthead fade into parchment.

## Wire
- Hero: use `HERO_UNIT_unified` as one asset, OR transparent border over CSS `#F2E8D5` + type-only masthead / HTML type.
- Do **not** use any masthead that includes ornate side rails + hanging bulbs.
