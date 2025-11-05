import { toggleVhs } from "../lib/theme";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="hotline-floor p-8 border-2 border-neon-pink">
        <h2
          className="font-justice text-3xl hotline-gradient-text color-glitch old-tv heading-toggle text-center mb-6"
          data-text="ABOUT ME"
          onClick={() => toggleVhs()}
        >
          ABOUT ME
        </h2>
        
        <div className="bg-black/50 p-6 border border-neon-blue mb-6">
          <p className="text-white font-vt323 text-xl mb-4">
            Course: DCIT 26 — Application Development
          </p>
          <p className="text-neon-cyan font-vt323 text-lg">
            This portfolio demonstrates React, Tailwind and a Hotline Miami inspired aesthetic with VHS/CRT effects.
          </p>
        </div>

        <div className="bg-black/50 p-6 border border-hotline-purple">
          <p className="text-white font-vt323 text-lg">
            A digital artist and web developer with a passion for retro aesthetics and neon-soaked visuals inspired by Hotline Miami and the works of Wim Wenders.
          </p>
        </div>
      </div>
    </section>
  );
}
