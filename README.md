# DABonData — docs-only public site

Mobile-first Next.js (App Router + TypeScript + Tailwind) archive for the **DABonData** packet.

- **Title:** DABonData
- **Subtitle:** DAB ENERGY TRUST
- **Coalition:** Doubs · Adamstown · Buckeystown — Our Home, Our Coalition
- **Tag:** We like it here. Keep Frederick looking like Frederick.
- **Date:** Sept 18, 2026
- **Author:** Nicholas M. (public byline on pages, meta, and packet credits)

## Pages

`/` · `/statement` · `/plan` · `/grandfather` · `/rebate` · `/attachments` · `/sources`

Docs only — no email capture, no donate / petition chrome.

## Local

```bash
cd /workspace/energy-dividend/DABonData/site
npm install
npm run build
npm run start
```

## Art

Copied from `../site_art/` into `public/art/` (tokens, parchment tile, gilt-electric borders, masthead, medallion).

## Packet downloads (PDF only)

`public/docs/DABonData.pdf` (compiled summary) · memo · bylaws · resident letter · script/handout · example email — listed on `/sources`.

## Deploy (Vercel)

Prefer existing project `adamstown-buckeystown-energy-trust`, or create `dabondata`:

```bash
cd /workspace/energy-dividend/DABonData/site
npx vercel --yes --prod
```

If Hobby team / auth blocks CLI deploy, use the Vercel dashboard Import, or MCP `create_deployment` after file upload. Live URL belongs in `../SITE_URL.txt`.

## Success checks

1. `npm run build` green
2. `rg` for the forbidden short-form nickname under site → no hits
3. Live URL written to `../SITE_URL.txt` when deploy works
