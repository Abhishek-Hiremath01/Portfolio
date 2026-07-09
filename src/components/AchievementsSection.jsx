import React from 'react';

const AchievementsSection = ({ achievements, certifications }) => {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="section-shell p-6">
        <p className="section-kicker">Achievements</p>
        <h2 className="section-title mt-2">Milestones and recognition</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
          {achievements.map((item, index) => (
            <li key={index} className="info-card flex gap-2 rounded-xl p-3">
              <span className="text-cyan-300">🏆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-shell p-6">
        <p className="section-kicker">Certifications</p>
        <h2 className="section-title mt-2">Learning path</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
          {certifications.map((item, index) => (
            <li key={index} className="info-card flex gap-2 rounded-xl p-3">
              <span className="text-emerald-300">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementsSection;
