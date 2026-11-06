export const PROJECTS_CONTENT = {
  eyebrow: 'Projects',
  title: 'Selected Work',
  description:
    'Practical projects across full-stack development, backend systems, and interactive learning. Explore the code, setup guides, and current limitations in each repository.',
  items: [
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
