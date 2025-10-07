#!/bin/bash

# Responsive Screenshot Generator
# This script regenerates responsive screenshots for testing website responsiveness

echo "🔍 Checking if development server is running..."
# Check if server is running on port 8081
if curl -s http://localhost:8081 >/dev/null; then
    echo "✅ Development server is running on port 8081"
else
    echo "❌ Development server is not running on port 8081"
    echo "Please start the development server with 'npm run dev' or 'node simple-server.js'"
    exit 1
fi

echo "📸 Generating responsive screenshots..."
cd /root/projects/ai-automation-ru-final

# Run the responsive screenshot script
node responsive-screenshots.js

if [ $? -eq 0 ]; then
    echo "✅ Responsive screenshots generated successfully!"
    echo "📁 Screenshots saved to: /root/projects/ai-automation-ru-final/responsive-screenshots"
    echo "📄 Analysis report: /root/projects/ai-automation-ru-final/RESPONSIVE_DESIGN_ANALYSIS.md"
    echo "📋 Summary: /root/projects/ai-automation-ru-final/RESPONSIVE_SCREENSHOTS_SUMMARY.md"
else
    echo "❌ Error generating responsive screenshots"
    exit 1
fi