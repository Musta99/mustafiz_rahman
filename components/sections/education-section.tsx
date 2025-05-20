"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

const educations: Education[] = [
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "Chittagong University of Engineering & Technology",
    location: "Chittagong, Bangladesh",
    period: "2015 - 2019",
    description:
      "Alongside my Bachelor's in Mechanical Engineering, I actively pursued programming, exploring languages and tools beyond my core curriculum. This self-driven interest laid the foundation for my journey into app development and tech innovation.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Chittagong Government City College",
    location: "Chittagong, Bangladesh",
    period: "2012-2014",
    description:
      "I completed my Higher Secondary Certificate from Govt. City College, where I developed a strong foundation in science and analytical thinking.",
  },
  {
    degree: "Secondary School Certificate ",
    institution: "Chittagong Government High School",
    location: "Chittagong, Bangladesh",
    period: "2012",
    description:
      "I earned my Secondary School Certificate from Govt. High School, which laid the groundwork for my academic discipline and interest in technology.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
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
            My Learning Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey that has
            shaped my professional skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/10 rounded-full"></div>

            <div className="space-y-12">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-yellow-400 text-primary-foreground shadow-lg">
                      <GraduationCap size={24} />
                    </div>
                  </div>

                  <Card className="flex-grow border-primary/10 shadow-xl card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
