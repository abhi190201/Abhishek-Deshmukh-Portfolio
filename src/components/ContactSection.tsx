import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const ContactSection = () => {
  return (
    <section id="contact" className="pt-16 pb-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="font-display text-h1 text-foreground mb-6"
        >
          Let's Connect<span className="text-primary">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.05 }}
          className="font-mono text-sm text-muted-foreground max-w-[50ch] leading-relaxed mb-10"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="mailto:dabhishek641@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium"
          >
            <Mail className="w-4 h-4" /> dabhishek641@gmail.com
          </motion.a>
          <motion.a
            href="tel:+917020881572"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-[0_0_0_1px_hsl(var(--border))] bg-transparent text-foreground font-mono text-sm font-medium"
          >
            <Phone className="w-4 h-4" /> +91 7020881572
          </motion.a>
        </motion.div>
        <div className="flex gap-4 mt-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
