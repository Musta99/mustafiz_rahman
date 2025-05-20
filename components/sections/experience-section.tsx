"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    title: "Mobile Application Developer",
    company: "Xponent Infosystem (PVT) Ltd.",
    period: "Mar 2025 - Present",
    description:
      "Leading the development of multiple Flutter applications for enterprise clients. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
    skills: ["Flutter", "Dart", "Firebase", "REST API", "Team Leadership"],
  },
  {
    title: "Assistant Manager- R&D",
    company: "Youngone Corporation",
    period: "Dec 2022 - Feb 2025",
    description:
      "Developed and maintained multiple Flutter applications. Implemented complex UI designs and integrated with various backend services.",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
  },
  {
    title: "Engineer",
    company: "BanglaCAT",
    period: "Dec 2019 - Nov 2022",
    description:
      "Created user interfaces and experiences for mobile and web applications. Collaborated with developers to ensure design implementation accuracy.",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
  },
];

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section id="experience" className="py-24 relative clip-path-slant">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-background to-background -z-10"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to
            work with throughout my career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="space-y-4 sticky top-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={cn(
                    "p-4 rounded-xl cursor-pointer transition-all duration-300",
                    activeExperience === index
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "hover:bg-primary/5"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        activeExperience === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "font-medium",
                          activeExperience === index
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="border-primary/10 shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-yellow-400"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">
                  {experiences[activeExperience].title}
                </h3>
                <p className="text-lg text-primary font-medium mb-6">
                  {experiences[activeExperience].company}
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experiences[activeExperience].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/10 text-primary border-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
