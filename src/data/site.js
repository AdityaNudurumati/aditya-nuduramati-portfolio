/**
 * Deployment constants, kept free of asset imports.
 *
 * profile.js imports .webp files, which Vite resolves but plain Node cannot —
 * so anything the build scripts need (scripts/generate-sitemap.js) lives here
 * and is re-exported from profile.js for the app to use.
 *
 * `siteUrl` must match the host Vercel actually serves, since canonical tags
 * and the sitemap are both built from it.
 */
export const siteUrl = 'https://www.adityanudurumati.com';

export const resumeUrl = '/resume/Aditya-Nudurumati-Resume.pdf';
export const resumeFileName = 'Aditya-Nudurumati-Resume.pdf';
