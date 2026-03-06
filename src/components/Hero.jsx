import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-4">
            Aspiring Software Engineer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Shailendra Pratap <span className="text-blue-500">Singh</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a B.Tech Computer Science student passionate about{" "}
            <span className="text-gray-200 font-medium">backend development</span>,
            <span className="text-gray-200 font-medium"> distributed systems</span>, and
            building
            <span className="text-gray-200 font-medium"> scalable applications</span> using
            Java and modern web technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Shailendra2211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors border border-slate-700"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shailendra-pratap-singh-067281362"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors border border-slate-700"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download functionality would be implemented here!");
              }}
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-gray-500" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
