import React from 'react';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section-shell p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured work and experiments</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-800/70 px-3 py-1 text-sm text-slate-300">Built with curiosity & purpose</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="project-card info-card rounded-2xl p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">{project.type}</span>
              <span className="text-sm text-slate-400">{project.year}</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
            <ul className="mb-4 space-y-2 text-sm leading-relaxed text-slate-300">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-cyan-300">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-200">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
