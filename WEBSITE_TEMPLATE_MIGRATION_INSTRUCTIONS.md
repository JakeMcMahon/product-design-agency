# AI Automation Website Template Migration Instructions

## Overview

This document provides comprehensive instructions for copying the AI automation website template to new projects. This template includes a complete React/TypeScript application with SEO programmatic page generation system, Russian market focus, and scalable component architecture.

**Template Project**: AI Automation RU Final  
**Stack**: React + TypeScript + Vite + Tailwind CSS + shadcn-ui  
**Features**: SEO programmatic pages, mobile-first responsive design, Russian localization

---

## PART 1: PROJECT ANALYSIS & PREPARATION

### 1.1 Understanding the Template Structure

Before copying, understand what you're working with:

**Core Application**: Modern React app with TypeScript, built on Vite
- **Frontend Framework**: React 18 with TypeScript
- **Build System**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn-ui component library
- **Architecture**: Component-based with programmatic SEO page generation

**Key Features to Preserve**:
- ✅ **SEO Programmatic System**: Template-based page generation for 17+ SEO pages
- ✅ **Mobile-First Responsive Design**: Complete responsive implementation
- ✅ **Service-Specific Components**: Industry-focused benefits, FAQs, lead magnets
- ✅ **Russian Localization**: Market-specific content and terminology
- ✅ **Lead Generation System**: PDF downloads and consultation booking
- ✅ **Component Library**: Reusable UI components with consistent design

### 1.2 Prerequisites Check

**Required Tools**:
- Node.js 16+ with npm
- Git for version control
- Code editor (VS Code recommended)
- Terminal/command line access

**Project Setup Requirements**:
- New empty repository or project folder
- Access to copy files from source project
- Understanding of React/TypeScript basics
- Knowledge of your target market/industry

---

## PART 2: FILE STRUCTURE & CORE FILES

### 2.1 Essential Directory Structure

Copy the entire directory structure to maintain proper organization:

```
your-new-project/
├── public/                          # Static assets
├── src/
│   ├── components/                  # Reusable UI components
│   ├── lib/                        # Utility functions
│   ├── pages/                      # Route components
│   │   ├── seo/                    # SEO programmatic pages
│   ├── screens/
│   │   └── Desktop/
│   │       └── sections/           # Page sections & components
│   ├── templates/                  # SEO page templates
│   ├── types/                      # TypeScript definitions
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # App entry point
│   └── index.css                   # Global styles
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
└── index.html                     # HTML template
```

### 2.2 Critical Files to Copy (REQUIRED)

**Configuration Files** (Copy exactly):
- `package.json` - All dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS setup with custom colors
- `vite.config.ts` - Vite build configuration
- `index.html` - HTML template with meta tags
- `postcss.config.js` - PostCSS configuration
- `components.json` - shadcn-ui configuration

**Core Application Files** (Copy exactly):
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Main app with routing (MODIFY routes for your project)
- `src/index.css` - Global styles and Tailwind imports
- `src/lib/utils.ts` - Utility functions (required by shadcn-ui)

### 2.3 Component Library Files (Copy All)

**UI Components** (`src/components/ui/`):
Copy entire directory - these are shadcn-ui components:
- `button.tsx`
- `card.tsx` 
- `input.tsx`
- `textarea.tsx`
- `dialog.tsx`
- `accordion.tsx`
- `tabs.tsx`
- All other UI component files

**Custom Components** (`src/components/`):
- Copy all custom components like navigation, mobile menu, etc.

### 2.4 Section Components (Copy and Customize)

**Location**: `src/screens/Desktop/sections/`

**Core Sections** (Copy all, customize content):
- `MainContentSection/` - Hero section
- `InfoSection/` - Information displays
- `BenefitsSection/` - Generic benefits
- `AboutSection/` - About company
- `FooterSection/` - Footer
- `ServiceFAQSection/` - FAQ system with service-specific content
- `LeadMagnetsSection/` - Lead generation system
- `SectionWrapper/` - Layout wrapper
- `MainWrapperSection/` - Main page wrapper
- `TimelineWrapperSection/` - Timeline components

**Service-Specific Benefits** (Copy pattern, create your own):
- `DocumentAutomationBenefits/` - Document automation benefits
- `ManufacturingAIBenefits/` - Manufacturing AI benefits  
- `ChatbotBenefits/` - Chatbot benefits
- `HRAutomationBenefits/` - HR automation benefits
- `ProcessAuditBenefits/` - Process audit benefits
- `BankingAIBenefits/` - Banking AI benefits
- `HealthcareAutomationBenefits/` - Healthcare automation benefits

### 2.5 SEO System Files (Copy and Modify)

**Templates** (`src/templates/`):
- `SEOProgrammaticTemplate.tsx` - Main SEO page template (CUSTOMIZE for your services)

