export const ACHIEVEMENTS_CONTENT = {
  eyebrow: 'Achievements',
  title: 'Achievements & Milestones',
  description:
    'Highlights from hackathons, competitions, and contributions that reflect my problem-solving, creativity, and teamwork.',
  items: [
    {
      id: 'sih-winner',
      icon: '🥇',
      badge: 'Winner',
      title: 'Internal Smart India Hackathon (SIH) Selection',
      organization: 'National Institute of Technology Sikkim',
      highlights: [
        'Secured first position in the institute-level internal Smart India Hackathon selection round.',
        'Collaborated with a team to develop and present an innovative solution.',
        'Demonstrated problem-solving, teamwork, and presentation skills.',
      ],
      image: {
        src: '/achievements/sih-winner.jpg',
        alt: 'Smart India Hackathon winner at NIT Sikkim',
        fallback: 'SIH',
      },
    },
    {
      id: 'algouniversity-fellowship',
      icon: '🥈',
      badge: 'Second Position',
      title: 'AlgoUniversity Fellowship Program',
      organization: 'AlgoUniversity',
      highlights: [
        'Secured second position during the AlgoUniversity Fellowship Program.',
        'Demonstrated strong problem-solving and analytical skills.',
        'Received a medal and official recognition for outstanding performance.',
      ],
      image: {
        src: '/achievements/algouniversity.jpg',
        alt: 'AlgoUniversity Fellowship Program medal and recognition',
        fallback: 'AU',
      },
    },
    {
      id: 'udgam-photography',
      icon: '🥈',
      badge: 'Second Best Photographer',
      title: 'Udgam Fest Photography Competition',
      organization: 'National Institute of Technology Sikkim',
      highlights: [
        'Secured second position in the institute photography competition.',
        'Demonstrated creativity and visual storytelling skills.',
      ],
      image: {
        src: '/achievements/udgam-photography.jpg',
        alt: 'Udgam Fest photography competition at NIT Sikkim',
        fallback: '📷',
      },
    },
    {
      id: 'wdc-member',
      icon: '🎨',
      badge: 'Team Member',
      title: 'UI/UX & Technical Team Member',
      organization: 'Web Development Cell, NIT Sikkim',
      highlights: [
        'Contributed to UI/UX design and technical initiatives.',
        'Collaborated with peers on web development projects.',
      ],
      image: {
        src: '/achievements/wdc-member.jpg',
        alt: 'Web Development Cell team work at NIT Sikkim',
        fallback: 'WDC',
      },
    },
  ],
}
