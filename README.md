# Portfolio starter

A static React + TypeScript portfolio for UX engineering and software engineering. All projects, visuals, article links, and contact details are fictional placeholders; replace them before sharing.

## Development

Use Node.js 22.12 or newer (Node 22 is used in CI).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Run the same checks as CI with:

```sh
npm run lint
npm run format:check
npm test
npm run build
```

Use `npm run format` to apply Prettier formatting and `npm run preview` to preview the production build.

## Make it yours

- **Copy and image alt text:** `src/strings.ts` contains all site and project copy.
- **Projects and screenshots:** `src/projects.ts` defines the project IDs, image lists, accent variant, and optional article URLs. Put local images in `public/images`; paths are relative to that directory's parent. IDs become part of the project URL.
- **Links and visibility:** `src/config.ts` contains contact URLs and independent resume/GitHub visibility flags. Both are off initially. Replace placeholder URLs and labels before enabling or sharing them.
- **Theme and layout:** `src/index.css` contains shared styles and light/dark design tokens, including the Xbox project accent. The visitor's theme choice is stored locally; without a choice the site follows the system.

## GitHub Pages

In repository **Settings → Pages**, choose **GitHub Actions** as the source. Push to `main` or run the workflow manually to build, check, and deploy. Pull requests run checks without deploying. Vite uses relative asset paths, and project routes use URL fragments (for example `/#/projects/cozy-console`), so direct links and refreshes work on project Pages sites without server-side routing.
