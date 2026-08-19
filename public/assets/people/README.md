# Portrait asset standard

Use these conventions for every speaker and committee portrait:

- Crop: horizontal 4:3, centered on the face and shoulders.
- Recommended size: 1200 × 900 pixels or larger.
- Format: optimized `.webp` or high-quality `.jpg`.
- Filename: lowercase kebab case, for example `first-last.webp`.
- Speaker path: `/assets/people/speakers/first-last.webp`.
- Committee path: `/assets/people/committees/first-last.webp`.
- Do not embed names, logos, titles or other text in the portrait.

Each record in `src/data/site.ts` should include a unique `id`, name, affiliation, country and accessible portrait description. Speaker records should also include a short biography and, when available, an institutional or personal profile link.

Example portrait field:

```ts
portrait: {
  src: '/assets/people/speakers/first-last.webp',
  alt: 'Portrait of First Last',
  width: 1200,
  height: 900,
}
```
