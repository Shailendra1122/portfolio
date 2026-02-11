import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm bg-slate-950">
        <p>© {new Date().getFullYear()} Shailendra Pratap Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
