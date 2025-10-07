#!/usr/bin/env node
/**
 * SEO Page Generator Script
 * Creates React components for programmatic SEO pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOPageGenerator {
  constructor() {
    this.templatesDir = path.join('src', 'templates');
    this.pagesDir = path.join('src', 'pages', 'seo');
    this.docsDir = path.join('docs', 'seo-research');
  }

  pascalCase(str) {
    return str
      .split(/[-_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  camelCase(str) {
    const pascal = this.pascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
  }

  slugify(text) {
    // Transliteration map for Russian characters
    const ruToEn = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z',
      'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
      'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };
    
    return text.toLowerCase()
      // Replace Russian characters with transliteration
      .replace(/[а-яё]/g, char => ruToEn[char] || char)
      // Remove non-alphanumeric characters except spaces and dashes
      .replace(/[^a-z0-9\s-]/g, '')
      // Replace spaces with dashes
      .replace(/\s+/g, '-')
      // Remove multiple consecutive dashes
      .replace(/-+/g, '-')
      // Trim dashes from start and end
      .replace(/^-+|-+$/g, '')
      .trim();
  }

  loadResearchData(keyword) {
    const slug = this.slugify(keyword);
    const researchFile = path.join(this.docsDir, slug, 'research-results.json');
    
    if (fs.existsSync(researchFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(researchFile, 'utf8'));
        console.log('📊 Loaded research data from:', researchFile);
        return data;
      } catch (error) {
        console.log('⚠️  Could not parse research data, using defaults');
      }
    } else {
      console.log('⚠️  No research data found, using defaults');
    }
    
    return null;
  }

  generatePageData(keyword, location = 'Москва', researchData = null) {
    const slug = this.slugify(keyword);
    const pascalName = this.pascalCase(keyword);
    
    // Helper function to get correct grammatical case
    const locationInCase = (location === 'Москва') ? 'Москве' : location;
    
    // Generate content based on research data or defaults
    const pageData = {
      // SEO metadata
      title: `${keyword} в ${locationInCase} | AI Automation Russia`,
      description: `Профессиональные услуги ${keyword.toLowerCase()} в ${locationInCase}. Комплексные решения автоматизации бизнес-процессов с использованием ИИ. Консультации и внедрение.`,
      canonical: `/${slug}`,
      
      // Page content
      hero: {
        title: `${keyword} в ${locationInCase}`,
        subtitle: `Профессиональные решения автоматизации для вашего бизнеса`,
        description: `Внедряем передовые технологии искусственного интеллекта для оптимизации бизнес-процессов. Полный цикл от консультации до реализации проекта.`,
        ctaText: 'Получить консультацию',
        ctaLink: '/contact'
      },
      
      // Service benefits
      benefits: [
        {
          title: 'Экспертиза в области ИИ',
          description: 'Команда специалистов с глубокими знаниями машинного обучения и автоматизации процессов',
          icon: '🧠'
        },
        {
          title: 'Индивидуальный подход',
          description: 'Разрабатываем решения с учетом специфики вашего бизнеса и отрасли',
          icon: '🎯'
        },
        {
          title: 'Полное сопровождение',
          description: 'От анализа процессов до внедрения и технической поддержки',
          icon: '🔧'
        },
        {
          title: 'Быстрая окупаемость',
          description: 'Решения, которые приносят измеримый результат в короткие сроки',
          icon: '📈'
        }
      ],
      
      // Process steps
      process: [
        {
          step: 1,
          title: 'Анализ текущих процессов',
          description: 'Комплексный аудит бизнес-процессов и выявление возможностей для автоматизации'
        },
        {
          step: 2,
          title: 'Разработка стратегии',
          description: 'Создание детального плана внедрения с учетом приоритетов и бюджета'
        },
        {
          step: 3,
          title: 'Реализация решения',
          description: 'Разработка и настройка AI-системы под ваши конкретные задачи'
        },
        {
          step: 4,
          title: 'Тестирование и запуск',
          description: 'Тщательное тестирование системы и плавный переход к новым процессам'
        },
        {
          step: 5,
          title: 'Поддержка и развитие',
          description: 'Постоянная техническая поддержка и развитие системы'
        }
      ],
      
      // FAQ section
      faq: [
        {
          question: `Какие преимущества даёт ${keyword.toLowerCase()}?`,
          answer: 'Автоматизация с использованием ИИ позволяет значительно повысить эффективность работы, снизить операционные расходы и минимизировать человеческие ошибки. Типичная экономия составляет 30-60% времени на рутинных задачах.'
        },
        {
          question: 'Сколько времени занимает внедрение?',
          answer: 'Сроки зависят от сложности проекта. Простые решения можно внедрить за 2-4 недели, комплексные системы требуют 2-6 месяцев. Мы предоставляем детальный план с конкретными сроками после анализа.'
        },
        {
          question: 'Требуется ли специальная подготовка сотрудников?',
          answer: 'Мы разрабатываем интуитивно понятные интерфейсы и проводим полное обучение команды. Включаем в проект программу адаптации персонала к новым процессам.'
        },
        {
          question: 'Как обеспечивается безопасность данных?',
          answer: 'Все решения соответствуют российским стандартам защиты информации. Используем проверенные протоколы шифрования и контроля доступа. Возможно развертывание на внутренней инфраструктуре.'
        },
        {
          question: 'Какова стоимость проекта?',
          answer: 'Стоимость зависит от масштаба и сложности задач. Базовые решения начинаются от 500,000 рублей. Предоставляем бесплатную консультацию и расчет ROI для вашего проекта.'
        }
      ],
      
      // Location-specific content
      locationContent: {
        city: location,
        cityPrepositional: location === 'Москва' ? 'Москве' : location,
        region: location === 'Москва' ? 'Москва и Московская область' : 'Россия',
        coverage: 'Работаем с клиентами по всей России',
        localBenefits: [
          `Личные встречи и консультации в ${location === 'Москва' ? 'Москве' : location}`,
          'Быстрое реагирование на запросы',
          'Знание специфики российского рынка',
          'Поддержка в соответствии с местным законодательством'
        ]
      }
    };

    // Enhance with research data if available
    if (researchData) {
      console.log('🔍 Enhancing page data with research insights...');
      
      // Add semantic keywords to content
      if (researchData.semantic_keywords) {
        pageData.semanticKeywords = researchData.semantic_keywords.slice(0, 10);
      }
      
      // Incorporate content gap topics into FAQ or benefits
      if (researchData.content_gaps) {
        const gapTopics = researchData.content_gaps.map(gap => gap.topic);
        console.log('📝 Content gaps to address:', gapTopics.join(', '));
      }
    }

    return pageData;
  }

  generateReactComponent(keyword, pageData) {
    const pascalName = this.pascalCase(keyword);
    const slug = this.slugify(keyword);
    
    const template = `import { SEOServiceTemplate } from "@/templates/SEOServiceTemplate";
import { Helmet } from "react-helmet-async";

const ${pascalName}Page = () => {
  const pageData = ${JSON.stringify(pageData, null, 4)};

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <link rel="canonical" href={\`\${window.location.origin}\${pageData.canonical}\`} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`\${window.location.origin}\${pageData.canonical}\`} />
        
        {/* Local business schema */}
        <script type="application/ld+json">
          {\`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "AI Automation Russia - ${keyword}",
            "description": "\${pageData.description}",
            "url": "\${window.location.origin}\${pageData.canonical}",
            "telephone": "+7 (XXX) XXX-XX-XX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${pageData.locationContent.city}",
              "addressRegion": "${pageData.locationContent.region}",
              "addressCountry": "RU"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Россия"
            },
            "serviceType": "${keyword}"
          }\`}
        </script>
      </Helmet>
      
      <SEOServiceTemplate {...pageData} />
    </>
  );
};

export default ${pascalName}Page;`;

    return template;
  }

  generateRouteEntry(keyword) {
    const pascalName = this.pascalCase(keyword);
    const slug = this.slugify(keyword);
    
    return {
      import: `import ${pascalName}Page from "./pages/seo/${pascalName}Page";`,
      route: `<Route path="/${slug}" element={<${pascalName}Page />} />`
    };
  }

  async createSEOPage(keyword, location = 'Moscow', options = {}) {
    console.log(`\n🚀 Generating SEO page for: "${keyword}"`);
    
    try {
      // Ensure directories exist
      if (!fs.existsSync(this.pagesDir)) {
        fs.mkdirSync(this.pagesDir, { recursive: true });
      }

      // Load research data if available
      const researchData = this.loadResearchData(keyword);
      
      // Generate page data
      const pageData = this.generatePageData(keyword, location, researchData);
      
      // Generate React component
      const componentCode = this.generateReactComponent(keyword, pageData);
      
      // Write component file
      const pascalName = this.pascalCase(keyword);
      const componentFile = path.join(this.pagesDir, `${pascalName}Page.tsx`);
      fs.writeFileSync(componentFile, componentCode);
      
      console.log(`✅ Component created: ${componentFile}`);
      
      // Generate route information
      const routeInfo = this.generateRouteEntry(keyword);
      console.log(`\n📋 Add to App.tsx imports:`);
      console.log(routeInfo.import);
      console.log(`\n📋 Add to App.tsx routes:`);
      console.log(routeInfo.route);
      
      // Save page metadata
      const metadataFile = path.join(this.pagesDir, `${pascalName}Page.json`);
      const metadata = {
        keyword,
        location,
        slug: this.slugify(keyword),
        component: `${pascalName}Page`,
        file: componentFile,
        created: new Date().toISOString(),
        researchDataUsed: !!researchData
      };
      fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
      
      console.log(`📄 Metadata saved: ${metadataFile}`);
      console.log(`\n🎉 SEO page generation completed!`);
      console.log(`🌐 Page will be available at: /${this.slugify(keyword)}`);
      
      return {
        success: true,
        componentFile,
        metadataFile,
        routeInfo,
        slug: this.slugify(keyword)
      };
      
    } catch (error) {
      console.error(`❌ Failed to generate SEO page: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async listSEOPages() {
    console.log('\n📋 Existing SEO Pages:');
    
    try {
      if (!fs.existsSync(this.pagesDir)) {
        console.log('No SEO pages directory found.');
        return [];
      }

      const files = fs.readdirSync(this.pagesDir);
      const pages = files
        .filter(file => file.endsWith('Page.json'))
        .map(file => {
          const metadata = JSON.parse(fs.readFileSync(path.join(this.pagesDir, file), 'utf8'));
          return metadata;
        });

      if (pages.length === 0) {
        console.log('No SEO pages found.');
        return [];
      }

      pages.forEach((page, i) => {
        console.log(`${i + 1}. ${page.keyword} (/${page.slug})`);
        console.log(`   Component: ${page.component}`);
        console.log(`   Created: ${new Date(page.created).toLocaleDateString()}`);
        console.log(`   Research data: ${page.researchDataUsed ? '✅' : '❌'}`);
        console.log('');
      });

      return pages;
      
    } catch (error) {
      console.error('❌ Error listing SEO pages:', error.message);
      return [];
    }
  }
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const generator = new SEOPageGenerator();
  
  if (command === 'create' || command === 'generate') {
    if (args.length < 2) {
      console.log(`
Использование: node generate-seo-page.js create "<ключевое слово>" [локация]

Примеры:
  node generate-seo-page.js create "ИИ консалтинг"
  node generate-seo-page.js create "автоматизация документооборота" "Москва"
  node generate-seo-page.js create "автоматизация бизнес-процессов" "Санкт-Петербург"
`);
      process.exit(1);
    }

    const keyword = args[1];
    const location = args[2] || 'Москва';
    
    generator.createSEOPage(keyword, location);
    
  } else if (command === 'list') {
    generator.listSEOPages();
    
  } else {
    console.log(`
Генератор SEO страниц

Команды:
  create "<ключевое слово>" [локация]  - Создать новую SEO страницу
  list                                 - Показать существующие SEO страницы

Примеры:
  node generate-seo-page.js create "ИИ консалтинг Москва"
  node generate-seo-page.js create "автоматизация документооборота"
  node generate-seo-page.js list
`);
  }
}

export default SEOPageGenerator;