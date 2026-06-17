import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import TrailingCursor from "./components/TrailingCursor";
import { ArrowUp } from "lucide-react";
import "./index.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0F172A]">
      {/* Trailing Cursor Effect */}
      <TrailingCursor />

      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF5F8F]/[0.04] blur-[120px] animate-orb" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/[0.06] blur-[100px] animate-orb" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#06B6D4]/[0.03] blur-[80px] animate-orb" style={{ animationDelay: '6s' }} />
        {/* Grid bg overlay */}
        <div className="absolute inset-0 grid-bg opacity-100" />
      </div>

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections — pt-16 offsets the fixed navbar */}
      <main className="relative z-10 w-full flex flex-col items-center pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 border-t border-white/[0.06] bg-white/[0.02] text-center font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026{" "}
            <span className="gradient-text font-semibold">Shailendra Pratap Singh</span>. Crafted with ❤️
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-slate-600 items-center">
            <span className="text-brand-pink">REACT 19</span>
            <span className="text-slate-600">•</span>
            <span className="text-brand-purple">TAILWIND 4</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">VITE</span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full btn-primary flex items-center justify-center z-[9999] cursor-pointer shadow-lg"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

export default App;
