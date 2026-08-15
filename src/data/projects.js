import axmLarge from '../assets/axm-1600.webp';
import axmSmall from '../assets/axm-900.webp';
import dashboardLarge from '../assets/dashboard-1600.webp';
import dashboardSmall from '../assets/dashboard-900.webp';
import sparkleLarge from '../assets/sparkle-1600.webp';
import sparkleSmall from '../assets/sparkle-900.webp';

/**
 * Projects. The AquaExchange entries are production work with no public
 * repository — `github` is null and `sourceNote` explains why on the card.
 *
 * Shape:
 *   id, name, context, description, metric, tech[], github, demo, demoLabel,
 *   sourceNote, image, imageSmall, imageAlt, featured, heroShowcase
 *
 * `featured` badges the card in the grid; `heroShowcase` picks which project
 * fills the hero panel. They are separate so the hero can lead with one project
 * while the grid highlights another.
 *
 * `metric` is the one-line proof point; the hero shows it under the featured
 * project, so keep it short and factual.
 *
 * `image` is the full-size asset and `imageSmall` an optional narrower one;
 * the card serves whichever fits the viewport via srcset.
 */
export const projects = [
  {
    id: 'axm-mobile',
    name: 'AXM Mobile Application',
    context: 'AquaExchange · Android & iOS',
    description:
      'A production Flutter app used by 15,000+ farmers across 4 states to monitor and manage IoT devices on their farms, backed by real-time Firestore data and Google Maps. Includes an in-app store for purchasing devices, feed, and farm products with Razorpay payments, plus push notifications and deep linking.',
    metric: '15,000+ farmers · 10,000+ IoT devices · 4 states',
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Firebase',
      'Google Maps',
      'Razorpay',
      'Hive',
    ],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.aquaexchange.app',
    demoLabel: 'Play Store',
    sourceNote: 'Company product — source is private',
    image: axmLarge,
    imageSmall: axmSmall,
    imageAlt:
      'Three phone screens from the AquaExchange app: the login screen, a farm dashboard listing farms with PowerMon and feeder readings, and a satellite map view of geo-mapped ponds with live power telemetry.',
    featured: true,
  },
  {
    id: 'service-management-dashboard',
    name: 'Service Management Dashboard',
    context: 'AquaExchange · Internal web portal',
    description:
      'A Flutter Web dashboard used by operations, call centre, and finance teams to monitor farm activity, IoT devices, and platform metrics in real time. Covers device monitoring, feeder order management, service ticket tracking, subscriptions, and farm management, with role-based access control and Excel export reporting.',
    metric: 'Used daily by operations, call centre and finance teams',
    tech: [
      'Flutter Web',
      'Dart',
      'REST APIs',
      'Firebase',
      'RBAC',
      'Elasticsearch',
    ],
    github: null,
    // The portal is internal and login-gated, so there is no public link.
    demo: null,
    demoLabel: null,
    sourceNote: 'Company product — source is private',
    image: dashboardLarge,
    imageSmall: dashboardSmall,
    imageAlt:
      'The AquaExchange service dashboard: a login screen and the Powermon analytics console showing filters, summary metrics for live acres, devices and active farmers, and month-on-month bar charts of devices and acres.',
    featured: false,
  },
  {
    id: 'sparkle-lite',
    name: 'Sparkle Lite',
    context: 'Personal project · Web & mobile',
    description:
      'A privacy-first women’s health companion built with Flutter and Riverpod, with purpose-built mobile and web layouts rather than a stretched phone UI. Tracks symptoms and cycles, stores health records, merges everything into a filterable health timeline, and prepares doctor-visit summaries exportable as PDF or text. Insights come from a local, deterministic engine that is educational by design and never diagnostic.',
    metric: 'Clean Architecture · 10 unit + widget tests · Firebase Hosting',
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'go_router',
      'Firebase Auth',
      'Cloud Firestore',
    ],
    github: null,
    demo: 'https://sparkle-lite-2a565.web.app',
    demoLabel: 'Live Demo',
    // Personal project, but the repository is not public — no note needed, the
    // card simply omits the Code button.
    sourceNote: null,
    image: sparkleLarge,
    imageSmall: sparkleSmall,
    imageAlt:
      'Sparkle Lite shown on web and mobile: a sidebar dashboard with health summary cards, recent activity and quick actions, a filterable health timeline, and a phone screen with the next appointment and recent symptom logs.',
    featured: false,
    heroShowcase: true,
  },
];
