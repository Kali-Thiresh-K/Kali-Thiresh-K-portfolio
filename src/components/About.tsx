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

          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 mb-12 text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello, I am <span className="text-primary font-semibold">Kali Thiresh K</span>, a Computer Science and Engineering student from <span className="text-primary font-medium">Kongu Engineering College</span>. My interest lies in developing software products which help solve real-world problems. Some of the tools which I like working on include <span className="text-primary font-medium">MERN Stack</span> full-stack web development, and building <span className="text-primary font-medium">AI products through Python</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Some of the software projects which I have developed are <span className="text-primary font-medium">Health-O-Meter</span> – AI-based health tracker application, <span className="text-primary font-medium">Food Connect</span> – Location based surplus food donation app, which reduces wastage of food, and <span className="text-primary font-medium">Mobile Shop Billing & Management System</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I love experimenting with different technologies and am active in participating in various hackathons. I hope to make a difference in the world as a software engineer and developer.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { number: "7.80", label: "Current CGPA" },
            { number: "7+", label: "Projects Built" },
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