# Assets

Two options for project screenshots:

1. **Imported (hashed + optimised by Vite)** — put the file here, then in
   `src/data/projects.js`:

   ```js
   import projectOne from '../assets/project-one.webp';
   // …
   image: projectOne,
   ```

2. **Static** — put the file in `public/projects/` and reference it by path:

   ```js
   image: '/projects/project-one.webp',
   ```

Prefer WebP at roughly 1200×675 (16:9). Cards lazy-load images, so keep each
file well under ~200 KB.
