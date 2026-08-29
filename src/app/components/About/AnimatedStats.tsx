import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Users, Code, Star } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 5, icon: Code, suffix: '+' },
  { label: 'Projects Delivered', value: 10, icon: TrendingUp, suffix: '+' },
  { label: 'Global Clients', value: 10, icon: Users, suffix: '+' },
  { label: 'Code Reviews', value: 32, icon: Star, suffix: '' },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-medium text-foreground">
      {count}{suffix}
    </span>
  );
};

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="bg-card border border-border rounded-xl p-6 h-full transition-shadow hover:shadow-md"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <stat.icon className="w-5 h-5 text-primary" />
          </div>
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}