**SEO Pages** (`src/pages/seo/`):
Copy existing pages as examples, but create new ones for your services:
- `DocumentAutomationMoscow.tsx`
- `AIManufacturingMoscow.tsx`  
- `BusinessChatbotsMoscow.tsx`
- `ProcessAuditMoscow.tsx`
- `HRAutomationMoscow.tsx`
- `BankingAIMoscow.tsx`
- `HealthcareAutomationMoscow.tsx`

**Type Definitions** (`src/types/`):
- Copy all TypeScript type definitions

---

## PART 3: STEP-BY-STEP COPYING PROCEDURE

### 3.1 Initial Setup

**Step 1: Create New Project Directory**
```bash
mkdir your-new-project-name
cd your-new-project-name
git init
```

**Step 2: Copy Configuration Files**
From the template project, copy these files to your new project root:
```bash
# Copy these files exactly (no modifications needed initially)
cp package.json your-new-project/
cp tsconfig.json your-new-project/
cp tailwind.config.ts your-new-project/
cp vite.config.ts your-new-project/
cp index.html your-new-project/
cp postcss.config.js your-new-project/
cp components.json your-new-project/
```

**Step 3: Install Dependencies**
```bash
cd your-new-project
npm install
```

### 3.2 Copy Core Application

**Step 4: Copy src Directory Structure**
```bash
# Create main directories
mkdir -p src/{components/ui,lib,pages/seo,screens/Desktop/sections,templates,types}

# Copy core files
cp -r src/lib/ your-new-project/src/
cp -r src/components/ your-new-project/src/
cp src/main.tsx your-new-project/src/
cp src/index.css your-new-project/src/
```

**Step 5: Copy and Modify App.tsx**
```bash
cp src/App.tsx your-new-project/src/App.tsx
```
**⚠️ IMPORTANT**: You'll need to modify the routes in App.tsx for your specific pages.

### 3.3 Copy Section Components

**Step 6: Copy All Section Components**
```bash
cp -r src/screens/Desktop/sections/ your-new-project/src/screens/Desktop/
```

**Step 7: Copy Templates and Types**
```bash
cp -r src/templates/ your-new-project/src/
cp -r src/types/ your-new-project/src/
```

### 3.4 Copy Public Assets

**Step 8: Copy Public Directory**
```bash
cp -r public/ your-new-project/
```

### 3.5 Test Initial Setup

**Step 9: Test Build**
```bash
cd your-new-project
npm run dev
```
The application should start without errors. If there are errors, check:
- All imports are correct
- All dependencies are installed
- File paths are correct

---

## PART 4: CUSTOMIZATION GUIDELINES

### 4.1 Content Customization

**Primary Areas to Customize**:

1. **Company Information**
   - Replace all instances of company name and branding
   - Update contact information in footer and contact sections
   - Modify about section content

2. **Service Offerings**
   - Replace AI automation services with your offerings
   - Update service-specific benefits components
   - Modify service descriptions and value propositions

3. **Market Focus**
   - Replace Russian market focus with your target market
   - Update pricing from rubles to your currency
   - Adapt regulatory compliance mentions
   - Modify industry terminology

### 4.2 SEO System Customization

**Create Your SEO Page Tracker**:
Create a CSV file like `SEO_PAGES_TRACKER.csv` with your target pages:
```csv
Page ID,Keyword,City,URL Slug,Priority,Status,Creation Date,Industry Focus
1,your-main-service,your-city,your-url-slug,1,PLANNED,,Your Industry
2,your-second-service,your-city,your-url-slug-2,1,PLANNED,,Your Industry
```

**Service-Specific Benefits Components**:
1. Copy existing benefit component structure
2. Create new components for your services
3. Update timeline phases for your industry
4. Replace metrics with your industry data

**Example: Creating New Service Benefits**
```typescript
// src/screens/Desktop/sections/YourServiceBenefits/YourServiceBenefits.tsx
import { Card, CardContent } from "@/components/ui/card";

export const YourServiceBenefits = () => {
  const benefitTimeline = [
    {
      phase: "Immediate Benefits",
      timeline: "Week 1", 
      number: "01",
      color: "bg-[#4f5bff]",
      benefits: [
        {
          title: "Your Service Process Audit",
          description: "Complete analysis of your current processes...",
          metric: "100% process clarity"
        }
      ]
    }
    // Add more phases...
  ];

  return (
    <div className="min-h-screen bg-white py-8 md:py-16">
      {/* Your implementation */}
    </div>
  );
};

export { YourServiceBenefits };
```

### 4.3 FAQ Customization

**Modify ServiceFAQSection.tsx**:
Add your service-specific FAQ content:

```typescript
// In ServiceFAQSection.tsx
if (service === "Your Service Name") {
  return [
    {
      id: "item-1", 
      number: "01",
      question: "Your industry-specific question?",
      answer: "Your detailed answer with industry expertise...",
      isExpanded: true,
    }
    // Add 5-6 more questions
  ];
}
```

