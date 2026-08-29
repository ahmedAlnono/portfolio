import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { NetworkScene } from "./NetworkScene";
import { MagneticButton } from "./MagneticButton";
import { TypingText } from "./TypingText";
import { lazy, Suspense } from "react";
function useLiveMetrics() {
  const [metrics, setMetrics] = useState({
    rps: 42800,
    p99: 12,
    uptime: 99.98,
  });
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((m) => ({
        ...m,
        rps: m.rps + Math.round((Math.random() - 0.5) * 400),
        p99: Math.max(8, Math.round(m.p99 + (Math.random() - 0.5) * 3)),
      }));
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return metrics;
}

export function Hero() {
  const metrics = useLiveMetrics();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-muted rounded-full border border-border font-mono text-xs text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4 text-foreground tracking-tight"
            >
              Ahmed Alnono
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
            >
              <TypingText />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Building scalable systems with a focus on performance, clean
              architecture, and engineering excellence — distributed systems,
              real-time applications, and developer tooling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-8 p-4 bg-muted/50 border border-border rounded-xl max-w-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Currently
                </span>
              </div>
              <p className="text-sm text-foreground">
                Building enterprise backend systems at{" "}
                <span className="text-primary font-medium">Materialat</span> &
                exploring 3D web experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 shadow-sm"
              >
                View Projects
                <ArrowRight size={20} />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-transparent hover:bg-muted text-foreground rounded-lg font-medium border border-border transition-colors"
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/ahmedAlnono"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-border rounded-lg border border-border transition-colors"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/ahmed-alnono-187b09251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-border rounded-lg border border-border transition-colors"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:ahmed.alnono.work@gmail.com"
                className="p-3 bg-muted hover:bg-border rounded-lg border border-border transition-colors"
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: contained 3D panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-border bg-muted overflow-hidden">
              <div className="relative h-[420px]">
                <Suspense
                  fallback={
                    <div className="h-[420px] bg-muted animate-pulse rounded-2xl" />
                  }
                >
                  <NetworkScene />
                </Suspense>
              </div>
              <div className="border-t border-border bg-card px-6 py-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  live network
                </span>
                <div className="flex gap-4">
                  <span>
                    req/s{" "}
                    <span className="text-foreground">
                      {metrics.rps.toLocaleString()}
                    </span>
                  </span>
                  <span>
                    p99 <span className="text-foreground">{metrics.p99}ms</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
