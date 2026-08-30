import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { TiltCard } from "../TiltCard";

interface GlanceCardProps {
  icon?: LucideIcon;
  label: string;
  value?: string;
  accent?: React.ReactNode;
  codeSymbol?: string;
}

export function GlanceCard({
  icon: Icon,
  label,
  value,
  accent,
  codeSymbol = "</>",
}: GlanceCardProps) {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-200">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 font-mono">
            {label}
          </span>
          <span className="text-[10px] font-mono text-gray-400">
            {codeSymbol}
          </span>
        </div>

        {/* Body with line numbers */}
        <div className="relative flex">
          {/* Line numbers */}
          <div className="flex-shrink-0 py-4 px-2 text-right select-none border-r border-gray-100 bg-gray-50/30">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="text-[9px] leading-[1.5] text-gray-300 font-mono"
              >
                {num}
              </div>
            ))}
            <div className="text-[9px] leading-[1.5] text-gray-300 font-mono">
              ...
            </div>
          </div>

          {/* Content — bigger and centered */}
          <div className="flex-1 py-6 px-3 flex items-center justify-center">
            {accent ??
              (Icon && (
                <Icon size={52} strokeWidth={1.5} className="text-gray-700" />
              ))}
            {value && (
              <span className="text-sm font-medium text-gray-900">{value}</span>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}
