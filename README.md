# Collabrix Zone - Coming Soon

A polished "coming soon" landing page for Collabrix Zone — a creative collaboration platform. The page features animated sections, a hero with motion effects, service highlights, and a newsletter/contact area, all built with a WCAG AAA-compliant design system.

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS with `@tailwindcss/vite` plugin
- **motion/react** — Animation library (formerly Framer Motion)
- **shadcn/ui** — Accessible, composable UI components built on Radix UI
- **React Router** — Client-side routing
- **Outfit** (Google Fonts) — Primary typeface

## Running Locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or the port Vite chooses).

## Building for Production

```bash
npm run build
```

The production-ready output is written to the `build/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    ui/          # shadcn/ui component library
    website/     # Page-level components (Home, About, Contact, etc.)
    Hero.tsx     # Animated hero section
    Footer.tsx   # Site footer
    Header.tsx   # Navigation header
    ...
  styles/
    globals.css  # CSS custom properties, Tailwind v4 theme, base styles
  index.css      # Entry stylesheet — imports Tailwind + globals
  App.tsx        # Root component with routing
  main.tsx       # React entry point
```
