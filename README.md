# Forte Romeo - Portfolio

Personal portfolio website for Forte Romeo, an Information Technology student building a foundation in software engineering, full-stack development, and artificial intelligence.

The portfolio showcases selected software projects, current technical focus, skills, and development journey.

## Live Website

https://forteromeo.dev/

## Built With

- React
- Vite
- JavaScript
- HTML
- CSS
- REST APIs
- Git
- GitHub

## Features

- Responsive single-page portfolio
- Project showcase with category filtering
- Featured project layout
- About section
- Development journey
- Technical skills section
- Contact section
- Responsive mobile navigation
- Scroll-based reveal animations
- Reduced-motion support
- Back-to-top interaction
- Accessibility-focused interactions
- SEO metadata
- Open Graph metadata
- Twitter metadata
- JSON-LD structured data
- Sitemap
- Robots configuration

## Featured Projects

### Weather App

A responsive React weather application that consumes live weather data from an external API and presents current conditions through a clean interface.

### API Dashboard

A responsive React dashboard powered by the JSONPlaceholder REST API, with search, sorting, pagination, user details, and loading, error, and empty states.

### Authentication UI

A responsive React authentication interface with login, sign-up, and password recovery flows, including validation, form state, loading feedback, and reusable UI components.

## Project Structure

```text
forte-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   ├── images/
│   │   └── projects/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Clone the repository

```
git clone https://github.com/Forte-Romeo/forte-portfolio.git
cd forte-portfolio
```

### Install dependencies

```
npm install
```

### Start the development server

```
npm run dev
```

The development server will be available at the local URL provided by Vite.

## Available Scripts

### Development

```
npm run dev
```

Starts the Vite development server.

### Production Build

```
npm run build
```

Creates the optimized production build.

### Lint

```
npm run lint
```

Runs ESLint across the project.

### Preview

```
npm run preview
```

Previews the production build locally.

## Development Workflow

The project follows a simple development workflow:

1. Create a focused change.
2. Test the change locally.
3. Run ESLint.
4. Run the production build.
5. Commit the change using a clear commit message.
6. Push to GitHub.

## Commit Convention

Commits follow a conventional structure:

```
feat: add new functionality
fix: correct a bug
refactor: improve code structure
docs: update documentation
chore: update project configuration
```

Examples:

```
feat: add project filtering
fix: correct mobile navigation behavior
refactor: simplify reveal animation logic
docs: update project documentation
chore: configure github actions
```

## Accessibility

The portfolio includes:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Escape-key support for the mobile menu
- Reduced-motion support
- Accessible project technology lists
- Descriptive image metadata
- Responsive layouts

## SEO

The site includes:

- Descriptive page title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter metadata
- JSON-LD structured data
- Sitemap
- Robots configuration

Production domain:

```
https://forteromeo.dev/
```

## Deployment

The production site is intended to be deployed from the ```main``` branch.

The repository includes GitHub Actions CI to run:

```
npm ci
npm run lint
npm run build
```

on pushes and pull requests targeting ```main```.

## Author

Ferguson (**Forte**) Romeo

- GitHub: https://github.com/Forte-Romeo
- LinkedIn: https://linkedin.com/in/ferguson-romeo-nyarmah

## License

This project is a personal portfolio website.