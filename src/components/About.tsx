
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mountain, Code, Database, Globe, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 bg-muted/10 py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my journey, experience, and what drives me as a developer specializing in backend technology.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:rotate-2 transform transition-transform hover:rotate-0 duration-300 border border-border">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3" 
                alt="Backend Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-primary-foreground rounded-full shadow-lg hidden md:flex items-center justify-center">
              <span className="text-2xl font-bold">4+</span>
              <span className="text-sm ml-1">Years<br/>Experience</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full">
              <Mountain className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">Coder & Hiker</span>
            </div>
            
            <h3 className="text-2xl font-bold">Hello! I'm <span className="text-primary">Sharon Isabellah</span></h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Backend Engineer with expertise in building scalable and efficient server-side applications. While my primary focus is backend development, I possess comprehensive full-stack capabilities that enable me to collaborate effectively across the entire development lifecycle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex items-start gap-3">
                  <Server className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Backend Focus</h4>
                    <p className="text-sm text-muted-foreground">Building robust server-side applications & APIs</p>
                  </div>
                </div>
                
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex items-start gap-3">
                  <Database className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Data & Analytics</h4>
                    <p className="text-sm text-muted-foreground">Real-time data processing & insights</p>
                  </div>
                </div>
                
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Full-Stack Skills</h4>
                    <p className="text-sm text-muted-foreground">Frontend capabilities with React.js & Bootstrap</p>
                  </div>
                </div>
                
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Cloud Solutions</h4>
                    <p className="text-sm text-muted-foreground">AWS Cloud architecture & implementation</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently enhancing my skills in AWS Cloud, Python, and Bitcoin Development, while also exploring advanced API Development techniques and Microservices Architecture. I'm particularly interested in Real-Time Data & Analytics solutions and creating robust, secure APIs that power modern applications.
              </p>

              <div className="bg-muted/40 p-4 rounded-lg border border-border mt-4">
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Beyond Coding</h4>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Outside the digital world, I'm an avid hiker who loves exploring nature trails and mountains. Hiking helps me clear my mind and find creative solutions to complex technical problems. I bring the same dedication, persistence, and strategic planning to both my professional work and mountain adventures.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild className="group">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
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
