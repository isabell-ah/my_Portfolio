
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my journey, experience, and what drives me as a developer specializing in backend technology.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3" 
                alt="Backend Development" 
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
                I'm a passionate Backend Engineer with expertise in building scalable and efficient server-side applications. While my primary focus is backend development, I possess comprehensive full-stack capabilities that enable me to collaborate effectively across the entire development lifecycle.
              </p>
              
              <p>
                Currently enhancing my skills in AWS Cloud, Python, and Bitcoin Development, while also exploring advanced API Development techniques and Microservices Architecture. I'm particularly interested in Real-Time Data & Analytics solutions and creating robust, secure APIs that power modern applications.
              </p>
              
              <p>
                Though I specialize in backend technologies, I'm also proficient with frontend tools like React.js, Bootstrap, and CSS, allowing me to understand UI/UX requirements and communicate effectively with frontend teams. This balanced skillset helps me build solutions that consider both server-side efficiency and client-side experience.
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
