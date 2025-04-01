
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitHub, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Hello, I'm Your Name
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I build <span className="text-primary">digital experiences</span> that drive impact
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a passionate web developer specializing in creating beautiful, functional websites and applications that help businesses grow.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:-rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-card shadow-lg rounded-lg border border-border hidden md:block">
              <p className="font-medium">5+ years of experience</p>
              <p className="text-muted-foreground text-sm">Building web experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
