# SEO Pages Visual QA Checklist

## 🎯 Critical Pre-Launch Visual Checks

This checklist ensures all SEO pages maintain professional visual standards and homepage design consistency.

### ✅ Lead Magnet Layout

**Single Lead Magnet Pages (Most SEO Pages):**
- [ ] Lead magnet card is **centered** on the page
- [ ] Uses `max-w-md mx-auto` for proper centering
- [ ] Card width is appropriate for single-column display
- [ ] Mobile responsive centering works correctly

**Multiple Lead Magnet Pages (Homepage):**
- [ ] Uses `lg:grid-cols-3` for 3-column layout
- [ ] Maintains grid spacing consistency

### ✅ Section Spacing Optimization

**CRITICAL: isCompact Props (REQUIRED for all SEO pages):**
- [ ] **HeaderSectionRU**: Must use `isCompact={true}` to reduce mobile pb-20 → pb-8
- [ ] **ClientResultsSection**: Must use `isCompact={true}` to reduce py-20 → py-8  
- [ ] **LeadMagnetsSection**: Must use `isCompact={true}` to reduce py-24 → py-8
- [ ] **Benefits section**: Uses `mt-8 md:mt-12` instead of `mt-20`

**Mobile Header Spacing (iPhone Test Required):**
- [ ] **Header-to-content gap**: Maximum 64px on mobile devices
- [ ] **Before fix**: pb-20 (80px) + mt-20 (80px) = 160px total
- [ ] **After fix**: pb-8 (32px) + mt-8 (32px) = 64px total
- [ ] **Large iPhone test**: Verify reduced spacing visually

**Key Section Flow (Benefits → ClientResults → LeadMagnets → MainContent):**
- [ ] **Total whitespace**: Between sections should not exceed 120px
- [ ] **Section internal padding**: Reduced from py-20/py-24 to py-8 on SEO pages
- [ ] **Section margins**: Use mt-8 md:mt-12 between sections
- [ ] No excessive whitespace between conversion-critical sections
- [ ] Visual flow feels natural and professional

### ✅ Template Consistency

**Homepage Component Reuse:**
- [ ] All sections use **exact** homepage styling patterns
- [ ] Typography matches homepage (`text-[46.3px]`, `text-[19.4px]`, etc.)
- [ ] Colors match homepage (`#4f5bff`, `#111111`, `#666666`)
- [ ] Border radius and spacing identical to homepage
- [ ] No custom styling that breaks design system

### ✅ Responsive Design

**Mobile Layout Validation:**
- [ ] Lead magnet centers properly on mobile
- [ ] Section spacing scales appropriately
- [ ] Text remains readable on small screens
- [ ] No horizontal scrolling issues
- [ ] Touch targets are appropriately sized

**Desktop Layout Validation:**
- [ ] Sections maintain max-width constraints
- [ ] Content doesn't stretch too wide on large screens
- [ ] Proper margin/padding on container elements

### ✅ Animation & Interaction

**Staggered Animations:**
- [ ] Sections animate in proper sequence (Benefits → ClientResults → LeadMagnets → MainContent)
- [ ] Animation delays feel natural (150ms, 200ms, 250ms, 300ms)
- [ ] No animation glitches or jumps
- [ ] Smooth transitions on hover states

**Interactive Elements:**
- [ ] Lead magnet buttons work correctly
- [ ] Consultation popup triggers properly
- [ ] Form interactions function smoothly
- [ ] No console errors during interactions

### ✅ Content-Specific Checks

**Service-Specific Benefits:**
- [ ] ManufacturingAIBenefits displays correctly for manufacturing pages
- [ ] DocumentAutomationBenefits displays correctly for document pages
- [ ] Generic BenefitsSection fallback works for other services

**Lead Magnet Customization:**
- [ ] Manufacturing pages show "65-page manufacturing AI playbook"
- [ ] Document automation pages show "50-page document automation guide"
- [ ] Icons and descriptions match service type

## 🛠️ Quick Validation Commands

```bash
# Build and test
npm run build
npm run dev

# Test specific SEO page
curl -I http://localhost:8080/seo/[page-url]

# Check in browser (key URLs)
http://localhost:8080/seo/document-automation-moscow
http://localhost:8080/seo/ai-implementation-manufacturing-moscow
```

## 🚨 Common Issues to Avoid

### Lead Magnet Problems:
- ❌ Lead magnet stuck to left side instead of centered
- ❌ Multiple grid columns for single magnet
- ❌ Inconsistent card sizing

### Spacing Problems:
- ❌ Excessive whitespace (mt-20, mt-24) between sections
- ❌ Missing isCompact={true} props on SEO pages
- ❌ Large mobile header gaps (>64px header-to-content)
- ❌ Section internal padding not reduced (py-20/py-24 instead of py-8)
- ❌ Inconsistent spacing across different pages
- ❌ Poor mobile spacing adaptation

### Template Violations:
- ❌ Custom colors breaking homepage consistency
- ❌ Different typography from homepage
- ❌ Modified component styling

## 📋 Final Sign-Off

Before marking any SEO page as COMPLETED in the CSV tracker:

- [ ] All visual QA checks passed
- [ ] Mobile and desktop layouts validated
- [ ] Page loads without errors (200 status)
- [ ] No console errors or warnings
- [ ] Content is service-specific and accurate
- [ ] Lead generation flow works end-to-end

---

*Use this checklist for every SEO page before launch to maintain professional quality standards.*