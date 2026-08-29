import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Ping = { id: number; x: number; y: number; dx: number; dy: number };

const IDLE_DELAY = 2200;
const PING_LIFETIME_S = 2.2;

export function CursorPing() {
  const [pings, setPings] = useState<Ping[]>([]);
  const [disabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const nextId = useRef(0);

  useEffect(() => {
    if (disabled) return;

    const scheduleIdlePing = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        const id = nextId.current++;
        setPings((p) => [
          ...p,
          {
            id,
            x: lastPos.current.x,
            y: lastPos.current.y,
            dx: (Math.random() - 0.5) * 30,
            dy: -Math.random() * 30 - 10,
          },
        ]);
      }, IDLE_DELAY);
    };

    const handleMove = (e: MouseEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      scheduleIdlePing();
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <AnimatePresence>
        {pings.map((ping) => (
          <motion.span
            key={ping.id}
            initial={{ opacity: 0.55, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 3, x: ping.dx, y: ping.dy }}
            exit={{ opacity: 0 }}
            transition={{ duration: PING_LIFETIME_S, ease: 'easeOut' }}
            onAnimationComplete={() =>
              setPings((p) => p.filter((item) => item.id !== ping.id))
            }
            style={{
              position: 'absolute',
              left: ping.x - 3,
              top: ping.y - 3,
              width: 6,
              height: 6,
              borderRadius: '9999px',
              backgroundColor: 'var(--primary)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}