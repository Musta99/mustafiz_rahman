"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Skill = {
  name: string;
  color: string;
  logo: string;
};

const skills: Skill[] = [
  {
    name: "Flutter",
    color: "from-teal-800 to-blue-900",
    logo: "/assets/flutter.png",
  },
  {
    name: "Dart",
    color: "from-yellow-500 to-yellow-600",
    logo: "/assets/dart.png",
  },
  {
    name: "Firebase",
    color: "from-blue-600 to-blue-700",
    logo: "/assets/firebase.png",
  },
  {
    name: "MongoDB",
    color: "from-green-500 to-green-600",
    logo: "/assets/mongodb.png",
  },
  {
    name: "Express",
    color: "from-grey-600 to-gray-700",
    logo: "/assets/express.png",
  },
  {
    name: "React",
    color: "from-blue-900 to-blue-700",
    logo: "/assets/react.png",
  },
  {
    name: "Node.js",
    color: "from-green to-green-700",
    logo: "/assets/node.png",
  },
  {
    name: "Tailwind CSS",
    color: "from-teal-800 to-blue-900",
    logo: "/assets/tailwind.png",
  },
  {
    name: "JavaScript",
    color: "from-yellow-700 to-yellow-700",
    logo: "/assets/js.png",
  },
  {
    name: "Figma",
    color: "from-purple-500 to-purple-600",
    logo: "/assets/figma.png",
  },
  {
    name: "AutoCAD",
    color: "from-red-500 to-red-600",
    logo: "/logos/autocad.png",
  },
  {
    name: "SolidWorks",
    color: "from-red-600 to-red-700",
    logo: "/assets/solidworks.png",
  },
];

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative clip-path-slant">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my
            career. Here are some of my key skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <Card className="overflow-hidden border-none shadow-lg card-hover">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-md relative",
                      skill.color
                    )}
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-center">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
