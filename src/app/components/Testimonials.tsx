import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVision Inc.",
    quote:
      "Ahmed Alnono transformed our infrastructure, reducing costs by 40% while improving reliability. Their expertise in distributed systems and architectural thinking is exceptional. A true senior engineer who delivers measurable results.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "DataFlow Systems",
    quote:
      "Working with Ahmed Alnono elevated our entire team. They introduced best practices that improved our deployment frequency by 10x and mentored junior developers effectively. An invaluable technical leader.",
    avatar: "MR",
  },
  {
    name: "Jennifer Park",
    role: "Product Director",
    company: "CloudScale",
    quote:
      "Ahmed Alnono has a rare combination of deep technical skills and product thinking. They architected our real-time analytics platform that now serves 100K+ concurrent users with sub-second latency. Exceptional problem-solver.",
    avatar: "JP",
  },
  {
    name: "David Thompson",
    role: "Lead Developer",
    company: "InnovateTech",
    quote:
      "Ahmed Alnono's code quality and system design expertise set the standard for our team. They reduced our API response times by 60% through thoughtful optimization and caching strategies. A pleasure to collaborate with.",
    avatar: "DT",
  },
  {
    name: "Emily Watson",
    role: "VP Engineering",
    company: "ScaleSoft",
    quote:
      "Ahmed Alnono led our migration to microservices with minimal downtime and delivered ahead of schedule. Their ability to balance technical excellence with business impact makes them an outstanding engineer.",
    avatar: "EW",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl sm:text-5xl font-medium mb-4 text-foreground"
          >
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What engineering leaders and teams say about working together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-muted hover:bg-border rounded-full transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 bg-muted hover:bg-border rounded-full transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
