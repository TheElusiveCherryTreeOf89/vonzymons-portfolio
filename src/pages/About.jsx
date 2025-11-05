// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto grid gap-12">

        {/* HERO: intro with right-side profile image */}
        <section className="panel rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left: text (spans 2 cols on lg) */}
            <div className="lg:col-span-2">
              <h1 className="font-pixel text-3xl md:text-4xl neon-text mb-3" style={{ color: "var(--neon-pink)" }}>
                ABOUT
              </h1>

              <p className="font-term text-base md:text-lg max-w-2xl" style={{ color: "var(--neon-cyan)", lineHeight: 1.6 }}>
                I craft focused, atmospheric web experiences — small apps and portfolios that balance visual mood with clear interactions.
                My approach blends component-driven development with careful attention to accessibility and micro-interactions.
                I build with React, Tailwind CSS, and a design-forward mindset.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="px-3 py-1 rounded-md font-pixel text-xs" style={{ background: "rgba(255,255,255,0.02)", color: "var(--neon-cyan)", border: "1px solid rgba(255,255,255,0.04)" }}>React</div>
                <div className="px-3 py-1 rounded-md font-pixel text-xs" style={{ background: "rgba(255,255,255,0.02)", color: "var(--neon-cyan)", border: "1px solid rgba(255,255,255,0.04)" }}>Tailwind</div>
                <div className="px-3 py-1 rounded-md font-pixel text-xs" style={{ background: "rgba(255,255,255,0.02)", color: "var(--neon-cyan)", border: "1px solid rgba(255,255,255,0.04)" }}>shadcn/ui</div>
                <div className="px-3 py-1 rounded-md font-pixel text-xs" style={{ background: "rgba(255,255,255,0.02)", color: "var(--neon-cyan)", border: "1px solid rgba(255,255,255,0.04)" }}>Accessibility</div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="font-pixel px-4 py-2 border-2 rounded"
                  style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)" }}
                >
                  DOWNLOAD RESUME
                </a>
                <a
                  href="#contact"
                  className="font-term px-4 py-2 rounded"
                  style={{ color: "var(--neon-cyan)" }}
                >
                  
                </a>
              </div>
            </div>

            {/* Right: profile image (keeps fixed size, won't stretch) */}
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: 200,
                  height: 200,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,77,166,0.06)",
                  border: "3px solid rgba(255,255,255,0.04)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))"
                }}
              >
                <img
                  src="/images/profile_pic.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS HERO */}
        <section className="panel rounded-2xl p-8">
          <h2 className="font-pixel text-lg mb-4" style={{ color: "var(--neon-blue)" }}>Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Tailwind CSS", "shadcn/ui", "JavaScript",
              "HTML", "CSS", "Git", "Figma", "Accessibility", "Animations"
            ].map((s) => (
              <div
                key={s}
                className="px-4 py-2 rounded-lg font-pixel text-sm"
                style={{ background: "rgba(255,255,255,0.01)", color: "var(--neon-cyan)", border: "1px solid rgba(255,255,255,0.03)" }}
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE HERO */}
        <section className="panel rounded-2xl p-8">
          <h2 className="font-pixel text-lg mb-6" style={{ color: "var(--neon-pink)" }}>Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
              <div className="font-pixel text-sm" style={{ color: "var(--neon-blue)" }}>Frontend Developer — Sample Co.</div>
              <div className="font-term text-xs mb-3" style={{ color: "var(--neon-cyan)" }}>Jan 2024 — Present · Remote</div>
              <p className="font-term text-sm" style={{ color: "#fff", lineHeight: 1.6 }}>
                Built UI components, refined animations, and improved accessibility for internal tools and client microsites.
              </p>
            </article>

            <article className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
              <div className="font-pixel text-sm" style={{ color: "var(--neon-blue)" }}>Freelance & Student Projects</div>
              <div className="font-term text-xs mb-3" style={{ color: "var(--neon-cyan)" }}>2019 — 2023 · Various</div>
              <p className="font-term text-sm" style={{ color: "#fff", lineHeight: 1.6 }}>
                Delivered polished portfolios and small web apps focusing on UX clarity and UI polish.
              </p>
            </article>
          </div>
        </section>

        {/* QUICK FACTS HERO */}
        <section className="panel rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-pixel text-xs mb-2" style={{ color: "var(--neon-pink)" }}>QUICK FACTS</div>
              <div className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.6 }}>
                <div>Location: Philippines</div>
                <div>Primary: React & Tailwind</div>
                <div>Email: <a href="mailto:you@domain.tld" style={{ color: "var(--accent)" }}>you@domain.tld</a></div>
              </div>
            </div>

            <div className="text-right">
              <a href="/resume.pdf" download className="inline-block font-pixel px-4 py-2 border-2 rounded" style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)" }}>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
