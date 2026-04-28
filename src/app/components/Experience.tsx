import { motion } from 'motion/react';
import { Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp Inc.',
    type: 'Full-time',
    duration: '2022 - Present',
    achievements: [
      'Led migration to microservices architecture, reducing deployment time by 75% and improving system resilience',
      'Architected real-time data pipeline processing 5M events/hour with 99.99% accuracy',
      'Mentored team of 8 engineers, establishing code review standards and architectural best practices',
      'Reduced infrastructure costs by 40% through optimization of cloud resources and caching strategies',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupHub',
    type: 'Full-time',
    duration: '2020 - 2022',
    achievements: [
      'Built customer-facing dashboard serving 50K+ users with React and .NET Core',
      'Implemented automated testing suite, increasing code coverage from 40% to 85%',
      'Optimized database queries, reducing average response time from 800ms to 120ms',
      'Designed and shipped 15+ features end-to-end, from architecture to deployment',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    role: 'Software Engineer',
    company: 'Digital Solutions Ltd.',
    type: 'Full-time',
    duration: '2018 - 2020',
    achievements: [
      'Developed REST APIs and microservices handling 2M+ requests daily',
      'Introduced Docker containerization, streamlining local development and CI/CD pipeline',
      'Collaborated with cross-functional teams to deliver 3 major product releases',
      'Refactored legacy codebase, improving maintainability and reducing bug count by 50%',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    role: 'Junior Developer',
    company: 'CodeCraft Agency',
    type: 'Full-time',
    duration: '2016 - 2018',
    achievements: [
      'Built responsive web applications for 10+ clients using React and Node.js',
      'Participated in agile development process and daily standups',
      'Contributed to internal tooling and developer documentation',
      'Gained expertise in full-stack development and modern JavaScript ecosystem',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track record of delivering high-impact solutions at scale
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-background hidden md:block" />

                <motion.div
                  whileHover={{ x: 8 }}
                  className="md:ml-20 relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity`} />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.gradient} flex items-center justify-center`}>
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        <span className="text-xs px-3 py-1 bg-accent rounded-full text-muted-foreground border border-border w-fit">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex gap-3"
                        >
                          <div className="flex-shrink-0 mt-1.5">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          </div>
                          <p className="text-muted-foreground text-sm">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
