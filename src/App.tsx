import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ProductDesignAgency } from "./pages/ProductDesignAgency";
import DocumentIntelligence from "./pages/services/DocumentIntelligence";
import ComputerVision from "./pages/services/ComputerVision";
import NLPandLLM from "./pages/services/NLPandLLM";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import CustomAISolutions from "./pages/services/CustomAISolutions";
import Legal from "./pages/industries/Legal";
import Healthcare from "./pages/industries/Healthcare";
import Manufacturing from "./pages/industries/Manufacturing";
import Finance from "./pages/industries/Finance";
import DocumentProcessing from "./pages/use-cases/DocumentProcessing";
import ContractAnalysis from "./pages/use-cases/ContractAnalysis";
import QualityControl from "./pages/use-cases/QualityControl";
import CustomerSupportAutomation from "./pages/use-cases/CustomerSupportAutomation";
import ContentModeration from "./pages/use-cases/ContentModeration";
import PredictiveMaintenance from "./pages/use-cases/PredictiveMaintenance";
import FraudDetection from "./pages/use-cases/FraudDetection";
import About from "./pages/About";
import AboutNew from "./pages/AboutNew";
import Contact from "./pages/Contact";
import AISavingsCalculator from "./pages/AISavingsCalculator";
import AIAutomationSprints from "./pages/AIAutomationSprints";
import AIAutomationSprintsRU from "./pages/AIAutomationSprintsRU";
import ModernHomepage from "./pages/ModernHomepage";
import ModernHomepageAgency from "./pages/ModernHomepageAgency";
import { AIAutomationRussiaAgency } from "./pages/AIAutomationRussiaAgency";
import PricingComparisonPage from "./pages/PricingComparisonPage";
import TestPage from "./pages/TestPage";

// New service pages
import AIAuditProcesses from "./pages/services/AIAuditProcesses";
import DocumentAutomation from "./pages/services/DocumentAutomation";
import DocumentAutomationNew from "./pages/services/DocumentAutomationNew";

// SEO pages (existing)
import AIConsultingMoscow from "./pages/seo/AIConsultingMoscow";
import BusinessProcessAutomation from "./pages/seo/BusinessProcessAutomation";
import ChatBotsForBusiness from "./pages/seo/ChatBotsForBusiness";
import АвтоматизацияДокументооборотаPage from "./pages/seo/АвтоматизацияДокументооборотаPage";

// New SEO pages using homepage foundation
import DocumentAutomationMoscow from "./pages/seo/DocumentAutomationMoscow";
import AIImplementationManufacturingMoscow from "./pages/seo/AIImplementationManufacturingMoscow";
import BusinessChatbotsMoscow from "./pages/seo/BusinessChatbotsMoscow";
import AIBusinessProcessAuditMoscow from "./pages/seo/AIBusinessProcessAuditMoscow";
import HRProcessAutomationMoscow from "./pages/seo/HRProcessAutomationMoscow";
import BankingAIMoscow from "./pages/seo/BankingAIMoscow";
import HealthcareAutomationMoscow from "./pages/seo/HealthcareAutomationMoscow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<ProductDesignAgency />} />
          <Route path="/agency" element={<ModernHomepageAgency />} />
          <Route path="/modern" element={<ModernHomepage />} />
          <Route path="/old" element={<AIAutomationSprintsRU />} />
          <Route path="/index" element={<Index />} />
          <Route path="/services/document-intelligence" element={<DocumentIntelligence />} />
          <Route path="/services/computer-vision" element={<ComputerVision />} />
          <Route path="/services/nlp-llm" element={<NLPandLLM />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/use-cases/document-processing" element={<DocumentProcessing />} />
          <Route path="/use-cases/contract-analysis" element={<ContractAnalysis />} />
          <Route path="/use-cases/quality-control" element={<QualityControl />} />
          <Route path="/use-cases/customer-support" element={<CustomerSupportAutomation />} />
          <Route path="/use-cases/content-moderation" element={<ContentModeration />} />
          <Route path="/use-cases/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/use-cases/fraud-detection" element={<FraudDetection />} />
          <Route path="/about" element={<AboutNew />} />
          <Route path="/about-old" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-savings-calculator" element={<AISavingsCalculator />} />
          <Route path="/ai-automation-sprints" element={<AIAutomationSprints />} />
          <Route path="/ai-automation-sprints-ru" element={<AIAutomationSprintsRU />} />
          <Route path="/pricing" element={<PricingComparisonPage />} />
          <Route path="/test" element={<TestPage />} />
          
          {/* New service pages */}
          <Route path="/services/ai-audit-processes" element={<AIAuditProcesses />} />
          <Route path="/services/document-automation" element={<DocumentAutomation />} />
          <Route path="/services/document-automation-new" element={<DocumentAutomationNew />} />
          
          {/* SEO pages (existing) */}
          <Route path="/ii-konsalting-moskva" element={<AIConsultingMoscow />} />
          <Route path="/avtomatizaciya-biznes-processov" element={<BusinessProcessAutomation />} />
          <Route path="/chat-boty-dlya-biznesa" element={<ChatBotsForBusiness />} />
          <Route path="/avtomatizatsiya-dokumentooborota" element={<АвтоматизацияДокументооборотаPage />} />
          
          {/* New SEO pages using homepage foundation */}
          <Route path="/seo/document-automation-moscow" element={<DocumentAutomationMoscow />} />
          <Route path="/seo/ai-implementation-manufacturing-moscow" element={<AIImplementationManufacturingMoscow />} />
          <Route path="/seo/business-chatbots-moscow" element={<BusinessChatbotsMoscow />} />
          <Route path="/seo/audit-biznes-protsessov-ii-moskva" element={<AIBusinessProcessAuditMoscow />} />
          <Route path="/seo/avtomatizatsiya-hr-protsessov-moskva" element={<HRProcessAutomationMoscow />} />
          <Route path="/seo/ii-dlya-finansovyh-organizatsiy-moskva" element={<BankingAIMoscow />} />
          <Route path="/seo/avtomatizatsiya-v-zdravoohranenii-moskva" element={<HealthcareAutomationMoscow />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
