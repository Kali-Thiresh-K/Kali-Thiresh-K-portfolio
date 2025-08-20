import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full blur-xl float-delayed" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary-glow/5 rounded-full blur-2xl float" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Images Gallery */}
          <div className="relative flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-lg opacity-30 animate-pulse-glow" />
              <img
                src="/lovable-uploads/5b85931d-55a3-4d35-ab83-3fb4c049927b.png"
                alt="Kali Thiresh K Profile"
                className="relative w-full h-full rounded-full object-cover glass border-2 border-primary/20 float"
              />
            </div>
            <div className="relative w-32 h-32 md:w-36 md:h-36">
              <img
                src="/lovable-uploads/5b85931d-55a3-4d35-ab83-3fb4c049927b.png"
                alt="Kali Thiresh K"
                className="w-full h-full rounded-full object-cover glass border-2 border-primary/10 float-delayed hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative w-32 h-32 md:w-36 md:h-36">
              <img
                src="/lovable-uploads/5b85931d-55a3-4d35-ab83-3fb4c049927b.png"
                alt="Kali Thiresh K Portrait"
                className="w-full h-full rounded-full object-cover glass border-2 border-primary/10 float hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
              <span className="text-sm">👋</span>
            </div>
          </div>

          {/* Main text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">KALI THIRESH K</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Driven Computer Science Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about learning and creating innovative solutions. 
              Turning ideas into reality through code and continuous growth in technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="glass-card bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg interactive">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-glass-border hover:bg-glass px-8 py-6 text-lg interactive">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="glass-card w-12 h-12 flex items-center justify-center interactive hover:text-primary"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-card w-12 h-12 flex items-center justify-center interactive animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};