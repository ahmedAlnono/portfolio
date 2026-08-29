import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedStats } from "./AnimatedStats";
import { SkillBars } from "./SkillBars";
import { ExpertiseCards } from "./ExpertiseCards";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bioY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);
  const statsY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const skillsY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
  const expertiseY = useTransform(scrollYProgress, [0.6, 0.9], [40, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-4xl md:text-5xl font-medium mb-4 text-foreground"
        >
          Engineering <span className="text-primary">Excellence</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Building scalable systems with clean architecture and modern
          technologies
        </p>
      </motion.div>

      <motion.div
        style={{ y: bioY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-medium mb-4 text-foreground">
            About Me
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over <span className="text-primary font-medium">5 years</span>{" "}
            of experience building production systems at scale, I specialize in
            architecting resilient, high-performance applications that serve
            real users in production.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My expertise spans the full stack — from crafting clean interfaces
            with <span className="text-foreground font-medium">React</span> and{" "}
            <span className="text-foreground font-medium">TypeScript</span>, to
            designing distributed backend systems with{" "}
            <span className="text-foreground font-medium">.NET Core</span> and{" "}
            <span className="text-foreground font-medium">Node.js</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm passionate about developer experience, clean architecture, and
            measurable performance improvements.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: statsY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h3 className="text-2xl font-medium text-center mb-8 text-foreground">
          Impact by the Numbers
        </h3>
        <AnimatedStats />
      </motion.div>

      <motion.div
        style={{ y: skillsY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-card border border-border rounded-2xl p-8 md:p-15">
          <h3 className="text-2xl font-medium text-center mb-8 text-foreground">
            Technical Proficiency
          </h3>
          <SkillBars />
        </div>
      </motion.div>

      <motion.div
        style={{ y: expertiseY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h3 className="text-2xl font-medium text-center mb-8 text-foreground">
          Areas of Expertise
        </h3>
        <ExpertiseCards />
      </motion.div>
    </section>
  );
}
