// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="w-full pixel-card group relative overflow-hidden flex flex-col h-full"
      aria-label={`Open project ${project.title}`}
    >
      {/* main content (fills available space) */}
      <div className="w-full flex flex-col items-center justify-center gap-4 text-center px-6 py-6 flex-grow">
        {/* enlarged emoji/icon */}
        <div
          className="project-emoji flex-none transition-transform group-hover:scale-105 will-change-transform"
          style={{
            filter: "drop-shadow(0 8px 22px rgba(255,77,166,0.26))",
            lineHeight: 1
          }}
          aria-hidden="true"
        >
          {project.icon || "📁"}
        </div>

        {/* Title — larger */}
        <h3
          className="font-pixel text-lg md:text-2xl neon-text truncate"
          style={{ color: "var(--neon-blue)", maxWidth: "92%" }}
        >
          {project.title}
        </h3>

        {/* Short desc */}
        <p
          className="font-term text-sm md:text-base text-center line-clamp-2"
          style={{ color: "var(--neon-cyan)", maxWidth: "86%" }}
        >
          {project.shortDesc}
        </p>
      </div>

      {/* footer (tags + CTA) */}
      <div className="w-full px-5 pb-5 flex flex-col items-center gap-3">
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="font-pixel px-2 py-1 text-[11px] rounded"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <span
            className="font-pixel text-xs px-3 py-1 border-2 rounded"
            style={{
              borderColor: "var(--neon-pink)",
              color: "var(--neon-pink)",
              background: "rgba(255,77,166,0.06)"
            }}
          >
            VIEW DETAILS
          </span>
        </div>
      </div>

      {/* decorative border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/4 h-1 transition-all group-hover:w-full" style={{ background: 'var(--neon-pink)' }} />
        <div className="absolute top-0 right-0 w-1 h-1/4 transition-all group-hover:h-full" style={{ background: 'var(--neon-blue)' }} />
        <div className="absolute bottom-0 right-0 w-1/4 h-1 transition-all group-hover:w-full" style={{ background: 'var(--accent)' }} />
        <div className="absolute bottom-0 left-0 w-1 h-1/4 transition-all group-hover:h-full" style={{ background: 'var(--neon-purple)' }} />
      </div>
    </button>
  );
}
