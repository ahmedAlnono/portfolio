import { useRef } from "react";
import { motion } from "motion/react";
import { Calendar, Network, Puzzle, Rocket, Circle, Code2 } from "lucide-react";
import { CodeCard } from "./CodeCard";
import { GlanceCard } from "./GlanceCard";
import { TechMarquee } from "../TechMarquee";

export function About() {
  return (
    <section id="about" className="relative bg-white">
      {/* Subtle circuit background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h40v20h40v40h-20v20h-60zM140 60h40v40h-20v20h-40v-20h20zM60 140h20v20h40v20h-60zM160 140v40h-40v-20h20v-20z' fill='none' stroke='%23000' stroke-width='1'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='100' cy='80' r='2'/%3E%3Ccircle cx='180' cy='100' r='2'/%3E%3Ccircle cx='60' cy='180' r='2'/%3E%3Ccircle cx='160' cy='180' r='2'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Tech marquee */}
      <TechMarquee />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-medium mb-3 text-gray-900 tracking-tight"
            style={{
              fontFamily: "var(--font-sans, 'Space Grotesk', sans-serif)",
            }}
          >
            Engineering <span className="text-blue-500">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Architecting resilient, production-ready systems with clean
            architecture
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT — About Me card (3/5 width) */}
          <div className="lg:col-span-3">
            <CodeCard title="About Me" lineCount={18}>
              <h3
                className="text-2xl font-medium mb-4 text-gray-900"
                style={{
                  fontFamily: "var(--font-sans, 'Space Grotesk', sans-serif)",
                }}
              >
                About Me
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  With over{" "}
                  <span className="text-blue-500 font-semibold">5 years</span>{" "}
                  of experience building production systems at scale, I
                  specialize in architecting resilient, high-performance
                  applications that serve real users in production.
                </p>

                <p>
                  My expertise spans the full stack — from crafting clean
                  interfaces with <TechPill>React</TechPill> and{" "}
                  <TechPill>TypeScript</TechPill>, to designing distributed
                  backend systems with <TechPill>.NET Core</TechPill> and{" "}
                  <TechPill>Node.js</TechPill>.
                </p>

                <p>
                  I'm passionate about developer experience, clean architecture,
                  and measurable performance improvements.
                </p>
              </div>
            </CodeCard>
          </div>
          {/* RIGHT — At a Glance grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <GlanceCard
                label="Engineering Experience"
                codeSymbol="{}"
                accent={
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-gray-900">
                      5+
                    </span>
                    <span className="text-xs text-gray-500">Years</span>
                  </div>
                }
              />
              <GlanceCard
                label="Scalable Systems"
                icon={Network}
                codeSymbol="</>"
              />
              <GlanceCard
                label="Clean Architecture"
                icon={Puzzle}
                codeSymbol="λ"
              />
              <GlanceCard label="Performance" icon={Rocket} codeSymbol="//" />
              <GlanceCard label="Active Projects" icon={Code2} codeSymbol="#" />
              <GlanceCard
                label="Available"
                codeSymbol="≡"
                accent={
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
                    <span className="relative block w-5 h-5 rounded-full bg-green-500" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Inline tech pill — matches the screenshot's highlighted keywords */
function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-900 text-[14px] font-medium align-baseline">
      {children}
    </span>
  );
}
