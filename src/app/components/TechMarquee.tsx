import { motion } from "motion/react";
import {
  Database,
  Container,
  Cloud,
  Braces,
  Layers,
  Boxes,
  Wind,
  FileCode,
  Server,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const techs = [
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "GraphQL", icon: Braces },
  { name: "Redis", icon: Layers },
  { name: "Kubernetes", icon: Boxes },
  { name: "Tailwind", icon: Wind },
  { name: "Next.js", icon: FileCode },
  { name: "NestJS", icon: Server },
  { name: "MongoDB", icon: Leaf },
];

export function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="relative w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Nav arrows */}
      <button className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
        <ChevronLeft size={16} className="text-gray-500" />
      </button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
        <ChevronRight size={16} className="text-gray-500" />
      </button>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors cursor-default"
            >
              <tech.icon size={20} strokeWidth={1.8} />
              <span
                className="text-sm font-medium"
                style={{
                  fontFamily: "var(--font-sans, 'Space Grotesk', sans-serif)",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
