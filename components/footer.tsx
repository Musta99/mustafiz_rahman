import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center text-primary-foreground font-bold shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                MR
              </div>
              <span className="font-bold text-xl group-hover:text-primary transition-colors">
                Mustafizur Rahman
              </span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating beautiful mobile experiences with Flutter & exploring the
              MERN stack
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-6">
              <Link
                href="https://github.com/musta99"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mustafizur-rahman-382023191/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://x.com/mustafiz_r64283"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:mustafizurrahman570@gmail.com"
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link
                href="#home"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
