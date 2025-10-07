# SEO Automation Guide
## Complete Workflow for Programmatic SEO Content Creation

### Quick Start Commands

```bash
# 1. Research a new keyword
node scripts/seo-research.js "AI consulting Moscow"

# 2. Generate SEO page from research
node scripts/generate-seo-page.js create "AI consulting Moscow"

# 3. Fact-check the generated content
python3 scripts/seo-fact-checker.py

# 4. List all SEO pages
node scripts/generate-seo-page.js list
```

## Complete Workflow Example

### Step 1: Research Phase
```bash
# Research your target keyword
node scripts/seo-research.js "автоматизация документооборота"

# This creates:
# - docs/seo-research/avtomatizaciya-dokumentooborota/research-results.json
# - docs/seo-research/avtomatizaciya-dokumentooborota/research-summary.md
```

**Manual Research Required:**
- Use generated search queries with Google/Yandex
- Analyze top 5 competitors with firecrawl_scrape
- Collect search volume data
- Document competitive advantages

### Step 2: Content Generation
```bash
# Generate the SEO page component
node scripts/generate-seo-page.js create "автоматизация документооборота" "Moscow"

# This creates:
# - src/pages/seo/AvtomatizaciyaDokumentooborotaPage.tsx
# - src/pages/seo/AvtomatizaciyaDokumentooborotaPage.json
```

**Manual Implementation Required:**
```typescript
// Add to src/App.tsx imports:
import AvtomatizaciyaDokumentooborotaPage from "./pages/seo/AvtomatizaciyaDokumentooborotaPage";

// Add to src/App.tsx routes:
<Route path="/avtomatizaciya-dokumentooborota" element={<AvtomatizaciyaDokumentooborotaPage />} />
```

### Step 3: Fact-Checking
```bash
# Check all SEO pages for factual accuracy
python3 scripts/seo-fact-checker.py

# Or check specific page:
python3 scripts/seo-fact-checker.py --page src/pages/seo/AvtomatizaciyaDokumentooborotaPage.tsx
```

**Output:**
- `seo_fact_check_results_YYYYMMDD_HHMMSS.csv`
- `seo_fact_check_results_YYYYMMDD_HHMMSS.json`

### Step 4: Quality Review & Deployment
1. **Review fact-check results**
2. **Update any incorrect claims**
3. **Test the page locally**
4. **Deploy to production**

## Advanced Usage

### Batch Processing Multiple Keywords
```bash
# Create a keyword list
keywords=(
  "AI consulting Moscow"
  "process automation Russia"
  "document automation services"
  "business process optimization"
  "intelligent document processing"
)

# Process each keyword
for keyword in "${keywords[@]}"; do
  echo "Processing: $keyword"
  node scripts/seo-research.js "$keyword"
  node scripts/generate-seo-page.js create "$keyword"
  sleep 2  # Rate limiting
done

# Fact-check all generated pages
python3 scripts/seo-fact-checker.py
```

### Custom Research Data Integration
```bash
# 1. Run research script
node scripts/seo-research.js "custom keyword"

# 2. Edit the generated research file:
# docs/seo-research/custom-keyword/research-results.json

# 3. Add your findings:
{
  "competitors": [
    {
      "url": "https://competitor1.com",
      "title": "Competitor Page Title",
      "headings": ["H1", "H2", "H3"],
      "word_count": 1500,
      "strengths": ["detailed pricing", "case studies"],
      "weaknesses": ["no local focus", "outdated examples"]
    }
  ],
  "content_gaps": [
    {
      "topic": "ROI calculations",
      "priority": "high",
      "sources": ["industry-report.pdf"],
      "implementation_notes": "Add ROI calculator widget"
    }
  ]
}

# 4. Regenerate page with enhanced data
node scripts/generate-seo-page.js create "custom keyword"
```

## Configuration Options

### Research Script Configuration
Edit `scripts/seo-research.js` to customize:

