# 🖥️ Forte Romeo — Personal Portfolio

A personal portfolio website showcasing **Forte Romeo's** software projects, technical skills, learning journey, and evolving professional identity.

Built with React and Vite, the portfolio presents my work as an Information Technology student developing practical skills in software engineering, full-stack development, and artificial intelligence.

🌐 **Live Website:** [forteromeo.dev](https://forteromeo.dev/)

---

## ✨ Features

- 📱 **Responsive Design** - Layouts optimized for mobile phones, foldables, tablets, laptops, and large displays.
- 🧑🏽‍💻 **Project Showcase** - Dedicated presentation of selected software projects.
- ⭐ **Featured Projects** - Highlighted project layouts and project categorization.
- 👤 **About Section** - An introduction to my background and professional direction.
- 🧭 **Development Journey** - An overview of my learning progress and current focus.
- 🛠️ **Technical Skills** - Technologies and skills relevant to my development journey.
- 📬 **Contact Section** - Links for professional networking and communication.
- 📱 **Responsive Navigation** - Mobile navigation designed for touch and smaller screens.
- 🎬 **Scroll-Reveal Animations** - Subtle animations with reduced-motion support.
- ⬆️ **Back-to-Top Interaction** - Convenient navigation back to the top of the page.
- ♿ **Accessibility Considerations** - Semantic HTML, keyboard interaction, visible focus states, and motion preferences.
- 🔎 **SEO Metadata** - Page metadata, canonical URL, and social-sharing metadata.
- 🌐 **Structured Data** - JSON-LD metadata to describe the website.
- 🗺️ **Sitemap and Robots Configuration** - Resources supporting search engine discovery.

---

## 🚀 Featured Projects

### 🌦️ Weather Application

A responsive React weather application that consumes live weather data from an external API and presents current conditions through a clean interface.

**Technologies:** React · JavaScript · REST API

🔗 [GitHub Repository](https://github.com/Forte-Romeo/weather-dashboard-react)

### 📊 API Dashboard

A responsive React dashboard powered by the JSONPlaceholder REST API, featuring search, sorting, pagination, user details, and loading, error, and empty states.

**Technologies:** React · JavaScript · REST API

🔗 [GitHub Repository](https://github.com/Forte-Romeo/api-dashboard)

### 🔐 Authentication UI

A responsive authentication interface featuring login, sign-up, and password recovery flows, with input validation, form state management, loading feedback, and reusable UI components.

**Technologies:** React · JavaScript · CSS

🔗 [GitHub Repository](https://github.com/Forte-Romeo/authentication-ui)

### 🏗️ ForteFlow

A flagship project in development as part of my broader software engineering journey.

ForteFlow is intended to grow alongside my technical skills, with its progress documented as the project evolves.

**Status:** 🚧 In Development

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Component-based user interface |
| ⚡ Vite | Development server and production build tooling |
| 🟨 JavaScript | Application logic and interactivity |
| 🧱 HTML | Semantic page structure |
| 🎨 CSS | Styling, layout, and responsive design |
| 🔌 REST APIs | External data integration in selected projects |
| 🌿 Git | Version control |
| 🐙 GitHub | Source code hosting and collaboration |
| ▲ Vercel | Portfolio deployment and hosting |

---

## 📂 Project Structure

```text
forte-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   ├── images/
│   │   ├── portrait/
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
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### 1. 📥 Clone the repository

```bash
git clone https://github.com/Forte-Romeo/forte-portfolio.git
cd forte-portfolio
```

### 2. 📦 Install dependencies

```bash
npm install
```

### 3. 💻 Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🧪 Available Scripts

### Development Server

```bash
npm run dev
```

Starts the local Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Linting

```bash
npm run lint
```

Runs ESLint to check the project for code-quality issues.

### Production Preview

```bash
npm run preview
```

Serves the production build locally for verification before deployment.

---

## 🔄 Development Workflow

The project follows a structured development workflow focused on maintainability and quality.

1. 🎯 Define a focused change.
2. 🛠️ Implement the change.
3. 🧪 Test the relevant functionality locally.
4. 🧹 Run ESLint.
5. 🏗️ Run the production build.
6. 👀 Preview and verify the production build when appropriate.
7. 📝 Commit changes with a descriptive message.
8. 🚀 Push changes to GitHub.
9. 🌐 Verify the deployed website when changes reach production.

---

## 📝 Commit Convention

Commit messages follow a conventional structure:

```text
feat: add new functionality
fix: correct a bug
refactor: improve code structure
docs: update documentation
chore: update project configuration
```

**Examples:**

```text
feat: add project filtering
fix: correct mobile navigation behavior
refactor: simplify reveal animation logic
docs: update project documentation
chore: configure github actions
```

---

## ♿ Accessibility

Accessibility is an important consideration throughout the portfolio.

The project includes:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Escape-key support for the mobile menu.
- Reduced-motion support.
- Descriptive image metadata.
- Responsive layouts and touch-friendly interactions.

These features aim to make the portfolio easier to navigate across different devices and interaction preferences.

---

## 🔎 SEO and Discoverability

The website includes SEO-related resources and metadata:

- Descriptive page title and meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter metadata.
- JSON-LD structured data.
- XML sitemap.
- Robots configuration.

**Production domain:** [https://forteromeo.dev/](https://forteromeo.dev/)

Additional resources:

- 🗺️ [Sitemap](https://forteromeo.dev/sitemap.xml)
- 🤖 [Robots.txt](https://forteromeo.dev/robots.txt)

---

## 🚀 Deployment

The portfolio is deployed on **Vercel**, with the custom domain:

🌐 [https://forteromeo.dev](https://forteromeo.dev)

The `main` branch is the intended production source branch.

The repository includes a GitHub Actions CI workflow configured to run the following checks on pushes and pull requests targeting `main`:

```bash
npm ci
npm run lint
npm run build
```

This workflow helps identify linting and production-build issues before changes are considered ready for release.

---

## 👨🏽‍💻 Author

**Ferguson (Forte) Romeo**

Information Technology student building practical experience in software engineering, full-stack development, and AI systems.

- 🐙 **GitHub:** [Forte-Romeo](https://github.com/Forte-Romeo)
- 💼 **LinkedIn:** [Ferguson Romeo Nyarmah](https://linkedin.com/in/ferguson-romeo-nyarmah)
- 🌐 **Portfolio:** [forteromeo.dev](https://forteromeo.dev/)

---

## 📄 License

This repository contains a personal portfolio website.

Unless a separate license is added to the repository, no additional permission to reuse or redistribute the project should be assumed.

---

⭐ Thanks for visiting the Forte Romeo Portfolio repository!