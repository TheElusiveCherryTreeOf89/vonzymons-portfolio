// src/pages/Projects.jsx (safer: defaults VHS off, guards localStorage, icon fallbacks)
import React, { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogClose } from "../components/ui/dialog.jsx";
import { toggleVhs } from "../lib/theme";

export const SAMPLE_PROJECTS = [
  { 
    id: 1, 
    title: "Student DBMS", 
    desc: "Django + MySQL student records.", 
    longDesc: "A comprehensive student database management system built with Django and MySQL. Features include student registration, course enrollment, grade tracking, and attendance management.",
    tags: ["Backend","Database"], 
    icon: "database.svg",
    screenshots: [
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Student+Dashboard",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Records+View",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Analytics+Panel",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=User+Management",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Report+Generation"
    ]
  },
  { 
    id: 2, 
    title: "Portfolio UI", 
    desc: "React + Tailwind + 80s neon UI.", 
    longDesc: "A retro-futuristic portfolio website inspired by Hotline Miami aesthetics. Built with React and Tailwind CSS featuring neon effects, VHS overlays, and responsive design.",
    tags: ["Frontend","React"], 
    icon: "folder.svg",
    screenshots: [
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Home+Page",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Projects+Grid",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=About+Section",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Contact+Form",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Mobile+View",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Dark+Mode"
    ]
  },
  { 
    id: 3, 
    title: "SDBMS Dashboard", 
    desc: "Analytics dashboard & charts.", 
    longDesc: "An interactive analytics dashboard for the Student DBMS. Features real-time data visualization, customizable charts, and exportable reports for academic performance tracking.",
    tags: ["Data","Frontend"], 
    icon: "code.svg",
    screenshots: [
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Main+Dashboard",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Performance+Charts",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Data+Tables",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Export+Options",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Filter+Interface"
    ]
  },
  { 
    id: 4, 
    title: "Retro Game Mock", 
    desc: "8-bit prototype (local storage).", 
    longDesc: "A retro-style game prototype with 8-bit graphics and sound. Features include local storage for game saves, pixel-perfect collision detection, and responsive controls.",
    tags: ["Game","PixelArt"], 
    icon: "play.svg",
    screenshots: [
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Title+Screen",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Level+1",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Character+Selection",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Boss+Fight",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=Game+Over",
      "https://placehold.co/600x400/0f1724/e6e6e6?text=High+Scores"
    ]
  }
];

