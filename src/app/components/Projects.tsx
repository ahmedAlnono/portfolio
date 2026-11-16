import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "University Management System",
    description:
      "University Management System built with a modern full-stack architecture (.NET + React). Manages faculties, departments, doctors, students, courses, enrollments, exams, assignments, and schedules with role-based access and full administrative control.",
    category: "Fullstack",
    tags: [".Net Core", "Redis", "Docker", "React"],
    metrics: "fast cash system",
    demoUrl:
      "https://www.linkedin.com/posts/ahmed-alnono-187b09251_softwareengineering-fullstack-dotnet-activity-7451240501548257280-sNOR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5HUbcBkvI7HPPIx-UBG_lwb3DECPSjbYI",
    codeUrl: "https://github.com/ahmedAlnono/UniversityDoctor",
  },
  {
    title: "Real-time Chess Game",
    description:
      "A real-time chess platform built with React and .NET Core, supporting online multiplayer, offline play, and AI bot matches with smooth gameplay and instant move synchronization.",
    category: "Fullstack",
    tags: ["React", "TypeScript", "WebSocket", "PostgreSQL", "Redis", ".Net Core"],
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

/* -------------------------------------------------------------------------- */
/*  Project card — 3D tilt + click-to-flip                                    */
/* -------------------------------------------------------------------------- */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // ±8° feels premium without clipping neighbors
    setTilt({ x: -py * 8, y: px * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      style={{ perspective: "1200px" }}
      className="h-[440px]"
    >
      {/* tilt wrapper */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 150ms ease-out",
        }}
        className="relative w-full h-full"
      >
        {/* flip wrapper */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 800ms cubic-bezier(0.4, 0.2, 0.2, 1)",
          }}
          className="relative w-full h-full"
        >
          {/* ---------- FRONT ---------- */}
          <div
            onClick={() => setFlipped(true)}
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 p-6 bg-card border border-border rounded-2xl cursor-pointer hover:border-primary/40 transition-colors flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl mb-3 text-foreground font-medium">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground border border-border">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            <div className="mt-auto pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                View details
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>

          {/* ---------- BACK ---------- */}
          <div
            onClick={() => setFlipped(false)}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className="absolute inset-0 p-6 bg-card border border-primary/40 rounded-2xl cursor-pointer flex flex-col"
          >
            <h3 className="text-lg mb-3 text-foreground font-medium line-clamp-2">
              {project.title}
            </h3>

            <div className="flex-1 overflow-y-auto pr-1 mb-3 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/25">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-1">
                <Sparkles size={12} /> Impact
              </div>
              <div className="text-sm text-foreground">{project.metrics}</div>
            </div>

            <div className="flex gap-2 mb-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink size={14} /> Demo
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-4 py-2 bg-muted hover:bg-border rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Github size={14} /> Code
              </a>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 transition-colors"
            >
              <ArrowLeft size={12} /> Back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                  */
/* -------------------------------------------------------------------------- */
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}