# Agency Site Architecture

## Overview

The agency website has been transformed from a single-page application into a multi-page experience with proper routing and navigation. The site maintains the premium design aesthetic while providing a more structured user experience.

## Page Structure

### 1. **Home Page** (`/components/agency/HomePage.tsx`)
- Hero section with main value proposition
- Primary CTAs (Start Your Project, View Our Work)
- Quick stats showcasing achievements (50+ projects, 30+ clients, etc.)
- Serves as the landing page and main entry point

### 2. **Services Page** (`/components/agency/ServicesPage.tsx`)
- Comprehensive grid of 8 service offerings
- Each service includes:
  - Icon and title
  - Description
  - Detailed list of what's included
- Services include: UI/UX Design, Web Development, Mobile App Design, Brand Strategy, Product Design, Web3 & Blockchain, SaaS Solutions, and Design Systems

### 3. **About Page** (`/components/agency/AboutPage.tsx`)
- Company story and mission
- "Why Choose Collabrix" section with 6 key features:
  - Premium Design Quality
  - Fast Turnaround Time
  - Dedicated Support
  - Scalable Solutions
  - Client-Focused Approach
  - Unlimited Revisions
- Core values (Innovation, Collaboration, Excellence, Integrity)

### 4. **Work Page** (`/components/agency/WorkPage.tsx`)
- Portfolio showcase with 4 featured projects:
  - FinTech Dashboard
  - E-Commerce Platform
  - Health & Fitness App
  - Brand Identity System
- Each project card includes:
  - Project image
  - Category and title
  - Description
  - Technology tags
  - Hover effects with preview

### 5. **Contact Page** (`/components/agency/ContactPage.tsx`)
- Contact form with fields for:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Message (required)
- Contact information cards:
  - Email: hello@thecollabrix.com
  - LinkedIn profile
  - Location (Remote-first agency)
- Form submission via mailto link

## Layout Component

### **AgencyLayout** (`/components/agency/AgencyLayout.tsx`)
- Shared layout wrapper for all pages
- Features:
  - Sticky navigation header with theme toggle
  - Desktop navigation menu
  - Mobile-responsive hamburger menu
  - Page transition animations
  - Consistent footer across all pages
  - Background effects (gradient orbs, dot pattern)
  - Active page indicator in navigation

## Routing System

### Implementation
- Uses hash-based routing (`#home`, `#services`, etc.)
- Preserves browser back/forward functionality
- Smooth page transitions with Motion animations
- URL updates without full page reload

### Navigation Flow
1. User clicks navigation item
2. `handleNavigate()` updates currentPage state
3. URL hash is updated via `history.pushState()`
4. Page content smoothly transitions via Motion
5. Scroll position resets to top

## Theme System

- Light/Dark mode toggle persists across all pages
- Consistent color scheme:
  - Light mode: #faf8f4 background, #0c4a6e accent
  - Dark mode: #2a2a2a background, #7dd3fc accent
  - Hover states transition to orange (#ff7f2e)
- Backdrop blur effects on cards and navigation
- Gradient backgrounds for CTAs

## Mobile Responsiveness

All pages are fully responsive with breakpoints:
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility

- WCAG AAA compliant
- Semantic HTML structure
- Proper ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios

## Animation & Motion

- Uses Motion (formerly Framer Motion) for animations
- Page transitions: fade and slide effects
- Staggered animations for lists and grids
- Hover effects on cards and buttons
- Smooth theme toggle transitions

## File Organization

```
/components
├── AgencySite.tsx              # Main router component
└── agency/
    ├── AgencyLayout.tsx        # Shared layout wrapper
    ├── HomePage.tsx            # Home/landing page
    ├── ServicesPage.tsx        # Services showcase
    ├── AboutPage.tsx           # About & values
    ├── WorkPage.tsx            # Portfolio/projects
    └── ContactPage.tsx         # Contact form & info
```

## Usage

The AgencySite component is rendered after the launch transition completes:

```tsx
<AgencySite isDark={isDark} toggleTheme={toggleTheme} />
```

Navigation is handled internally through the hash-based routing system, allowing users to browse between pages seamlessly while maintaining the application state.
