import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: ".NET Core", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Docker", level: 75 },
  { name: "AWS", level: 70 },
  { name: "GraphQL", level: 75 },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
        />
      </div>
    </motion.div>
  );
};

export function SkillBars() {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
      ))}
    </div>
  );
}