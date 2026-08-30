import { motion } from "motion/react";
import { Briefcase, TrendingUp } from "lucide-react";
import { TiltCard } from "./TiltCard";

const experiences = [
  {
    role: "Back End Developer",
    company: "Avatar Information Technology",
    type: "Full-time",
    duration: "May 2026 - Present",
    achievements: [
      "Built complete enterprise backend system for Palloncino Party Management handling orders, inventory, tasks, and delivery operations",
      "Implemented multi-role authentication (Customer, Employee, Designer, Driver, Admin) with JWT refresh tokens",
      "Developed automated job order generation from customer approvals and task management with sub-tasks, checklists, and photo proof uploads",
      "Designed inventory system with stock tracking and low-stock alerts; developed quotation module with PDF export",
      "Added push notifications via Firebase Cloud Messaging and containerized application using Docker",
      "Reduced order processing time by 60% and eliminated manual tracking errors for 100+ monthly orders",
      "Tech Stack: .NET 10, C#, Entity Framework Core, SQLite, JWT, AutoMapper, Docker, Firebase Cloud Messaging",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Qawam Diet",
    type: "Freelance/Contract",
    duration: "June 2026",
    achievements: [
      "Designed and developed the Qawam Diet web platform end-to-end, covering UI/UX, frontend, backend, database, deployment, and production operations",
      "Built backend using ASP.NET Core Web API with PostgreSQL and Entity Framework Core",
      "Developed frontend using React and TypeScript with reusable component and modular architecture",
      "Designed and implemented restaurant monthly subscription management system from the ground up",
      "Implemented authentication, authorization, JWT-based security, role and permission management, RESTful APIs, notifications, background processes, file management, caching, and database transactions",
      "Integrated WhatsApp to support both sending and receiving messages between platform and customers",
      "Applied Clean Architecture, CQRS, SOLID principles, Repository Pattern, Dependency Injection, and Design Patterns",
      "Managed complete production environment including Linux, Docker, Nginx, VPS deployment, SSL, domain configuration, Git/GitHub, and CI/CD",
      "Developed and maintained platform as a production system serving thousands of users daily across multiple restaurant branches",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Material (3D Interior Design Platform)",
    type: "Freelance/Contract",
    duration: "June 2026",
    achievements: [
      "Independently designed and developed a full-stack 3D interior design platform from concept to production",
      "Built frontend using React, TypeScript, React Query, Zustand, React Router, Tailwind CSS, and Vite",
      "Developed interactive 3D environment allowing users to create rooms, add and manipulate furniture, move and rotate objects, and customize materials and colors",
      "Implemented functionality for users to save and manage interior designs and export completed projects",
      "Developed backend using ASP.NET Core Web API with Clean Architecture, CQRS, SOLID, Repository Pattern, and Dependency Injection",
      "Designed and managed PostgreSQL database including relationships, complex queries, indexes, transactions, and optimization",
      "Worked extensively with 3D assets, GLB models, and textures with optimization techniques to improve loading times",
      "Built reusable React components and structured frontend using scalable component-based architecture",
      "Implemented RESTful APIs, authentication and authorization, pagination, caching, and other backend services",
      "Managed complete deployment and production environment using Linux, Docker, Nginx, VPS, Git/GitHub, CI/CD, SSL, and domain configuration",
      "Took full ownership across design, architecture, development, database engineering, 3D integration, deployment, and maintenance",
    ],
  },
  {
    role: "Back End Developer",
    company: "Dash",
    type: "Full-time",
    duration: "February 2022 - September 2023",
    achievements: [
      "Designed and built large-scale, high-performance APIs using NestJS",
      "Developed scalable and maintainable server-side architectures handling high traffic and complex business logic",
      "Participated in code reviews, system design discussions, and agile development processes",
      "Contributed to improving code quality, optimizing performance, and implementing security best practices",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/40">
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
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track record of delivering high-impact solutions at scale
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TiltCard>
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute left-8 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block -translate-x-1/2" />

                  <motion.div whileHover={{ x: 4 }} className="md:ml-16">
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl text-foreground font-medium">
                              {exp.role}
                            </h3>
                            <p className="text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <span className="text-sm text-muted-foreground">
                            {exp.duration}
                          </span>
                          <span className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border w-fit">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-3">
                            <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground text-sm">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
