// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import StatsGrid from "../components/StatsGrid";

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("revealed");
            obs.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const nodes = pageRef.current?.querySelectorAll(".reveal-on-scroll") ?? [];
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen relative px-6 py-12">
      {/* Hero Section - Centered Container */}
      <div className="flex justify-center">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <Hero />
        </div>
      </div>

      {/* Project / About / Contact Cards - Centered Container */}
      <section className="flex justify-center mt-20 mb-64">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <div className="flex flex-wrap justify-center items-start gap-12 lg:gap-16">
            {/* Projects Card */}
            <Link
              to="/projects"
              className="group pixel-card pixel-card--center w-[280px] md:w-[320px] lg:w-[360px] h-[300px] md:h-[320px] lg:h-[340px] transition-all shadow-lg reveal-on-scroll"
              aria-label="Go to projects"
              data-delay="80"
            >
              <div className="card-inner flex flex-col items-center justify-center p-6 gap-2 text-center">
                <div className="project-emoji mb-2" style={{ color: "var(--neon-pink)" }}>
                  📁
                </div>
                <h3 className="font-pixel text-xl md:text-2xl neon-text mb-1" style={{ color: "var(--neon-pink)" }}>
                  PROJECTS
                </h3>
                <p className="font-term text-sm text-center max-w-[85%]" style={{ color: "var(--neon-cyan)" }}>
                  View my work
                </p>
              </div>
            </Link>

            {/* About Card */}
            <Link
              to="/about"
              className="group pixel-card pixel-card--center w-[280px] md:w-[320px] lg:w-[360px] h-[300px] md:h-[320px] lg:h-[340px] transition-all shadow-lg reveal-on-scroll"
              aria-label="Go to about"
              data-delay="200"
            >
              <div className="card-inner flex flex-col items-center justify-center p-6 gap-2 text-center">
                <div className="project-emoji mb-2" style={{ color: "var(--neon-blue)" }}>
                  👤
                </div>
                <h3 className="font-pixel text-xl md:text-2xl neon-text mb-1" style={{ color: "var(--neon-blue)" }}>
                  ABOUT
                </h3>
                <p className="font-term text-sm text-center max-w-[85%]" style={{ color: "var(--neon-cyan)" }}>
                  Learn about me
                </p>
              </div>
            </Link>

            {/* Contact Card */}
            <Link
              to="/contact"
              className="group pixel-card pixel-card--center w-[280px] md:w-[320px] lg:w-[360px] h-[300px] md:h-[320px] lg:h-[340px] transition-all shadow-lg reveal-on-scroll"
              aria-label="Go to contact"
              data-delay="320"
            >
              <div className="card-inner flex flex-col items-center justify-center p-6 gap-2 text-center">
                <div className="project-emoji mb-2" style={{ color: "var(--accent)" }}>
                  ✉️
                </div>
                <h3 className="font-pixel text-xl md:text-2xl neon-text mb-1" style={{ color: "var(--accent)" }}>
                  CONTACT
                </h3>
                <p className="font-term text-sm text-center max-w-[85%]" style={{ color: "var(--neon-cyan)" }}>
                  Get in touch
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* StatsGrid - Centered Container */}
      <div className="flex justify-center mt-48">
        <div className="w-full reveal-on-scroll" style={{ maxWidth: "1000x" }} data-delay="420">
          <StatsGrid />
        </div>
      </div>

      {/* Welcome Message - Centered Container */}
      <section className="flex justify-center mt-24">
        <div className="w-full" style={{ maxWidth: "900px" }}>
          <div className="panel p-10 reveal-on-scroll" data-delay="520">
            <h2 className="font-pixel text-2xl mb-6 text-center cherry-shadow" style={{ color: "var(--accent)" }}>
              WELCOME TO MY PORTFOLIO
            </h2>
            <div className="font-term text-lg space-y-4 text-center" style={{ color: "var(--neon-cyan)" }}>
              <p>
                This is a web portfolio inspired by the neon-soaked aesthetics of Hotline Miami, "The Ghost~Pop Tape" by Devon Hendryx, and the vibrant aesthetic of late 2000s vaporwave culture.
              </p>
              <p>
                Built with React, Tailwind CSS, and a passion for retro-futuristic design. Navigate through my projects, learn about my skills, or get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}