import { motion } from "framer-motion";

const education = [
  {
    school: "PES Modern College of Engineering, Pune",
    degree: "Master of Computer Applications (MCA)",
    period: "Aug 2023 – Jun 2025",
    cgpa: "7.73 / 10",
  },
  {
    school: "MGM's College of Computer Science and IT, Nanded",
    degree: "B.Sc. Computer Science",
    period: "Sep 2020 – Jun 2023",
    cgpa: "8.97 / 10",
  },
];

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const EducationSection = () => {
  return (
    <section id="education" className="pt-32 pb-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="font-display text-h1 text-foreground mb-16"
        >
          Education<span className="text-primary">.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]"
            >
              <p className="font-mono text-xs text-muted-foreground mb-2">{edu.period}</p>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">
                {edu.degree}
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-3">{edu.school}</p>
              <p className="font-mono text-sm font-medium text-primary">CGPA: {edu.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
