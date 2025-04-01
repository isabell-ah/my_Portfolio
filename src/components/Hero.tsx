
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Hello, I'm Sharon Isabellah
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Backend Engineer & <span className="text-primary">Cloud Expert</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I build scalable and efficient server-side applications with expertise in AWS Cloud, API Development, and Real-Time Data & Analytics, complemented by frontend skills in React.js and Bootstrap.
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
                href="https://github.com/isabell-ah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/sharon-isabellah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sharon.isabellah@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <Toggle 
                pressed={theme === 'dark'} 
                onPressedChange={toggleTheme}
                aria-label="Toggle theme"
                className="bg-background/80 backdrop-blur-sm border border-border"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Toggle>
            </div>
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:-rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
                alt="Backend Development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-card shadow-lg rounded-lg border border-border hidden md:block">
              <p className="font-medium">Full-Stack Developer</p>
              <p className="text-muted-foreground text-sm">Backend Specialist | AWS Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
