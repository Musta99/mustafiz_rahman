"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Code, Layers, Palette } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
              >
                Flutter Developer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Hi, I'm <span className="text-gradient">Mustafiz</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Crafting beautiful mobile experiences with Flutter & exploring
                the MERN stack
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              I'm an expert in Flutter, Dart, Firebase, and REST API
              integration. Currently expanding my skills with MERN stack
              development. I have knowledge of HTML, CSS, Tailwind CSS, and
              basic JavaScript, along with UI/UX design skills in Figma and 3D
              designing experience in SolidWorks and AutoCAD.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-8 mt-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Flutter</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">MERN Stack</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">UI/UX Design</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl transform -translate-y-10 translate-x-10" />
              <div className="absolute -z-10 w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl transform translate-y-10 -translate-x-10" />

              {/* Rotating circle */}
              <div className="absolute inset-0 -z-10 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                <div className="absolute left-0 top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2" />
                <div className="absolute right-0 top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2" />
              </div>

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl animate-float">
                <Image
                  src="/assets/1565107422389.jpg?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">
                <span className="text-primary font-bold">Flutter</span>
              </div>
              <div className="absolute -bottom-6 -left-6 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">
                <span className="text-primary font-bold">UI/UX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll down"
          className="rounded-full w-12 h-12 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10"
        >
          <ArrowDown className="text-primary" />
        </Button>
      </motion.div>
    </section>
  );
}
