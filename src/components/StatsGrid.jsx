import React, { useState, useEffect } from "react";
import { isVhsOn } from "../lib/theme";
import PROJECTS from "../data/projects";

export default function StatsGrid() {
  const [vhsStatus, setVhsStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVhsStatus(isVhsOn());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "PROJECTS", value: PROJECTS.length.toString().padStart(2, "0"), color: "var(--neon-pink)" },
    { label: "SKILLS", value: "8", color: "var(--neon-blue)" },
    { label: "GRADE", value: "B+", color: "var(--accent)" },
    { label: "NEON KITCHEN MODE", value: vhsStatus ? "ON" : "OFF", color: vhsStatus ? "var(--neon-cyan)" : "var(--muted)" }
  ];

  return (
    <section
      className="max-w-6xl mx-auto py-20 px-6 relative reveal-on-scroll"
      style={{ zIndex: 120 }}
    >
      {/* auto-fit grid: tiles keep a sensible min width and fill available space */}
      <div
        className="grid gap-12 justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          alignItems: "start",
          justifyItems: "center",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-6 text-center transition-transform hover:scale-105 panel shadow-lg flex flex-col items-center justify-center"
            style={{
              border: `3px solid ${stat.color}`,
              background: "rgba(0, 0, 0, 0.75)",
              boxShadow: `0 8px 24px ${stat.color}44, inset 0 0 10px ${stat.color}22`,
              width: "100%",
              maxWidth: 340,          // prevents tiles from getting too wide on very large screens
              minHeight: "10rem",
            }}
          >
            <div className="font-pixel text-xs mb-3" style={{ color: stat.color }}>
              {stat.label}
            </div>

            <div
              className="font-justice text-3xl md:text-4xl cherry-shadow"
              style={{
                color: stat.color,
                textShadow: `0 0 12px ${stat.color}, 0 0 25px ${stat.color}`,
              }}
            >
              {stat.value}
            </div>

            <div
              className="mt-4 w-1/2 h-[3px] rounded-full"
              style={{ background: stat.color, opacity: 0.28 }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="font-term text-xs tracking-wide" style={{ color: "var(--neon-cyan)" }}>
          [ HOTLINE MIAMI INSPIRED STATS • PRESS V TO TOGGLE NEON KITCHEN ]
        </p>
      </div>
    </section>
  );
}
