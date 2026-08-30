import { motion } from "motion/react";
import { TiltCard } from "../TiltCard";
interface CodeCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  lineCount?: number;
}

export function CodeCard({
  title,
  children,
  className = "",
  lineCount = 17,
}: CodeCardProps) {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}
      >
        {/* Header bar - more compact */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 font-mono">
            {title}
          </span>
          <div className="flex items-center gap-1 text-gray-400">
            <span className="text-[10px] font-mono">&lt;&gt;</span>
            <span className="text-[10px] font-mono">&lt;/&gt;</span>
            <span className="text-[10px] font-mono">&gt;</span>
          </div>
        </div>

        {/* Body with line numbers */}
        <div className="relative flex">
          {/* Line numbers gutter - tighter spacing */}
          <div className="flex-shrink-0 py-4 px-2 text-right select-none border-r border-gray-100 bg-gray-50/30">
            {Array.from({ length: lineCount }, (_, i) => (
              <div
                key={i}
                className="text-[9px] leading-[1.5] text-gray-300 font-mono"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 py-5 px-5">{children}</div>
        </div>
      </motion.div>
    </TiltCard>
  );
}
