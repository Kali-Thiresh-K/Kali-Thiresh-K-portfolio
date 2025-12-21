import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto glass-card p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">Kali Thiresh K</span>, a Computer Science student at Kongu Engineering College with a strong passion for technology and innovation. I started with C, Java, and Python, and quickly grew into full-stack web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Skilled in HTML, CSS, JavaScript, React, MySQL, and MongoDB, I love turning ideas into impactful projects. Some of my works include the <span className="text-primary font-medium">Craft Flow Control Center</span> and the <span className="text-primary font-medium">EV Charging Station Locator</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Alongside coding, I’ve earned certifications in Oracle APEX, Blender, and Adobe Creative Suite. I believe in continuous learning and enjoy exploring new technologies to create real-world solutions.
            </p>
          </div>
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