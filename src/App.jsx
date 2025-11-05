import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toggleVhs, setVhsOn, isVhsOn } from "./lib/theme";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Nav from "./components/Nav";

export default function App() {
  const [vhsEnabled, setVhsEnabled] = useState(true);

  useEffect(() => {
    // Initialize VHS on mount
    setVhsOn(true);
    setVhsEnabled(true);

    // 'V' key toggles VHS
    const handleKeyDown = (e) => {
      if (e.key?.toLowerCase() === "v") {
        toggleVhs();
        setVhsEnabled(isVhsOn());
      }


      <>
      {/* other app layout/components */}
      <div className="vhs-bg-slideshow" aria-hidden="true">
        <div className="slide s1" />
        <div className="slide s2" />
        <div className="slide s3" />
        <div className="slide s4" />
        <div className="slide s5" />
      </div>
    </>
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        {/* VHS Overlays - Global */}
        <div className="crt-vignette" aria-hidden="true" />
        <div className="neon-gradient-overlay" aria-hidden="true" />
        <div className="vhs-overlay" aria-hidden="true" />

        {/* Navigation */}
        <Nav vhsOn={vhsEnabled} />

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="relative z-10 px-4 py-8 text-center border-t-2 mt-16" 
          style={{ 
            borderColor: 'var(--accent)', 
            background: 'rgba(0,0,0,0.8)' 
          }}>
          <p className="font-term text-sm" style={{ color: 'var(--neon-pink)' }}>
            © {new Date().getFullYear()} VON ZYMON'S WEB PORTFOLIO
          </p>
          <p className="font-pixel text-xs mt-2" style={{ color: 'var(--neon-blue)', fontSize: '8px' }}>
            [ REACT × TAILWIND × HOTLINE MIAMI AESTHETIC ]
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}