import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, Check, Download } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-muted/40">
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
            Let's Build Something Great
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a challenging engineering problem or looking for a technical
            partner? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-medium mb-6 text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-4 mb-8">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:ahmed.alnono.work@gmail.com"
                  className="flex items-center gap-4 p-4 bg-muted hover:bg-border rounded-lg transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground">
                      ahmed.alnono.work@gmail.com
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://github.com/ahmedAlnono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted hover:bg-border rounded-lg transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="text-foreground">
                      github.com/ahmedAlnono
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://www.linkedin.com/in/ahmed-alnono-187b09251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted hover:bg-border rounded-lg transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="text-foreground">
                      linkedin.com/in/ahmed-alnono-187b09251
                    </div>
                  </div>
                </motion.a>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Open to:</span>{" "}
                  Full-time roles, contract work, technical consulting, and
                  interesting engineering challenges.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-6 text-foreground">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
              <MagneticButton
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/portfolio/Ahmed_Alnono_CV.pdf";
                  link.download = "Ahmed_Alnono_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full px-8 py-4 bg-muted hover:bg-border rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume (PDF)
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
