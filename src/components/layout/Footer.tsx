import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { getContactEmail } from "@/lib/domain";

const Footer = () => {
  const services = [
    { name: "Process Automation", href: "/services/process-automation" },
    { name: "Document Intelligence", href: "/services/document-intelligence" },
    { name: "Computer Vision", href: "/services/computer-vision" },
    { name: "NLP & LLM Integration", href: "/services/nlp-llm" },
    { name: "Custom AI Solutions", href: "/services/custom-ai-solutions" },
  ];

  const industries = [
    { name: "Legal Firms", href: "/industries/legal" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Finance & Banking", href: "/industries/finance" },
  ];

  const useCases = [
    { name: "Document Processing", href: "/use-cases/document-processing" },
    { name: "Contract Analysis", href: "/use-cases/contract-analysis" },
    { name: "Quality Control", href: "/use-cases/quality-control" },
    { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
    { name: "Fraud Detection", href: "/use-cases/fraud-detection" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-accent"></div>
              <span className="text-xl font-bold text-primary">AI Automation Solutions</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming businesses with practical AI solutions that deliver measurable results. 
              From simple automation to complex AI systems - we find the right fit for your needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{getContactEmail()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+7 (xxx) xxx-xx-xx</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Moscow & Nizhny Novgorod, Russia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              {useCases.map((useCase) => (
                <li key={useCase.name}>
                  <Link
                    to={useCase.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {useCase.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 AI Automation Solutions. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;