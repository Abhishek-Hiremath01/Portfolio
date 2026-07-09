import React from 'react';

const HeaderSection = ({ name, title, contact, summary, highlights }) => {
  return (
    <section className="hero-shell section-shell grid gap-6 p-1 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[1.7rem] p-8 md:p-10">
        <div className="section-kicker mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1">
          {title}
        </div>
        <h1 className="hero-title mb-4 text-4xl font-bold leading-tight md:text-5xl">{name}</h1>
        <p className="hero-copy mb-6 text-lg leading-relaxed">{summary}</p>
        <div className="mb-6 flex flex-wrap gap-3">
          <a href={`mailto:${contact.email}`} className="primary-btn rounded-full px-5 py-2.5 text-sm font-semibold">Email Me</a>
          <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="secondary-btn rounded-full px-5 py-2.5 text-sm font-semibold">LinkedIn</a>
          <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="secondary-btn rounded-full px-5 py-2.5 text-sm font-semibold">GitHub</a>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="info-card rounded-full px-3 py-2">📱 {contact.phone}</span>
          <span className="info-card rounded-full px-3 py-2">✉️ {contact.email}</span>
        </div>
      </div>

      <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-900/20 to-cyan-500/20 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">What I Bring</h2>
        <ul className="space-y-3 text-slate-300">
          {highlights.map((item, index) => (
            <li key={index} className="info-card flex items-start gap-2 rounded-xl p-3">
              <span className="mt-1 text-cyan-300">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeaderSection;
