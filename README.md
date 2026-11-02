# Hariharan G — Cybersecurity Portfolio

A responsive personal portfolio for Hariharan G, an aspiring SOC Analyst and B.E. Cybersecurity student. The site presents technical skills, cybersecurity projects, certifications, education, resume links, and contact information in a terminal-inspired interface.

## Features

- React-based single-page portfolio
- Vite development and production tooling
- TypeScript for type-safe components
- Tailwind CSS integrated through the Vite plugin
- Responsive layout for desktop, tablet, and mobile
- Mobile navigation menu
- Scroll-triggered reveal animations
- Cybersecurity terminal visual theme
- Resume and certificate view/download actions
- Direct GitHub, LinkedIn, and email contact links
- Reduced-motion support for accessibility

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- CSS animations and responsive media queries

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, typically:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
portfolio/
├── src/
│   ├── App.tsx          # Portfolio sections and interactive behavior
│   ├── index.css        # Theme, layout, responsive styles, and animations
│   └── main.tsx         # React application entry point
├── index.html           # Vite HTML entry
├── package.json         # Scripts and dependencies
├── tsconfig*.json       # TypeScript configuration
└── vite.config.ts       # Vite and Tailwind configuration
```

## Adding Resume and Certificate Files

The interface already links to the following files. Add the actual documents at these paths to enable the buttons:

```text
portfolio/
├── Hariharan G Resume.pdf
└── certificates/
    ├── security-operations-fundamentals.pdf
    ├── cisco-introduction-to-cybersecurity.pdf
    ├── deloitte-cyber-job-simulation.pdf
    └── oracle-cloud-foundations.pdf
```

Keep filenames synchronized with the links in `src/App.tsx`.

## Customization

Update the portfolio content in [src/App.tsx](./src/App.tsx). Update colors, spacing, responsive behavior, and animations in [src/index.css](./src/index.css).

## License

This project is a personal portfolio. Contact the author before reusing personal content, resume materials, or certificate files.
