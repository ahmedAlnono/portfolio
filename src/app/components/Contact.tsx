import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Let's Build Something Great</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a challenging engineering problem or looking for a technical partner? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full">
                <h3 className="text-2xl mb-6">Get In Touch</h3>

                <div className="space-y-6 mb-8">
                  <motion.a
                    whileHover={{ x: 8 }}
                    href="mailto:contact@example.com"
                    className="flex items-center gap-4 p-4 bg-accent/50 hover:bg-accent rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="group-hover:text-blue-500 transition-colors">contact@example.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 8 }}
                    href="https://github.com/ahmedAlnono"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-accent/50 hover:bg-accent rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">GitHub</div>
                      <div className="group-hover:text-purple-500 transition-colors">github.com/ahmedAlnono</div>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 8 }}
                    href="https://www.linkedin.com/in/ahmed-alnono-187b09251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-accent/50 hover:bg-accent rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">LinkedIn</div>
                      <div className="group-hover:text-blue-600 transition-colors">linkedin.com/in/ahmed-alnono-187b09251</div>
                    </div>
                  </motion.a>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-semibold">Open to:</span> Full-time roles, contract work, technical consulting, and interesting engineering challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
