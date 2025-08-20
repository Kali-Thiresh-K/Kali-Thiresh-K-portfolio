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
          {/* Avatar */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-lg opacity-30 animate-pulse-glow" />
            <img
              src={heroAvatar}
              alt="Professional avatar"
              className="relative w-full h-full rounded-full object-cover glass border-2 border-primary/20 float"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
              <span className="text-sm">👋</span>
            </div>
          </div>

          {/* Main text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Alex</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Creative Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft beautiful digital experiences that blend innovative design 
              with cutting-edge technology. Passionate about creating interfaces 
              that inspire and delight users.
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