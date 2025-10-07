#!/bin/bash

# Script to fix escape sequence issues in TypeScript files
echo \"Fixing escape sequence issues in TypeScript files...\"

# Navigate to project directory
cd /root/projects/product-design-agency-migration

# Find all .tsx files and fix double-escaped quotes
find src/ -name \"*.tsx\" -type f -exec sed -i 's/\\\"/\"/g' {} +
find src/ -name \"*.tsx\" -type f -exec sed -i \"s/\\'/'/g\" {} +

# Fix specific issues in SectionWrapper file
sed -i 's/\\n/\n/g' src/screens/Desktop/sections/SectionWrapper/SectionWrapper.tsx

# Fix specific issues in other problematic files
sed -i 's/\\n/\n/g' src/screens/Desktop/sections/ChatbotBenefits/ChatbotBenefits.tsx
sed -i 's/\\n/\n/g' src/pages/seo/DocumentAutomationMoscow.tsx
sed -i 's/\\n/\n/g' src/pages/seo/BusinessChatbotsMoscow.tsx

echo \"Escape sequence fixes applied. Restarting development server...\"

# Kill existing Vite processes
pkill -f vite 2>/dev/null

# Wait a moment
sleep 2

# Start development server
npx vite --host 0.0.0.0 --port 8080 &

echo \"Development server restarted. Site should be accessible at http://localhost:8080\"