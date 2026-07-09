import React from 'react';

const ExperienceEducationSection = ({ experience, education }) => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="section-shell p-6">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mt-2">Current & recent work</h2>
        {experience.map((exp, index) => (
          <div key={index} className="info-card mt-5 rounded-2xl p-4">
            <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <span className="text-sm text-slate-400">{exp.duration}</span>
            </div>
            <p className="mb-3 text-cyan-300">{exp.company}</p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-cyan-300">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-shell p-6">
        <p className="section-kicker">Education</p>
        <h2 className="section-title mt-2">Academic foundation</h2>
        <div className="mt-5 space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="info-card rounded-2xl p-4">
              <div className="mb-1 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <span className="text-sm text-slate-400">{edu.duration}</span>
              </div>
              <p className="text-sm text-slate-300">{edu.institution}</p>
              <p className="mt-2 text-sm font-semibold text-cyan-300">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
