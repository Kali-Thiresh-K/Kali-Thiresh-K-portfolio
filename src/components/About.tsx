import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, GraduationCap, Briefcase, Award } from "lucide-react";

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
    title: "In-plant Training",
    company: "Brainery Spot Technology",
    description:
      "Gained hands-on experience in real-world software development during my 2nd year, working with professional development teams and learning industry best practices.",
    skills: ["Industry Experience", "Professional Development", "Team Collaboration"],
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Bachelor's Degree",
    company: "Kongu Engineering College, Erode",
    description:
      "Currently pursuing Computer Science and Engineering with a CGPA of 7.69. Actively engaged in learning cutting-edge technologies and building innovative projects.",
    skills: ["Computer Science", "Software Engineering", "Problem Solving"],
    icon: GraduationCap,
  },
  {
    year: "2024-2025",
    title: "Certifications & Learning",
    company: "Professional Development",
    description:
      "Completed multiple certifications including Oracle APEX Cloud Developer, 3D Animation using Blender, and Graphics Design using Adobe Illustrator and Photoshop.",
    skills: ["Oracle APEX", "Blender", "Adobe Creative Suite", "Cloud Development"],
    icon: Award,
  },
  {
    year: "2023-2025",
    title: "Programming Journey",
    company: "Self-Learning & Projects",
    description:
      "Started my programming journey with C, Java, and Python. Built exciting projects like Craft Flow Control Center and EV Charging Station Locator.",
    skills: ["C", "Java", "Python", "Project Development"],
    icon: Code,
  },
];

export const About = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
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
        {/* Profile Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Avatar className="w-32 h-32 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage
                  src="/profile/profile1.jpg"  // ✅ Updated image path
                  alt="Kali Thiresh K"
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                  KT
                </AvatarFallback>
              </Avatar>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse" />
            </div>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto glass-card p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">Kali Thiresh K</span>, a passionate Computer Science student at Kongu Engineering College with an unwavering enthusiasm for technology and innovation. My journey in programming began with the fundamentals of C, Java, and Python, but it quickly evolved into a love affair with full-stack web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I thrive on solving complex problems and turning ideas into reality through code. My expertise spans across HTML, CSS, JavaScript, and React for frontend development, paired with MySQL and MongoDB for robust backend solutions. I've channeled this passion into exciting projects like the <span className="text-primary font-medium">Craft Flow Control Center</span> - a comprehensive task management system, and the <span className="text-primary font-medium">EV Charging Station Locator</span> - helping drivers find charging points seamlessly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Beyond coding, I'm certified in Oracle APEX Cloud Development, 3D Animation with Blender, and Adobe Creative Suite. I believe in continuous learning and am always eager to explore emerging technologies. Whether it's collaborating on innovative projects or diving deep into new frameworks, I'm ready to make a meaningful impact in the tech world.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-8">
            My <span className="gradient-text">Journey</span>
          </h3>
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
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-center mb-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                  <div
                    className={`glass-card p-6 transform transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {item.year}
                      </Badge>
                      <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded" />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

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
                  <div
                    className={`glass-card w-16 h-16 flex items-center justify-center transition-all duration-700 ${
                      isVisible ? "scale-100 rotate-0" : "scale-75 rotate-45"
                    }`}
                  >
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
            { number: "7.69", label: "Current CGPA" },
            { number: "3+", label: "Certifications" },
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Technologies" },
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