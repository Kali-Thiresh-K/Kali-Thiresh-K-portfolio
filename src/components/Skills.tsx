import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Zap,
  Users
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Java", level: 85, category: "programming" },
      { name: "Python", level: 80, category: "programming" },
      { name: "C", level: 75, category: "programming" },
      { name: "JavaScript", level: 85, category: "programming" }
    ]
  },
  {
    name: "Frontend Development",
    icon: Palette,
    color: "accent",
    skills: [
      { name: "React", level: 80, category: "frontend" },
      { name: "HTML", level: 90, category: "frontend" },
      { name: "CSS", level: 85, category: "frontend" },
      { name: "JavaScript", level: 85, category: "frontend" }
    ]
  },
  {
    name: "Database Management",
    icon: Database,
    color: "primary",
    skills: [
      { name: "MySQL", level: 80, category: "database" },
      { name: "MongoDB", level: 75, category: "database" }
    ]
  },
  {
    name: "Tools & Technologies",
    icon: Cloud,
    color: "accent",
    skills: [
      { name: "Git", level: 85, category: "tools" },
      { name: "GitHub", level: 85, category: "tools" },
      { name: "Blender", level: 70, category: "tools" },
      { name: "Adobe Suite", level: 75, category: "tools" }
    ]
  }
];

const tools = [
  "React", "JavaScript", "Python", "Java", "C", "HTML", "CSS", "MySQL", 
  "MongoDB", "Git", "GitHub", "Blender", "Adobe Illustrator", "Adobe Photoshop", 
  "Oracle APEX", "Vite", "Tailwind CSS", "TypeScript"
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(new Array(skillCategories[activeCategory].skills.length).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience, 
            continuous learning, and passion for crafting exceptional digital experiences.
          </p>
        </div>

        {/* Category navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setAnimatedSkills([]);
                }}
                className={`glass-card p-4 flex items-center gap-3 interactive transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-primary/20 border-primary/30 text-primary' 
                    : 'hover:bg-glass/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills display */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = skillCategories[activeCategory].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              <h3 className="text-2xl font-semibold">{skillCategories[activeCategory].name}</h3>
            </div>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={animatedSkills[index] ? skill.level : 0} 
                    className="h-2 bg-muted/30"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="glass-card border-glass-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 text-sm py-2 px-4 interactive"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Zap, title: "Performance", desc: "Optimized for speed" },
            { icon: Smartphone, title: "Responsive", desc: "Mobile-first approach" },
            { icon: Globe, title: "Accessible", desc: "WCAG compliant" },
            { icon: Users, title: "Collaborative", desc: "Team player" }
          ].map((item, index) => (
            <div key={index} className="glass-card text-center p-6 interactive">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};