
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "Python", "Node.js", "Express.js", "Django", "React.js", "EJS", "Bootstrap"]
  },
  {
    title: "Backend & API Development",
    skills: ["RESTful APIs", "GraphQL", "Microservices", "API Authentication", "Rate Limiting", "API Documentation"]
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "AWS Services", "Database Design", "Data Modeling"]
  },
  {
    title: "Frontend & Others",
    skills: ["React.js", "Bootstrap", "CSS", "Git", "GitHub", "Linux", "CI/CD", "Docker", "Bitcoin Development"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-muted/30 scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with to build scalable backend systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Currently Learning</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "AWS Cloud", 
                description: "Pursuing AWS Cloud Practitioner certification and expanding knowledge of cloud services." 
              },
              { 
                title: "Bitcoin Development", 
                description: "Learning Bitcoin protocol and Lightning Network for decentralized applications." 
              },
              { 
                title: "Advanced Microservices", 
                description: "Mastering microservices architecture for building more scalable systems." 
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">My Workflow</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Design", description: "Design robust system architectures and APIs." },
              { step: "02", title: "Develop", description: "Write clean, efficient, and scalable backend code." },
              { step: "03", title: "Test", description: "Thoroughly test for performance and security." },
              { step: "04", title: "Deploy", description: "Implement CI/CD for seamless deployment." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
