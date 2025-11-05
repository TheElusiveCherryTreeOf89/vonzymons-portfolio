// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="w-full pixel-card self-start group relative overflow-hidden md:max-w-[360px] flex flex-col items-center justify-start"
      aria-label={`Open project ${project.title}`}
    >
      {/* content wrapper - intrinsic height */}
      <div className="w-full flex flex-col items-center justify-center gap-3 text-center px-4 py-6">
        {/* emoji/icon (flex-none so it doesn't stretch) */}
        <div
          className="project-emoji flex-none transition-transform group-hover:scale-105 will-change-transform"
          style={{
            filter: "drop-shadow(0 6px 18px rgba(255,77,166,0.22))",
            lineHeight: 1
          }}
          aria-hidden="true"
        >
          {project.icon || "📁"}
        </div>

        {/* Title */}
        <h3
          className="font-pixel text-base md:text-lg neon-text truncate"
          style={{ color: "var(--neon-blue)", maxWidth: "92%" }}
        >
          {project.title}
        </h3>

        {/* Short desc */}
        <p
          className="font-term text-xs md:text-sm text-center line-clamp-2"
          style={{ color: "var(--neon-cyan)", maxWidth: "86%" }}
        >
          {project.shortDesc}
        </p>

        {/* tags - flex-none so they sit right after content */}
        <div className="flex flex-wrap gap-2 justify-center mt-2 flex-none">
          {project.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="font-pixel px-2 py-1 text-[10px] rounded"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* small footer area for "view" label (not pushing layout) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
