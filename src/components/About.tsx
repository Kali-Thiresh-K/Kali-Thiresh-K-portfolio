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

          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">Kali Thiresh K</span>, a Computer Science student at Kongu Engineering College with a strong passion for technology and innovation. I specialize in building full-stack web applications using the <span className="text-primary font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I love turning ideas into impactful solutions. My recent work includes the <span className="text-primary font-medium">Mobile Shop Billing System</span>, an AI-powered learning platform called <span className="text-primary font-medium">LearnMate</span>, and an <span className="text-primary font-medium">EV Charging Station Locator</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Alongside coding, I’ve earned certifications in Oracle APEX, Blender, and Adobe Creative Suite. I believe in continuous learning and enjoy exploring new technologies to create real-world solutions.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { number: "7.67", label: "Current CGPA" },
            { number: "5+", label: "Projects Built" },
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