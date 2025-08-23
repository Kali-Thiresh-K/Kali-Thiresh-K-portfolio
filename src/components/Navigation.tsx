import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye } from "lucide-react";  // 👈 Eye icon for Resume

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className={`glass-card flex items-center justify-between p-4 transition-all duration-300 ${
            scrolled ? 'backdrop-blur-md' : ''
          }`}>
            {/* Logo */}
            <div className="text-xl font-bold gradient-text">
              KALI THIRESH K
            </div>

            {/* Desktop Navigation - now visible in white/purple */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-purple-500'   // active section = purple
                      : 'text-white'        // default = white
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Resume Button (Desktop) */}
            <div className="hidden md:block">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="glass border-glass-border">
                  <Eye className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass-card w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-2xl font-medium transition-colors hover:text-purple-400 ${
                activeSection === item.href.replace('#', '') 
                  ? 'text-purple-500' 
                  : 'text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
          {/* Resume button in mobile menu */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="glass border-glass-border mt-8">
              <Eye className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};