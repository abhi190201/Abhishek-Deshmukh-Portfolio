import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Full-Stack",
    skills: ["MERN Stack", "MEAN Stack", "RESTful APIs", "Microservices"],
  },
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C/C++"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Angular", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "JWT Auth"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "Tools",
    skills: ["Git/GitHub", "Docker", "Postman", "JIRA", "VS Code"],
  },
];

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-32 pb-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="font-display text-h1 text-foreground mb-16"
        >
          Technical Skills<span className="text-primary">.</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: spring },
              }}
            >
              <h3 className="font-display text-base font-semibold text-foreground mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-card text-muted-foreground shadow-[var(--shadow-card)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
