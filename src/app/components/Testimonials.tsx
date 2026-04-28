import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechVision Inc.',
    quote: 'Ahmed Alnono transformed our infrastructure, reducing costs by 40% while improving reliability. Their expertise in distributed systems and architectural thinking is exceptional. A true senior engineer who delivers measurable results.',
    avatar: 'SC',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Engineering Manager',
    company: 'DataFlow Systems',
    quote: 'Working with Ahmed Alnono elevated our entire team. They introduced best practices that improved our deployment frequency by 10x and mentored junior developers effectively. An invaluable technical leader.',
    avatar: 'MR',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Jennifer Park',
    role: 'Product Director',
    company: 'CloudScale',
    quote: 'Ahmed Alnono has a rare combination of deep technical skills and product thinking. They architected our real-time analytics platform that now serves 100K+ concurrent users with sub-second latency. Exceptional problem-solver.',
    avatar: 'JP',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'David Thompson',
    role: 'Lead Developer',
    company: 'InnovateTech',
    quote: "Ahmed Alnono's code quality and system design expertise set the standard for our team. They reduced our API response times by 60% through thoughtful optimization and caching strategies. A pleasure to collaborate with.",
    avatar: 'DT',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Emily Watson',
    role: 'VP Engineering',
    company: 'ScaleSoft',
    quote: 'Ahmed Alnono led our migration to microservices with minimal downtime and delivered ahead of schedule. Their ability to balance technical excellence with business impact makes them an outstanding engineer.',
    avatar: 'EW',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What engineering leaders and teams say about working together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-2xl blur opacity-20`} />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-muted-foreground/30 mb-6" />

                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-semibold`}>
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 bg-accent hover:bg-accent/80 rounded-full border border-border transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 bg-accent hover:bg-accent/80 rounded-full border border-border transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
