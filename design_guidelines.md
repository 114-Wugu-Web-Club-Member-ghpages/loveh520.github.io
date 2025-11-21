# Design Guidelines: Tech-Aesthetic Personal Life Recording Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from tech-forward platforms (Vercel, Linear, Stripe) combined with cyberpunk/sci-fi aesthetics. Focus on dark themes, neon accents, geometric precision, and futuristic minimalism.

## Core Design Principles
- **Tech-Forward Minimalism**: Clean layouts with strategic neon highlights
- **Grid-Based Precision**: Everything aligns to a strict geometric grid
- **Dark Foundation**: Deep backgrounds with bright accent points
- **Subtle Sci-Fi**: Geometric patterns and glowing elements without overwhelming
- **Content First**: Tech aesthetic enhances, never obscures content

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - body text, descriptions (400, 500, 600)
- Display: 'Space Grotesk' - headings, names, titles (500, 700)
- Mono: 'JetBrains Mono' - dates, tags, metadata (400, 500)

**Hierarchy**:
- Hero Name: text-6xl/text-7xl, Space Grotesk Bold
- Section Headers: text-3xl/text-4xl, Space Grotesk Medium
- Subsections: text-xl/text-2xl, Inter Semibold
- Body: text-base/text-lg, Inter Regular
- Metadata: text-sm, JetBrains Mono Regular

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Inner margins: m-4 to m-6

**Container Strategy**:
- Max width: max-w-7xl centered
- Side padding: px-6 on mobile, px-8 on desktop
- Content sections: max-w-6xl for standard content

## Page Structure & Components

### 1. Hero/Landing Section
- Full viewport height introduction (min-h-screen)
- Centered name with glowing text effect treatment
- Animated geometric background pattern (subtle grid lines)
- Brief tagline/bio (max 2 lines)
- Floating navigation dots indicating sections below
- **Hero Image**: Large abstract tech/geometric background image with overlay gradient

### 2. Photo Gallery ("照片牆")
- Masonry grid layout: 2 columns mobile, 3-4 columns desktop
- Cards with subtle border glow on hover
- Image aspect ratios: maintain original, with object-cover
- Lightbox interaction for full-size viewing
- Filter tags with pill-style design
- Date stamps in monospace font

### 3. Diary Section ("⽇記")
- Timeline-style vertical layout with connecting lines
- Entry cards: date header + preview text + read more link
- Glassmorphism card effect (semi-transparent with backdrop blur)
- Chronological ordering with clear date separators
- Individual diary view: full-width prose with comfortable reading width (max-w-3xl)

### 4. Portfolio/Work Showcase ("作品分享")
- Grid layout: 1 col mobile, 2 cols tablet, 3 cols desktop
- Project cards with thumbnail, title, tech tags
- Hover reveals description overlay
- Click opens detailed project view modal or dedicated page
- Tech stack badges with subtle neon borders

### 5. Guestbook ("留言板")
- Message feed with alternating alignment for visual variety
- Input form: floating label design, glowing focus states
- Messages display: username, timestamp, message content
- Subtle card backgrounds distinguishing each message
- Character counter for message input

### 6. Navigation
- Sticky top navigation bar with glassmorphism effect
- Logo/Name on left, nav links center/right
- Underline indicator for active section
- Mobile: Hamburger menu with slide-in panel
- Smooth scroll to sections

### 7. Footer
- Full-width with geometric separator line
- Social links with icon hover glow effects
- Copyright with monospace styling
- Minimal, single-row layout

## Component Library

**Cards**: 
- Background: Semi-transparent dark (bg-gray-900/50)
- Border: 1px subtle glow (border-cyan-500/20)
- Radius: rounded-xl
- Hover: border brightens, subtle scale transform

**Buttons**:
- Primary: Solid with gradient background, text white
- Secondary: Outlined with neon border glow
- Text size: text-sm to text-base
- Padding: px-6 py-3
- When on images: backdrop-blur-md background

**Forms**:
- Inputs: Dark background, neon border on focus
- Labels: Floating label pattern
- Validation: Glow red/green borders

**Tags/Badges**:
- Pill shape (rounded-full)
- Small text (text-xs)
- Semi-transparent backgrounds with border

## Images Strategy

**Locations**:
- Hero: Large abstract tech/circuit board pattern background (full section)
- Photo Gallery: User's actual life photos (grid display)
- Portfolio: Project thumbnails/screenshots
- Profile: Optional small circular avatar in navigation

**Treatment**:
- Overlays: Dark gradient overlays for text readability on hero
- Borders: Subtle glow borders on hover
- Loading: Skeleton screens with shimmer effect

## Animations
Use very sparingly:
- Page load: Subtle fade-in for hero content
- Scroll: Gentle parallax on hero background only
- Hover: Border glow intensifies, slight scale (1.02)
- Transitions: 200-300ms ease-in-out

## Accessibility
- Maintain WCAG AA contrast ratios (bright text on dark)
- Focus indicators: Visible neon outline
- Keyboard navigation: Full support
- Alt text: All images descriptive
- ARIA labels: Interactive elements properly labeled

**Critical**: All form inputs follow consistent focus/active states with glowing borders throughout the application.