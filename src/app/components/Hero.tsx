import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { NetworkScene } from "./NetworkScene";
import { MagneticButton } from "./MagneticButton";
import SculptureHero from "./ui/liquid-sculpture-hero";

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
        <SculptureHero />

      {/* ─── Content ─── */}
     

      {/* ─── Bottom-right metrics bar ─── */}

    </section>
  );
}
