import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  X,
} from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);
const PREVIEW_COUNT = 3;

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

const initialList = experiences.map((e, i) => ({ ...e, tempId: i }));
type ExperienceItem = (typeof initialList)[number];

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

interface ExperienceCardProps {
  position: number;
  item: ExperienceItem;
  handleMove: (steps: number) => void;
  onOpen: (item: ExperienceItem) => void;
  cardWidth: number;
  cardHeight: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  item,
  handleMove,
  onOpen,
  cardWidth,
  cardHeight,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 flex flex-col transition-all duration-500 ease-in-out ${
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      }`}
      style={{
        width: cardWidth,
        height: cardHeight,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardWidth / 1.5) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      {/* diagonal line on the cut corner */}
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />

      {/* header */}
      <div className="flex items-start gap-3 pr-6">
        <div
          className={`w-10 h-10 flex items-center justify-center shrink-0 ${
            isCenter ? "bg-primary-foreground/15" : "bg-primary/10"
          }`}
          style={{ boxShadow: "3px 3px 0px hsl(var(--background))" }}
        >
          <Briefcase
            className={`w-5 h-5 ${
              isCenter ? "text-primary-foreground" : "text-primary"
            }`}
          />
        </div>
        <div className="min-w-0">
          <h3
            className={`text-base sm:text-lg font-medium leading-tight line-clamp-2 ${
              isCenter ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {item.role}
          </h3>
          <p
            className={`text-sm truncate ${
              isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            {item.company}
          </p>
        </div>
      </div>

      {/* meta */}
      <div className="flex flex-wrap items-center gap-2 mt-3 mb-3">
        <span
          className={`text-xs ${
            isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {item.duration}
        </span>
        <span
          className={`text-xs px-2.5 py-0.5 border ${
            isCenter
              ? "border-primary-foreground/40 text-primary-foreground"
              : "border-border bg-muted text-muted-foreground"
          }`}
        >
          {item.type}
        </span>
      </div>

      <div
        className={`h-0.5 mb-3 ${
          isCenter ? "bg-primary-foreground/30" : "bg-border"
        }`}
      />

      {/* top highlights */}
      <div className="space-y-2.5">
        {item.achievements.slice(0, PREVIEW_COUNT).map((a, i) => (
          <div key={i} className="flex gap-2.5">
            <TrendingUp
              className={`w-3.5 h-3.5 shrink-0 mt-1 ${
                isCenter ? "text-primary-foreground" : "text-primary"
              }`}
            />
            <p
              className={`text-xs sm:text-[13px] leading-relaxed line-clamp-2 ${
                isCenter
                  ? "text-primary-foreground/90"
                  : "text-muted-foreground"
              }`}
            >
              {a}
            </p>
          </div>
        ))}
      </div>

      {/* CTA only on the focused card */}
      {isCenter && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item);
          }}
          className="mt-auto inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
        >
          View all {item.achievements.length} details
          <ArrowUpRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function Experience() {
  const [list, setList] = useState(initialList);
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const [size, setSize] = useState({ width: 365, height: 420 });

  const handleMove = useCallback((steps: number) => {
    setList((prev) => {
      const next = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift();
          if (!item) break;
          next.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = next.pop();
          if (!item) break;
          next.unshift({ ...item, tempId: Math.random() });
        }
      }
      return next;
    });
  }, []);

  /* responsive card size */
  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setSize(
        matches ? { width: 365, height: 420 } : { width: 290, height: 400 },
      );
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /* lock body scroll while modal is open */
  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected]);

  /* keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (selected) return;
      if (e.key === "ArrowLeft") handleMove(-1);
      if (e.key === "ArrowRight") handleMove(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleMove, selected]);

  return (
    <section id="experience" className="py-20 bg-muted/40 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
      </div>

      {/* stagger stage */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: size.height + 220 }}
      >
        {list.map((item, index) => {
          const position =
            list.length % 2
              ? index - (list.length + 1) / 2
              : index - list.length / 2;
          return (
            <ExperienceCard
              key={item.tempId}
              item={item}
              position={position}
              handleMove={handleMove}
              onOpen={setSelected}
              cardWidth={size.width}
              cardHeight={size.height}
            />
          );
        })}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            aria-label="Previous experience"
            className="flex h-14 w-14 items-center justify-center bg-background border-2 border-border transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            aria-label="Next experience"
            className="flex h-14 w-14 items-center justify-center bg-background border-2 border-border transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.role} at ${selected.company}`}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl
                         [scrollbar-width:thin]
                         [&::-webkit-scrollbar]:w-1.5
                         [&::-webkit-scrollbar-track]:bg-transparent
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-primary/25
                         hover:[&::-webkit-scrollbar-thumb]:bg-primary/40"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3 mb-3 pr-10">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl text-foreground font-medium leading-tight">
                    {selected.role}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {selected.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs text-muted-foreground">
                  {selected.duration}
                </span>
                <span className="text-xs px-2.5 py-0.5 bg-muted rounded-full text-muted-foreground border border-border">
                  {selected.type}
                </span>
              </div>

              <div className="h-px bg-border mb-4" />

              <div className="space-y-3">
                {selected.achievements.map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