```javascript
// Modify search query generation
const searchQueries = [
  `${this.keyword} ${this.location}`,
  `${this.keyword} Russia`,
  `лучшие ${this.keyword} Moscow`,  // Add Russian variations
  `${this.keyword} цены Москва`     // Add pricing queries
];

// Customize content gaps
const potentialGaps = [
  'Implementation timelines',
  'ROI calculations',
  'Integration requirements',
  'Security compliance',
  'Your custom topics here'
];
```

### Page Generator Configuration
Edit `scripts/generate-seo-page.js` to customize:

```javascript
// Modify page structure
const pageData = {
  title: `${keyword} в ${location} | Your Brand`,
  description: `Custom description template...`,
  
  // Add custom sections
  benefits: [
    // Your custom benefits
  ],
  
  // Custom FAQ topics
  faq: [
    // Your industry-specific questions
  ]
};
```

### Fact-Checker Configuration
Edit `scripts/seo-fact-checker.py` to customize:

```python
# Add custom claim patterns
claim_patterns = [
    r'your custom regex patterns',
    r'industry-specific claims',
    r'company-specific assertions'
]

# Customize fact-check prompts by category
if category == 'your_category':
    focus = "Your specific fact-checking instructions"
```

## Quality Assurance Checklist

### Before Deployment
- [ ] Research completed and documented
- [ ] Competitor analysis included actual websites
- [ ] Page generated with proper routing
- [ ] All claims fact-checked with 95%+ accuracy
- [ ] Local Moscow/Russia context included
- [ ] Internal links to related services added
- [ ] Meta descriptions optimized (<160 chars)
- [ ] Mobile responsiveness verified
- [ ] Page loads in under 3 seconds

### Monthly Maintenance
- [ ] Re-run fact-checker on all pages
- [ ] Update pricing information
- [ ] Refresh competitor analysis
- [ ] Update service offerings
- [ ] Check for broken links
- [ ] Review search rankings

## Troubleshooting

### Common Issues

**"No research data found"**
```bash
# Check if research directory exists
ls -la docs/seo-research/

# Re-run research script
node scripts/seo-research.js "your keyword"
```

**"API call failed" in fact-checker**
```bash
# Check Perplexity API key
echo $PERPLEXITY_API_KEY

# Set if missing
export PERPLEXITY_API_KEY="your-key-here"
```

**"Could not extract pageData"**
- Ensure page component follows template structure
- Check JSON syntax in pageData object
- Verify proper TypeScript formatting

### Performance Optimization

**Speed up research:**
```bash
# Use parallel processing
node scripts/seo-research.js "keyword1" &
node scripts/seo-research.js "keyword2" &
node scripts/seo-research.js "keyword3" &
wait  # Wait for all to complete
```

**Batch fact-checking:**
```bash
# Process in smaller batches
python3 scripts/seo-fact-checker.py --page src/pages/seo/Page1.tsx
python3 scripts/seo-fact-checker.py --page src/pages/seo/Page2.tsx
```

## Integration with Existing Workflow

### Git Integration
```bash
# After generating new pages
git add .
git commit -m "Add SEO page: [keyword] with fact-checked content"
git push origin feature/seo-expansion
```

### CI/CD Integration
```yaml
# Add to your GitHub Actions
- name: Run SEO Fact Check
  run: |
    pip install requests
    python3 scripts/seo-fact-checker.py
    
- name: Upload Fact Check Results
  uses: actions/upload-artifact@v2
  with:
    name: seo-fact-check-results
    path: seo_fact_check_results_*.csv
```

### Analytics Integration
- Track page performance with Google Analytics
- Monitor keyword rankings
- Measure conversion rates from SEO pages
- A/B test different content variations

---

**Expected Results:**
- 2-3 hours per SEO page (vs 5-7 hours for blog)
- 95%+ factual accuracy
- Optimized for Russian market
- Scalable to 50+ pages per month