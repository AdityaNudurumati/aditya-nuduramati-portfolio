import photoLarge from '../assets/profile-900.webp';
import photoSmall from '../assets/profile-540.webp';
import { resumeFileName, resumeUrl, siteUrl } from './site';

/**
 * Single source of truth for personal information.
 * Edit this file to update the site — components read from here.
 */

export const profile = {
  name: 'Aditya Nudurumati',
  initials: 'AN',
  role: 'Flutter Developer',
  roleLong: 'Software Engineer · Flutter Developer',
  location: 'Hyderabad, India',
  siteUrl,

  company: 'AquaExchange Agri Tech',
  yearsOfExperience: '3+ years',

  // Shown in the hero, below the name.
  tagline:
    'I build production Flutter applications for mobile, web, and TV — currently powering real-time IoT monitoring for aquaculture farms across India.',

  resumeUrl,
  resumeFileName,

  photo: photoLarge,
  photoSmall,
  photoAlt:
    'Aditya Nudurumati at his desk in the office, working on a laptop beside a second monitor.',

  email: 'adithyanudurumati@gmail.com',
  github: 'https://github.com/AdityaNudurumati',
  linkedin: 'https://www.linkedin.com/in/aditya-nudurumati-b936a316a/',

  // wa.me needs the number in international format with no +, spaces or dashes.
  // The number is never rendered as text — only ever behind the WhatsApp icon.
  whatsapp: 'https://wa.me/917013722521',
};

/**
 * Contact channels. `icon` must match a key in components/ui/Icon.jsx.
 * `showIn` controls where a channel appears — WhatsApp is footer-only, so the
 * phone number is reachable but never displayed on the page.
 */
const channels = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin',
    href: profile.linkedin,
    handle: '/in/aditya-nudurumati',
    showIn: ['hero', 'contact', 'footer'],
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'github',
    href: profile.github,
    handle: '@AdityaNudurumati',
    showIn: ['hero', 'contact', 'footer'],
  },
  {
    id: 'email',
    label: 'Email',
    icon: 'mail',
    href: `mailto:${profile.email}`,
    handle: profile.email,
    showIn: ['hero', 'contact', 'footer'],
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'whatsapp',
    href: profile.whatsapp,
    handle: null,
    showIn: ['footer'],
  },
];

const linksFor = (place) => channels.filter((link) => link.showIn.includes(place));

export const heroLinks = linksFor('hero');
export const contactLinks = linksFor('contact');
export const footerLinks = linksFor('footer');

export const seo = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} — Software Engineer building production Flutter applications for mobile, web, and TV.`,
};
