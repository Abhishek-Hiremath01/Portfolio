import React from 'react';

const ProfileSection = () => {
  return (
    <section className="section-shell p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 className="section-title">A motivated learner with a strong technical foundation</h2>
        </div>
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Building with purpose</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="info-card rounded-2xl p-4">
          <p className="text-2xl font-semibold text-white">3+</p>
          <p className="text-sm text-slate-400">Projects completed</p>
        </div>
        <div className="info-card rounded-2xl p-4">
          <p className="text-2xl font-semibold text-white">1</p>
          <p className="text-sm text-slate-400">Professional internship</p>
        </div>
        <div className="info-card rounded-2xl p-4">
          <p className="text-2xl font-semibold text-white">∞</p>
          <p className="text-sm text-slate-400">Curiosity and learning</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
