// src/components/DraggableResizableModal.jsx
import React, { useEffect, useRef, useState } from "react";

/*
 Draggable + Resizable Modal inside a container (no portal)
 Props:
  - project: object
  - onClose: fn
  - containerRef: ref to container DOM node (Projects page wrapper)
*/
export default function DraggableResizableModal({ project, onClose, containerRef }) {
  const modalRef = useRef(null);

  // position & size
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 760, height: 540 });

  // slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  // drag/resize state refs
  const dragState = useRef({ dragging: false, startX: 0, startY: 0, startPos: { x: 0, y: 0 } });
  const resizeState = useRef({ resizing: false, startX: 0, startY: 0, startSize: { width: 0, height: 0 } });

  // focus control so keyboard events go to modal
  useEffect(() => {
    modalRef.current?.focus?.();
  }, [project?.id]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // eslint-disable-line

  // keyboard nudging + resizing when modal has focus
  useEffect(() => {
    const onKeyDown = (e) => {
      // only when modal (or descendant) has focus
      if (!modalRef.current || !document.activeElement) return;
      if (!modalRef.current.contains(document.activeElement)) return;

      const step = e.shiftKey ? 40 : 10;
      const rstep = e.shiftKey ? 40 : 10;

      // Move with arrows (no modifier) — left/up reduce x/y, right/down increase
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key) && !e.ctrlKey) {
        e.preventDefault();
        let nx = pos.x;
        let ny = pos.y;
        if (e.key === "ArrowLeft") nx -= step;
        if (e.key === "ArrowRight") nx += step;
        if (e.key === "ArrowUp") ny -= step;
        if (e.key === "ArrowDown") ny += step;
        const clamped = clampToContainer(nx, ny, size.width, size.height);
        setPos({ x: clamped.x, y: clamped.y });
      }

      // Ctrl + Arrow -> resize
      if (e.ctrlKey && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        let nw = size.width;
        let nh = size.height;
        if (e.key === "ArrowRight") nw += rstep;
        if (e.key === "ArrowLeft") nw -= rstep;
        if (e.key === "ArrowDown") nh += rstep;
        if (e.key === "ArrowUp") nh -= rstep;
        const clamped = clampToContainer(pos.x, pos.y, nw, nh);
        setSize({ width: clamped.width, height: clamped.height });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pos, size, project?.id]); // eslint-disable-line

  // lock body scroll while modal open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || "auto"; };
  }, []);

  // center modal inside container on mount or when project changes
  useEffect(() => {
    if (!containerRef?.current) return;
    const cb = containerRef.current.getBoundingClientRect();
    const defaultW = Math.min(760, Math.max(240, cb.width - 40));
    const defaultH = Math.min(540, Math.max(160, cb.height - 60));
    const startX = Math.round(Math.max(12, (cb.width - defaultW) / 2));
    const startY = Math.round(Math.max(12, (cb.height - defaultH) / 2));
    setSize({ width: defaultW, height: defaultH });
    setPos({ x: startX, y: startY });
    setCurrentSlide(0);
  }, [containerRef, project?.id]);

  // clamp helper
  const clampToContainer = (x, y, width, height) => {
    const c = containerRef?.current;
    if (!c) return { x, y, width, height };
    const cb = c.getBoundingClientRect();
    const maxX = Math.max(12, cb.width - width - 12);
    const maxY = Math.max(12, cb.height - height - 12);
    const nx = Math.min(Math.max(12, Math.round(x)), maxX);
    const ny = Math.min(Math.max(12, Math.round(y)), maxY);
    const maxW = Math.max(240, cb.width - nx - 12);
    const maxH = Math.max(160, cb.height - ny - 12);
    const nw = Math.min(Math.max(240, Math.round(width)), maxW);
    const nh = Math.min(Math.max(160, Math.round(height)), maxH);
    return { x: nx, y: ny, width: nw, height: nh };
  };

  /* Drag handlers */
  const onDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isTouch = e.type === "touchstart";
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    dragState.current = { dragging: true, startX: clientX, startY: clientY, startPos: { ...pos } };
    window.addEventListener(isTouch ? "touchmove" : "mousemove", onDragMove, { passive: false });
    window.addEventListener(isTouch ? "touchend" : "mouseup", onDragEnd);
  };

  const onDragMove = (e) => {
    const isTouch = e.type === "touchmove";
    const clientX = isTouch ? e.touches[0]?.clientX : e.clientX;
    const clientY = isTouch ? e.touches[0]?.clientY : e.clientY;
    if (!dragState.current.dragging || clientX == null) return;
    const dx = clientX - dragState.current.startX;
    const dy = clientY - dragState.current.startY;
    const newX = dragState.current.startPos.x + dx;
    const newY = dragState.current.startPos.y + dy;
    const clamped = clampToContainer(newX, newY, size.width, size.height);
    setPos({ x: clamped.x, y: clamped.y });
  };

  const onDragEnd = (e) => {
    const isTouch = e.type === "touchend";
    dragState.current.dragging = false;
    window.removeEventListener(isTouch ? "touchmove" : "mousemove", onDragMove);
    window.removeEventListener(isTouch ? "touchend" : "mouseup", onDragEnd);
  };

  /* Resize handlers */
  const onResizeStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isTouch = e.type === "touchstart";
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    resizeState.current = { resizing: true, startX: clientX, startY: clientY, startSize: { ...size }, startPos: { ...pos } };
    window.addEventListener(isTouch ? "touchmove" : "mousemove", onResizeMove, { passive: false });
    window.addEventListener(isTouch ? "touchend" : "mouseup", onResizeEnd);
  };

  const onResizeMove = (e) => {
    const isTouch = e.type === "touchmove";
    const clientX = isTouch ? e.touches[0]?.clientX : e.clientX;
    const clientY = isTouch ? e.touches[0]?.clientY : e.clientY;
    if (!resizeState.current.resizing || clientX == null) return;
    const dx = clientX - resizeState.current.startX;
    const dy = clientY - resizeState.current.startY;
    const newW = resizeState.current.startSize.width + dx;
    const newH = resizeState.current.startSize.height + dy;
    const clamped = clampToContainer(pos.x, pos.y, newW, newH);
    setSize({ width: clamped.width, height: clamped.height });
  };

  const onResizeEnd = (e) => {
    const isTouch = e.type === "touchend";
    resizeState.current.resizing = false;
    window.removeEventListener(isTouch ? "touchmove" : "mousemove", onResizeMove);
    window.removeEventListener(isTouch ? "touchend" : "mouseup", onResizeEnd);
  };

  /* Slideshow helpers */
  const slides = project?.screenshots ?? [];
  const nextSlide = () => setCurrentSlide((s) => (slides.length ? (s === slides.length - 1 ? 0 : s + 1) : 0));
  const prevSlide = () => setCurrentSlide((s) => (slides.length ? (s === 0 ? slides.length - 1 : s - 1) : 0));
  useEffect(() => setCurrentSlide(0), [project?.id]);

  /* Close */
  const handleClose = () => {
    try { document.body.style.overflow = "auto"; } catch (e) {}
    onClose();
  };

  /* Snap-to-center */
  const snapToCenter = () => {
    if (!containerRef?.current) return;
    const cb = containerRef.current.getBoundingClientRect();
    const nx = Math.round((cb.width - size.width) / 2);
    const ny = Math.round((cb.height - size.height) / 2);
    const clamped = clampToContainer(nx, ny, size.width, size.height);
    setPos({ x: clamped.x, y: clamped.y });
  };

  if (!project) return null;

  return (
    <div
      ref={modalRef}
      className="draggable-modal"
      tabIndex={-1} // allows focus so keyboard events are captured
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: 200,
        borderRadius: 12,
        overflow: "hidden",
        border: "3px solid var(--neon-pink)",
        background: "linear-gradient(135deg, rgba(10,10,10,0.98), rgba(26,5,32,0.98))",
        boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
      }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Header (drag handle) */}
      <div
        className="modal-header"
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        style={{
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "10px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Grab icon */}
          <div style={{ width: 18, height: 18, display: "grid", placeItems: "center", opacity: 0.9 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 3v2M3 9h2M9 21v-2M21 15h-2M14 3v2M3 15h2M14 21v-2M21 9h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--neon-pink)" }} />
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 13, color: "var(--neon-blue)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 420 }}>
              {project.title}
            </div>
            <div style={{ fontFamily: "'VT323', monospace", fontSize: 11, color: "var(--neon-cyan)" }}>
              Drag • Resize • Arrow keys to nudge (Shift larger) • Ctrl+Arrows to resize
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Snap to center */}
          <button
            onClick={(e) => { e.stopPropagation(); snapToCenter(); }}
            title="Snap to center"
            className="font-pixel"
            style={{ border: "1px solid rgba(255,255,255,0.06)", color: "var(--neon-cyan)", padding: "6px 8px", borderRadius: 8, background: "transparent" }}
          >
            ⤢
          </button>

          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
            aria-label="Close modal"
            className="font-pixel"
            style={{ border: "1px solid var(--accent)", color: "var(--accent)", padding: "6px 10px", borderRadius: 8, background: "transparent" }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 14, height: `calc(100% - 66px)`, overflow: "auto", color: "#fff" }} onMouseDown={(e) => e.stopPropagation()}>
        {/* tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags?.map((t, i) => (
            <span key={i} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, padding: "6px 8px", border: "1px solid var(--accent)", color: "var(--accent)", borderRadius: 6, background: "rgba(200,16,46,0.03)" }}>{t}</span>
          ))}
        </div>

        {/* Slideshow */}
        {slides.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
              <img src={slides[currentSlide]} alt={`${project.title} screenshot ${currentSlide + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 8, right: 8, fontFamily: "'Press Start 2P', monospace", fontSize: 12, padding: "6px 8px", borderRadius: 6, background: "rgba(0,0,0,0.6)", border: "1px solid var(--neon-pink)", color: "var(--neon-pink)" }}>
                {currentSlide + 1} / {slides.length}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                aria-label="Previous slide"
                style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", padding: "8px 10px", borderRadius: 8, border: "1px solid var(--neon-pink)", background: "rgba(255,77,166,0.06)", color: "var(--neon-pink)" }}
              >
                ←
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next slide"
                style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", padding: "8px 10px", borderRadius: 8, border: "1px solid var(--neon-blue)", background: "rgba(0,209,255,0.06)", color: "var(--neon-blue)" }}
              >
                →
              </button>
            </div>

            <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 8 }}>
              {slides.map((_, idx) => (
                <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }} aria-label={`Go to slide ${idx + 1}`} style={{ width: 10, height: 10, borderRadius: 10, background: currentSlide === idx ? "var(--accent)" : "#333", boxShadow: currentSlide === idx ? "0 0 8px var(--accent)" : "none", border: "none" }} />
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div style={{ marginBottom: 12 }}>
          <h4 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 12, color: "var(--neon-pink)", marginBottom: 8 }}>DESCRIPTION</h4>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: "#fff", lineHeight: 1.5 }}>{project.longDesc}</p>
        </div>

        {/* Actions: GITHUB only */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ padding: "8px 10px", border: "1px solid var(--accent)", color: "var(--accent)", borderRadius: 8, textDecoration: "none", fontFamily: "'Press Start 2P', monospace", fontSize: 12 }}>
              🐙 GITHUB
            </a>
          )}
        </div>
      </div>

      {/* Resize handle */}
      <div onMouseDown={onResizeStart} onTouchStart={onResizeStart} style={{ position: "absolute", right: 8, bottom: 8, width: 18, height: 18, borderRadius: 4, background: "linear-gradient(135deg, var(--neon-pink), var(--neon-blue))", cursor: "nwse-resize", boxShadow: "0 6px 16px rgba(0,0,0,0.6)" }} aria-hidden="true" />
    </div>
  );
}