function safeGetVhs() {
  try {
    const v = localStorage.getItem("vhsOn");
    return v === "true";
  } catch (err) {
    return false;
  }
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects] = useState(SAMPLE_PROJECTS);
  const [open, setOpen] = useState(null);
  const [vhsOn, setVhsOn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const tags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  // mount: enforce dark and read safe preference (defaults to false)
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const saved = safeGetVhs();
    setVhsOn(Boolean(saved));
    if (saved) document.documentElement.classList.add("vhs-on");
    else document.documentElement.classList.remove("vhs-on");
  }, []);

  // keep vhs state synced (safe)
  useEffect(() => {
    try {
      if (vhsOn) {
        document.documentElement.classList.add("vhs-on");
        localStorage.setItem("vhsOn", "true");
      } else {
        document.documentElement.classList.remove("vhs-on");
        localStorage.setItem("vhsOn", "false");
      }
    } catch (err) {
      // ignore storage errors
    }
  }, [vhsOn]);

  // keyboard shortcut
  const handleKey = useCallback((e) => {
    if (e.key.toLowerCase() === "v") setVhsOn(s => !s);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);
  
  // Handle modal animation
  useEffect(() => {
    if (open) {
      setCurrentSlide(0);
      setTimeout(() => setIsModalVisible(true), 50);
    }
  }, [open]);

  const filtered = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  // icon error fallback: set broken images to a tiny inline SVG (pixel style)
  const fallbackDataURL = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><rect width='32' height='32' fill='#15121a'/><text x='50%' y='55%' font-size='6' fill='#c8102e' text-anchor='middle' font-family='monospace'>?</text></svg>`
  );
  const fallbackSrc = `data:image/svg+xml;utf8,${fallbackDataURL}`;

  return (
    <div className="min-h-[70vh] relative">
      {/* REMOVE: page-local neon gradient; it’s global now */}
      {/* Existing overlays */}
      <div className="crt-vignette" aria-hidden="true"></div>
      <div className="vhs-overlay" aria-hidden="true"></div>

      <header className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1
            className="font-justice text-3xl md:text-4xl hotline-gradient-text color-glitch crt-stutter old-tv heading-toggle"
            data-text="PROJECTS"
            onClick={() => toggleVhs()}
          >
            PROJECTS
          </h1>
          <div className="mt-2 text-xs small-terminal text-slate-400">
            Press "V" or click the heading to toggle VHS
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-vt323 text-neon-pink">VHS MODE</label>
            <button
              onClick={() => setVhsOn(s => !s)}
              className={`px-3 py-1 rounded-md text-sm font-pixel ${vhsOn ? 'bg-neon-pink text-white neon-pulse' : 'bg-black border border-neon-pink text-neon-pink'}`}
            >
              {vhsOn ? "ENABLED" : "DISABLED"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-vt323 text-neon-blue hidden sm:inline">FILTER</span>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 py-1 text-xs font-pixel rounded-md transition ${filter === t ? 'bg-gradient-to-r from-neon-pink to-hotline-purple text-white' : 'bg-hotline-floor border border-neon-purple/30 hover:border-neon-purple text-slate-300'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Grid: add more breathing room */}
      <section className="grid grid-cols-2 gap-8 max-w-[700px] mx-auto px-3 sm:px-4">
        {filtered.map(p => (
          <article
            key={p.id}
            className="aspect-square relative bg-black border border-neon-pink hover:border-2 hover:scale-[1.02] transition transform cursor-pointer overflow-hidden"
            onClick={() => setOpen(p)}
          >
            <div className="absolute inset-0 flex flex-col items-start p-4 sm:p-5">
              <div className="bg-black rounded-full mb-2">
                <img
                  src={`/icons/${p.icon}`}
                  alt=""
                  className="pixel-icon w-6 h-6"
                  onError={(e) => { e.currentTarget.src = fallbackSrc; }}
                />
              </div>

              <h3 className="text-base font-pixel mb-2 text-neon-pink">{p.title}</h3>
              <div className="text-[11px] font-vt323 text-slate-400 mb-2">{p.tags.join(" • ")}</div>

              <p className="text-[11px] text-white font-vt323 mb-3 line-clamp-3">{p.desc}</p>

              <div className="mt-auto self-start">
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-pixel bg-neon-pink text-white">
                  VIEW
                </span>
              </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 border-4 border-transparent pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-1/4 h-1 bg-neon-pink animate-[borderFlow_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-0 right-0 w-1 h-1/4 bg-neon-pink animate-[borderFlow_2s_ease-in-out_0.5s_infinite]"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-neon-pink animate-[borderFlow_2s_ease-in-out_1s_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1/4 bg-neon-pink animate-[borderFlow_2s_ease-in-out_1.5s_infinite]"></div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {open && (
        <Dialog
          open={!!open}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setIsModalVisible(false);
              setTimeout(() => setOpen(null), 200);
            }
          }}
        >
          <DialogContent className={`${isModalVisible ? 'scale-100' : 'scale-95'}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-pixel hotline-text">{open.title}</h2>
                <div className="text-sm font-vt323 text-neon-purple mt-1">{open.tags.join(" • ")}</div>
              </div>
              <DialogClose asChild>
                <button
                  onClick={() => {
                    setIsModalVisible(false);
                    setTimeout(() => setOpen(null), 200);
                  }}
                  className="px-3 py-1 bg-black border border-neon-pink text-neon-pink font-pixel hover:bg-neon-pink/10 transition-colors"
                >
                  CLOSE
                </button>
              </DialogClose>
            </div>

            {/* Slideshow */}
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-neon-pink">
                <img
                  src={open.screenshots[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() =>
                    setCurrentSlide((s) =>
                      s === 0 ? open.screenshots.length - 1 : s - 1
                    )
                  }
                  className="px-3 py-1 bg-black border border-neon-pink text-neon-pink font-pixel hover:bg-neon-pink/10"
                >
                  PREV
                </button>
                <div className="flex gap-2">
                  {open.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full ${currentSlide === i ? "bg-neon-pink" : "bg-white/25"}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentSlide((s) =>
                      s === open.screenshots.length - 1 ? 0 : s + 1
                    )
                  }
                  className="px-3 py-1 bg-black border border-neon-pink text-neon-pink font-pixel hover:bg-neon-pink/10"
                >
                  NEXT
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-white font-vt323">{open.longDesc}</p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}