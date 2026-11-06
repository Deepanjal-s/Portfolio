import { HERO_SOCIALS } from '../Hero/heroConfig'

export const CONTACT_CONTENT = {
  eyebrow: 'Contact',
  title: 'Get In Touch',
  description:
    'Have a project idea, internship opportunity, or just want to connect? I would love to hear from you.',
  availability:
    'Open to software engineering internships and project collaborations.',
  methods: [
    {
      id: 'email',
      label: 'Email',
      value: 'deepanjalshukla720@gmail.com',
      href: 'mailto:deepanjalshukla720@gmail.com',
      icon: 'email',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'National Institute of Technology Sikkim',
      href: null,
      icon: 'location',
    },
  ],
  form: {
    nameLabel: 'Your Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Your Email',
    emailPlaceholder: 'john@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project or opportunity...',
    submitLabel: 'Open Email Draft',
  },
  socials: {
    title: 'Connect with me',
    items: HERO_SOCIALS,
  },
}
