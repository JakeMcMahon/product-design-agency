# Section-by-Section Fix Implementation Plan

## 1. Header Section Fixes

### Critical Issues:
1. **Missing Hamburger Menu on Mobile**
   - **Problem**: No mobile navigation on small screens
   - **Fix**: Implement hamburger menu with mobile drawer
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/HeaderSection/HeaderSectionRU.tsx`
     - Create new: `/root/projects/ai-automation-ru-final/src/components/MobileNavigation.tsx`

### Major Issues:
1. **Hidden CTA Button on Tablet/Mobile**
   - **Problem**: "Начать" button is not visible on smaller screens
   - **Fix**: Reposition CTA button to be visible in mobile header
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/HeaderSection/HeaderSectionRU.tsx`

### Minor Issues:
1. **Truncated Logo on iPhone SE**
   - **Problem**: Logo is cut off on smallest screens
   - **Fix**: Add responsive padding/margin for small screens
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/HeaderSection/HeaderSectionRU.tsx`

## 2. Timeline Section Fixes

### Critical Issues:
1. **Z-Index Issue Obscuring Heading**
   - **Problem**: Main heading is hidden behind cards on all devices
   - **Fix**: Add proper z-index and positioning to heading element
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/TimelineSection/TimelineSection.tsx`

## 3. Stats/Benefits Section Fixes

### Major Issues:
1. **Line-Height Collapse on Mobile**
   - **Problem**: Text lines overlap making content unreadable
   - **Fix**: Add responsive line-height for mobile viewports
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/BenefitsSection/BenefitsSection.tsx`

## 4. Pricing Section Fixes

### Major Issues:
1. **Missing Section on Tablet/Mobile**
   - **Problem**: Entire section is not visible on smaller screens
   - **Fix**: Ensure section is rendered and visible on all devices
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/PricingSection/PricingSection.tsx`
     - `/root/projects/ai-automation-ru-final/src/pages/AIAutomationRussiaAgency.tsx`

## 5. Footer Section Fixes

### Major Issues:
1. **Layout Breaks on Mobile**
   - **Problem**: Footer elements stack incorrectly and look broken
   - **Fix**: Implement responsive grid/flexbox for mobile layout
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/FooterSection/FooterSection.tsx`

2. **Overlapping Links on Desktop**
   - **Problem**: Navigation links overlap each other
   - **Fix**: Increase spacing between footer navigation elements
   - **Files**: 
     - `/root/projects/ai-automation-ru-final/src/screens/Desktop/sections/FooterSection/FooterSection.tsx`

## Implementation Order Recommendation

### Phase 1: Critical Issues (Blockers)
1. Header - Hamburger menu implementation
2. Timeline - Z-index fix for heading visibility

### Phase 2: Major Issues (Functionality)
1. Header - CTA button visibility
2. Pricing - Section visibility on all devices
3. Stats - Line-height fix for readability
4. Footer - Mobile layout fix
5. Footer - Desktop link spacing

### Phase 3: Minor Issues (Polish)
1. Header - Logo truncation fix