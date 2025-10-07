# Website Setup Instructions

## Project Overview
This document provides instructions for setting up and running the ai-automation-ru-final website with the new UI components integrated from the product-analytics-agency project.

## Current Status
- Work has been completed on branch `update-ui-components`
- New UI components from product-analytics-agency have been integrated
- Test implementation has been created to verify component compatibility
- Comprehensive migration plan has been documented

## Files to Review
1. `IMPLEMENTATION_PLAN.md` - Detailed plan for migrating all pages to new components
2. `KEY_CHANGES.md` - Summary of work completed
3. `src/components/ui-agency/` - New component library from product-analytics-agency
4. `src/components/TestComponent.tsx` - Test implementation of new components
5. `src/pages/TestPage.tsx` - Test page to verify components work
6. `src/App.tsx` - Updated routing with test page at `/test`

## Setup Instructions

### 1. Environment Requirements
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### 2. Installation Steps
```bash
# Navigate to project directory
cd /root/projects/ai-automation-ru-final

# Install dependencies
npm install
```

### 3. Running the Development Server
```bash
# Start development server
npm run dev
```

The server will start on port 5173 by default.

### 4. Testing the New Components
- Access the test page at: http://localhost:5173/test
- This page demonstrates the new UI components working correctly

## Next Steps for Full Migration

### Component Migration
1. Follow the plan in `IMPLEMENTATION_PLAN.md`
2. Systematically update existing pages to use new agency components
3. Maintain all existing functionality while updating styling

### Key Directories to Update
- `src/pages/AIAutomationSprintsRU.tsx` (main page)
- `src/pages/services/` (5 service pages)
- `src/pages/industries/` (4 industry pages)
- `src/pages/use-cases/` (7 use case pages)
- `src/pages/` (other pages: About, Contact, etc.)

## Important Notes
- All existing functionality should be preserved
- New components are in `src/components/ui-agency/` to avoid conflicts
- Test page demonstrates that components work correctly
- Implementation plan provides detailed timeline and approach