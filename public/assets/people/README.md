# Portrait asset standard

Use these conventions for every speaker and committee portrait:

- Crop: square 1:1, showing the head and shoulders. Keep the top of the head around 6–10% below the top edge and the eyes around one-third of the frame height.
- Recommended size: 1200 × 1200 pixels or larger.
- Format: optimized `.webp` or high-quality `.jpg`; an institutional original may also be kept as `.png`.
- Filename: lowercase kebab case, for example `first-last.webp`.
- Speaker path: `/assets/people/speakers/first-last.webp`.
- Committee path: `/assets/people/committees/first-last.webp`.
- Do not embed names, logos, titles or other text in the portrait.

Each record in `src/data/site.ts` should include a unique `id`, name, an `affiliations` array and an accessible portrait description. Each affiliation has an `institution`, its `country` and an optional institutional `website` for source verification. The same records feed the homepage preview and `/speakers`. Keynote and invited cards display only the portrait, name, institutions and countries.

Preserve original institutional portraits; the cards apply a square crop in CSS. Record the image's actual dimensions and use the optional `position`, `scale` and `origin` properties to match the framing across portraits. `scale` controls magnification and `origin` is the CSS transform origin. Elias's wider source needs a closer crop; the other portraits use the default scale.

Keynote grids receive `site.speakers.keynoteCount` as their expected total. Invited grids receive `site.speakers.invitedCount`, `variant="invited"` and `pendingLabel="Invited speaker"`. Each unannounced speaker occupies a numbered placeholder, automatically replaced when a confirmed record is added. Invited records are kept in alphabetical order by first name, followed by the remaining placeholders.

When a speaker has more than one affiliation, show each institution with its own country. The country refers to the institution's location, not the speaker's nationality. Moreno Bevilacqua is listed at both [Universidad Adolfo Ibáñez, Chile](https://www.uai.cl/profesores/ingenieria-y-ciencias/moreno-bevilacqua) and [Ca’ Foscari University of Venice, Italy](https://www.unive.it/data/people/25678903).

## Current portrait sources

Retrieved and affiliations checked on 7 September 2026:

| Speaker | Institutional profile | Original image |
| --- | --- | --- |
| Elias Krainski | [KAUST](https://cemse.kaust.edu.sa/profiles/elias-teixeira-krainski) | [WebP, 1280 × 720](https://cemse.kaust.edu.sa/sites/default/files/styles/large/public/images/KAUST-CEMSE-STAT-BAYESCOMP-Elias-T-Krainski-N-Z-7-14591-4k.jpg.webp?itok=AJCXVCr-) |
| Victor De Oliveira | [UT San Antonio](https://caicc.utsa.edu/faculty/profiles/de-oliveira-victor.html) | [PNG, 399 × 500](https://caicc.utsa.edu/faculty/headshots/deoliveira-victor.png) |
| Moreno Bevilacqua | [Universidad Adolfo Ibáñez](https://www.uai.cl/profesores/ingenieria-y-ciencias/moreno-bevilacqua); [Ca’ Foscari University of Venice](https://www.unive.it/data/people/25678903) | [JPEG, 220 × 220](https://www.unive.it/pag/fileadmin/user_upload/img/persone/25678903.jpg) |

Moreno's institutional image is a small original; replace it with a higher-resolution speaker-supplied portrait when available. Source links document provenance and do not imply a reuse license.

### Speakers added on 27 September 2026

These are unmodified source images, stored locally so the site does not depend on external image servers. Dimensions below are the actual file dimensions. Their square presentation is applied only in CSS.

| Speaker | Profile / affiliation source | Original image | Local file | Dimensions | CSS framing |
| --- | --- | --- | --- | --- | --- |
| Aaron Ellison | [Harvard Forest](https://harvardforest.fas.harvard.edu/about/people/aaron-ellison/); [SCAS fellow profile and photograph](https://www.swedishcollegium.se/fellows/former-fellows/fellows-2021-22/aaron-m.-ellison) | [SCAS portrait](https://www.swedishcollegium.se/images/200.1520986f193ac03e17339175/1734517316651/ellison_large.jpg) | `speakers/aaron-ellison.jpg` | 585 × 390 | Centered horizontally; top-aligned square crop. SCAS is the photograph source, not the published affiliation. |
| Fernanda de Bastiani | [UFPE](https://www.ufpe.br/dep-estatistica/corpo-docente); [Göttingen guest profile and photograph](https://www.uni-goettingen.de/en/706304.html) | [JPEG](https://www.uni-goettingen.de/storage/pictures/179675.jpg) | `speakers/fernanda-de-bastiani.jpg` | 1500 × 2000 | `center 28%` retains the full head and shoulders. Göttingen is the photograph source, not the published affiliation. |
| Fernando Quintana | [UC Chile](https://www.mat.uc.cl/personas/perfil/quintana) | [JPEG](https://www.mat.uc.cl/archivos/personas/fotos/quintana-5786082%20.%20jpg) | `speakers/fernando-quintana.jpg` | 225 × 300 | Top-aligned square crop. |
| Francisco Rodríguez Cortés | [Personal academic profile](https://fjrodriguezcortes.wordpress.com/) | [PNG](https://fjrodriguezcortes.wordpress.com/wp-content/uploads/2020/09/cropped-francisco-rodriguez_opt-1.png) | `speakers/francisco-rodriguez-cortes.png` | 400 × 248 | Centered horizontally; top aligned. |
| Ronny Vallejos | [USM](https://matematica.usm.cl/ronny-vallejos/) | [PNG](https://matematica.usm.cl/wp-content/uploads/2018/05/Ronny-Vallejos.png) | `speakers/ronny-vallejos.png` | 1000 × 996 | Scale 1.45, origin `50% 28%`, to frame the head and keep the source's irregular outer border outside the square card. |
| Reinhard Furrer | [University of Zurich, DM3L](https://dm3l.uzh.ch/person/furrer/main); [X profile](https://x.com/ReinhardFurrer) | [X profile portrait](https://pbs.twimg.com/profile_images/992142242222657536/LgeTbdgr_400x400.jpg) | `speakers/reinhard-furrer.jpg` | 400 × 400 | Original square portrait from his X profile, as requested. |

Fernando's institutional original is small. Replace it with a higher-resolution speaker-supplied photograph when available; do not artificially enlarge the source file. Source links document provenance and do not imply a reuse license.

Example portrait field:

```ts
portrait: {
  src: '/assets/people/speakers/first-last.webp',
  alt: 'Portrait of First Last',
  width: 1200,
  height: 1200,
}
```
