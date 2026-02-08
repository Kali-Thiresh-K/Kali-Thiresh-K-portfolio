import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mobile Shop Billing System",
    description: "Web-based POS and management platform for mobile retailers",
    longDescription: "The Mobile Shop Billing System is a web-based point-of-sale and shop management platform designed for small and medium mobile retailers. It provides a centralized dashboard to monitor daily and monthly sales, manage products, customers, invoices, and EMI plans efficiently.",
    image: "/profile/profile14.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Vite"],
    liveUrl: "https://mobileshop-billing.vercel.app/",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 2,
    title: "EV Charging Station Locator",
    description: "Helps EV drivers find nearby charging points efficiently",
    longDescription: "Helps EV drivers find nearby charging points by location, charger type, and amenities through a reliable database. Features interactive maps, real-time availability, and comprehensive filtering options for optimal user experience.",
    image: "/profile/profile4.jpg",
    technologies: ["React", "MongoDB", "LeafletMaps API", "Javascript", "HTML"],
    liveUrl: "https://evlocator-frontend.onrender.com",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "LearnMate",
    description: "AI-powered learning management platform for digital education",
    longDescription: "LearnMate is an AI-powered learning management platform designed to enhance digital education through smart content delivery, fair assessments, and personalized learning support. It enables instructors to create structured courses and assessments, while students learn interactively with instant doubt-solving and progress tracking.",
    image: "/profile/profile13.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AI Integration"],
    liveUrl: "https://learnmatehq.vercel.app/",
    githubUrl: "#",
    category: "Web App"
  }
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions
            and creative approaches to modern web development challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl !== "#" ? project.liveUrl : undefined}
              target={project.liveUrl !== "#" ? "_blank" : undefined}
              rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
              className="group glass-card overflow-hidden interactive relative block cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Category badge */}
                <Badge
                  className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                >
                  {project.category}
                </Badge>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-glass-border bg-glass/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="border-glass-border bg-glass/30 text-xs"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          {/* Keep this button if needed */}
        </div>
      </div>
    </section>
  );
};