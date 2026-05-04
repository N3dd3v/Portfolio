import { useEffect, useState } from "react";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";



export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`app-root ${loaded ? "app-loaded" : ""}`}>
      <div className="scanline" />
      <Navbar />    
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <span className="mono">&gt; clivia.dev © {new Date().getFullYear()} — built with React</span>
      </footer>
    </div>
  );
}
