import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<any>;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "TechVision Studios",
    description: "Leading a team of developers in creating innovative web applications with modern technologies. Specialized in React, Node.js, and cloud architecture.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    icon: Rocket
  },
  {
    year: "2022",
    title: "UI/UX Designer & Developer",
    company: "Creative Digital Agency",
    description: "Bridged the gap between design and development, creating seamless user experiences and implementing them with pixel-perfect precision.",
    skills: ["Figma", "React", "Tailwind", "Framer Motion"],
    icon: Palette
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "StartupLab Inc.",
    description: "Developed responsive web applications and collaborated with designers to bring creative visions to life in fast-paced startup environment.",
    skills: ["JavaScript", "Vue.js", "SCSS", "Git"],
    icon: Code
  },
  {
    year: "2019",
    title: "Junior Developer",
    company: "WebCraft Solutions",
    description: "Started my professional journey building websites and learning the fundamentals of modern web development and user experience design.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    icon: Users
  }
];

export const About = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious beginner to seasoned developer, here's how I've grown 
            and evolved in the world of technology and design.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-accent rounded-full opacity-30" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);
            const Icon = item.icon;

            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className={`glass-card p-6 transform transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {item.year}
                      </Badge>
                      <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="border-glass-border bg-glass/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`glass-card w-16 h-16 flex items-center justify-center transition-all duration-700 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
                  }`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Happy Clients" },
            { number: "∞", label: "Lines of Code" }
          ].map((stat, index) => (
            <div key={index} className="glass-card text-center p-6 interactive">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};