"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Flutter E-Commerce App",
    description:
      "A fully functional e-commerce application built with Flutter and Firebase, featuring user authentication, product catalog, cart, and payment integration.",
    image: "./assets/explore.png?height=400&width=600",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A responsive task management dashboard with drag-and-drop functionality, user roles, and real-time updates using Firebase.",
    image: "./assets/evenspot.png?height=400&width=600",
    tags: ["Flutter", "Firebase", "State Management"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description:
      "A social media application with features like user profiles, posts, comments, likes, and real-time messaging.",
    image: "./assets/xfer.png?height=400&width=600",
    tags: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather forecast application that provides real-time weather data, forecasts, and location-based services.",
    image: "./assets/jolier.png?height=400&width=600",
    tags: ["Flutter", "REST API", "Animations"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Blog",
    description:
      "A responsive blog built with React and Node.js, featuring a content management system and comment functionality.",
    image: "./assets/easypack.png?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    image: "./assets/portfolio.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-background -z-10"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies I've mastered.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden border-primary/10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={14} />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-primary/5 border-primary/20 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