### 4.4 Lead Magnet System

**Customize Lead Magnets**:
In `LeadMagnetsSection.tsx`, add your lead magnets:

```typescript
if (service === "Your Service Name") {
  return [{
    id: "your-service-guide",
    icon: "🔧", // Choose relevant emoji
    title: "Your Industry Guide",
    subtitle: "Comprehensive guide for your industry",
    value: "Value in your currency"
  }];
}
```

---

## PART 5: SEO SYSTEM SETUP

### 5.1 Understanding the SEO Architecture

**How It Works**:
1. **SEOProgrammaticTemplate.tsx**: Main template that renders different sections based on service
2. **Service-Specific Pages**: Individual pages in `src/pages/seo/`
3. **Dynamic Content**: FAQ, benefits, and lead magnets change based on service
4. **Routing**: App.tsx contains routes for all SEO pages

### 5.2 Creating New SEO Pages

**Step 1: Create SEO Page Data**
```typescript
// src/pages/seo/YourServiceCity.tsx
import { SEOProgrammaticTemplate } from "@/templates/SEOProgrammaticTemplate";
import type { SEOPageData } from "@/types/seo";

const YourServiceCity = () => {
  const seoData: SEOPageData = {
    service: "Your Service Name",
    location: "Your City",
    industry: "YourIndustry", 
    title: "Your SEO Title | Your Value Prop from $X",
    heroContent: {
      title: "Your Service with AI in Your City",
      subtitle: "Your compelling subtitle...",
      ctaText: "Your Action CTA",
      statLine: "Your stats • Your benefits • Your proof"
    },
    sections: {
      showClientResults: true,
      showBenefits: true,
      showLeadMagnets: true,
      showVSL: false,
      showPricing: false, 
      showFeatures: false,
      showAbout: false
    }
  };

  return <SEOProgrammaticTemplate {...seoData} />;
};

export default YourServiceCity;
```

**Step 2: Add Route in App.tsx**
```typescript
import YourServiceCity from "./pages/seo/YourServiceCity";

// In your routes:
<Route path="/seo/your-service-your-city" element={<YourServiceCity />} />
```

**Step 3: Update Template Routing**
In `SEOProgrammaticTemplate.tsx`, add your service:
```typescript
import { YourServiceBenefits } from "../screens/Desktop/sections/YourServiceBenefits/YourServiceBenefits";

// In the benefits section routing:
) : seoData.service === "Your Service Name" ? (
  <YourServiceBenefits />
) : (
  <BenefitsSection />
)}
```

### 5.3 Content Research Process

**Research Your Industry**:
1. Identify main competitors in your market
2. Research pricing models and value propositions  
3. Find industry-specific terminology and compliance requirements
4. Gather statistics and success metrics
5. Understand target audience pain points

**Create Industry-Specific Content**:
1. Benefits timelines with realistic metrics
2. FAQ addressing real industry concerns
3. Lead magnets with genuine value propositions
4. SEO titles with search volume potential

---

## PART 6: ESSENTIAL DOCUMENTATION FILES

### 6.1 Instruction Files to Copy and Modify

**Copy These Documentation Files**:
- `SEO_PAGE_CREATION_INSTRUCTIONS.md` - Modify for your industry
- `PROJECT_TASK_TRACKER.md` - Start fresh for your project
- `README.md` - Customize with your project information

**Template for Your README.md**:
```markdown
# Your Project Name

## Project info
**URL**: Your project URL
**Stack**: React + TypeScript + Vite + Tailwind CSS + shadcn-ui

## 🚀 Live Website Status
**Status**: ✅ **LIVE & DEPLOYED**
**URL**: Your live URL

## Features
- SEO Programmatic Page System
- Mobile-First Responsive Design
- Your Market Localization
- Service-Specific Components
- Lead Generation System

## SEO Page System
**Status**: X of Y pages completed
**Live Pages**:
- `/your-service-1` - Your Service 1 ✅
- `/your-service-2` - Your Service 2 ✅

## How to run locally
```bash
npm install
npm run dev
```
```

### 6.2 Project Management Files

**Create Your SEO Tracker**:
Modify `SEO_PAGES_TRACKER.csv` with your services and target cities.

**Track Your Progress**:
Update `PROJECT_TASK_TRACKER.md` to track your customization progress.

---

## PART 7: DEPLOYMENT & TESTING

### 7.1 Build Testing

**Test Build Process**:
```bash
npm run build
npm run preview
```

**Common Issues**:
- Import path errors: Check all file imports are correct
- TypeScript errors: Ensure all types are properly defined
- Build failures: Check for syntax errors in new content

### 7.2 Responsive Testing

