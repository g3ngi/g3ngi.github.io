# g3ngi.github.io

Personal site — Kenzie Nabeel Rivanda, security engineer.

React 19 · Vite · Tailwind CSS v4. Built and published to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Local development

```bash
npm install
npm run dev        # http://localhost:8443
npm run build      # → dist/
npm run preview    # serve the build
```

## Deploying

Push to `main`. The workflow builds `dist/` and publishes it via GitHub Pages
Actions. Nothing built is committed.

## Notes

- `base` is `/` in `vite.config.ts` because this is a user site served at the
  domain root (`g3ngi.github.io`), not a project path.
- The old hand-written static site is preserved on the
  `backup/before-vite` branch.
