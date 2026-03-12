import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maitree Pvt. Ltd",
    role: "Software Developer Intern",
    location: "Pune, India",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Engineered an AI Career Counseling Platform using Django and MySQL, achieving 95% accuracy and a 25% speed boost via optimized SQL indexing.",
      "Architected a MERN-based dashboard with JWT/RESTful APIs and Redux, increasing data-processing efficiency by 20%.",
    ],
  },
  {
    company: "CodeAlpha",
    role: "Python Developer Intern",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Engineered a Python Virtual Assistant using SpeechRecognition and TTS, reducing latency by 15% through async automation.",
      "Prototyped a MEAN stack interface with secure RESTful endpoints for real-time command logging.",
    ],
  },
];

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-32 pb-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="font-display text-h1 text-foreground mb-16"
        >
          Experience<span className="text-primary">.</span>
        </motion.h2>
        <div className="space-y-12 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-sm text-muted-foreground mb-4">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="font-mono text-sm text-muted-foreground leading-relaxed"
                  >
                    — {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
