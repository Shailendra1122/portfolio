import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import { ArrowUp } from "lucide-react";
import "./index.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-tr from-[#fff8f5] via-[#fdfbfd] to-[#fffdfd]">
      
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer Details block */}
      <footer className="w-full py-8 border-t border-[#f8e5db] bg-white/50 text-center font-sans text-xs text-slate-400 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Shailendra Pratap Singh. All rights reserved.</p>
          <div className="flex gap-4 font-mono text-[10px] text-slate-500">
            <span>REACT 19.2</span>
            <span>•</span>
            <span>TAILWIND 4.0</span>
            <span>•</span>
            <span>VITE</span>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button from design screenshot */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-brand-purple text-white flex items-center justify-center hover:opacity-90 shadow-lg shadow-purple-100 transition-all duration-300 hover:-translate-y-1 z-[999] cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}

export default App;
