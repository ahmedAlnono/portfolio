import { motion } from 'motion/react';

const skills = [
  {
    name: 'React',
    category: 'Frontend',
    level: 95,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 90,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 95,
    color: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 90,
    color: 'from-cyan-400 to-teal-500',
  },
  {
    name: '.NET Core',
    category: 'Backend',
    level: 90,
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 85,
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    level: 85,
    color: 'from-pink-500 to-purple-500',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 95,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 90,
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 85,
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Redis',
    category: 'Database',
    level: 80,
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'SQL',
    category: 'Database',
    level: 90,
    color: 'from-gray-500 to-gray-700',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    level: 90,
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    level: 80,
    color: 'from-blue-400 to-purple-600',
  },
  {
    name: 'AWS',
    category: 'DevOps',
    level: 85,
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    level: 90,
    color: 'from-teal-500 to-teal-700',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building modern, scalable applications with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity`} />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="mb-1">{skill.name}</h4>
                    <span className="text-xs px-2 py-1 bg-accent rounded-full text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                  <div className={`text-sm px-2 py-1 rounded bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.level}%
                  </div>
                </div>

                <div className="relative h-2 bg-accent rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
