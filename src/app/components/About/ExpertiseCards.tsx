import { motion } from "motion/react";
import { Code2, Database, Server, Cpu } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description:
      "React, TypeScript, Next.js with pixel-perfect UIs and optimal performance",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      ".NET Core, Node.js, microservices with clean architecture and CQRS",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "PostgreSQL, Redis, MongoDB with complex queries and optimization",
  },
  {
    icon: Cpu,
    title: "DevOps & Cloud",
    description:
      "Docker, Kubernetes, AWS with CI/CD pipelines and infrastructure",
  },
];

export function ExpertiseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {expertise.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="bg-card border border-border rounded-2xl p-6 h-full transition-shadow hover:shadow-md"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-lg font-medium mb-2 text-foreground">
            {item.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
