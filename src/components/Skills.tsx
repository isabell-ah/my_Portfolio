
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Docker", "Vercel"]
  },
  {
    title: "Other",
    skills: ["Responsive Design", "Testing", "SEO", "Performance Optimization", "Accessibility", "UX/UI Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-muted/30 scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with to bring ideas to life.
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
          <h3 className="text-2xl font-bold text-center mb-8">My Workflow</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research", description: "Understand project requirements and research best solutions." },
              { step: "02", title: "Design", description: "Create wireframes and design the user interface." },
              { step: "03", title: "Develop", description: "Write clean, efficient, and maintainable code." },
              { step: "04", title: "Launch", description: "Test thoroughly and deploy to production." }
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
