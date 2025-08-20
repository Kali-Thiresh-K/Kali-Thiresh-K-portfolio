import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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
    image: project1,
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
    image: project2,
    technologies: ["React", "MongoDB", "JavaScript", "Google Maps API", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    longDescription: "Personal portfolio website showcasing projects, skills, and achievements with modern glassmorphism design, smooth animations, and responsive layout. Built with React and modern web technologies.",
    image: project3,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Portfolio"
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

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-primary/90 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="glass">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
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
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Action button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-card border-glass-border px-8 py-6">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};