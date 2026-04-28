import { motion } from 'motion/react';
import { Code2, Database } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '10' },
  { label: 'Global Clients', value: '10' },
  { label: 'Code Reviews', value: '32' },
];

const expertise = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    description: '.NET Core, Node.js, GraphQL, REST APIs',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'PostgreSQL, MongoDB, Redis, SQL optimization',
    color: 'from-green-500 to-emerald-500',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl mb-4">Engineering Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  With over 8 years of experience building production systems at scale, I specialize in
                  architecting resilient, high-performance applications that serve millions of users.
                </p>
                <p className="text-muted-foreground mb-4">
                  My expertise spans the full stack, from crafting intuitive user interfaces with React
                  and TypeScript to designing distributed backend systems with .NET Core and Node.js.
                  I'm passionate about developer experience, clean architecture, and measurable performance improvements.
                </p>
                <p className="text-muted-foreground">
                  I've led technical initiatives that reduced latency by 60%, improved deployment frequency by 10x,
                  and mentored teams in adopting modern engineering practices. I believe in writing code that's
                  not just functional, but maintainable, testable, and performant.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 h-full">
                  <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity`} />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
