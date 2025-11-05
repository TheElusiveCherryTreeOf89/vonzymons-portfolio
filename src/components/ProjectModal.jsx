// src/components/ProjectModal.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document?.body?.style?.overflow;
    if (document && document.body) document.body.style.overflow = "hidden";
    return () => { if (document && document.body) document.body.style.overflow = prev || "auto"; };
  }, []);

  if (!project) return null;

  if (typeof document === "undefined") {
    // SSR safety (shouldn't happen in CRA/Vite dev)
    console.warn("ProjectModal: document is undefined — portal cannot mount.");
    return null;
  }

  const content = (
    <div className="fixed inset-0 flex items-center justify-center px-4 md:px-8" style={{ zIndex: 11000 }}>
      <div onClick={onClose} className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
      <div
        className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "calc(100vh - 4rem)", background: "linear-gradient(135deg, rgba(10,10,10,0.98), rgba(26,5,32,0.98))", border: "3px solid var(--neon-pink)", boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/6">
          <h2 className="font-pixel text-lg md:text-2xl truncate" style={{ color: "var(--neon-blue)" }} title={project.title}>{project.title}</h2>
          <button onClick={onClose} aria-label="Close modal" className="font-pixel px-3 py-1 border rounded" style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "transparent" }}>✕</button>
        </div>

        <div className="p-5 md:p-8 overflow-auto" style={{ maxHeight: "calc(100vh - 4rem - 64px)" }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((t, i) => (<span key={i} className="font-pixel px-3 py-2 text-xs border-2 rounded" style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "rgba(200,16,46,0.06)" }}>{t}</span>))}
          </div>

          {project.screenshots?.length > 0 && (
            <div className="mb-6">
              <div className="relative rounded-md overflow-hidden" style={{ border: "2px solid var(--accent)", boxShadow: "0 0 24px rgba(200,16,46,0.12)" }}>
                <img src={project.screenshots[currentSlide]} alt={`${project.title} screenshot ${currentSlide + 1}`} className="w-full h-56 md:h-72 lg:h-80 object-cover" />
                <div className="absolute top-3 right-3 font-pixel text-xs px-3 py-1 rounded" style={{ background: "rgba(0,0,0,0.6)", border: "1px solid var(--neon-pink)", color: "var(--neon-pink)" }}>{currentSlide + 1} / {project.screenshots.length}</div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button onClick={() => setCurrentSlide((p) => (p === 0 ? project.screenshots.length - 1 : p - 1))} className="px-4 py-2 border-2 font-pixel text-xs rounded" style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)", background: "rgba(255,77,166,0.06)" }}>← PREV</button>

                <div className="flex gap-2">
                  {project.screenshots.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentSlide(idx)} className="w-3 h-3 rounded-full transition-all" style={{ background: currentSlide === idx ? "var(--accent)" : "#333", boxShadow: currentSlide === idx ? "0 0 8px var(--accent)" : "none" }} aria-label={`Go to slide ${idx + 1}`} />
                  ))}
                </div>

                <button onClick={() => setCurrentSlide((p) => (p === project.screenshots.length - 1 ? 0 : p + 1))} className="px-4 py-2 border-2 font-pixel text-xs rounded" style={{ borderColor: "var(--neon-blue)", color: "var(--neon-blue)", background: "rgba(0,209,255,0.06)" }}>NEXT →</button>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-pixel text-sm mb-2" style={{ color: "var(--neon-pink)" }}>DESCRIPTION</h3>
            <p className="font-term text-sm md:text-base" style={{ color: "#fff" }}>{project.longDesc}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 font-pixel text-xs rounded" style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "rgba(200,16,46,0.06)", textDecoration: "none" }}>🐙 VIEW ON GITHUB</a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 font-pixel text-xs rounded" style={{ borderColor: "var(--neon-blue)", color: "var(--neon-blue)", background: "rgba(0,209,255,0.06)", textDecoration: "none" }}>🚀 VIEW LIVE SITE</a>}
          </div>

          <p className="text-center font-pixel text-xs mt-4" style={{ color: "var(--neon-cyan)" }}>[ PRESS ESC TO CLOSE ]</p>
        </div>
      </div>
    </div>
  );

  try {
    return createPortal(content, document.body);
  } catch (err) {
    console.error("ProjectModal portal mount failed:", err);
    return null;
  }
}
