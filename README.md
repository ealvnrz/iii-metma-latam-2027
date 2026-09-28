# III METMA LATAM 2027

Local multi-page prototype for the III METMA LATAM 2027 conference.

## Run locally

```bash
pnpm install --frozen-lockfile
pnpm run dev --host 127.0.0.1 --port 4321
```

Open `http://127.0.0.1:4321` in your browser. Astro starts the development server in the background. Run `pnpm exec astro dev status` to check it and `pnpm exec astro dev stop` to stop it.

Local execution does not publish the site. Dependencies (`node_modules/`), builds (`dist/`), Astro cache (`.astro/`), Vercel state (`.vercel/`), logs and local environment files are excluded by `.gitignore`. Save review screenshots and reports under `_preview/`, which is also ignored. Source files and the portraits under `public/assets/people/` are intentional site assets and should be versioned when the changes are approved.

## Production build

```bash
pnpm run build
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

Speaker and committee records use the shared `Person` structure in `src/data/site.ts`. Every published record requires a unique ID, name and an `affiliations` array. Each affiliation pairs an institution with its country and can store its institutional profile URL. Keynote cards show the portrait, name, affiliations and countries. Portrait metadata includes accessible alternative text and explicit image dimensions to prevent layout movement while images load.

The portrait crop, size, format, filenames and folder conventions are documented in `public/assets/people/README.md`.

The homepage and `/speakers` share four keynote slots and ten invited slots. Add confirmed speakers to the corresponding collection in `src/data/site.ts`; `PeopleGrid` fills any remaining slots automatically with numbered `To be announced` cards. Invited speakers are ordered alphabetically by first name and use five columns at 1200px and above, three at 900–1199px, two at 600–899px and one below 600px. Only public names, affiliations, countries and portraits belong in these records; keep invitation spreadsheets, candidate lists, internal notes and contact information outside the repository.

## Organizing and supporting institutions

`site.organizers` lists UC Chile as the sole organizing institution. `site.sponsors` lists UC Chile, Universidad del Bío-Bío and ANID, in that order. The homepage and committees page use the same institutional-logo components and records. Original logo assets, their official sources and applicable brand guidance are documented in `public/assets/institutions/README.md`.

## Homepage photograph

The homepage uses a single full-width photograph with a top-aligned crop to preserve the Andes. The hero height is the greater of 760 CSS pixels or 41.6667% of the viewport width, preserving approximately 12:5 proportions on wide screens. The countdown follows the masthead instead of sitting at the bottom of the photograph, so raising the timer does not shorten the landscape or change its crop. The image uses `sizes="100vw"` and responsive sources up to 4800 pixels; there are no blurred side fills or edge masks.

## Conference countdown

The homepage counts down to the beginning of `site.startDate` in `site.timeZone` (`America/Santiago`). This is the first conference date, not an announced opening-session time. The browser resolves the zone offset using its time-zone data. During the meeting and after `site.endDateExclusive`, the timer shows a corresponding message instead of negative values. Without JavaScript, the conference dates remain visible.

Run the date-boundary checks with Node.js 24 or later:

```bash
node --test tests/countdown.test.ts
```

## Visitor information

Travel information is stored as structured sections in `src/data/site.ts`. Each section has a visible status, a verification date and official links. Update `verifiedOn` whenever current guidance is reviewed. Event-dependent items should remain marked `Details forthcoming` until confirmed.
