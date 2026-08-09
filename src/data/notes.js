/**
 * Study notes — long-form PDFs written while learning a subject end to end.
 *
 * The section is built around tracks so new subjects (DSA, system design,
 * Django, ML …) only need an entry here, no component changes.
 *
 * Track shape:
 *   id, title, summary, accentTag, status ('published' | 'in-progress'),
 *   basePath, modules[]
 *
 * `basePath` points at a folder under /public, so every document URL is
 * `${basePath}/${doc.file}`. Documents are grouped into modules purely so a
 * 60-file list stays readable; the numbering matches the file names.
 */

export const flutterModules = [
  {
    id: 'orientation',
    title: 'Orientation',
    summary: 'How the material is organised and the order to read it in.',
    docs: [{ n: '00', title: 'Repository Guide', file: '00-repository-guide.pdf' }],
  },
  {
    id: 'dart-foundations',
    title: 'Dart & Programming Foundations',
    summary:
      'The language itself, then the design principles that keep a Dart codebase from rotting.',
    docs: [
      { n: '01', title: 'Dart Fundamentals', file: '01-dart-fundamentals.pdf' },
      { n: '02', title: 'Advanced Dart', file: '02-advanced-dart.pdf' },
      {
        n: '03',
        title: 'Object Oriented Programming',
        file: '03-object-oriented-programming.pdf',
      },
      { n: '04', title: 'SOLID Principles', file: '04-solid-principles.pdf' },
      { n: '05', title: 'Design Patterns', file: '05-design-patterns.pdf' },
    ],
  },
  {
    id: 'flutter-core',
    title: 'Flutter Core',
    summary:
      'Widgets, the element tree and what actually happens between setState and a frame on screen.',
    docs: [
      { n: '06', title: 'Flutter Fundamentals', file: '06-flutter-fundamentals.pdf' },
      { n: '07', title: 'Widgets', file: '07-widgets.pdf' },
      { n: '08', title: 'Widget Lifecycle', file: '08-widget-lifecycle.pdf' },
      { n: '09', title: 'Rendering Pipeline', file: '09-rendering-pipeline.pdf' },
      { n: '10', title: 'Flutter Architecture', file: '10-flutter-architecture.pdf' },
    ],
  },
  {
    id: 'state-and-data',
    title: 'State, Navigation & Data',
    summary:
      'Moving state and data through an app: management approaches, routing, DI, storage and the network layer.',
    docs: [
      { n: '11', title: 'State Management', file: '11-state-management.pdf' },
      { n: '12', title: 'Navigation', file: '12-navigation.pdf' },
      { n: '13', title: 'Routing', file: '13-routing.pdf' },
      { n: '14', title: 'Dependency Injection', file: '14-dependency-injection.pdf' },
      { n: '15', title: 'Local Storage', file: '15-local-storage.pdf' },
      { n: '16', title: 'Networking', file: '16-networking.pdf' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Integrations',
    summary: 'Auth, Firebase, syncing offline-first clients and the data model behind them.',
    docs: [
      { n: '17', title: 'Authentication', file: '17-authentication.pdf' },
      { n: '18', title: 'Firebase', file: '18-firebase.pdf' },
      { n: '19', title: 'Offline First', file: '19-offline-first.pdf' },
      { n: '20', title: 'Database', file: '20-database.pdf' },
    ],
  },
  {
    id: 'ui-and-platform',
    title: 'UI, Performance & Platform',
    summary:
      'Making it fast and making it feel native — animation, custom painting, adaptive layout and native interop.',
    docs: [
      { n: '21', title: 'Performance', file: '21-performance.pdf' },
      { n: '22', title: 'Animations', file: '22-animations.pdf' },
      { n: '23', title: 'Custom Painting', file: '23-custom-painting.pdf' },
      { n: '24', title: 'Responsive UI', file: '24-responsive-ui.pdf' },
      { n: '25', title: 'Adaptive UI', file: '25-adaptive-ui.pdf' },
      { n: '26', title: 'Platform Channels', file: '26-platform-channels.pdf' },
      { n: '27', title: 'Native Android', file: '27-native-android.pdf' },
      { n: '28', title: 'Native iOS', file: '28-native-ios.pdf' },
      { n: '29', title: 'Device Features', file: '29-device-features.pdf' },
    ],
  },
  {
    id: 'product-features',
    title: 'Product Features',
    summary:
      'The features most real apps end up needing: maps, payments, notifications, background work and file formats.',
    docs: [
      { n: '30', title: 'Google Maps', file: '30-google-maps.pdf' },
      { n: '31', title: 'Payments', file: '31-payments.pdf' },
      { n: '32', title: 'Notifications', file: '32-notifications.pdf' },
      { n: '33', title: 'Background Services', file: '33-background-services.pdf' },
      { n: '34', title: 'File Handling', file: '34-file-handling.pdf' },
      { n: '35', title: 'PDF Generation', file: '35-pdf.pdf' },
      { n: '36', title: 'Excel', file: '36-excel.pdf' },
    ],
  },
  {
    id: 'reliability',
    title: 'Security & Reliability',
    summary: 'Hardening the app and knowing what went wrong once it is in users’ hands.',
    docs: [
      { n: '37', title: 'Security', file: '37-security.pdf' },
      { n: '38', title: 'Error Handling', file: '38-error-handling.pdf' },
      { n: '39', title: 'Logging', file: '39-logging.pdf' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Scale',
    summary:
      'Clean architecture through DDD, the presentation patterns in between, and how they hold up as an app grows.',
    docs: [
      { n: '40', title: 'Clean Architecture', file: '40-clean-architecture.pdf' },
      { n: '41', title: 'MVC', file: '41-mvc.pdf' },
      { n: '42', title: 'MVP', file: '42-mvp.pdf' },
      { n: '43', title: 'MVVM', file: '43-mvvm.pdf' },
      {
        n: '44',
        title: 'Feature First Architecture',
        file: '44-feature-first-architecture.pdf',
      },
      { n: '45', title: 'Modular Architecture', file: '45-modular-architecture.pdf' },
      { n: '46', title: 'Domain Driven Design', file: '46-domain-driven-design.pdf' },
      { n: '47', title: 'Scalable Applications', file: '47-scalable-applications.pdf' },
      { n: '48', title: 'System Design', file: '48-system-design.pdf' },
    ],
  },
  {
    id: 'delivery',
    title: 'Testing, Delivery & Other Targets',
    summary: 'Everything after the code compiles — tests, pipelines, releases and the web/desktop builds.',
    docs: [
      { n: '49', title: 'Testing', file: '49-testing.pdf' },
      { n: '50', title: 'CI / CD', file: '50-ci-cd.pdf' },
      { n: '51', title: 'Deployment', file: '51-deployment.pdf' },
      { n: '52', title: 'Monitoring', file: '52-monitoring.pdf' },
      { n: '53', title: 'Flutter Web', file: '53-flutter-web.pdf' },
      { n: '54', title: 'Flutter Desktop', file: '54-flutter-desktop.pdf' },
    ],
  },
  {
    id: 'interview',
    title: 'Interview & Career',
    summary: 'Question banks, machine-coding rounds and notes on how senior engineers frame decisions.',
    docs: [
      {
        n: '55',
        title: 'Flutter Interview Preparation',
        file: '55-flutter-interview-preparation.pdf',
      },
      { n: '56', title: 'Machine Coding Rounds', file: '56-machine-coding-rounds.pdf' },
      { n: '57', title: 'Enterprise Projects', file: '57-enterprise-projects.pdf' },
      { n: '58', title: 'Senior Architect Notes', file: '58-senior-architect-notes.pdf' },
      { n: '—', title: 'Interview Practice', file: 'interview-practice.pdf' },
    ],
  },
  {
    id: 'foundations',
    title: 'Computer Science Foundations',
    summary: 'The subject-agnostic groundwork that sits underneath all of the above.',
    docs: [
      {
        n: '59',
        title: 'Computer Science Foundations',
        file: '59-computer-science-foundations.pdf',
      },
      {
        n: '60',
        title: 'Software Engineering Practices',
        file: '60-software-engineering-practices.pdf',
      },
    ],
  },
];

export const noteTracks = [
  {
    id: 'flutter',
    title: 'Flutter & Dart',
    summary:
      'A full path from the Dart language to shipping and scaling production Flutter apps — written up while building AXM and the internal dashboard.',
    accentTag: 'Mobile',
    status: 'published',
    basePath: '/notes/flutter',
    modules: flutterModules,
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    summary: 'Core structures, algorithm patterns and the problem sets I work through.',
    accentTag: 'Fundamentals',
    status: 'in-progress',
    modules: [],
  },
  {
    id: 'system-design',
    title: 'System Design',
    summary: 'Scalability, storage choices, caching and distributed-system trade-offs.',
    accentTag: 'Architecture',
    status: 'in-progress',
    modules: [],
  },
  {
    id: 'django',
    title: 'Django & Backend',
    summary: 'Django, REST API design and the database work that sits behind an app.',
    accentTag: 'Backend',
    status: 'in-progress',
    modules: [],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    summary: 'Maths foundations, classical models and putting a trained model into production.',
    accentTag: 'ML',
    status: 'in-progress',
    modules: [],
  },
];

/** Tracks on the page, published or not — shown in the archive header. */
export const trackCount = noteTracks.length;

/** Total published documents across every track — shown in the archive header. */
export const publishedDocCount = noteTracks
  .filter((track) => track.status === 'published')
  .reduce(
    (total, track) =>
      total + track.modules.reduce((sum, module) => sum + module.docs.length, 0),
    0,
  );
