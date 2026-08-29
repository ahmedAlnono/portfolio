import { motion } from "motion/react";

const techs = [
  "React", "TypeScript", ".NET Core", "Node.js", "PostgreSQL",
  "Docker", "AWS", "GraphQL", "Redis", "Kubernetes", "Tailwind",
  "Next.js", "NestJS", "MongoDB", "CI/CD"
];

export function TechMarquee() {
  return (
    <div className="py-8 border-y border-border bg-muted/30 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="text-2xl font-medium text-muted-foreground/60 hover:text-primary transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {tech} <span className="text-primary mx-6">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}