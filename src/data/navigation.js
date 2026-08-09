/**
 * Navigation model.
 *
 * The site is a multi-page build: the home page is one long scroll of sections,
 * and `/notes/` is a separate document. So a nav entry is one of two things:
 *
 *   type: 'section' — an anchor on the home page. `id` must match a section
 *                     element id, and the href is prefixed so the link still
 *                     works from another page (`/#about` rather than `#about`).
 *   type: 'page'    — a real URL. Active state comes from the current page id,
 *                     not the scroll-spy.
 */
export const navLinks = [
  { id: 'home', label: 'Home', type: 'section' },
  { id: 'about', label: 'About', type: 'section' },
  { id: 'skills', label: 'Skills', type: 'section' },
  { id: 'projects', label: 'Projects', type: 'section' },
  { id: 'experience', label: 'Experience', type: 'section' },
  { id: 'notes', label: 'Notes', type: 'page', href: '/notes/' },
  { id: 'contact', label: 'Contact', type: 'section' },
];

/** Home-page section ids in document order — used by the scroll-spy. */
export const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
];

/** Ids the navbar highlights while scrolling; page links are excluded. */
export const spyIds = navLinks
  .filter((link) => link.type === 'section')
  .map((link) => link.id);

/** Nothing to spy on when the navbar is rendered outside the home page. */
export const noSpyIds = [];
