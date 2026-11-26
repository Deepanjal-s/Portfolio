export const PROJECTS_CONTENT = {
  eyebrow: 'Projects',
  title: 'Selected Work',
  description:
    'Practical projects across full-stack development, backend systems, and interactive learning. Explore the code, setup guides, and current limitations in each repository.',
  items: [
    {
      id: 'memory-recall-bench',
      title: 'memory-recall-bench',
      description:
        'An open benchmark for chat-assistant memory: does the fact the model needs reach its context? Evaluated on all 479 LongMemEval questions on free Kaggle GPUs. Findings: 4x more context gave no better answers; a cross-encoder re-ranker did (59% → 65% accuracy). Ships a CLI, an HTML audit report and a GitHub Action that fails CI when retrieval regresses.',
      tech: ['Python', 'PyTorch', 'Transformers', 'GitHub Actions'],
      links: [
        { label: 'Results', href: 'https://github.com/Deepanjal-s/memory-recall-bench/tree/main/results' },
        { label: 'Source', href: 'https://github.com/Deepanjal-s/memory-recall-bench' },
        { label: 'Sample audit', href: '/sample-audit.html' },
      ],
    },
    {
      id: 'solar-cycle-25',
      title: 'Solar Cycle 25 forecast',
      description:
        'Sunspot data since 1749 (SILSO): finds every solar cycle, fits the Hathaway cycle shape, and backtests three end-of-cycle forecasters on cycles they never saw. The best (0.43-year average error) dates the start of Cycle 26 to about 2030. Pulls fresh data whenever it is re-run.',
      tech: ['Python', 'NumPy', 'SciPy', 'Kaggle'],
      links: [
        { label: 'Notebook', href: 'https://www.kaggle.com/code/deepanjalshukla95/solar-cycle-25-when-will-it-end' },
      ],
    },
    {
      id: 'wdc-portal',
      title: 'WDC Learning Portal',
      description:
        'A learning and recruitment preparation portal for students. Combines account authentication, a UI/UX roadmap, curated resources, tasks, and completion tracking. Includes protected content-management APIs; a dedicated admin interface is not yet included.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      links: [
        { label: 'Live site', href: 'https://wdc-learning-portal.vercel.app/' },
        { label: 'Source & setup', href: 'https://github.com/Deepanjal-s/wdc-learning-portal' },
      ],
    },
    {
      id: 'street-vendor',
      title: 'Street Vendor Platform',
      description:
        'A hyperlocal food-ordering project with customer, vendor, and delivery-partner workflows. Customers browse menus and place orders; vendors manage menus and incoming orders. Payment integration and real-time tracking remain future improvements.',
      tech: ['React', 'Express', 'MongoDB', 'JWT'],
      links: [
        { label: 'Live site', href: 'https://street-vendor-react-ctae.vercel.app/' },
        { label: 'Source & setup', href: 'https://github.com/Deepanjal-s/street-vendor-react' },
      ],
    },
    {
      id: 'big-oh-no',
      title: 'big-oh-no',
      description:
        'A zero-dependency TypeScript library that catches accidentally quadratic code in tests. Instead of brittle millisecond limits, it measures how running time grows as input doubles and fails when growth exceeds the allowed complexity. Works in Vitest, Jest and node:test.',
      tech: ['TypeScript', 'Vitest', 'Jest', 'Node.js'],
      links: [
        { label: 'Source & docs', href: 'https://github.com/Deepanjal-s/big-oh-no' },
      ],
    },
    {
      id: 'vehicle-tracking',
      title: 'Vehicle Tracking System',
      description:
        'A GPS-tracking prototype pairing a FastAPI backend with a Flutter dashboard. Explores MQTT ingestion, user-to-vehicle assignment, location history, and a map refreshed through polling. The client currently requires local API configuration.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'MQTT', 'Flutter'],
      links: [
        { label: 'Backend', href: 'https://github.com/Deepanjal-s/vehicle-tracking-backend' },
        { label: 'Flutter client', href: 'https://github.com/Deepanjal-s/vehicle-tracking-flutter' },
      ],
    },
    {
      id: 'interactive-learning',
      title: 'HTML Interactive Learning',
      description:
        'Browser-based classroom activities with a searchable catalog and embedded activity variations. Includes food-detective and Pythagoras activities, with a documented contribution workflow for expanding the collection.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Source & activities', href: 'https://github.com/Deepanjal-s/html_interactive_learning' },
      ],
    },
    {
      id: 'raktkoshika',
      title: 'Raktkoshika',
      description:
        'A blood-request coordination demo with Marathi, Hindi, and English interfaces. Explores caregiver and coordinator workflows using fictional centres and synthetic records. This is a review prototype, not a live medical service.',
      tech: ['React', 'TypeScript'],
      links: [
        { label: 'Source & limitations', href: 'https://github.com/Deepanjal-s/raktkoshika' },
      ],
    },
    {
      id: 'problem-solving',
      title: 'DSA & Problem Solving',
      description:
        'My C/C++ problem-solving practice, covering arrays, hashing, two pointers, sliding windows, and stacks. Working toward NeetCode 150 while strengthening algorithmic reasoning and core computer science fundamentals.',
      tech: ['C', 'C++', 'Data Structures', 'Algorithms'],
      links: [
        { label: 'Browse solutions', href: 'https://github.com/Deepanjal-s/leetcode-solutions' },
      ],
    },
    {
      id: 'portfolio',
      title: 'Developer Portfolio',
      description:
        'This responsive portfolio brings together my projects, skills, and achievements. Built with reusable React components, configurable content, light and dark themes, and direct links to source repositories.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      links: [
        { label: 'Source code', href: 'https://github.com/Deepanjal-s/Portfolio' },
      ],
    },
  ],
}
