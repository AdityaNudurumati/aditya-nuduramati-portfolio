import axmLarge from '../assets/axm-1600.webp';
import axmSmall from '../assets/axm-900.webp';
import dashboardLarge from '../assets/dashboard-1600.webp';
import dashboardSmall from '../assets/dashboard-900.webp';

/**
 * Projects. Both entries are production work at AquaExchange, so there is no
 * public repository — `github` is null and the cards omit the Code button.
 *
 * Shape:
 *   id, name, context, description, metric, tech[], github, demo, demoLabel,
 *   image, imageSmall, imageAlt, featured
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
    // The portal is login-gated, so the link proves it is deployed rather than
    // offering a walkthrough — the label says so to set expectations.
    demo: 'https://dashboard1.aquaexchange.com/#/login',
    demoLabel: 'Live Portal',
    image: dashboardLarge,
    imageSmall: dashboardSmall,
    imageAlt:
      'The AquaExchange service dashboard: a login screen and the Powermon analytics console showing filters, summary metrics for live acres, devices and active farmers, and month-on-month bar charts of devices and acres.',
    featured: false,
  },
];
