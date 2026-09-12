# Products and clinic platform: implementation and testing

This change evolves the existing React/Vite website; the Design and Talent services remain alongside a two-product collection.

## Product configuration and renaming

Edit only `products.clinicPlatform.name` in `src/data/products.ts` to rename the clinic product. The homepage, collection, detail page, breadcrumb, CTA labels, runtime metadata, generated HTML metadata and JSON-LD derive from this data. Rebuild and deploy to publish the change. The stable route and canonical URL stay `/products/clinic-platform` and `https://thecollabrix.com/products/clinic-platform`.

`workingName` can separately be set to `false` when the name is final. Product strings are not duplicated in tests; tests import the configuration. No product domain, clinical claims, signup system, release dates or private operational information were added.

MemoryOS remains a separate Beta product linked to `https://memoryos.in`, with its existing `https://memoryos.in/signin` beta link. Both open externally with `noopener noreferrer`. Its organizational-memory, searchable-knowledge, cited-evidence and local-redaction positioning is preserved. The old limited promotional offer was omitted rather than republished as a current commercial commitment.

## Website behavior

- Homepage: product-and-services positioning, primary Products CTA, compact cards for both products before Services, consistent FAQ and structured FAQ copy.
- Products: two data-driven product cards with distinct categories, statuses and destinations.
- Clinic platform: semantic Home / Products / current-product breadcrumb, working-name and private-beta labels, workflow modules, audiences, development approach, conservative future automation copy, ownership and existing contact links.
- About, loader and footer: company positioning includes proprietary products and services. Legal links remain.
- Contact: the existing `other` option is labeled Products / Other so beta enquiries fit the existing form without changing its submission contract.
- Routing: nested clinic route, trailing-slash normalization, browser history and existing work/case-study routes. Legal routes use exact matching. The unnecessary forced two-second loading delay was removed.
- Accessibility: real internal anchors preserve modifier-click and keyboard activation; breadcrumb uses `aria-label="Breadcrumb"` and `aria-current="page"`; product cards follow heading hierarchy; CTA targets are at least 44px; MotionConfig respects reduced-motion preference for transforms/layout.

## Hosting and SEO

`src/data/seo.ts` provides metadata to `PageMetadata.tsx` and the Vite plugin in `scripts/static-pages.ts`. Production builds emit actual directory entry files for the named routes, including the nested product page, and preserve a 404 fallback for case-study paths. This supports direct requests and refreshes on GitHub Pages and provides metadata to social crawlers without JavaScript. Page content still renders in React; this is not full server rendering.

The deployment workflow no longer overwrites the generated 404 page. Canonical URLs omit trailing slashes; GitHub Pages may redirect directory requests to a trailing-slash URL, which the router accepts. Organization JSON-LD names Collabrix Zone Private Limited. The clinic product is SoftwareApplication with creator/provider references to the same organization and a BreadcrumbList. Its schema is removed when navigating away. Sitemap includes the stable route; robots continues allowing crawling.

The prior social image URL returned HTTP 404 during verification. That broken reference was removed, and Twitter uses a text summary card.

## Repeatable checks

```sh
npm ci
npx playwright install chromium
npm run typecheck
npm run build
npm test
```

TypeScript checks the full source tree and mirrors Vite's existing versioned-package aliases. There was no existing lint configuration or lint script; none is claimed as passing. The Playwright suite serves the actual build files with a local Python 3 static server and Pages-style fallback, rather than relying on Vite's development fallback. The PR workflow installs Chromium and runs typecheck, build and browser tests. It does not deploy a preview or merge the PR.

Coverage includes static HTML metadata and HTTP status, homepage/Products/clinic page at 320, 430, 768, 1280 and 1920px in both themes, overflow, mobile navigation, product links, direct visit, refresh, breadcrumbs, keyboard activation, back/forward, contact, existing routes, legal navigation, theme persistence, sitemap and robots. Analytics requests are blocked in browser tests; contact forms are not submitted.

Existing dependency installation reports five high-severity advisories (lodash, nanoid, picomatch, postcss and Vite). The build also warns about the main JavaScript chunk exceeding 500 kB. Broad dependency upgrades and bundle splitting are outside this product-content change.

## Files inspected

- App.tsx, MainWebsite.tsx, WebsiteLayout.tsx and main.tsx for routing, layout, navigation and themes.
- HomePage.tsx, ProductsPage.tsx, AboutPage.tsx, ContactPage.tsx, WorkPage.tsx, CaseStudyPage.tsx and projects.ts for content, existing behavior and routes.
- PrivacyPage.tsx, TermsPage.tsx, Loader.tsx and shared WordReveal/Typewriter components.
- index.html, index.css, styles/globals.css, vite.config.ts, sitemap.xml, robots.txt and deploy.yml for styling, SEO and hosting.
- package.json, package-lock.json, .gitignore and README.md for dependencies and development conventions.

## Files changed

Existing: App.tsx, MainWebsite.tsx, Loader.tsx, WebsiteLayout.tsx, HomePage.tsx, ProductsPage.tsx, AboutPage.tsx, ContactPage.tsx, index.html, sitemap.xml, vite.config.ts, deploy.yml, package.json, package-lock.json, tsconfig.json, README.md, .gitignore.

New: products.ts, seo.ts, PageMetadata.tsx, ClinicPlatformPage.tsx, ProductCollection.tsx, SiteLink.tsx, static-pages.ts, serve-build.py, playwright.config.ts, products.spec.ts, product-rename.spec.ts, test.yml and this report.

No user decision is required to test this PR. Final product naming remains a later business decision; the current display name is explicitly marked as a working name.

## Final local validation

- `npm run typecheck`: passed across source, build helpers and tests.
- `npm run build`: passed; generated clinic route HTML and 404 fallback verified.
- `npm test`: all 10 tests passed in 23.6 seconds in the final uninterrupted run.
- Central-name regression: passed for full/compact cards, product detail, breadcrumb, CTA and metadata/structured-data output; the canonical route stayed unchanged.
- `git diff --check`: passed.
- Desktop and 320px product-detail screenshots were inspected. MemoryOS's external homepage responded HTTP 200.
- Earlier local runs experienced browser/server timeouts during interrupted execution. The final complete run passed without retries.
- Lint: unavailable in the repository (no lint command/configuration).
