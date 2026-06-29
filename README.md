# Deepanjal Shukla — Developer Portfolio

A responsive single-page developer portfolio built with **React** and **Tailwind CSS**. It showcases my work, skills, achievements, and contact information as a third-year Computer Science student at the National Institute of Technology Sikkim.

## Live Demo

> (https://portfolio-alpha-nine-0b6a1mvm9h.vercel.app/)

## Features

- **Hero** — Introduction, profile image, resume CTA, and social links
- **About** — Background, education focus, skills summary, interests, and career goals
- **Skills** — Technologies grouped by category (Frontend, Backend, Languages, Tools)
- **Projects** — Reusable project cards with tech stack and links
- **Achievements** — Timeline layout with photos inside each card
- **Contact** — Email/location info, social links, and a mailto contact form
- **Footer** — Quick navigation, contact details, social icons, and back-to-top link
- **Responsive navbar** — Sticky header with mobile menu

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI components |
| [Vite 8](https://vite.dev/) | Dev server and build tool |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling via `@apply` in component CSS files |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Linting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
git clone https://github.com/Deepanjal-s/portfoliov1.git
cd portfoliov1
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
portfoliov1/
├── public/                    # Static assets served as-is
│   ├── achievements/          # Achievement photos
│   ├── profile.jpg              # Hero profile image
│   └── resume.pdf               # Resume download
├── src/
│   ├── components/
│   │   ├── About/               # About section + aboutConfig.js
│   │   ├── Achievements/        # Timeline achievements + achievementsConfig.js
│   │   ├── Contact/             # Contact form + contactConfig.js
│   │   ├── Footer/              # Footer + footerConfig.js
│   │   ├── Hero/                # Hero section + heroConfig.js
│   │   ├── Navbar/              # Navigation + navConfig.js
│   │   ├── projects/            # Projects grid + projectsConfig.js
│   │   └── Skills/              # Skills categories + skillsConfig.js
│   ├── pages/
│   │   └── Home.jsx             # Main page composing all sections
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                # Tailwind entry
├── package.json
└── vite.config.js
```

## Customization

Content is separated from UI in `*Config.js` files. Update these to change text, links, and data without editing component logic.

| File | What to edit |
|---|---|
| `src/components/Hero/heroConfig.js` | Name, role, bio, profile image, social links, CTAs |
| `src/components/About/aboutConfig.js` | Introduction, education, interests, goals |
| `src/components/Skills/skillsConfig.js` | Skill categories and tags |
| `src/components/projects/projectsConfig.js` | Project titles, descriptions, tech, links |
| `src/components/Achievements/achievementsConfig.js` | Achievements, highlights, images |
| `src/components/Contact/contactConfig.js` | Email, location, form labels |
| `src/components/Footer/footerConfig.js` | Footer tagline and contact info |
| `src/components/Navbar/navConfig.js` | Navigation links |

### Static Assets

Place files in the `public/` folder:

| Path | Used for |
|---|---|
| `public/profile.jpg` | Hero profile photo |
| `public/resume.pdf` | Resume download button |
| `public/achievements/sih-winner.jpg` | SIH achievement photo |
| `public/achievements/algouniversity.jpg` | AlgoUniversity achievement photo |
| `public/achievements/udgam-photography.jpg` | Photography competition photo |
| `public/achievements/wdc-member.jpg` | Web Development Cell photo |

Paths in config files must match these filenames.

## Deployment

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
```

Popular options: [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/).

## Contact

- **Email:** [deepanjalshukla720@gmail.com](mailto:deepanjalshukla720@gmail.com)
- **GitHub:** [@Deepanjal-s](https://github.com/Deepanjal-s)
- **LinkedIn:** [deepanjal-shukla](https://linkedin.com/in/deepanjal-shukla)

## License

This project is for personal portfolio use.
