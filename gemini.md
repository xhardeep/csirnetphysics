# Project Context: CSIR NET Physics Documentation

This project is a premium documentation website built using **Astro Starlight**, designed to host comprehensive notes and study materials for **CSIR NET Physics** preparation.

## 🛠 Technology Stack
- **Framework**: [Astro](https://astro.build/) with [Starlight](https://starlight.astro.build/)
- **Styling**: Vanilla CSS with custom design tokens in `src/styles/custom.css`
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Content**: Markdown (.md) and MDX (.mdx) in `src/content/docs/`

## 📁 Key File Locations
- `src/content/docs/`: Main content directory.
  - `core/`: Fundamental subjects (Mathematical Physics, Classical Mechanics, etc.)
  - `advanced/`: Specialized topics.
- `src/styles/custom.css`: Global premium design system and typography.
- `astro.config.mjs`: Starlight and site configuration.
- `public/`: Static assets (images, logos).

## 🎨 Design Principles
- **WOW Factor**: Maintain a premium, scientific aesthetic.
- **Color Palette**: Dark mode first, using deep purples (`#6366f1`) and blues (`#030712`).
- **Typography**: `Outfit` for headings and `JetBrains Mono` for technical notes/code.
- **Readability**: High contrast, clear hierarchy, and ample whitespace.

## 🚀 Deployment Info
- **URL**: `https://xhardeep.github.io/csirnetphysics/`
- **Base Path**: `/csirnetphysics`
- **Workflow**: Automated deployment on every push to the `main` branch.

## 🧠 AI Instructions
- When adding new notes, follow the existing folder structure in `src/content/docs/`.
- Ensure all new pages include appropriate frontmatter (title, description).
- Use Starlight components like `<Card>`, `<Aside>`, and `<Tabs>` to enhance content.
- Keep the design consistent with the glassmorphism and premium feel established in `custom.css`.
