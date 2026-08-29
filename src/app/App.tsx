import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorPing } from "./components/CursorPing";
import { ScrollProgress } from "./components/ScrollProgress";
import { TechMarquee } from "./components/TechMarquee";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navigation />
        <CursorPing />

        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
