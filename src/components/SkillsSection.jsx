import React from 'react';

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="section-shell p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools, languages, and strengths</h2>
        </div>
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Always exploring new tech</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="info-card rounded-2xl p-4">
            <h3 className="mb-3 text-lg font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <span key={idx} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
