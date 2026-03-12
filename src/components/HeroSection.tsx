import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const HeroSection = () => {
  return (
    <section className="min-h-[80svh] flex items-end pb-32 pt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-4">
            Software Developer — Full Stack Developer
          </p>
          <h1 className="font-display text-display text-foreground mb-6 max-w-4xl">
            Abhishek Deshmukh<span className="text-primary">.</span>
          </h1>
          <p className="font-mono text-base text-muted-foreground max-w-[60ch] leading-relaxed mb-10">
            Full-Stack Developer architecting robust and scalable web applications 
            with the MERN stack, Django, and modern cloud technologies. Based in Pune, India.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-[0_0_0_1px_hsl(var(--border))] bg-transparent text-foreground font-mono text-sm font-medium"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
