#!/usr/bin/env python3
"""
SEO Fact Checker for Programmatic Content
Adapted from Gainify Perplexity fact-checking methodology
"""

import os
import re
import json
import time
import csv
import sys
from datetime import datetime
from pathlib import Path
import requests

# Configuration
PERPLEXITY_API_KEY = os.getenv('PERPLEXITY_API_KEY', '')
PERPLEXITY_API_URL = "https://api.perplexity.ai/chat/completions"

class SEOFactChecker:
    def __init__(self, content_directory):
        self.content_dir = Path(content_directory)
        self.headers = {
            "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
            "Content-Type": "application/json"
        }
        self.results = []
        
    def extract_seo_claims(self, content):
        """Extract factual claims from SEO content"""
        claims = []
        
        # Common claim patterns in SEO content
        claim_patterns = [
            # Pricing and cost claims
            r'(?:стоимость|цена|стоит|от\s+\d+|до\s+\d+).*?(?:рубл|долл|евро)',
            r'(?:бесплатн|недорог|дешев|экономи).*?(?:решени|услуг|консультаци)',
            
            # Statistical claims
            r'\d+%.*?(?:эффективност|экономи|увеличени|снижени)',
            r'(?:повыша|увеличива|снижа|оптимизиру).*?\d+%',
            
            # Time and duration claims
            r'(?:за|в течени|через)\s+\d+.*?(?:день|недел|месяц|год)',
            r'\d+.*?(?:часов|дней|недель|месяцев).*?(?:внедрени|реализаци)',
            
            # Feature and capability claims  
            r'(?:поддержива|обеспечива|гарантиру).*?(?:безопасност|интеграци|совместимост)',
            r'(?:автоматизиру|оптимизиру|интегриру).*?(?:процесс|систем|данны)',
            
            # Market position claims
            r'(?:лидер|лучш|ведущ|топ).*?(?:на рынке|в отрасли|в России)',
            r'(?:опыт|работаем|специализиру).*?\d+.*?(?:год|лет)',
            
            # Technology claims
            r'(?:использу|применя|внедря).*?(?:ИИ|AI|машинн.*?обучени|нейронн)',
            r'(?:облачн|cloud|SaaS|API).*?(?:решени|технологи|сервис)'
        ]
        
        for pattern in claim_patterns:
            matches = re.finditer(pattern, content, re.IGNORECASE | re.UNICODE)
            for match in matches:
                claim_text = match.group(0).strip()
                if len(claim_text) > 10:  # Filter out very short matches
                    claims.append({
                        'text': claim_text,
                        'context': self._get_context(content, match.start(), match.end()),
                        'category': self._categorize_claim(claim_text),
                        'position': match.start()
                    })
        
        return claims
    
    def _get_context(self, content, start, end, context_length=100):
        """Get surrounding context for a claim"""
        context_start = max(0, start - context_length)
        context_end = min(len(content), end + context_length)
        return content[context_start:context_end].strip()
    
    def _categorize_claim(self, claim_text):
        """Categorize the type of claim"""
        claim_lower = claim_text.lower()
        
        if any(word in claim_lower for word in ['стоимост', 'цена', 'рубл', 'долл']):
            return 'pricing'
        elif any(word in claim_lower for word in ['%', 'процент', 'увеличен', 'снижен']):
            return 'statistics'
        elif any(word in claim_lower for word in ['день', 'недел', 'месяц', 'час']):
            return 'timeline'
        elif any(word in claim_lower for word in ['безопасност', 'защита', 'шифрован']):
            return 'security'
        elif any(word in claim_lower for word in ['лидер', 'лучш', 'топ', 'ведущ']):
            return 'market_position'
        elif any(word in claim_lower for word in ['ии', 'ai', 'машинн', 'нейронн']):
            return 'technology'
        else:
            return 'general'
    
    def create_fact_check_prompt(self, claim, context, category):
        """Create specialized fact-checking prompt for SEO claims"""
        
        if category == 'pricing':
            focus = "Verify current pricing information for AI automation and consulting services in Russia. Check if pricing claims are realistic and up-to-date."
        elif category == 'statistics':
            focus = "Verify statistical claims about AI automation effectiveness, ROI, and performance improvements. Ensure numbers are supported by authoritative sources."
        elif category == 'timeline':
            focus = "Verify realistic implementation timelines for AI automation projects. Check industry standards and typical project durations."
        elif category == 'security':
            focus = "Verify security and compliance claims, especially regarding Russian data protection laws and industry standards."
        elif category == 'market_position':
            focus = "Verify market position claims about AI automation companies and services in Russia. Check for supporting evidence."
        elif category == 'technology':
            focus = "Verify technical capabilities and AI technology claims. Ensure accuracy of technical terminology and capabilities."
        else:
            focus = "Verify the factual accuracy of this business claim about AI automation services."
        
        prompt = f"""
You are a fact-checking expert specializing in AI automation and business technology services in Russia. Please fact-check the following claim:

CLAIM TO VERIFY: "{claim}"

CONTEXT: {context}

CLAIM CATEGORY: {category}

FOCUS AREA: {focus}

Please provide a thorough fact-check with this structure:

1. REASONING: Explain your research process and sources consulted
2. FINAL RESULT: State if the claim is CORRECT, INCORRECT, PARTIALLY CORRECT, OUTDATED, or UNVERIFIABLE
3. NEW FACTS: Provide accurate, up-to-date information on this topic
4. CONFIDENCE LEVEL: Rate your confidence (HIGH/MEDIUM/LOW) and explain why
5. SOURCES: List specific URLs to authoritative sources

Focus on finding current, Russia-specific information where relevant. For technical claims, prioritize official documentation and industry standards. For business claims, prioritize recent market research and company information.

Be specific about exact numbers, dates, and details. If you find conflicting information, explain the discrepancies.
"""
        return prompt
    
    def call_perplexity_api(self, prompt, max_retries=3):
        """Make API call to Perplexity with retry logic"""
        for attempt in range(max_retries):
            try:
                payload = {
                    "model": "sonar-pro",
                    "messages": [
                        {
                            "role": "system",
                            "content": "You are a thorough fact-checking expert with access to current web information. Focus on Russian market specifics for business claims and provide authoritative technical information for AI/technology claims."
                        },
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    "temperature": 0.1,
                    "top_p": 0.1,
                    "max_tokens": 2048,
                    "stream": False
                }
                
                response = requests.post(PERPLEXITY_API_URL,
                                       json=payload,
                                       headers=self.headers,
                                       timeout=60)
                
                if response.status_code == 200:
                    return response.json()["choices"][0]["message"]["content"]
                elif response.status_code == 429:
                    wait_time = 2 ** attempt
                    print(f"Rate limit hit, waiting {wait_time} seconds...")
                    time.sleep(wait_time)
                    continue
                else:
                    print(f"API Error {response.status_code}: {response.text}")
                    return None
                    
            except Exception as e:
                print(f"Attempt {attempt + 1} failed: {str(e)}")
                if attempt < max_retries - 1:
                    time.sleep(2)
                    continue
                return None
        
        return None
    
    def parse_api_response(self, response_text):
        """Parse structured response from Perplexity"""
        try:
            sections = {
                "reasoning": "",
                "final_result": "",
                "new_facts": "",
                "confidence_level": "",
                "sources": ""
            }
            
            lines = response_text.split('\n')
            current_section = None
            
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                
                # Identify sections
                if "REASONING:" in line.upper() or "1. REASONING:" in line.upper():
                    current_section = "reasoning"
                    sections[current_section] += line.replace("REASONING:", "").replace("1. REASONING:", "").strip()
                elif "FINAL RESULT:" in line.upper() or "2. FINAL RESULT:" in line.upper():
                    current_section = "final_result"
                    sections[current_section] += line.replace("FINAL RESULT:", "").replace("2. FINAL RESULT:", "").strip()
                elif "NEW FACTS:" in line.upper() or "3. NEW FACTS:" in line.upper():
                    current_section = "new_facts"
                    sections[current_section] += line.replace("NEW FACTS:", "").replace("3. NEW FACTS:", "").strip()
                elif "CONFIDENCE LEVEL:" in line.upper() or "4. CONFIDENCE LEVEL:" in line.upper():
                    current_section = "confidence_level"
                    sections[current_section] += line.replace("CONFIDENCE LEVEL:", "").replace("4. CONFIDENCE LEVEL:", "").strip()
                elif "SOURCES:" in line.upper() or "5. SOURCES:" in line.upper():
                    current_section = "sources"
                    sections[current_section] += line.replace("SOURCES:", "").replace("5. SOURCES:", "").strip()
                elif current_section:
                    sections[current_section] += " " + line
            
            # Clean up sections
            for key in sections:
                sections[key] = sections[key].strip()
                if not sections[key]:
                    sections[key] = "No information provided"
            
            return sections
            
        except Exception as e:
            print(f"Error parsing response: {str(e)}")
            return {
                "reasoning": response_text[:500] + "..." if len(response_text) > 500 else response_text,
                "final_result": "PARSING_ERROR",
                "new_facts": "Error parsing response",
                "confidence_level": "LOW",
                "sources": "Error parsing response"
            }
    
    def check_seo_page(self, page_file):
        """Fact-check claims in a single SEO page"""
        try:
            print(f"\n=== Fact-checking: {page_file} ===")
            
            # Read the TypeScript component file
            with open(page_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract JSON data from the component
            # Look for pageData object
            import re
            page_data_match = re.search(r'const pageData = ({.*?});', content, re.DOTALL)
            if not page_data_match:
                print("❌ Could not extract pageData from component")
                return []
            
            # Extract text content from the page data
            page_data_text = page_data_match.group(1)
            
            # Extract claims from the content
            claims = self.extract_seo_claims(page_data_text)
            
            if not claims:
                print("✅ No factual claims found to verify")
                return []
            
            print(f"🔍 Found {len(claims)} claims to fact-check")
            
            page_results = []
            
            for i, claim in enumerate(claims, 1):
                print(f"\n--- Checking claim {i}/{len(claims)} ---")
                print(f"Claim: {claim['text'][:80]}...")
                print(f"Category: {claim['category']}")
                
                # Create fact-check prompt
                prompt = self.create_fact_check_prompt(
                    claim['text'],
                    claim['context'],
                    claim['category']
                )
                
                # Call API
                print("Calling Perplexity API...")
                response = self.call_perplexity_api(prompt)
                
                if response:
                    parsed = self.parse_api_response(response)
                    
                    result = {
                        'file': str(page_file),
                        'claim': claim['text'],
                        'context': claim['context'],
                        'category': claim['category'],
                        'position': claim['position'],
                        'api_reasoning': parsed['reasoning'],
                        'api_result': parsed['final_result'],
                        'api_facts': parsed['new_facts'],
                        'api_confidence': parsed['confidence_level'],
                        'api_sources': parsed['sources'],
                        'timestamp': datetime.now().isoformat()
                    }
                    
                    page_results.append(result)
                    print(f"✅ Result: {parsed['final_result']} (Confidence: {parsed['confidence_level']})")
                    
                else:
                    print("❌ API call failed")
                    result = {
                        'file': str(page_file),
                        'claim': claim['text'],
                        'context': claim['context'],
                        'category': claim['category'],
                        'position': claim['position'],
                        'api_reasoning': 'API call failed',
                        'api_result': 'API_ERROR',
                        'api_facts': 'Unable to verify',
                        'api_confidence': 'LOW',
                        'api_sources': 'N/A',
                        'timestamp': datetime.now().isoformat()
                    }
                    page_results.append(result)
                
                # Rate limiting
                time.sleep(2)
            
            return page_results
            
        except Exception as e:
            print(f"❌ Error processing {page_file}: {str(e)}")
            return []
    
    def check_all_seo_pages(self):
        """Fact-check all SEO pages in the directory"""
        seo_pages_dir = self.content_dir / "src" / "pages" / "seo"
        
        if not seo_pages_dir.exists():
            print("❌ SEO pages directory not found")
            return
        
        # Find all TypeScript component files
        page_files = list(seo_pages_dir.glob("*Page.tsx"))
        
        if not page_files:
            print("❌ No SEO page components found")
            return
        
        print(f"🚀 Starting fact-check for {len(page_files)} SEO pages")
        
        all_results = []
        
        for page_file in page_files:
            page_results = self.check_seo_page(page_file)
            all_results.extend(page_results)
        
        # Save results
        self.save_results(all_results)
        
        # Print summary
        self.print_summary(all_results)
    
    def save_results(self, results):
        """Save fact-check results to CSV and JSON"""
        if not results:
            print("No results to save")
            return
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Save as CSV
        csv_file = self.content_dir / f"seo_fact_check_results_{timestamp}.csv"
        
        fieldnames = [
            'file', 'claim', 'context', 'category', 'position',
            'api_reasoning', 'api_result', 'api_facts', 'api_confidence',
            'api_sources', 'timestamp'
        ]
        
        with open(csv_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(results)
        
        print(f"📊 CSV results saved to: {csv_file}")
        
        # Save as JSON
        json_file = self.content_dir / f"seo_fact_check_results_{timestamp}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        
        print(f"📄 JSON results saved to: {json_file}")
    
    def print_summary(self, results):
        """Print summary of fact-check results"""
        if not results:
            return
        
        print(f"\n=== FACT-CHECK SUMMARY ===")
        print(f"Total claims checked: {len(results)}")
        
        # Count by result type
        result_counts = {}
        confidence_counts = {}
        category_counts = {}
        
        for result in results:
            result_type = result['api_result']
            confidence = result['api_confidence']
            category = result['category']
            
            result_counts[result_type] = result_counts.get(result_type, 0) + 1
            confidence_counts[confidence] = confidence_counts.get(confidence, 0) + 1
            category_counts[category] = category_counts.get(category, 0) + 1
        
        print(f"\nResults by verification status:")
        for result_type, count in sorted(result_counts.items()):
            print(f"  {result_type}: {count}")
        
        print(f"\nResults by confidence level:")
        for confidence, count in sorted(confidence_counts.items()):
            print(f"  {confidence}: {count}")
        
        print(f"\nResults by claim category:")
        for category, count in sorted(category_counts.items()):
            print(f"  {category}: {count}")
        
        # Highlight issues
        issues = [r for r in results if r['api_result'] in ['INCORRECT', 'OUTDATED', 'UNVERIFIABLE']]
        if issues:
            print(f"\n⚠️  {len(issues)} claims need attention:")
            for issue in issues[:5]:  # Show first 5
                print(f"  - {issue['claim'][:60]}... [{issue['api_result']}]")
            if len(issues) > 5:
                print(f"  ... and {len(issues) - 5} more")

def main():
    """Main execution function"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Fact-check SEO pages using Perplexity API')
    parser.add_argument('content_dir', nargs='?', default='.', help='Path to content directory')
    parser.add_argument('--page', help='Check specific page file')
    parser.add_argument('--test', action='store_true', help='Test mode - check one claim only')
    
    args = parser.parse_args()
    
    if not PERPLEXITY_API_KEY or PERPLEXITY_API_KEY == 'your-api-key':
        print("❌ Please set PERPLEXITY_API_KEY environment variable")
        sys.exit(1)
    
    fact_checker = SEOFactChecker(args.content_dir)
    
    print(f"🚀 Starting SEO fact-check process...")
    print(f"📁 Content directory: {args.content_dir}")
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    if args.page:
        # Check specific page
        results = fact_checker.check_seo_page(Path(args.page))
        fact_checker.save_results(results)
        fact_checker.print_summary(results)
    else:
        # Check all pages
        fact_checker.check_all_seo_pages()

if __name__ == "__main__":
    main()