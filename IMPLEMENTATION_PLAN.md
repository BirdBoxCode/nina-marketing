# Nina Marketing Website Implementation Plan

## Overview
Creating a sleek marketing website for an artist showcasing tattoos, artwork, and music using Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Current Setup
- Next.js 15 with TypeScript
- Tailwind CSS v4
- React 19
- Geist fonts (Sans & Mono)

## Implementation Steps

### 1. Setup shadcn/ui
- Install shadcn/ui CLI and initialize
- Configure components.json for Tailwind v4 compatibility
- Install required dependencies (class-variance-authority, clsx, tailwind-merge)

### 2. Navigation Bar
**Components needed:**
- `NavigationMenu` from shadcn/ui
- Custom logo component
- Mobile menu toggle

**Features:**
- Smooth scrolling to sections
- Active section highlighting
- Responsive design (mobile hamburger menu)
- Sections: Home, Tattoos, Artwork, Music, Contact

### 3. Page Structure & Sections

#### Hero Section
- Artist name and tagline
- Background image/video
- Call-to-action button
- Social media links

#### Tattoos Section
- Gallery grid layout
- Image lightbox/modal
- Categories/filters (optional)
- Hover effects

#### Artwork Section
- Portfolio grid
- Different media types support
- Detailed view modal
- Artist statement

#### Music Section
- Embedded audio players
- Track listings
- Streaming platform links
- Music videos (if applicable)

#### Contact Section
- Contact form with validation
- Business hours
- Location (if applicable)
- Social media integration

### 4. shadcn/ui Components to Use

**Navigation:**
- `NavigationMenu`
- `Sheet` (for mobile menu)
- `Button`

**Content Display:**
- `Card` (for portfolio items)
- `Dialog` (for image/content modals)
- `Tabs` (for different content categories)
- `Badge` (for tags/categories)

**Forms:**
- `Input`
- `Textarea`
- `Label`
- `Button`
- `Form` (with react-hook-form)

**UI Enhancement:**
- `Separator`
- `ScrollArea`
- `Skeleton` (loading states)
- `Toast` (notifications)

### 5. Styling Approach
- Dark/light theme support
- Consistent spacing and typography
- Smooth animations and transitions
- Mobile-first responsive design
- Custom CSS variables for brand colors

### 6. Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for gallery images
- Code splitting for different sections
- SEO optimization with metadata

### 7. Development Sequence
1. Install and configure shadcn/ui
2. Create navigation component
3. Build hero section
4. Implement tattoos gallery
5. Create artwork portfolio
6. Add music section
7. Build contact form
8. Add animations and polish
9. Test responsiveness
10. Performance optimization

### 8. File Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── navigation/
│   │   ├── navbar.tsx
│   │   └── mobile-menu.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── tattoos.tsx
│   │   ├── artwork.tsx
│   │   ├── music.tsx
│   │   └── contact.tsx
│   └── shared/
│       ├── image-modal.tsx
│       └── social-links.tsx
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

### 9. Additional Considerations
- Accessibility (ARIA labels, keyboard navigation)
- SEO optimization
- Loading states and error handling
- Form validation and submission
- Social media integration
- Analytics tracking setup

This plan provides a solid foundation for building a professional artist marketing website with modern technologies and best practices.