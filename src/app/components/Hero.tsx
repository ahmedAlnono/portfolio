import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-accent/50 backdrop-blur-sm rounded-full border border-border"
            >
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Ahmed Alnono
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6">
              Senior Full-Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Building scalable systems with a focus on performance, clean architecture, and engineering excellence.
              Specialized in distributed systems, real-time applications, and developer tooling.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg font-medium border border-border backdrop-blur-sm transition-colors"
              >
                Contact Me
              </motion.button>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/ahmedAlnono"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent hover:bg-accent/80 rounded-lg border border-border transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/ahmed-alnono-187b09251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent hover:bg-accent/80 rounded-lg border border-border transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:contact@example.com"
                className="p-3 bg-accent hover:bg-accent/80 rounded-lg border border-border transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-3xl" />

              <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl border border-border p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-mono">system.online</span>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-muted-foreground">
                      <span className="text-blue-500">const</span> developer = {'{'}
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-purple-500">name</span>: <span className="text-green-500">"Ahmed Alnono"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-purple-500">role</span>: <span className="text-green-500">"Senior Full-Stack"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-purple-500">focus</span>: [
                    </div>
                    <div className="pl-8 text-green-500">
                      "Scalability",
                    </div>
                    <div className="pl-8 text-green-500">
                      "Performance",
                    </div>
                    <div className="pl-8 text-green-500">
                      "Architecture"
                    </div>
                    <div className="pl-4 text-muted-foreground">],</div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-purple-500">status</span>: <span className="text-green-500">"available"</span>
                    </div>
                    <div className="text-muted-foreground">{'}'}</div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">85% match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
