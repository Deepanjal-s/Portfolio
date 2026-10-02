export const PROJECTS_CONTENT = {
  eyebrow: 'Projects',
  title: 'Featured Projects',
  description:
    'A selection of projects that highlight my work across frontend, backend, and full-stack development.',
  items: [
    {
      id: 'portfolio',
      title: 'Developer Portfolio',
      description:
        'A fast, responsive single-page portfolio built to showcase my work, skills, and journey with a clean UI and accessible structure.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      links: [
        { label: 'Live', href: '#home' },
        { label: 'Code', href: 'https://github.com/' },
      ],
    },
    {
      id: 'wdc-portal',
      title: 'WDC Learning Portal',
      description:
        'A learning and recruitment preparation portal with account authentication, a UI/UX learning roadmap, curated resources and tasks, completion tracking, student profiles, and recruitment round information.',
      tech: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      links: [
        { label: 'Live', href: 'https://wdc-learning-portal.vercel.app/' },
        { label: 'Code', href: 'https://github.com/Deepanjal-s/wdc-learning-portal' },
      ],
    },
    {
      id: 'Street Vendor App',
      title: 'Street Vendor App',
      description:
        'Hyperlocal food delivery platform. Where you can order food from your near by favorite vendors, and can became a delivery parter.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      links: [
        { label: 'Live', href: 'https://street-vendor-react-ctae.vercel.app/' },
        { label: 'Code', href: 'https://github.com/Deepanjal-s/street-vendor-react' },
      ],
    },
    {
      id: 'ui-kit',
      title: 'UI Components & Landing Pages',
      description:
        'A collection of landing pages and UI experiments, focusing on layout, typography, and UX polish.',
      tech: ['Figma', 'React', 'Tailwind CSS'],
      links: [{ label: 'Designs', href: 'https://www.figma.com/' }],
    },
  ],
}
