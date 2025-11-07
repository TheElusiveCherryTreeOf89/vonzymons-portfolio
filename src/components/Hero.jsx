// src/components/Hero.jsx
import React from "react";
import { toggleVhs } from "../lib/theme";

export default function Hero() {
  const handleToggle = () => {
    toggleVhs();
  };

  return (
    <section className="w-full max-w-6xl mx-auto text-center mb-16 py-8">
      {/* Main Title with Glitch Effect - Clickable */}
      <div className="crt-stutter mb-4">
        <h1
          className="font-justice text-5xl sm:text-6xl md:text-7xl lg:text-8xl neon-text color-glitch old-tv cursor-pointer transition-transform hover:scale-105"
          data-text="ネオンキッチン 2025"
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
          aria-label="Toggle Neon Kitchen mode"
          style={{
            color: 'var(--neon-pink)',
            textShadow: `
              0 0 10px var(--accent),
              0 0 20px var(--accent),
              0 0 30px var(--neon-pink),
              0 0 40px var(--neon-pink),
              3px 3px 0 var(--neon-blue),
              -3px -3px 0 var(--neon-purple)
            `
          }}
        >
          ネオンキッチン 2025
        </h1>
      </div>

      {/* Subtitle - Clickable */}
      <h2
        className="font-justice text-3xl sm:text-4xl md:text-5xl lg:text-6xl neon-text mt-6 cursor-pointer transition-transform hover:scale-105"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        aria-label="Toggle Neon Kitchen mode"
        style={{
          color: 'var(--neon-blue)',
          textShadow: `
            0 0 10px var(--neon-blue),
            0 0 20px var(--neon-purple),
            2px 2px 0 var(--accent)
          `
        }}
      >
        VON ZYMON'S WEB PORTFOLIO
      </h2>

      {/* VHS Toggle Hint - Updated text */}
      <div className="mt-8">
        <p
          className="font-pixel text-xs sm:text-sm neon-pulse inline-block px-6 py-3 border-2"
          style={{
            color: 'var(--neon-pink)',
            borderColor: 'var(--neon-pink)',
            background: 'rgba(255, 77, 166, 0.1)'
          }}
        >
          [ PRESS 'V' OR CLICK TITLE TO TOGGLE "NEON KITCHEN" MODE ]
        </p>
      </div>

      {/* Decorative Scanline */}
      <div className="mt-8 w-full h-1 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg,
              transparent 0%,
              var(--accent) 25%,
              var(--neon-pink) 50%,
              var(--neon-blue) 75%,
              transparent 100%
            )`,
            animation: 'scanlineMove 3s linear infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes scanlineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}