**Test on Multiple Devices**:
- Mobile phones (320px+)
- Tablets (768px+)  
- Desktop (1024px+)
- Large screens (1440px+)

**Use Browser Dev Tools**:
- Chrome DevTools device simulation
- Firefox responsive design mode
- Safari Web Inspector

### 7.3 Content Testing

**Verify All Content**:
- All company references updated
- Contact information correct
- Pricing in correct currency
- Industry terminology appropriate
- Legal compliance mentions relevant

---

## PART 8: ADVANCED CUSTOMIZATION

### 8.1 Styling Customization

**Tailwind Configuration**:
Modify `tailwind.config.ts` to update:
- Brand colors
- Typography scales
- Spacing values  
- Custom animations

**Example Color Customization**:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Replace with your brand colors
        primary: {
          DEFAULT: "#your-primary-color",
          foreground: "#your-text-color",
        },
        // Add more custom colors
      },
    },
  },
}
```

### 8.2 Component Customization

**Button Styles**:
Modify button variants in `src/components/ui/button.tsx`

**Card Designs**:
Update card styles in `src/components/ui/card.tsx`

**Typography**:
Adjust font sizes and weights throughout components

### 8.3 SEO Optimization

**Meta Tags**:
Update `index.html` with your meta information:
```html
<title>Your Project Title</title>
<meta name="description" content="Your project description">
<meta property="og:title" content="Your OG title">
```

**Structured Data**:
Add JSON-LD structured data for your industry

**Performance**:
- Optimize images in public directory
- Consider lazy loading for large components
- Implement code splitting if needed

---

## PART 9: TROUBLESHOOTING

### 9.1 Common Issues

**Import Errors**:
```
Module not found: Can't resolve './YourComponent'
```
**Solution**: Check import paths and ensure files exist

**TypeScript Errors**:
```
Property 'yourProp' does not exist on type 'YourType'
```
**Solution**: Update type definitions in `src/types/`

**Build Failures**:
```
[vite]: Rollup failed to resolve import
```
**Solution**: Check all imports and dependencies

### 9.2 Development Tips

**Hot Reload Issues**:
- Restart dev server: `npm run dev`
- Clear cache: `rm -rf node_modules/.vite`

**Styling Problems**:
- Check Tailwind class names are correct
- Verify responsive breakpoints
- Use browser dev tools to debug styles

**Component Issues**:
- Check component exports
- Verify prop types match
- Test components in isolation

---

## PART 10: FINAL CHECKLIST

### 10.1 Pre-Launch Checklist

**Technical Verification**:
- [ ] All pages build without errors
- [ ] All routes work correctly
- [ ] Mobile responsive on all pages
- [ ] SEO meta tags updated
- [ ] Contact forms work (if applicable)
- [ ] All links are functional

**Content Verification**:
- [ ] All company information updated
- [ ] Services accurately described
- [ ] Pricing in correct currency
- [ ] Industry terminology correct
- [ ] Legal/compliance mentions relevant
- [ ] Contact information correct

**SEO System Verification**:
- [ ] All service-specific benefits created
- [ ] FAQ sections customized
- [ ] Lead magnets relevant to industry
- [ ] URL slugs optimized for SEO
- [ ] Page titles and descriptions unique

### 10.2 Launch Preparation

**Documentation**:
- [ ] README updated with your project info
- [ ] SEO tracker CSV created and updated
- [ ] Development instructions documented
- [ ] Deployment process documented

**Testing**:
- [ ] Cross-browser testing completed
- [ ] Mobile device testing completed
- [ ] Load time testing completed
- [ ] SEO audit completed

**Analytics Setup**:
- [ ] Google Analytics installed (if needed)
- [ ] Search Console verified (if needed)
- [ ] Conversion tracking setup (if needed)

---

## CONCLUSION

This template provides a complete foundation for creating industry-specific AI automation websites with:

✅ **Modern Tech Stack**: React + TypeScript + Tailwind CSS  
✅ **SEO System**: Programmatic page generation for multiple services  
✅ **Mobile-First**: Fully responsive design  
✅ **Scalable Architecture**: Easy to add new services and pages  
✅ **Lead Generation**: Built-in conversion optimization  
✅ **Industry Adaptation**: Easy customization for different markets  

**Success Factors**:
1. **Follow the copying procedure exactly** - Don't skip configuration files
2. **Test frequently** - Build and test after each major change  
3. **Customize systematically** - Update content, then styling, then functionality
4. **Maintain documentation** - Track your changes and decisions
5. **Test thoroughly** - Mobile, desktop, different browsers

**Support Resources**:
- React Documentation: https://react.dev/
- TypeScript Documentation: https://www.typescriptlang.org/docs/
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Vite Documentation: https://vitejs.dev/guide/

By following these instructions, you'll have a fully functional, customized website template that maintains all the powerful features of the original while being perfectly adapted to your industry and market.