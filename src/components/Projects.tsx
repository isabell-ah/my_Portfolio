
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include product filtering, cart functionality, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS. Features include smooth scrolling, responsive design, and contact form functionality.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application built with React and TypeScript. Features include task creation, drag-and-drop functionality, and user authentication.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["React", "TypeScript", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="portfolio-card overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        
        <Button size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-muted/30 scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
