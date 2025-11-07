// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Title / Subtitle (big + glitch) */}
        <header className="text-center mb-10">
          <h1
            className="font-justice text-5xl sm:text-6xl md:text-7xl lg:text-8xl neon-text color-glitch crt-stutter old-tv"
            data-text="この男は誰ですか?"
            style={{ color: "var(--neon-pink)" }}
          >
            この男は誰ですか?
          </h1>
          <h2
            className="font-pixel text-xl md:text-2xl neon-text mt-3"
            style={{ color: "var(--neon-blue)" }}
          >
            ABOUT THE AUTHOR
          </h2>
        </header>

        {/* Content layout: left profile column, right content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: profile column */}
          <aside className="lg:col-span-3 flex flex-col items-center gap-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                width: 260,
                height: 340,
                boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,77,166,0.06)",
                border: "6px solid rgba(255,255,255,0.04)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))"
              }}
            >
              <img
                src="/images/profile_pic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <a
              href="/VonZymons_Resume_2025.pdf"
              download
              className="inline-block font-pixel px-6 py-3 border-2 rounded text-center"
              style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)" }}
            >
              DOWNLOAD RESUME
            </a>
          </aside>

          {/* Right: main content (spans 9 cols) */}
          <main className="lg:col-span-9 space-y-8">

            {/* Intro text in a panel with padding and subtle border */}
            <section className="panel rounded-2xl p-6 md:p-8">
              <p className="font-term text-base md:text-lg" style={{ color: "#fff", lineHeight: 1.6 }}>
                I’m a 3rd Year Computer Science student studying in Cavite State University - Bacoor Campus, and I'm still learning how to speak the strange and beautiful language of code.
                Some nights, it feels like I’m just wiring together fragments of thought and rhythm, other nights, it
                feels like I’m building little worlds that hum softly under neon light. I love the obscure, the unseen corners of
                music and film, the way indie games make silence meaningful, and how poetry lingers in the space between
                words. Hotline Miami taught me that chaos can have grace, and vaporwave showed me that nostalgia can
                glow. This portfolio isn’t polished perfection, it’s an echo of who I am: curious, flawed, and trying to make
                something that feels honest. Every file, every flicker of light, every unfinished line of code, they all tell the
                story of a student still in love with the act of learning.
              </p>
            </section>

            {/* Three-box row: Basic Info | Skills & Tools | Education */}
            <section className="panel rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Info */}
                <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <h3 className="font-pixel text-sm mb-3" style={{ color: "var(--neon-pink)" }}>BASIC INFO</h3>
                  <ul className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.8 }}>
                    <li><strong className="text-white">Name:</strong> Von Zymon Raphael B. Patagnan</li>
                    <li><strong className="text-white">Birthday:</strong> 2002-10-30</li>
                    <li><strong className="text-white">Current:</strong> Frontend Developer / Student</li>
                  </ul>
                </div>

                {/* Skills & Tools */}
                <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <h3 className="font-pixel text-sm mb-3" style={{ color: "var(--neon-blue)" }}>SKILLS & TOOLS</h3>
                  <ul className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.8 }}>
                    <li>PHP</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript / HTML / CSS</li>
                    <li>Git</li>
                    <li>Java</li>
                    <li>MySQL</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                {/* Educational Background */}
                <div className="rounded-lg p-5" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <h3 className="font-pixel text-sm mb-3" style={{ color: "var(--accent)" }}>EDUCATIONAL BACKGROUND</h3>
                  <ul className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.8 }}>
                    <li>Bachelor of Science in Computer Science, Cavite State University - Bacoor Campus</li>
                    <li>TVL-ICT, AMA Computer College - Las Piñas (2020)</li>
                    <li>Johnny Ang National High School (2018)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="panel rounded-2xl p-5">
                <h4 className="font-pixel text-sm mb-3" style={{ color: "var(--neon-blue)" }}>EXPERIENCE</h4>
                <div className="font-term text-sm" style={{ color: "#fff", lineHeight: 1.6 }}>
                  <div className="mb-3">
                    <div className="font-pixel text-sm" style={{ color: "var(--neon-blue)" }}>Amateur Frontend Developer</div>
                    <div className="font-term text-xs" style={{ color: "var(--neon-cyan)" }}>Jan 2024 — Present</div>
                    <p className="mt-2">Built UI components, refined animations, and improved accessibility for internal tools and client microsites.</p>
                  </div>
                </div>
              </div>

              <div className="panel rounded-2xl p-5">
                <h4 className="font-pixel text-sm mb-3" style={{ color: "var(--neon-pink)" }}>QUICK FACTS</h4>
                <div className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.6 }}>
                  <div>Location: Philippines</div>
                  <div>Primary: React & Tailwind</div>
                  <div>Email: <a href="bjv.jkv@gmail.com" style={{ color: "var(--accent)" }}>bjv.jkv@gmail.com</a></div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
