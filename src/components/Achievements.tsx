import { Trophy, Sparkles, Presentation, Award, Cloud, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AwardItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  colorName: "primary" | "accent";
  tags: string[];
}

interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  description: string;
  icon: React.ElementType;
  colorName: "primary" | "accent";
  badgeText: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    title: "1st Prize – 24-Hour Hackathon",
    subtitle: "Kongu Engineering College",
    description: "Won 1st Prize at Kongu Engineering College for developing Health-o-Meter, an AI-powered health tracking platform that provides smart health insights and gamification.",
    icon: Trophy,
    colorName: "primary",
    tags: ["Health-o-Meter", "AI", "React"]
  },
  {
    id: 2,
    title: "1st Prize – AI Spotlight (Aventrix'25)",
    subtitle: "Generative AI Video",
    description: "Secured 1st Prize for creating an AI-generated advertisement video using generative AI tools and prompt engineering, showcasing creativity and AI-driven content creation.",
    icon: Sparkles,
    colorName: "accent",
    tags: ["Generative AI", "Aventrix'25", "Prompt Engineering"]
  },
  {
    id: 3,
    title: "Project Presentation – Medicnik 2K25",
    subtitle: "Karpagam Academy of Higher Education",
    description: "Presented the EV Charging Station Locator project at Medicnik 2K25, organized by Karpagam Academy of Higher Education, showcasing a web-based solution for locating nearby EV charging stations.",
    icon: Presentation,
    colorName: "primary",
    tags: ["EV Locator", "Leaflet Maps API", "Web App"]
  },
  {
    id: 4,
    title: "Participated – Thiran 2K26 24-Hour Hackathon",
    subtitle: "Sri Eshwar College of Engineering",
    description: "Participated in the Thiran 2K26 24-Hour Hackathon at Sri Eshwar College of Engineering, where our team developed Equal Miles, a delivery workload balancing solution that fairly distributes delivery distances among delivery personnel based on weekly travel patterns, promoting equitable workload allocation and operational efficiency.",
    icon: Award,
    colorName: "accent",
    tags: ["Equal Miles", "Logistics Tech", "Workload Balancing"]
  }
];

const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "Oracle APEX Cloud Developer (1Z0-771)",
    issuer: "Oracle",
    description: "Successfully completed Oracle's APEX Cloud Developer certification, demonstrating knowledge of low-code application development using Oracle APEX.",
    icon: Cloud,
    colorName: "primary",
    badgeText: "Credential ID: 1Z0-771"
  },
  {
    id: 2,
    title: "Oracle Java Foundations (1Z0-811)",
    issuer: "Oracle",
    description: "Earned Oracle Java Foundations certification, validating core Java programming concepts and object-oriented programming fundamentals.",
    icon: FileCode,
    colorName: "accent",
    badgeText: "Credential ID: 1Z0-811"
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🏆 Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Honors, hackathon wins, project presentations, and professional credentials validating my technical journey.
          </p>
        </div>

        {/* Subsection 1: Awards */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span>🏅</span> Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {awards.map((item) => {
              const textColorClass = item.colorName === "primary" ? "text-primary" : "text-accent";
              const bgGlowClass = item.colorName === "primary" ? "bg-primary/10" : "bg-accent/10";

              return (
                <div
                  key={item.id}
                  className="group glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${bgGlowClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className={`w-6 h-6 ${textColorClass}`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-glass-border bg-white/5 hover:bg-white/10 transition-colors py-1 px-3 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subsection 2: Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span>📜</span> Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert) => {
              const textColorClass = cert.colorName === "primary" ? "text-primary" : "text-accent";
              const bgGlowClass = cert.colorName === "primary" ? "bg-primary/10" : "bg-accent/10";

              return (
                <div
                  key={cert.id}
                  className="group glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${bgGlowClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <cert.icon className={`w-6 h-6 ${textColorClass}`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mt-1">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <Badge
                      variant="outline"
                      className="border-glass-border bg-glass/30 text-xs py-1 px-3"
                    >
                      {cert.badgeText}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
