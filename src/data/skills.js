/**
 * Skill groups, kept deliberately tight — only what is actually used day to day.
 * No proficiency percentages.
 */
export const skillGroups = [
  {
    id: 'core',
    title: 'Core',
    description: 'What I build with every day.',
    items: ['Flutter', 'Dart', 'Riverpod', 'GetX'],
  },
  {
    id: 'backend-data',
    title: 'Backend & Data',
    description: 'Services and data layers the apps talk to.',
    items: ['Firebase', 'REST APIs', 'GraphQL', 'Django', 'Node.js', 'SQL', 'Hive'],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Third-party capabilities shipped into production apps.',
    items: [
      'Google Maps API',
      'Razorpay',
      'Push Notifications (FCM)',
      'Deep Linking',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering & Delivery',
    description: 'How the work gets structured and shipped.',
    items: [
      'Clean Architecture',
      'State Management',
      'Responsive UI',
      'CI/CD',
      'Git',
      'Play Store & App Store Release',
    ],
  },
];
