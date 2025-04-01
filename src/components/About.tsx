
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my journey, experience, and what drives me as a software engineer.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-primary-foreground rounded-full shadow-lg hidden md:flex items-center justify-center">
              <span className="text-2xl font-bold">4+</span>
              <span className="text-sm ml-1">Years<br/>Experience</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Hello! I'm <span className="text-primary">Sharon Isabellah</span></h3>
            
            <div className="space-y-4">
              <p>
                I'm a dedicated Software Engineer with over 4 years of experience developing web and mobile applications. My journey in tech began with a passion for creating solutions that solve real-world problems, and I've been constantly learning and growing since then.
              </p>
              
              <p>
                I specialize in frontend development, with expertise in React, React Native, and modern JavaScript frameworks. I'm passionate about creating intuitive user interfaces and seamless user experiences that make applications both functional and enjoyable to use.
              </p>
              
              <p>
                When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through mentorship. I believe in continuous learning and staying current with the latest industry trends and best practices.
              </p>
            </div>
            
            <div className="pt-4">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
