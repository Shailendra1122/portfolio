import { motion } from "framer-motion";
import { User, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-500">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <p className="text-gray-400">
              B.Tech in Computer Science & Engineering
              <br />
              <span className="text-blue-400">KIIT Bhubaneswar</span>
            </p>
            <p className="text-gray-500 mt-2 text-sm">CGPA: 7.4</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-500">
              <User size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">My Journey</h3>
            <p className="text-gray-400">
              I have a strong interest in backend systems, REST APIs, and scalable architectures. I love solving complex problems and optimizing performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-500">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Goals</h3>
            <p className="text-gray-400">
              Ideally looking for internship and full-time opportunities where I can contribute to backend development and distributed systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
