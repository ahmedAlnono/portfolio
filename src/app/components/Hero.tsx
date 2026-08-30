import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { NetworkScene } from "./NetworkScene";
import { MagneticButton } from "./MagneticButton";

/* ─── Typing cursor for subtitle ─── */
function TypingSubtitle({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [text]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-muted-foreground text-xl sm:text-2xl">
      {displayed}
      <span
        className="inline-block w-[2px] h-[1.1em] bg-foreground ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </span>
  );
}

/* ─── Live metrics ticker ─── */
function useLiveMetrics() {
  const [metrics, setMetrics] = useState({ rps: 42448, p99: 12 });
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((m) => ({
        rps: m.rps + Math.round((Math.random() - 0.5) * 300),
        p99: Math.max(8, Math.round(m.p99 + (Math.random() - 0.5) * 2)),
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
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* ── Background network (full width, subtle) ─── */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
        <NetworkScene />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* ─── Left column ─── */}
          <div className="max-w-xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-muted/60 rounded-full border border-border"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                available for new opportunities
              </span>
            </motion.div>

            {/* Name — serif display */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-3 text-foreground tracking-tight leading-[1.05]"
            >
              Ahmed Alnono
            </motion.h1>

            {/* Subtitle with typing cursor */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 min-h-[2rem]"
            >
              <TypingSubtitle text="Senior Full-Stack Developer" />
            </motion.div>

            {/* Description with code icon */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex gap-3 mb-8"
            >
              <Code2
                size={20}
                className="text-muted-foreground flex-shrink-0 mt-0.5"
              />
              <p className="text-base text-muted-foreground leading-relaxed">
                Building scalable systems with a focus on performance, clean
                architecture, and engineering excellence — distributed systems,
                real-time applications, and developer tooling.
              </p>
            </motion.div>

            {/* Currently card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-8 p-5 bg-card border border-border rounded-xl shadow-sm max-w-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span
                  className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Currently
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building enterprise backend systems at{" "}
                <span className="text-primary font-medium">Material</span> &amp;
                exploring 3D web experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow"
              >
                View Projects
                <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="px-7 py-3 bg-background text-foreground rounded-lg font-medium border border-border hover:bg-muted transition-colors"
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-3"
            >
              {[
                {
                  href: "https://github.com/ahmedAlnono",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/ahmed-alnono-187b09251/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:ahmed.alnono.work@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ─── Right column — empty (network fills background) ─── */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ─── Bottom-right metrics bar ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-20 flex items-center gap-3 px-4 py-2.5 bg-card/90 backdrop-blur-md border border-border rounded-full shadow-sm"
      >
        <span
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          system performance:{" "}
          <span className="text-foreground font-medium">
            {metrics.rps.toLocaleString()} r/s
          </span>
        </span>
        <span className="px-2 py-0.5 bg-muted rounded text-[10px] font-medium text-muted-foreground border border-border">
          P99
        </span>
      </motion.div>
    </section>
  );
}
