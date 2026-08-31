# Forte Romeo — Personal Portfolio

A modern, responsive personal portfolio built with **React** and **Vite** to showcase my journey as an Information Technology student, software developer in progress, and builder.

The portfolio is designed to communicate who I am, what I'm learning, what I've built, and where I'm going — while demonstrating practical frontend development skills through a real, continuously evolving project.

---

## Overview

This portfolio is more than a static personal website.

It is an ongoing React project built to demonstrate:

- Modern React development
- Component-based architecture
- Reusable components
- Data-driven UI
- State management
- Responsive web design
- Accessibility
- SEO fundamentals
- UI/UX design
- Animation and interaction
- Production-oriented frontend practices
- Git and GitHub workflow

The project will continue evolving as I gain new skills and build more projects.

---

## Tech Stack

### Core

- React
- JavaScript
- HTML5
- CSS3
- Vite

### Development Tools

- Git
- GitHub
- VS Code
- npm

### Design & UI

- Responsive CSS
- CSS Grid
- Flexbox
- CSS `clamp()`
- CSS transitions
- CSS animations
- Intersection Observer API

---

## Features

### Personal Portfolio

The website contains dedicated sections for:

- Hero
- About
- Skills
- Projects
- Journey / Experience
- Contact
- Footer

---

### Interactive Navigation

The navigation system includes:

- Smooth scrolling
- Active section tracking
- Responsive mobile navigation
- Mobile menu toggle
- Accessible navigation labels
- Keyboard-friendly controls
- Skip-to-content functionality

---

### Data-Driven Projects

Projects are stored separately from the UI and rendered dynamically.

This allows new projects to be added without rebuilding the project-card structure.

Example architecture:

```text
Project Data
     ↓
Projects Component
     ↓
ProjectCard Component
     ↓
Rendered Project
```

Projects can contain:

- Project name
- Description
- Category
- Technologies
- GitHub repository
- Live demo
- Preview image
- Featured status

---

### Project Filtering

Projects can be filtered dynamically by category.

The interface supports:

- All
- React applications
- Web applications
- Other project categories

The selected filter is managed using React state.

The interface also uses accessible button states through `aria-pressed` and provides live result updates.

---

### Responsive Design

The portfolio is optimized for:

- Large desktop displays
- Desktop/laptop screens
- Tablets
- Mobile phones
- Small mobile devices

The layout uses fluid sizing and responsive breakpoints instead of separate layouts for individual devices.

Responsive techniques include:

- CSS Grid
- Flexbox
- `clamp()`
- `minmax()`
- Fluid spacing
- Responsive typography
- Flexible images
- Mobile navigation
- Touch-friendly controls

---

### Motion & Animation

The interface includes subtle motion to improve the visual experience.

Examples include:

- Scroll reveal animations
- Hover interactions
- Image transitions
- Navigation transitions
- Button interactions
- Mobile menu transitions

Animations are intentionally restrained to maintain the portfolio's minimal and professional visual identity.

---

### Reduced Motion Support

The portfolio respects the user's system-level reduced-motion preference.

When reduced motion is enabled:

- Animations are minimized
- Transitions are reduced
- Smooth scrolling is disabled
- Reveal elements remain visible

This improves accessibility for users who prefer reduced motion.

---

## Accessibility

Accessibility was treated as part of the production process rather than an afterthought.

The portfolio includes:

- Semantic HTML
- Proper heading hierarchy
- Accessible navigation
- Keyboard navigation
- Visible focus states
- `aria-label`
- `aria-current`
- `aria-expanded`
- `aria-controls`
- `aria-pressed`
- `aria-live`
- Accessible project links
- Meaningful image alt text
- Skip-to-content link
- Reduced-motion support
- Touch-friendly controls

### Heading Structure

The page follows a logical hierarchy:

```text
H1
└── Hero

H2
├── About
├── Skills
├── Projects
│   ├── H3 Project
│   ├── H3 Project
│   └── H3 Project
├── Journey
└── Contact
```

Only one primary `H1` is used on the page.

---

## SEO

The portfolio includes foundational SEO configuration in `index.html`.

Implemented metadata includes:

- Page title
- Meta description
- Keywords
- Author
- Robots directives
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- Theme color
- Favicon

The project also includes:

