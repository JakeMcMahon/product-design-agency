# AI Automation RU - Homepage Style Guide

Based on comprehensive analysis of actual homepage structure via Puppeteer screenshot and component analysis.

## 🎨 Color Palette & Layout Structure

### Page Structure Pattern
- **Main Wrapper**: `bg-white` (white background for entire page)
- **Hero Section Only**: `bg-[#111111]` (dark background only for hero/header)
- **All Other Sections**: White background with light content cards
- **Dark Cards**: `bg-[#1c1c1c]` (used in specific sections like pricing)

### Primary Colors
- **Page Background**: `bg-white` (main page wrapper)
- **Hero Background**: `bg-[#111111]` (only hero section)
- **Light Cards**: `bg-neutral-100` (stats and content cards)
- **Dark Cards**: `bg-[#1c1c1c]` (pricing section cards)
- **Accent Purple**: `bg-[#4f5bff]` (primary buttons, highlights)
- **Accent Purple Hover**: `bg-[#3d47cc]` (button hover states)

### Text Colors
**Hero Section (Dark Background):**
- **Primary Text**: `text-white` (headings, main content)
- **Secondary Text**: `text-white/80` (descriptions, secondary info)
- **Muted Text**: `text-white/60` (placeholders, very subtle text)
- **Neutral Text**: `text-neutral-100` (breadcrumbs, navigation)
- **Accent Text**: `text-[#4f5bff]` (highlights, special text)

**Light Sections (White Background):**
- **Primary Text**: `text-black` (headings on light cards)
- **Secondary Text**: `text-[#666666]` (descriptions on light backgrounds)
- **Dark Gray**: `text-[#3d3d3d]` (very subtle text elements)

### Interactive Elements
- **Button Backgrounds**: 
  - Primary: `bg-[#4f5bff]` hover: `bg-[#3d47cc]`
  - Secondary: `bg-[#ffffff14]` hover: `bg-[#ffffff20]`
  - Ghost: `bg-transparent` hover: `bg-[#ffffff1a]`
- **Navigation Hover**: `hover:bg-[#4f5bff]/20`
- **Border Colors**: `border-white/20` hover: `border-white/40`

### Card & Component Colors
- **Light Cards**: `bg-neutral-100` (stats cards on white sections)
- **Dark Cards**: `bg-[#1c1c1c]` (pricing section cards on white background)  
- **Gradient Backgrounds**: `bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20`
- **Border Accent**: `border-[#4f5bff]/30`

### Section Background Pattern
```tsx
// Main page wrapper (always white)
<div className="min-h-screen bg-white">
  
  // Hero section (dark background)
  <section className="relative w-full bg-[#111111] overflow-hidden min-h-screen">
    // Hero content with white text
  </section>
  
  // All other sections (white background)
  <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
    // Light content with light cards bg-neutral-100
  </section>
  
  // Special sections with dark cards (still on white background)
  <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
    <Card className="bg-[#1c1c1c]">
      // Dark card content with white text
    </Card>
  </section>
</div>
```

## 📝 Typography

### Font Family
- **Bold Text**: `[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold`
- **Regular Text**: `[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal`

### Text Sizes & Responsive Scaling
- **H1 (Hero)**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- **H2 (Section)**: `text-3xl sm:text-4xl md:text-4xl`
- **H3 (Cards)**: `text-2xl md:text-3xl font-bold`
- **Body Large**: `text-sm md:text-base lg:text-lg`
- **Body Regular**: `text-base md:text-lg`
- **Small Text**: `text-xs md:text-sm`
- **Stats Numbers**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`

### Typography Utilities
- **Tracking**: `tracking-[0]` (default), `tracking-[0.36px]`, `tracking-[0.18px]`, `tracking-[0.03px]`
- **Leading**: `leading-tight`, `leading-relaxed`, `leading-[13.5px]`, `leading-[18px]`

## 🏗️ Layout & Spacing

### Container Patterns
- **Section Container**: `max-w-7xl mx-auto` or `max-w-[1260px] mx-auto`
- **Content Wrapper**: `max-w-[1176px]`
- **Section Padding**: `py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8`
- **Header Padding**: `px-4 md:px-[90px] py-[29px]`

### Grid Systems
- **Stats Grid**: `grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6`
- **Cards Grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`

### Spacing Scale
- **Section Gaps**: `gap-6 md:gap-9`
- **Element Gaps**: `gap-4 md:gap-[10.8px]`
- **Margin Top**: `mt-8 md:mt-12`, `mt-20`

## 🔘 Component Patterns

### Button Styles
```tsx
// Primary Button
className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"

// Secondary Button
className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-transparent hover:bg-[#ffffff1a] rounded-[10.8px] border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal tracking-[0] leading-tight transition-all duration-200 text-center"

// Navigation Button
className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[14px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
```

### Card Styles
```tsx
// Light Stats Card
className="rounded-lg sm:rounded-xl bg-neutral-100 border-0"

// Dark Pricing Card
className="p-6 sm:p-8 pb-8 border rounded-xl bg-[#1c1c1c] border-white/10"

// Preview Card
className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30"
```

### Navigation Styles
```tsx
// Navigation Link
className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white/90 text-xs md:text-sm tracking-[0] leading-[13.5px] cursor-pointer hover:text-white hover:bg-[#4f5bff]/20 hover:shadow-[0_0_10px_rgba(79,91,255,0.3)] px-2 md:px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
```

## 📱 Mobile Responsiveness

### Breakpoint Strategy
- **Mobile**: Default classes (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px)
- **Large**: `lg:` (≥ 1024px)
- **Extra Large**: `xl:` (≥ 1280px)

### Mobile-First Patterns
- Start with mobile classes, then add responsive variants
- Use `block sm:hidden` and `hidden sm:block` for device-specific content
- Scale padding, margins, and font sizes progressively

### Responsive Text Scaling
```tsx
// Hero Text
<span className="block sm:hidden">Short mobile text</span>
<span className="hidden sm:block">Full desktop text</span>

// Button Text
<span className="block sm:hidden">Short</span>
<span className="hidden sm:block">Long descriptive text</span>
```

## ✨ Animation Patterns

### Fade-in Animation System
```tsx
className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
```

### Progressive Animation Delays
- Header elements: 0ms, 200ms
- Main content: 400ms, 600ms, 800ms, 1000ms
- Trust indicators: 1200ms
- Preview section: 1400ms

### Hover Effects
- Buttons: `hover:scale-105` with shadow effects
- Links: `transition-all duration-200 ease-in-out`
- Interactive elements: Color transitions with `transition-colors`

## 🔗 Links & Navigation

### Smooth Scrolling Implementation
```tsx
onClick={(e) => {
  if (item.href && item.href.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}}
```

### Navigation Structure
- Services: `#process`
- Cases: `#cases`
- Results: `#outcomes`
- Pricing: `#pricing`
- About: `#about`

## 🎯 Key Design Principles

1. **Dark Theme Consistency**: Always use `bg-[#111111]` as primary background
2. **Typography Hierarchy**: Neue Haas Grotesk with consistent weight usage
3. **Purple Accent**: `#4f5bff` for CTAs and highlights
4. **Mobile-First**: Design for mobile, enhance for desktop
5. **Progressive Enhancement**: Layer responsive classes logically
6. **Animation Consistency**: Use staggered fade-in animations
7. **White Space**: Generous padding and margins for breathing room
8. **Accessibility**: Maintain color contrast and readable text sizes

This style guide should be used as the foundation for all service pages and templates to ensure visual consistency with the homepage.