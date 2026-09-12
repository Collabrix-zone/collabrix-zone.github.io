# Collabrix Zone

The Collabrix company website presents proprietary software products alongside product, UX/design and talent services. It uses React, TypeScript, Vite and Tailwind, with a shared responsive layout and light/dark themes.

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS with `@tailwindcss/vite` plugin
- **motion/react** — Animation library (formerly Framer Motion)
- **shadcn/ui** — Accessible, composable UI components built on Radix UI
- **Custom history router** — Client-side routing with generated static route entry files
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

   The app will be available at `http://localhost:3000` (or the port Vite chooses).

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

## Testing and product maintenance

See [Products implementation and testing](docs/products-testing.md) for product renaming, route/SEO generation and browser-test coverage.

```bash
npm run typecheck
npm run build
npx playwright install chromium
npm test
```
