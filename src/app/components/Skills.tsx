import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Code2, Server, Database, Cloud, MousePointer2 } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "from-blue-500/20 to-blue-500/5",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-purple-500/20 to-purple-500/5",
    skills: [
      { name: ".NET Core", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "from-emerald-500/20 to-emerald-500/5",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500/20 to-orange-500/5",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 90 },
    ],
  },
];

const COUNT = skillCategories.length;
const MAX_ROTATION = 45; // degrees a card leans when it's one step away
const VERTICAL_STEP = 22; // px each step ascends

/* -------------------------------------------------------------------------- */
/*  Skill bar — width is driven by scroll proximity to the card               */
/* -------------------------------------------------------------------------- */
function SkillBar({
  skill,
  cardIndex,
  scrollYProgress,
}: {
  skill: { name: string; level: number };
  cardIndex: number;
  scrollYProgress: MotionValue<number>;
}) {
  // proximity: 1 when this card is perfectly active, 0 when a full step away
  const width = useTransform(scrollYProgress, (p) => {
    const fractionalActive = p * (COUNT - 1);
    const offset = cardIndex - fractionalActive;
    const proximity = Math.max(0, 1 - Math.abs(offset));
    return `${proximity * skill.level}%`;
  });

  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground font-mono text-xs">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
        <motion.div
          style={{ width }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Skill card — position / rotation / opacity driven by scroll               */
/* -------------------------------------------------------------------------- */
function SkillCard({
  cat,
  index,
  cardWidth,
  cardHeight,
  scrollYProgress,
}: {
  cat: (typeof skillCategories)[number];
  index: number;
  cardWidth: number;
  cardHeight: number;
  scrollYProgress: MotionValue<number>;
}) {
  const stepX = cardWidth * 0.5;

  const transform = useTransform(scrollYProgress, (p) => {
    const fractionalActive = p * (COUNT - 1);
    const offset = index - fractionalActive;
    const rotation = -Math.max(-1, Math.min(1, offset)) * MAX_ROTATION;
    const translateX = offset * stepX;
    const translateY = -offset * VERTICAL_STEP;
    const scale = 1 - Math.min(Math.abs(offset), 2) * 0.04;
    return `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotation}deg) scale(${scale})`;
  });

  const opacity = useTransform(scrollYProgress, (p) => {
    const fractionalActive = p * (COUNT - 1);
    const absOffset = Math.abs(index - fractionalActive);
    return absOffset > 2 ? 0 : Math.max(0, 1 - absOffset * 0.22);
  });

  const zIndex = useTransform(scrollYProgress, (p) => {
    const fractionalActive = p * (COUNT - 1);
    const absOffset = Math.abs(index - fractionalActive);
    return Math.round(100 - absOffset * 10);
  });

  const borderGlow = useTransform(scrollYProgress, (p): number => {
    const fractionalActive = p * (COUNT - 1);
    const absOffset = Math.abs(index - fractionalActive);
    return Number(absOffset < 0.25);
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: cardWidth,
        height: cardHeight,
        transform,
        opacity,
        zIndex,
        willChange: "transform, opacity",
      }}
    >
      <motion.div
        style={{
          boxShadow: useTransform(borderGlow, [0, 1], [
            "0 12px 30px -12px rgba(0,0,0,0.25)",
            "0 25px 60px -15px rgba(0,0,0,0.45)",
          ])
        }}
        className={`h-full flex flex-col bg-gradient-to-br ${cat.color} backdrop-blur-sm border rounded-2xl p-6 overflow-hidden`}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center shrink-0">
            <cat.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-medium text-foreground">{cat.name}</h3>
        </div>

        <div className="space-y-4 flex-1">
          {cat.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              cardIndex={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                  */
/* -------------------------------------------------------------------------- */
export function Skills() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ cardWidth: 520, cardHeight: 420 });
  const [active, setActive] = useState(0);

  // 0 → first card active; 1 → last card active
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  /* responsive sizing — also accounts for short viewports */
  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cardWidth = Math.max(280, Math.min(520, vw - 64));
      const cardHeight = Math.max(300, Math.min(420, vh * 0.55));
      setDims({ cardWidth, cardHeight });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  /* keep dots in sync with the nearest snap point */
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.round(p * (COUNT - 1));
    if (i !== active) setActive(i);
  });

  /* clicking a dot jumps to the matching scroll offset */
  const jumpTo = (i: number) => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const scrollRange = el.offsetHeight - window.innerHeight;
    const target = top + (i / (COUNT - 1)) * scrollRange;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  // 90vh of scroll per transition + 100vh for the pinned window
  const sectionHeightVh = (COUNT - 1) * 90 + 100;

  return (
    <section
      id="skills"
      ref={wrapperRef}
      style={{ height: `${sectionHeightVh}vh` }}
      className="relative bg-muted/40"
      aria-label="Technical Skills"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* heading */}
          <div className="text-center mb-6 mt-6 sm:mb-10">
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-5xl font-medium mb-3 sm:mb-4 text-foreground"
            >
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              A curated toolkit refined over 5+ years of building production
              systems
            </p>
          </div>

          {/* 3D stage */}
          <div
            className="relative w-full"
            style={{
              height: dims.cardHeight + VERTICAL_STEP * 4,
              perspective: "1400px",
            }}
          >
            {skillCategories.map((cat, i) => (
              <SkillCard
                key={cat.name}
                cat={cat}
                index={i}
                cardWidth={dims.cardWidth}
                cardHeight={dims.cardHeight}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* dots + hint */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => jumpTo(i)}
                  aria-label={`Go to ${cat.name}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                />
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MousePointer2 className="w-3.5 h-3.5" />
              Scroll to rotate through categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}