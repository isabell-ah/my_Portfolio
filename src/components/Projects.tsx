import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import fit from '../utils/fit.png';
import rest from '../utils/aws_rest.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    title: 'RESTful API Platform',
    description:
      'A robust API platform built with Node.js, Express, and MongoDB. Features authentication, rate limiting, comprehensive documentation.',
    image: rest,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    demoUrl: '#',
    githubUrl: 'https://github.com/isabell-ah/library_management_api.git',
  },
  {
    title: 'A FitClub App in React JS ',
    description:
      'A modern fitness club website built with React.js, featuring smooth animations powered by GSAP, (GreenSock Animation Platform).',
    image: fit,
    tags: ['React.js', 'GSAP', 'CSS'],
    demoUrl: 'https://isa-fitclub.pages.dev/',
    githubUrl: 'https://github.com/isabell-ah/Fitclub-React-JS-Animation.git',
  },
  // {
  //   title: 'Real-Time Analytics Dashboard',
  //   description:
  //     'A dashboard for visualizing real-time data streams using WebSockets, React, and Node.js with time-series database integration and responsive design using CSS grid and flexbox.',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  //   tags: ['WebSockets', 'Node.js', 'React', 'CSS Grid', 'Time-Series DB'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  // },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className='portfolio-card overflow-hidden h-full flex flex-col'>
      <div className='h-48 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className='flex flex-wrap gap-2 my-2'>
          {project.tags.map((tag) => (
            <Badge key={tag} variant='secondary'>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className='flex-grow'>
        <CardDescription className='text-base'>
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className='flex justify-between'>
        <Button variant='outline' size='sm' asChild>
          <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
            <Github className='mr-2 h-4 w-4' />
            Code
          </a>
        </Button>

        <Button size='sm' asChild>
          <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'>
            <ExternalLink className='mr-2 h-4 w-4' />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='bg-muted/30 scroll-mt-16'>
      <div className='section-container'>
        <h2 className='section-title'>My Projects</h2>
        <p className='section-subtitle'>
          Here are some of my backend and cloud-focused projects that
          demonstrate my technical expertise.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button variant='outline' size='lg' asChild>
            <a
              href='https://github.com/isabell-ah'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='mr-2 h-5 w-5' />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
