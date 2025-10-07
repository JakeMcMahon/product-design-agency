import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  onConsultationClick?: () => void;
}

const Header = ({ onConsultationClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Process Automation", href: "/services/process-automation" },
    { name: "Document Intelligence (OCR)", href: "/services/document-intelligence" },
    { name: "Computer Vision", href: "/services/computer-vision" },
    { name: "NLP & LLM Integration", href: "/services/nlp-llm" },
    { name: "Video Analytics", href: "/services/video-analytics" },
    { name: "Custom AI Solutions", href: "/services/custom-ai-solutions" },
  ];

  const industries = [
    { name: "Legal Firms", href: "/industries/legal" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Finance & Banking", href: "/industries/finance" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "E-commerce", href: "/industries/ecommerce" },
    { name: "Logistics", href: "/industries/logistics" },
  ];

  const useCases = [
    { name: "Document Processing", href: "/use-cases/document-processing" },
    { name: "Contract Analysis", href: "/use-cases/contract-analysis" },
    { name: "Quality Control", href: "/use-cases/quality-control" },
    { name: "Customer Support Automation", href: "/use-cases/customer-support" },
    { name: "Content Moderation", href: "/use-cases/content-moderation" },
    { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
    { name: "Fraud Detection", href: "/use-cases/fraud-detection" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-accent"></div>
            <span className="text-xl font-bold text-primary">AI Automation Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-6 md:grid-cols-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{industry.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                    {useCases.map((useCase) => (
                      <Link
                        key={useCase.name}
                        to={useCase.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{useCase.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                Get Free AI Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-sm pl-4 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Industries</div>
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.href}
                    className="block text-sm pl-4 hover:text-primary transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/contact">
                <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
                  Get Free AI Audit
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;