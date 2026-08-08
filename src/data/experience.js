/**
 * Work history. Content is taken from the resume — keep it factual.
 *
 * Shape:
 *   id, role, company, companyUrl, period, current,
 *   summary, points[], tech[]
 */
export const experience = [
  {
    id: 'aquaexchange-swe',
    role: 'Software Engineer',
    company: 'AquaExchange Agri Tech Pvt Ltd',
    companyUrl: null,
    period: 'Nov 2023 — Present',
    location: 'Hyderabad, India',
    current: true,
    summary:
      'Building and shipping production Flutter applications across mobile, web, and TV for real-time IoT monitoring and aquaculture management.',
    points: [
      'Built and shipped scalable Flutter applications across mobile, web, and TV for real-time monitoring of 10,000+ IoT devices, serving 15,000+ farmers across 4 states with sub-second live dashboard updates.',
      'Migrated real-time IoT data handling to Riverpod-based state management, reducing UI render latency by 40% and state-related issues by 45%.',
      'Designed and implemented multi-role authentication and role-based access control across mobile and web, supporting operations, finance, and call centre teams.',
      'Integrated Google Maps, Razorpay, push notifications, and deep linking into production applications, enabling digital transactions and field navigation workflows.',
      'Implemented offline-first persistence with Hive and SharedPreferences, keeping the app usable and sessions intact in low-connectivity farm environments.',
      'Managed the full release lifecycle — testing, optimisation, and deployment to the Google Play Store and Apple App Store.',
      'Guided a junior developer on Flutter clean architecture and state management patterns.',
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST APIs', 'GraphQL', 'Hive'],
  },
  {
    id: 'aquaexchange-intern',
    role: 'Software Engineer Intern',
    company: 'AquaExchange Agri Tech Pvt Ltd',
    companyUrl: null,
    period: 'Jul 2023 — Nov 2023',
    location: 'Hyderabad, India',
    current: false,
    summary:
      'Contributed to cross-platform Flutter development, shipping to production from the first week.',
    points: [
      'Delivered pixel-perfect responsive UI across mobile and web from Figma designs, and shipped enhancements within the first week of joining.',
      'Built reusable UI components following clean architecture and coding best practices.',
      'Integrated REST APIs and GraphQL for backend communication, and implemented state management with Riverpod and GetX.',
      'Assisted with Google Maps features, location-based services, and real-time data visualisation.',
      'Resolved live production bugs and collaborated with senior engineers on debugging, optimisation, and testing.',
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'Riverpod', 'REST APIs', 'Git'],
  },
];
