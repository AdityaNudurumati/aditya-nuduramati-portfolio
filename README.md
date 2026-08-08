# Aditya Nudurumati — Portfolio

Personal developer portfolio. React + Vite, plain JavaScript, hand-written CSS.
No UI framework, no CSS framework, no animation library.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Structure

```
public/            favicon, og-image, robots.txt, sitemap.xml, resume/
src/
  components/      one component per section + shared ui/ primitives
  data/            all editable content — no copy lives in components
  hooks/           useTheme, useScrollSpy, useReveal
  index.css        design tokens, reset, buttons/cards/tags
  App.css          page-level composition
```

Each component has a sibling `.css` file. `src/index.css` is imported first in
`main.jsx` so component styles can override the base layer.

## Content

All copy lives in `src/data/` — profile, about, skills, projects, experience,
education. Components contain no hard-coded content.

### Still to fill in

| Where | What |
| --- | --- |
| `src/data/projects.js` → `demo` | Play Store URL for AXM; the button appears once it is set |
| `src/data/projects.js` → `image` | App screenshots (see `src/assets/README.md`) |

Everything else — name, links, role, company, dates, metrics, education,
resume — is real and taken from the resume and LinkedIn profile.

`index.html` holds the SEO metadata and JSON-LD; update it if the title,
description or domain changes.

## Notes

- **The contact form has no backend.** Submitting it opens the visitor's mail
  client with the message pre-filled, and the UI says so.
- **The og-image is an SVG.** Some platforms (X, Slack, WhatsApp) only render
  raster previews — export `public/og-image.svg` to a 1200×630 PNG and point the
  `og:image` / `twitter:image` tags at it before relying on link previews.
- Theme preference is stored in `localStorage` under `portfolio-theme`, and a
  small inline script in `index.html` applies it before first paint.
- All animations are disabled under `prefers-reduced-motion: reduce`.
