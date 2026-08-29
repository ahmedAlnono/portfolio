import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Braces,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "from-blue-500/20 to-blue-500/5",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-purple-500/20 to-purple-500/5",
    skills: [
      { name: ".NET Core", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "from-emerald-500/20 to-emerald-500/5",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500/20 to-orange-500/5",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/40 relative overflow-hidden">
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
            Technical Arsenal
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated toolkit refined over 5+ years of building production
            systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`relative bg-gradient-to-br ${category.color} backdrop-blur-sm border border-border rounded-2xl p-6 overflow-hidden group hover:border-primary/30 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + i * 0.08,
                        }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
