import { motion } from "framer-motion";

const skillsData = {
  "Programming Languages": ["Java", "C", "PHP"],
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  "Backend": ["Spring Boot", "Node.js", "Express", "Laravel"],
  "Systems & Architecture": ["Kafka", "REST APIs", "JPA", "Hibernate"],
  "Databases": ["SQL", "MongoDB", "H2"],
  "Tools & DevOps": ["Git", "GitHub", "Maven", "VS Code"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-gray-300 text-sm rounded-full border border-slate-700 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