```text
robots.txt
sitemap.xml
```

These provide search engines with basic crawling and indexing information.

---

## Social Sharing

Open Graph and Twitter/X metadata are included to improve how the portfolio appears when shared.

The configuration supports:

- Page title
- Description
- Preview image
- Website URL

The social preview image is located at:

```text
public/og-image.jpg
```

Recommended dimensions:

```text
1200 × 630
```

---

## Favicon

The project uses a custom SVG favicon:

```text
public/favicon.svg
```

The favicon uses the `FR` monogram to maintain consistency with the portfolio's personal branding.

---

## Performance Considerations

The project includes several basic performance optimizations.

### Image Optimization

Images below the fold use:

```html
loading="lazy"
```

and:

```html
decoding="async"
```

The primary Hero image can use eager loading because it is part of the initial viewport.

---

### Responsive Images

Images are constrained using:

```css
max-width: 100%;
```

and project previews use responsive aspect ratios.

---

### Component-Based Architecture

Reusable components reduce unnecessary duplication and make future changes easier to maintain.

---

## Project Structure

```text
forte-portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── Reveal.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## Component Architecture

The application is structured around reusable React components.

### Navbar

Responsible for:

- Site navigation
- Active section tracking
- Mobile navigation
- Menu state
- Accessible navigation controls

---

### Hero

Responsible for:

- Personal introduction
- Main heading
- Short description
- Primary calls to action
- Personal visual

---

### About

Contains:

- Personal introduction
- Current direction
- Background
- Relevant details

---

### Skills

Displays the technologies and skills currently being developed.

Skills are maintained separately from the presentation layer.

---

### Projects

Responsible for:

- Project filtering
- Project collection
- Project rendering
- Result count
- Project layout

---

### ProjectCard

Reusable component responsible for displaying an individual project.

It receives project information through props.

---

### Experience

Displays the current learning and development journey.

---

### Contact

Provides ways to get in touch and includes the primary final call to action.

---

### Footer

Contains:

- Copyright information
- Social links
- Additional navigation

---

### BackToTop

Provides a floating control that allows users to quickly return to the top of the page.

---

### Reveal

Provides reusable scroll-based reveal animations using the Intersection Observer API.

---

## Data Architecture

Static portfolio information is separated from the presentation components.

For example:

```text
src/data/projects.js
```

contains project information while:

```text
src/components/Projects.jsx
src/components/ProjectCard.jsx
```

handle presentation.

This follows the principle:

```text
DATA ≠ UI
```

Making the portfolio easier to maintain and extend.

---

## State Management

The portfolio currently uses React's built-in state management.

Primary examples include:

### Navigation State

```javascript
useState()
```

is used to manage:

- Mobile menu state
- Active navigation section

### Project Filter State

React state controls the currently selected project category.

### Image Error State

Project cards can detect failed image loading and fall back to a placeholder.

The project intentionally avoids unnecessary external state-management libraries.

---

## Styling Architecture

The project uses CSS rather than a component library.

The styling system is built around:

```text
CSS Variables
     ↓
Global Foundation
     ↓
Layout System
     ↓
Component Styles
     ↓
Responsive Rules
     ↓
Accessibility Rules
```

Global variables define:

- Colors
- Container width
- Spacing
- Border radius
- Transitions

Example:

```css
:root {
  --color-background: #f8f8f6;
  --color-surface: #f1f1ee;
  --color-text: #1f1f1f;
  --color-text-muted: #6d6d68;
  --color-border: #deded9;
}
```

---

## Design Direction

The visual identity follows a minimal, editorial-inspired direction.

Key characteristics:

- Minimal
- Clean
- Refined
- Professional
- Typography-focused
- High whitespace
- Subtle motion
- Restrained interaction
- Strong visual hierarchy

The goal is to make the portfolio feel like a personal digital identity rather than a generic developer template.

---

## Responsive Breakpoints

The layout is designed around fluid behavior with supporting breakpoints.

Approximate layout targets include:

```text
Large Desktop
1440px+

Laptop
1024px – 1439px

Tablet
768px – 1023px

Mobile
481px – 767px

Small Mobile
≤480px
```

The exact design does not depend exclusively on these values because fluid CSS is used throughout the application.

---

## Development

### Clone the repository

```bash
git clone https://github.com/Forte-Romeo/forte-portfolio.git
```

### Navigate into the project

```bash
cd forte-portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development server will provide a local URL, typically:

