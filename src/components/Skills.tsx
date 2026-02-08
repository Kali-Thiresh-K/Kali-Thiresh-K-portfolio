import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Database,
  Terminal,
  Cpu,
  Globe,
  Zap,
  Layout,
  Server,
  Smartphone
} from "lucide-react";

interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  colorName: "primary" | "accent"; // Helper for logic
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code,
    colorName: "primary",
    description: "Core languages for logic and structure",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "TypeScript" }
    ]
  },
  {
    name: "Frontend",
    icon: Layout,
    colorName: "accent",
    description: "Crafting beautiful user interfaces",
    skills: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Vite" }
    ]
  },
  {
    name: "Backend & DB",
    icon: Database,
    colorName: "primary",
    description: "Robust server-side architecture",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Oracle APEX" }
    ]
  },
  {
    name: "Tools & DevOps",
    icon: Terminal,
    colorName: "accent",
    description: "Workflow and deployment efficiency",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" }
    ]
  },
  {
    name: "Creative & Design",
    icon: Palette,
    colorName: "primary",
    description: "Visual assets and prototyping",
    skills: [
      { name: "Blender" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "Figma" }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive stack of modern technologies I leverage to build
            scalable, high-performance, and beautiful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            // Determine text color class based on the category color prop
            const textColorClass = category.colorName === "primary" ? "text-primary" : "text-accent";
            const bgGlowClass = category.colorName === "primary" ? "bg-primary/10" : "bg-accent/10";

            return (
              <div
                key={index}
                className="group glass-card p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${bgGlowClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <category.icon className={`w-6 h-6 ${textColorClass}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-glass-border bg-white/5 hover:bg-white/10 transition-colors py-1 px-3 text-sm font-normal"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Highlight Card for Soft Skills / Summary */}
          <div className="glass-card p-8 flex flex-col justify-center items-center text-center border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 animate-bounce">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Always Learning</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Constantly exploring new frameworks and tools to stay ahead of the curve.
            </p>
            <div className="flex gap-2 justify-center">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Server className="w-4 h-4 text-muted-foreground" />
              <Cpu className="w-4 h-4 text-muted-foreground" />
              <Smartphone className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};