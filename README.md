# III METMA LATAM 2027

Local multi-page prototype for the III METMA LATAM 2027 conference.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Production build

```bash
npm run build
```

The static output is written to `dist/`.

## Editing content

The main source of editable conference information is `src/data/site.ts`. It contains typed collections for speakers, committees, programme days and sessions, travel guidance, and accommodation. Empty collections display publication-status messages until confirmed information is added.

The site uses real routes:

- `/` — conference overview and important date
- `/programme` — programme summary and future day-by-day schedule
- `/speakers` — keynote and invited speakers
- `/committees` — organizing and scientific committees
- `/venue` — venue map, travel, and accommodation
- `/call-for-papers` — prepared but intentionally absent from navigation and marked `noindex`
- `/registration` — prepared but intentionally absent from navigation and marked `noindex`

Page copy is kept close to its semantic markup in `src/pages/` and reusable elements in `src/components/`. Global visual styles are defined in `src/styles/global.css`.

Original logo files remain untouched in `logo/`. The two transparent web-ready copies are stored in `public/assets/brand/`.

## People and portraits

Speaker and committee records use the shared `Person` structure in `src/data/site.ts`. Every published record requires a unique ID, name, affiliation and country. Portrait metadata includes accessible alternative text and explicit image dimensions to prevent layout movement while images load.

The portrait crop, size, format, filenames and folder conventions are documented in `public/assets/people/README.md`.

## Visitor information

Travel information is stored as structured sections in `src/data/site.ts`. Each section has a visible status, a verification date and official links. Update `verifiedOn` whenever current guidance is reviewed. Event-dependent items should remain marked `Details forthcoming` until confirmed.
