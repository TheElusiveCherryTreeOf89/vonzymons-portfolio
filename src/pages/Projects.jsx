// src/pages/Projects.jsx
import React, { useState, useRef } from "react";
import DraggableResizableModal from "../components/DraggableResizableModal";
import ProjectCard from "../components/ProjectCard";
import PROJECTS from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} className="min-h-screen relative px-6 py-12 pages-projects-container">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1
          className="font-pixel text-4xl md:text-6xl neon-text color-glitch crt-stutter old-tv mb-4"
          data-text="PROJECTS"
          style={{ color: "var(--neon-pink)" }}
        >
          PROJECTS
        </h1>
        <p className="font-term text-lg" style={{ color: "var(--neon-cyan)" }}>
          Click on any project to view details, screenshots, and links
        </p>
      </div>

      {/* Project Grid */}
      <section className="max-w-6xl mx-auto">
        <div
          className="project-grid grid gap-8 md:gap-10 lg:gap-12 items-start justify-items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {PROJECTS.map((project) => (
            // wrapper enforces consistent height per card (responsive)
            <div key={project.id} className="card-wrapper w-full">
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {PROJECTS.length === 0 && (
          <div className="text-center py-20">
            <p className="font-pixel text-xl" style={{ color: "var(--neon-pink)" }}>
              NO PROJECTS FOUND
            </p>
            <p className="font-term mt-4" style={{ color: "var(--neon-cyan)" }}>
              Add your projects in src/data/projects.js
            </p>
          </div>
        )}
      </section>

      {/* Draggable / Resizable Modal */}
      {selectedProject && (
        <DraggableResizableModal
          project={selectedProject}
          onClose={() => {
            try { document.body.style.overflow = "auto"; } catch (e) {}
            setSelectedProject(null);
          }}
          containerRef={pageRef}
        />
      )}

      {/* Bottom Stats */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="panel p-6">
          <p className="font-pixel text-sm" style={{ color: "var(--accent)" }}>
            TOTAL PROJECTS: {PROJECTS.length}
          </p>
          <p className="font-term text-xs mt-2" style={{ color: "var(--neon-cyan)" }}>
            Each project showcases different technologies and skills
          </p>
        </div>
      </div>
    </div>
  );
}
