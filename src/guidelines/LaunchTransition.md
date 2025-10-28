# Collabrix Website - Launch Transition Feature

## Overview
The Collabrix website features an interactive countdown timer that transitions from the "Coming Soon" page to the full agency website when the countdown reaches zero.

## How It Works

### Countdown Timer
- Located in `/components/Hero.tsx`
- Counts down to November 1, 2025 (00:00:00 UTC)
- When countdown reaches 0:
  - Triggers the `onCountdownEnd` callback
  - Displays "0" for all time units
  - Initiates the launch transition sequence

### Launch Transition
- Component: `/components/LaunchTransition.tsx`
- Features:
  - **Announcement Stage**: Displays "We're Live!" message with animated sparkle icon
  - **Interactive Button**: User clicks "Enter Collabrix" to proceed
  - **Transition Animation**: Circular morph effect with particle animation
  - **Duration**: ~2 seconds total transition time

### Agency Website
- Component: `/components/AgencySite.tsx`
- Full-featured landing page with:
  - Hero section
  - Services showcase (UI/UX Design, Web Development, Brand Strategy, Product Design)
  - Features list (6 key benefits)
  - CTA section
  - Footer with contact info and social links
  - Responsive navigation
  - Theme toggle support

## Testing the Transition

### Method 1: Keyboard Shortcut (Recommended for Testing)
- Press the `L` key while on the Coming Soon page
- This immediately triggers the launch transition
- Small indicator in bottom-right corner shows this feature

### Method 2: Change Countdown Date
In `/components/Hero.tsx`, modify line 23:
```typescript
const targetDate = new Date('2025-11-01T00:00:00Z').getTime();
```
Change to a date/time very close to now for immediate testing.

### Method 3: Wait for Actual Countdown
- The transition will automatically trigger on November 1, 2025 at midnight UTC

## File Structure

### New Files Created
- `/components/LaunchTransition.tsx` - Handles the transition animation
- `/components/AgencySite.tsx` - The full agency website

### Modified Files
- `/App.tsx` - Added state management for transition and agency site
- `/components/Hero.tsx` - Added countdown end detection

## State Management

The app uses three key states in `App.tsx`:
- `showTransition`: Controls visibility of the transition overlay
- `showAgencySite`: Switches from Coming Soon to Agency Site
- `countdownEnded`: Prevents duplicate countdown end triggers

## Design Features

### Transition Animation
- Rotating sparkle icon with scale pulse
- Gradient text animation
- Particle effects (50 particles)
- Circular morph from center expanding to full screen
- Smooth opacity transitions
- Interactive "Enter Collabrix" button with hover effects

### Agency Site Design
- Maintains same design system as Coming Soon page
- Premium gradient backgrounds with subtle orbs
- Hover effects on service cards
- Responsive grid layouts
- Mobile-friendly navigation with hamburger menu
- Theme toggle persistence
- Email and LinkedIn contact links

## Accessibility
- All animations respect user motion preferences
- Keyboard navigation supported
- ARIA labels included
- Focus management during transition
- Screen reader announcements

## Future Development
Once the countdown ends and users see the agency site, you can:
- Add more pages (Portfolio, Case Studies, About Team, etc.)
- Connect contact forms to backend/CRM
- Add project galleries with case studies
- Implement blog/news section
- Add team member profiles
- Include testimonials section
- Add animation showcase/reel

## Color Scheme
- **Light Mode**: 
  - Background: #faf8f4
  - Primary: #0c4a6e (Blue)
  - Accent: #ff7f2e (Orange on hover)
- **Dark Mode**:
  - Background: #2a2a2a
  - Primary: #7dd3fc (Light Blue)
  - Accent: #ff7f2e (Orange on hover)
