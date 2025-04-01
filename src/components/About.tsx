
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my journey, experience, and what drives me as a developer.
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
              <span className="text-2xl font-bold">5+</span>
              <span className="text-sm ml-1">Years<br/>Experience</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Hello! I'm <span className="text-primary">Your Name</span></h3>
            
            <div className="space-y-4">
              <p>
                I'm a passionate web developer with over 5 years of experience in creating digital solutions that help businesses grow. My journey in tech started when I built my first website at 15, and I've been hooked ever since.
              </p>
              
              <p>
                I specialize in front-end development, creating beautiful and functional user interfaces that are both aesthetically pleasing and highly performant. I have extensive experience with modern frameworks like React, and I'm always eager to learn new technologies.
              </p>
              
              <p>
                When I'm not coding, you'll find me hiking in the mountains, reading science fiction novels, or experimenting with new cooking recipes. I believe that diverse experiences enrich my creativity and problem-solving abilities.
              </p>
            </div>
            
            <div className="pt-4">
              <Button asChild>
                <a href="#" download>
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
