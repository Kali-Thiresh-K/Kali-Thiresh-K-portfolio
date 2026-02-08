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
    title: "Craft Flow Control Center",
    description: "A task management system for admins to add work and track tasks",
    longDescription: "A comprehensive task management system for admins to add work, track pending/completed tasks, and monitor total quantity and amount in real time. Built with modern web technologies for efficiency and scalability.",
    image: "/profile/profile6.jpg",
    technologies: ["React", "JavaScript", "MySQL", "HTML", "CSS"],
    liveUrl: "#",
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
    title: "Skill Connect",
    description: "A platform connecting skilled workers with employers",
    longDescription: "Skill Connect is a platform that connects professional and non-professional workers with business owners and recruiters. It enables workers to showcase their skills, find jobs, and allows employers to hire verified talent efficiently. Built with modern web technologies for reliability and ease of use.",
    image: "/profile/profile5.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Vite"],
    liveUrl: "#",
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
            <div
              key={project.id}
              className="group glass-card overflow-hidden interactive relative"
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
            </div>
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