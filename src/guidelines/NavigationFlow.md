# Agency Site Navigation Flow

## Site Map

```
Coming Soon Page
       ↓
  [Launch Timer Ends / Press 'L']
       ↓
Launch Transition Animation
       ↓
┌─────────────────────────────────────────────────┐
│                 AGENCY WEBSITE                  │
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │         Sticky Navigation Header         │  │
│  │  Logo | Home | Services | About |        │  │
│  │       Work | Contact | Theme Toggle      │  │
│  └─────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────── PAGE CONTENT ──────────────┐  │
│  │                                          │  │
│  │  HOME PAGE (#home)                       │  │
│  │  ├─ Hero with gradient headline          │  │
│  │  ├─ "Start Your Project" CTA             │  │
│  │  ├─ "View Our Work" CTA                  │  │
│  │  └─ Quick stats grid (4 metrics)         │  │
│  │                                          │  │
│  │  SERVICES PAGE (#services)               │  │
│  │  ├─ Page hero                            │  │
│  │  └─ 8 service cards in 2-column grid:    │  │
│  │     • UI/UX Design                       │  │
│  │     • Web Development                    │  │
│  │     • Mobile App Design                  │  │
│  │     • Brand Strategy                     │  │
│  │     • Product Design                     │  │
│  │     • Web3 & Blockchain                  │  │
│  │     • SaaS Solutions                     │  │
│  │     • Design Systems                     │  │
│  │                                          │  │
│  │  ABOUT PAGE (#about)                     │  │
│  │  ├─ Page hero                            │  │
│  │  ├─ Our Story section                    │  │
│  │  ├─ Why Choose Collabrix (6 features):   │  │
│  │  │  • Premium Design Quality             │  │
│  │  │  • Fast Turnaround Time               │  │
│  │  │  • Dedicated Support                  │  │
│  │  │  • Scalable Solutions                 │  │
│  │  │  • Client-Focused Approach            │  │
│  │  │  • Unlimited Revisions                │  │
│  │  └─ Our Values (4 core values):          │  │
│  │     • Innovation                         │  │
│  │     • Collaboration                      │  │
│  │     • Excellence                         │  │
│  │     • Integrity                          │  │
│  │                                          │  │
│  │  WORK PAGE (#work)                       │  │
│  │  ├─ Page hero                            │  │
│  │  └─ Project showcase (2x2 grid):         │  │
│  │     • FinTech Dashboard                  │  │
│  │     • E-Commerce Platform                │  │
│  │     • Health & Fitness App               │  │
│  │     • Brand Identity System              │  │
│  │                                          │  │
│  │  CONTACT PAGE (#contact)                 │  │
│  │  ├─ Page hero                            │  │
│  │  ├─ Contact form (left):                 │  │
│  │  │  • Name field                         │  │
│  │  │  • Email field                        │  │
│  │  │  • Company field                      │  │
│  │  │  • Message textarea                   │  │
│  │  │  • Submit button                      │  │
│  │  └─ Contact info cards (right):          │  │
│  │     • Email card                         │  │
│  │     • LinkedIn card                      │  │
│  │     • Location card                      │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │              Footer                      │  │
│  │  Logo, Contact Info, Social Links        │  │
│  │  Copyright © 2025 Collabrix              │  │
│  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Navigation Behavior

### Desktop Navigation
- Clean horizontal menu bar
- Active page indicator (animated underline)
- Theme toggle button (Sun/Moon icon)
- Hover effects on menu items

### Mobile Navigation (< 768px)
- Hamburger menu icon (Menu/X)
- Expandable menu panel
- Full-width navigation links
- Theme toggle with label

## Page Transitions

All page changes feature smooth animations:
1. **Exit**: Current page fades out and slides up (20px)
2. **Enter**: New page fades in and slides down from 20px
3. **Duration**: 400ms with ease-in-out timing
4. **Scroll**: Auto-scrolls to top on navigation

## URL Structure

- Hash-based routing for SPA behavior
- URLs: `#home`, `#services`, `#about`, `#work`, `#contact`
- Browser back/forward buttons work correctly
- Direct URL access supported (e.g., `yoursite.com#services`)

## User Interaction Flow

### Typical User Journey

1. **Landing**: User arrives at Coming Soon page
2. **Wait/Test**: Countdown ends or user presses 'L'
3. **Transition**: Launch animation plays
4. **Home**: User sees agency home page
5. **Explore**: User clicks "View Our Work"
6. **Work**: Portfolio page displays projects
7. **Interest**: User wants to learn more, clicks "Services"
8. **Services**: Comprehensive service list displayed
9. **Decision**: User clicks "Contact" in navigation
10. **Contact**: User fills out form and submits

### Quick Actions

From any page, users can:
- Navigate to any other page via header menu
- Return home by clicking the logo
- Toggle theme without losing their place
- Use browser back/forward buttons
- Share direct links to specific pages

## Key Features

✅ **Persistent Navigation**: Header stays accessible on all pages
✅ **Theme Consistency**: Theme choice persists across navigation
✅ **Smooth Transitions**: Animated page changes feel premium
✅ **Mobile Optimized**: Full mobile menu experience
✅ **SEO Friendly**: Hash routing allows for tracking different pages
✅ **Browser Compatible**: Works with browser history
✅ **Keyboard Accessible**: Full keyboard navigation support
