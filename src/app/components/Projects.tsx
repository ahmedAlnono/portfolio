import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    title: "University Management System",
    description:
      "University Management System built with a modern full-stack architecture (.NET + React). Manages faculties, departments, doctors, students, courses, enrollments, exams, assignments, and schedules with role-based access and full administrative control.",
    category: "Fullstack",
    tags: [".Net Core", "Redis", "Docker", "React"],
    metrics: "50M+ jobs/day, 99.99% uptime",
    demoUrl:
      "https://www.linkedin.com/posts/ahmed-alnono-187b09251_softwareengineering-fullstack-dotnet-activity-7451240501548257280-sNOR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5HUbcBkvI7HPPIx-UBG_lwb3DECPSjbYI",
    codeUrl: "https://github.com/ahmedAlnono/UniversityDoctor",
  },
  {
    title: "Real-time Chess Game",
    description:
      "A real-time chess platform built with React and .NET Core, supporting online multiplayer, offline play, and AI bot matches with smooth gameplay and instant move synchronization.",
    category: "Fullstack",
    tags: [
      "React",
      "TypeScript",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      ".Net Core",
    ],
    metrics: "50+ concurrent users",
    demoUrl: "https://github.com/ahmedAlnono/ChessGame",
    codeUrl: "https://github.com/ahmedAlnono/ChessGame",
  },
  {
    title: "E-commerce Platform Rebuild",
    description:
      "A fast and modern e-commerce platform built with SolidJS and NestJS, featuring a responsive UI, secure backend APIs, and a smooth shopping experience with optimized performance.",
    category: "Fullstack",
    tags: ["Solid js", "Nest js", "MySql"],
    metrics: "60% faster, 25% conversion lift",
    demoUrl: "https://github.com/ahmedAlnono/ecommerce-solid",
    codeUrl: "https://github.com/ahmedAlnono/ecommerce-solid",
  },
  {
    title: "Social Media Blogs App",
    description:
      "A modern social media and blogging platform for sharing posts, engaging with content, and connecting users through likes, comments, and real-time updates.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Nest js", "Tailwind", "Postgresql"],
    metrics: "12 teams, 40% dev time reduction",
    demoUrl: "https://github.com/ahmedAlnono/social-media-sequelize",
    codeUrl: "https://github.com/ahmedAlnono/social-media-sequelize",
  },
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl sm:text-5xl font-medium mb-4 text-foreground"
          >
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Solving complex engineering challenges with measurable business
            impact
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-border text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <TiltCard>
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-5 bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <h3 className="text-xl mb-3 text-foreground font-medium">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="text-foreground font-medium">
                          Impact:
                        </span>{" "}
                        {project.metrics}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-muted hover:bg-border rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-muted hover:bg-border rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
