import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "JPMorganChase Software Engineering Simulation",
    description: "Integrated Kafka with Spring Boot microservices and implemented transaction validation using JPA & H2.",
    points: [
      "Built REST APIs for balance queries",
      "Connected to external Incentive API",
      "Transaction validation with JPA"
    ],
    tech: ["Java", "Spring Boot", "Kafka", "JPA", "SQL"],
    github: "https://github.com/Shailendra1122", // Placeholder link based on profile
  },
  {
    title: "CoLab Connect",
    description: "A collaborative platform with REST APIs using Node.js & Express and MongoDB schema design.",
    points: [
      "REST APIs using Node.js & Express",
      "MongoDB schema design for scalable data",
      "Minimalist accessible UI using Tailwind"
    ],
    tech: ["Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/Shailendra1122",
  },
  {
    title: "Booking Management System",
    description: "Ticket booking and blogging web application with admin & user panels.",
    points: [
      "Laravel + PHP backend",
      "Admin & user management panels",
      "Responsive UI using Bootstrap"
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Shailendra1122",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <Code size={24} />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm text-gray-500">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
