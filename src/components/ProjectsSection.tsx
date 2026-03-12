import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Career Counseling System",
    description:
      "AI Career Counseling Platform achieving a 25% speed boost and 20% efficiency gain in data processing through optimized SQL indexing and schema design.",
    tech: ["Django", "JavaScript", "HTML5", "CSS3", "SQLite"],
    github: "#",
  },
  {
    title: "Face Attendance System",
    description:
      "Computer Vision pipeline using OpenCV and Pandas for real-time biometric tracking, achieving 100% data integrity and eliminating manual entry errors.",
    tech: ["Python", "OpenCV", "face_recognition", "Pandas"],
    github: "#",
  },
  {
    title: "EduQuest — Learning Platform",
    description:
      "MERN Learning Platform with Redux and Appwrite, boosting user engagement by 30% through optimized video streaming and RESTful API performance.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Appwrite"],
    github: "#",
  },
];

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-32 pb-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="font-display text-h1 text-foreground mb-16"
        >
          Selected Projects<span className="text-primary">.</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: spring },
              }}
              className="group bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-200"
            >
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded-md bg-background text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
