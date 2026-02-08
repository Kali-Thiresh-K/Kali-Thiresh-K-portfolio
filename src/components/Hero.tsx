import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Menu } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full blur-xl float-delayed" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary-glow/5 rounded-full blur-2xl float" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Single Centered Profile Image */}
          <div className="relative flex justify-center mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              {/* Enhanced gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-xl opacity-30 animate-pulse-glow" />

              {/* Main profile image */}
              <img
                src="/profile/profile12.jpg"
                alt="Kali Thiresh K Profile"
                className="relative w-full h-full rounded-full object-cover glass border-4 border-primary/20 hover:scale-105 transition-all duration-300 shadow-2xl"
              />

              {/* Waving Hand positioned on the profile */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-lg">👋</span>
              </div>
            </div>
          </div>

          {/* Main text */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">KALI THIRESH K</span>
          </h1>

          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Driven Computer Science Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about learning and creating innovative solutions.
              Turning ideas into reality through code and continuous growth in
              technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            {/* Only Download Resume in center */}
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-glass-border hover:bg-glass px-8 py-6 text-lg interactive"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16">
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" }, // replace with your GitHub
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/kalithiresh811/",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:yourmail@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
            className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-card w-12 h-12 flex items-center justify-center interactive animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
};