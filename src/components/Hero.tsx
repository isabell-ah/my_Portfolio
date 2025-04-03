
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Moon, Sun, Code, Server, Cloud, Database } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Hello, I'm Sharon Isabellah
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Backend Engineer & <span className="text-primary">Cloud Expert</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I build scalable and efficient server-side applications with expertise in AWS Cloud, API Development, and Real-Time Data & Analytics, complemented by frontend skills.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-muted-foreground">Core Specializations:</p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/10 rounded-full text-xs font-medium">
                  <Server size={14} className="text-primary" /> Backend Systems
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/10 rounded-full text-xs font-medium">
                  <Cloud size={14} className="text-primary" /> AWS Cloud
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/10 rounded-full text-xs font-medium">
                  <Code size={14} className="text-primary" /> API Development
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/10 rounded-full text-xs font-medium">
                  <Database size={14} className="text-primary" /> Data & Analytics
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/isabell-ah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/sharon-isabellah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sharon.isabellah@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email Contact"
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
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-xl lg:-rotate-2 transform transition-transform hover:rotate-0 duration-300 border border-border relative">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
                alt="Backend Development" 
                className="w-full h-full object-cover brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-card shadow-lg rounded-lg border border-border hidden md:block backdrop-blur-sm bg-background/80">
              <p className="font-medium">Backend Specialist</p>
              <p className="text-muted-foreground text-sm">with Full-Stack Capabilities</p>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 hidden lg:block">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                4+
                <span className="text-xs ml-0.5">YRS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