```text
http://localhost:5173
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

---

### Build

```bash
npm run build
```

Creates the optimized production build.

---

### Preview

```bash
npm run preview
```

Serves the production build locally for testing.

---

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

---

## Production Verification

Before deployment, run:

```bash
npm run lint
```

Then:

```bash
npm run build
```

Then:

```bash
npm run preview
```

The production preview should be tested across:

```text
Desktop
Laptop
Tablet
Mobile
Small Mobile
```

---

## Quality Checklist

Before deployment:

```text
[ ] No ESLint errors
[ ] No console errors
[ ] Production build succeeds
[ ] No horizontal overflow
[ ] Navigation works
[ ] Mobile menu works
[ ] Project filters work
[ ] Project links work
[ ] External links work
[ ] Images load correctly
[ ] Image fallbacks work
[ ] Keyboard navigation works
[ ] Focus states are visible
[ ] Skip link works
[ ] Reduced motion works
[ ] Heading hierarchy is correct
[ ] Alt text is meaningful
[ ] SEO metadata is correct
[ ] Canonical URL is correct
[ ] Open Graph metadata is correct
[ ] Favicon works
[ ] robots.txt is configured
[ ] sitemap.xml is configured
[ ] Placeholder URLs removed
[ ] Placeholder content removed
```

---

## Git Workflow

This project is being developed using incremental, professional Git commits.

Each major development stage receives its own commit.

Current progression:

```text
feat: initialize React portfolio
        ↓
feat: build static portfolio layout
        ↓
refactor: make portfolio content data-driven
        ↓
feat: establish portfolio content and visual identity
        ↓
feat: build project showcase
        ↓
feat: add portfolio interactivity and state
        ↓
feat: polish portfolio UI and add motion
        ↓
feat: optimize portfolio for responsive layouts
        ↓
feat: harden portfolio for accessibility and production
```

This keeps the development history readable and makes it easier to understand how the project evolved.

---

## Roadmap

The portfolio is an ongoing project.

### Completed

```text
✓ React + Vite setup
✓ Vite cleanup
✓ React project structure
✓ Base portfolio shell
✓ Static layout
✓ Reusable components
✓ Data-driven content
✓ Portfolio visual identity
✓ Project showcase
✓ Project filtering
✓ React state management
✓ Motion and animations
✓ Responsive design
✓ Accessibility foundations
✓ SEO foundations
✓ Social metadata
✓ Production quality pass
```

### Upcoming

```text
→ Deployment
→ Custom domain
→ Production hosting
→ Search engine indexing
→ Analytics
→ Further performance optimization
→ Continued portfolio content updates
→ New projects
→ Continued UI refinement
```

---

## Future Improvements

Potential future additions include:

- Project detail pages
- Case studies
- Blog / writing section
- Dark mode
- Advanced page transitions
- More sophisticated animations
- CMS integration
- Contact form backend
- Analytics
- Performance monitoring
- Automated deployments
- Improved image optimization
- Structured data / JSON-LD
- Dynamic project management
- More advanced SEO
- Custom domain
- Progressive Web App features

These will be introduced only when they provide meaningful value to the portfolio.

---

## Philosophy

This portfolio is intentionally treated as a **living project**.

It will evolve alongside my technical ability.

Instead of building a portfolio once and abandoning it, the project serves as an ongoing demonstration of:

```text
Learning
   ↓
Building
   ↓
Shipping
   ↓
Improving
   ↓
Documenting
   ↓
Repeating
```

Every new skill should eventually have a place in the portfolio through either:

- A new project
- A new feature
- A technical improvement
- A case study
- A documented learning experience

---

## Author

**Ferguson (Forte) Romeo**

Information Technology Student  
Aspiring Software + AI Engineer  
Builder & Entrepreneur

Interested in:

- Software Engineering
- Artificial Intelligence
- Web Development
- Technology
- Entrepreneurship
- Operational business systems

---

## License

This project is a personal portfolio and is primarily intended to showcase my work, skills, and development journey.

The source code may be referenced for educational purposes, but personal branding, photographs, written content, and other original assets should not be reused without permission.
