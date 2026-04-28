import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'University Management System',
    description: 'University Management System built with a modern full-stack architecture (.NET + React). It manages faculties, departments, doctors, students, courses, enrollments, exams, assignments, and schedules in a structured and scalable way. The system supports role-based access, academic tracking, and complete administrative control, providing a smooth and efficient experience for managing university operations digitally',
    category: 'Fullstack',
    tags: ['.Net Core', 'Redis', 'Docker', 'React'],
    gradient: 'from-blue-500 to-cyan-500',
    metrics: '50M+ jobs/day, 99.99% uptime',
    demoUrl: 'https://www.linkedin.com/posts/ahmed-alnono-187b09251_softwareengineering-fullstack-dotnet-activity-7451240501548257280-sNOR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5HUbcBkvI7HPPIx-UBG_lwb3DECPSjbYI',
    codeUrl: 'https://github.com/ahmedAlnono/UniversityDoctor',
  },
  {
    title: 'Real-time Chess Game',
    description: 'A real-time chess platform built with React and .NET Core, supporting online multiplayer, offline play, and AI bot matches with smooth gameplay and instant move synchronization.',
    category: 'Fullstack',
    tags: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL','Redis','.Net Core'],
    gradient: 'from-purple-500 to-pink-500',
    metrics: '50+ concurrent users',
    demoUrl: 'https://github.com/ahmedAlnono/ChessGame',
    codeUrl: 'https://github.com/ahmedAlnono/ChessGame',
  },
  {
    title: 'E-commerce Platform Rebuild',
    description: 'A fast and modern e-commerce platform built with SolidJS and NestJS, featuring a responsive UI, secure backend APIs, and a smooth shopping experience with optimized performance and real-time interactions.',
    category: 'Fullstack',
    tags: ['Solid js', 'Nest js', 'MySql'],
    gradient: 'from-orange-500 to-red-500',
    metrics: '60% faster, 25% conversion lift',
    demoUrl: 'https://github.com/ahmedAlnono/ecommerce-solid',
    codeUrl: 'https://github.com/ahmedAlnono/ecommerce-solid',
  },
  {
    title: 'Social Media Blogs App',
    description: 'A modern social media and blogging platform built for sharing posts, engaging with content, and connecting users through likes, comments, and real-time updates with a clean and responsive UI.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Nest js', 'Tailwind',"Postgresql"],
    gradient: 'from-indigo-500 to-blue-500',
    metrics: '12 teams, 40% dev time reduction',
    demoUrl: 'https://github.com/ahmedAlnono/social-media-sequelize',
    codeUrl: 'https://github.com/ahmedAlnono/social-media-sequelize',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Solving complex engineering challenges with measurable business impact
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-accent hover:bg-accent/80 text-accent-foreground border border-border'
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
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white/20 rounded" />
                  </div>

                  <h3 className="text-xl mb-3">{project.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-accent rounded-full text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="text-foreground">Impact:</span> {project.metrics}
                      </div>

                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg text-sm flex items-center justify-center gap-2 border border-border transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg text-sm flex items-center justify-center gap-2 border border-border transition-colors"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
