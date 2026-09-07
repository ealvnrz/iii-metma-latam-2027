# Portrait asset standard

Use these conventions for every speaker and committee portrait:

- Crop: square 1:1, showing the head and shoulders. Keep the top of the head around 6–10% below the top edge and the eyes around one-third of the frame height.
- Recommended size: 1200 × 1200 pixels or larger.
- Format: optimized `.webp` or high-quality `.jpg`; an institutional original may also be kept as `.png`.
- Filename: lowercase kebab case, for example `first-last.webp`.
- Speaker path: `/assets/people/speakers/first-last.webp`.
- Committee path: `/assets/people/committees/first-last.webp`.
- Do not embed names, logos, titles or other text in the portrait.

Each record in `src/data/site.ts` should include a unique `id`, name, an `affiliations` array and an accessible portrait description. Each affiliation has an `institution`, its `country` and an optional institutional `website` for source verification. The same records feed the homepage preview and `/speakers`. Keynote cards display only the portrait, name, institutions and countries.

Preserve original institutional portraits; the cards apply a square crop in CSS. Record the image's actual dimensions and use the optional `position`, `scale` and `origin` properties to match the framing across portraits. `scale` controls magnification and `origin` is the CSS transform origin. Elias's wider source needs a closer crop; the other portraits use the default scale.

Keynote grids receive `site.speakers.keynoteCount` as their expected total. Each unannounced keynote occupies a numbered placeholder, automatically replaced when a confirmed record is added.

When a speaker has more than one affiliation, show each institution with its own country. The country refers to the institution's location, not the speaker's nationality. Moreno Bevilacqua is listed at both [Universidad Adolfo Ibáñez, Chile](https://www.uai.cl/profesores/ingenieria-y-ciencias/moreno-bevilacqua) and [Ca’ Foscari University of Venice, Italy](https://www.unive.it/data/people/25678903).

## Current portrait sources

Retrieved and affiliations checked on 7 September 2026:

| Speaker | Institutional profile | Original image |
| --- | --- | --- |
| Elias Krainski | [KAUST](https://cemse.kaust.edu.sa/profiles/elias-teixeira-krainski) | [WebP, 1280 × 720](https://cemse.kaust.edu.sa/sites/default/files/styles/large/public/images/KAUST-CEMSE-STAT-BAYESCOMP-Elias-T-Krainski-N-Z-7-14591-4k.jpg.webp?itok=AJCXVCr-) |
| Victor De Oliveira | [UT San Antonio](https://caicc.utsa.edu/faculty/profiles/de-oliveira-victor.html) | [PNG, 399 × 500](https://caicc.utsa.edu/faculty/headshots/deoliveira-victor.png) |
| Moreno Bevilacqua | [Universidad Adolfo Ibáñez](https://www.uai.cl/profesores/ingenieria-y-ciencias/moreno-bevilacqua); [Ca’ Foscari University of Venice](https://www.unive.it/data/people/25678903) | [JPEG, 220 × 220](https://www.unive.it/pag/fileadmin/user_upload/img/persone/25678903.jpg) |

Moreno's institutional image is a small original; replace it with a higher-resolution speaker-supplied portrait when available. Source links document provenance and do not imply a reuse license.

Example portrait field:

```ts
portrait: {
  src: '/assets/people/speakers/first-last.webp',
  alt: 'Portrait of First Last',
  width: 1200,
  height: 1200,
}
```
