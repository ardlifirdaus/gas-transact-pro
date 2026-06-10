````md
# GasTransact Pro — Landing Page Skills

## Project Overview

Build a modern SaaS landing page for GasTransact Pro, a web-based LPG transaction management system for distributors and multi-warehouse operations.

The landing page must feel:
- professional
- enterprise-ready
- operational
- trusted
- modern but not flashy

Target users:
- LPG distributors
- warehouse admins
- operational staff
- business owners

Avoid generic AI startup aesthetics.

---

# Main Goals

The landing page must communicate:

1. Multi warehouse management
2. Real-time margin reporting
3. LPG stock tracking
4. Google Sheets synchronization
5. Fast operational workflow
6. Real-world business usage

The design should make users think:

"This is a serious operational system ready for real business use."

---

# Tech Stack

Use:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- GSAP
- GSAP ScrollTrigger
- shadcn/ui
- Lucide React
- Recharts

Do NOT use:
- Bootstrap
- Material UI
- Framer Motion
- jQuery

---

# Design Style

## Visual Direction

Style:
- dark navy
- emerald accents
- industrial SaaS
- operational dashboard feel

Avoid:
- crypto style
- AI futuristic style
- excessive gradients
- excessive blur
- overuse of glassmorphism

---

# Color Palette

```ts
export const colors = {
  primary: "#10B981",
  primaryDark: "#059669",
  dark: "#081120",
  secondary: "#0F172A",
  accent: "#34D399",
  white: "#FFFFFF",
  muted: "#94A3B8",
  border: "#1E293B"
}
````

---

# Typography

Heading:

* Poppins

Body:

* Inter

Rules:

* bold headings
* clean readable body text
* spacious layout

---

# Layout Rules

Container:

```tsx
className="max-w-7xl mx-auto px-6 lg:px-8"
```

Section spacing:

```tsx
className="py-24"
```

---

# Landing Page Sections

The page must contain:

1. Navbar
2. Hero Section
3. Metrics Section
4. Features Section
5. Interactive LPG Section
6. Dashboard Showcase
7. Why Choose Us
8. CTA Section
9. Footer

---

# Hero Section

Hero must include:

* large headline
* subheadline
* CTA button
* dashboard preview
* floating analytics card
* subtle gradient background

Use actual dashboard screenshot as preview image.

---

# Main CTA

Use this exact CTA:

```html
<a href="https://gas-cylinder-transactions-624576306621.asia-southeast1.run.app"
   target="_blank"
   rel="noopener noreferrer"
   className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold transition-all shadow-md">
   Coba Demo Sistem Sekarang ->
</a>
```

---

# GSAP Rules

Use GSAP animations sparingly.

Animations must feel:

* smooth
* premium
* subtle
* lightweight

Avoid:

* excessive bouncing
* aggressive scaling
* distracting effects

---

# Hero Animation

```ts
gsap.from(".hero-title", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

gsap.from(".hero-image", {
  x: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
})
```

---

# ScrollTrigger Animation

Feature cards should animate on scroll.

```ts
gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".feature-grid",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
})
```

---

# Counter Animation

Animate metrics using GSAP textContent.

Examples:

* 100% Transaction Accuracy
* < 3 Seconds Input Time
* Real-time Sync
* Multi Warehouse

Do NOT use external counter libraries.

---

# Interactive LPG Section

Create a floating LPG cylinder illustration or SVG.

Hover effects:

* slight rotation
* subtle scaling
* floating motion
* emerald glow

Avoid cartoon-like behavior.

---

# Dashboard Showcase

Use the provided dashboard screenshot.

Add:

* browser frame
* floating cards
* glow effects
* chart highlights

The dashboard should feel:

* operational
* realtime
* trustworthy
* clean

---

# Component Structure

Use this structure:

```txt
/components
  layout/
    Navbar.tsx
    Footer.tsx

  sections/
    HeroSection.tsx
    MetricsSection.tsx
    FeaturesSection.tsx
    InteractiveCylinder.tsx
    DashboardShowcase.tsx
    WhyChooseUs.tsx
    CTASection.tsx

  ui/
    GradientButton.tsx
    SectionTitle.tsx
    FloatingCard.tsx
    MetricCard.tsx
```

---

# Coding Standards

Rules:

* reusable components
* typed props
* clean structure
* semantic HTML
* responsive design

Avoid:

* duplicated code
* random spacing
* inline styling

---

# Responsive Rules

Must support:

* mobile
* tablet
* desktop

Mobile behavior:

* stacked layout
* readable typography
* large CTA buttons
* resized dashboard preview

---

# Performance Rules

Optimize:

* lazy loading
* next/image
* lightweight animation
* proper GSAP cleanup

Use:

* gsap.context()
* cleanup on unmount

---

# SEO Rules

Include:

* meta title
* meta description
* Open Graph tags
* semantic headings

Meta title:
GasTransact Pro — Sistem Transaksi LPG Multi Gudang

---

# Copywriting Style

Writing style must be:

* direct
* business-oriented
* operational
* realistic

Avoid buzzwords:

* revolutionary
* next-generation
* AI-powered

Focus on:

* efficiency
* realtime monitoring
* operational workflow
* stock management
* reporting

---

# Final Principle

Prioritize:

* clarity
* usability
* trust
* readability

Reduce unnecessary decoration.

```
```
