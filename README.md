# Ahmad's Personal Portfolio

This is the personal portfolio of Ahmad Abdullahi. It showcases my design work and gives people a place to learn more about me.

Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into dist/
```

## Where things live

| What | Where |
| --- | --- |
| Home page copy, experience, certificates, links | `src/data/site.ts` |
| Case studies (one folder per project, MDX + images) | `src/content/projects/<slug>/` |
| Colors, fonts, spacing tokens (light + dark) | `src/styles/global.css` |
| Page templates | `src/pages/` |

### Adding a case study

1. Create `src/content/projects/my-project/index.mdx` (copy an existing one).
2. Put its images next to it and reference them relatively (`./hero.png`).
3. Set `order` to control where it appears, or `draft: true` to hide it.

Images are optimized to responsive WebP automatically at build time.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`. One-time setup: in the repo, go to
**Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

To use a custom domain (e.g. `ahmadabdullahi.com`), add it under **Settings → Pages → Custom domain**
and update DNS. The workflow picks up the new URL and base path automatically.
