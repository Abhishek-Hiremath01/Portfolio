import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBrain,
  faChartLine,
  faCode,
  faCubes,
  faDatabase,
  faFileExcel,
  faLayerGroup,
  faTable,
  faWind,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import heroImage from '../assets/hero.png';
import LoadingScreen from './LoadingScreen';

const profile = {
  name: 'Abhishek Fakkeerayya Hiremath',
  role: 'Information Science Engineer',
  focus: 'Data Science, Analytics and Full-Stack Development',
  location: 'Karnataka, India',
  email: 'abhishekfhiremath01@gmail.com',
  phone: '+91 99643 93963',
  linkedin: 'https://linkedin.com/in/Abhishek-F-Hiremath',
  github: 'https://github.com/Abhishek-Hiremath01',
  summary:
    'Aspiring IT professional with a B.E. in Information Science and Engineering, hands-on experience in analytics, machine learning and dashboard development, and a strong foundation in Python, Java, SQL and modern web tooling.',
};

const stats = [
  { value: '8.9', label: 'Engineering CGPA' },
  { value: '150+', label: 'Hackathon teams competed against' },
  { value: '3+', label: 'Applied ML and analytics projects' },
  { value: '2026', label: 'Graduation year' },
];

const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', icon: faPython },
      { name: 'Java', icon: faJava },
      { name: 'C', icon: faCode },
      { name: 'SQL', icon: faDatabase },
      { name: 'Data Structures', icon: faLayerGroup },
      { name: 'OOP', icon: faCubes },
    ],
  },
  {
    title: 'Analytics',
    items: [
      { name: 'Power BI', icon: faChartLine },
      { name: 'Tableau', icon: faTable },
      { name: 'Microsoft Excel', icon: faFileExcel },
      { name: 'Data Cleaning', icon: faDatabase },
      { name: 'Forecasting', icon: faChartLine },
    ],
  },
  {
    title: 'AI & Web',
    items: [
      { name: 'TensorFlow', icon: faBrain },
      { name: 'NumPy', icon: faTable },
      { name: 'Pandas', icon: faTable },
      { name: 'React', icon: faReact },
      { name: 'Tailwind CSS', icon: faWind },
      { name: 'Vite', icon: faBolt },
    ],
  },
];

const projects = [
  {
    title: 'Stock Market Analysis and Forecasting',
    type: 'Data Analytics Platform',
    year: '2025',
    description:
      'Built a forecasting workflow with data preprocessing, ML models and dashboard views to help users inspect market trends and potential movement.',
    stack: ['Python', 'SQL', 'Power BI', 'ML Pipelines'],
  },
  {
    title: 'Neural Networks for Protein Functionality',
    type: 'Machine Learning Research',
    year: '2024',
    description:
      'Designed CNN-based experiments for biological sequence data, using structured preprocessing and model evaluation to predict protein functionality.',
    stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    title: 'Professional Portfolio Website',
    type: 'Frontend Experience',
    year: '2026',
    description:
      'Created a responsive portfolio interface focused on clear information hierarchy, polished presentation and fast browsing across devices.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
  },
];

const experience = [
  {
    role: 'Data Science Intern',
    company: 'TechFortune Technologies',
    period: 'Feb 2026 - May 2026',
    points: [
      'Analyzed international sales and HR data to surface performance trends and operational insights.',
      'Used Python and SQL to study market penetration patterns and employee retention indicators.',
      'Built dashboards that translated complex datasets into actionable views for stakeholders.',
    ],
  },
];

const education = [
  {
    degree: 'B.E. in Information Science and Engineering',
    place: 'Smt. Kamala and Sri Venkappa M. Agadi College of Engineering and Technology',
    period: '2022 - 2026',
    score: 'CGPA 8.9/10',
  },
  {
    degree: 'Pre-University Education, PCMB',
    place: 'KLE Prerana Residential Pre-University College, Hubli',
    period: '2020 - 2022',
    score: '86.83%',
  },
  {
    degree: 'Secondary School',
    place: 'Government Adarsh Vidyalaya, Dastikoppa',
    period: '2020',
    score: '94.72%',
  },
];

const achievements = [
  'Finalist at National Level Hackathon, SIET Tumakur, placing Top 5 among 150+ teams.',
  'Participant in Bharatiya Antariksha Hackathon 2025 by ISRO.',
  'Presented a paper at the Second International Conference on Multi-Disciplinary Research Trends in Engineering & Technology.',
  'Served as College Ambassador of SKSVMACET, Laxmeshwar.',
];

const certifications = [
  'Google AI Essentials, Google',
  'Programming with Java, Coursera',
  'Data Structures and Algorithm, Coursera',
  'The Complete Introduction to SQL Programming, Udemy',
];

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  const isDark = theme === 'dark';

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="portfolio-page">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="Go to top">
          AH
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          <span>{isDark ? 'Light' : 'Dark'}</span>
          <b>{isDark ? 'Sun' : 'Moon'}</b>
        </button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="availability-pill">
            <span />
            Available for internships and fresher roles
          </div>
          <p className="eyebrow">{profile.focus}</p>
          <h1>
            <span className="first-name">Abhishek</span>
            <span className="last-name">Hiremath</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Hire me
            </a>
            <a className="btn btn-secondary" href="#work">
              View projects
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Profile summary">
          <div className="visual-orbit" aria-hidden="true">
            <img src={heroImage} alt="" />
            <div className="orbit-card orbit-card-one">Python</div>
            <div className="orbit-card orbit-card-two">Power BI</div>
            <div className="orbit-card orbit-card-three">React</div>
          </div>
          <div className="role-note">
            <p className="panel-label">Available for</p>
            <h2>Entry-level IT, Data Analyst and Developer roles</h2>
          </div>
          <div className="quick-info">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </aside>
      </section>

      <section className="stats-grid" aria-label="Portfolio highlights">
        {stats.map((item) => (
          <div className="stat-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="work" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects built around data, decisions and usable interfaces.</h2>
          <p>
            A compact collection of machine learning, analytics and frontend work
            with practical business use cases.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-item"
              key={project.title}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section split-section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>A practical toolkit for software, analytics and AI workflows.</h2>
          <p>
            I like work where raw information becomes something people can use:
            clean code, clear dashboards, and models that answer real questions.
          </p>
        </div>
        <div className="skills-board">
          {skills.map((group) => (
            <article className="skill-row" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list skill-tags">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item.name} data-label={item.name} title={item.name}>
                    <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="content-section journey-section">
        <div className="section-heading compact">
          <p className="eyebrow">Journey</p>
          <h2>A clear view of experience, education and growth.</h2>
        </div>

        <div className="journey-grid">
          <article className="journey-card">
            <div className="section-heading compact">
              <p className="eyebrow">Experience</p>
              <h2>Recent professional exposure</h2>
            </div>
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </article>

          <article className="journey-card">
            <div className="section-heading compact">
              <p className="eyebrow">Education</p>
              <h2>Academic foundation</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-row" key={item.degree}>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.place}</p>
                  </div>
                  <span>{item.period} / {item.score}</span>
                </article>
              ))}
            </div>
          </article>

          <article className="journey-card">
            <div className="section-heading compact">
              <p className="eyebrow">Recognition</p>
              <h2>Achievements</h2>
            </div>
            <ul className="clean-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="journey-card">
            <div className="section-heading compact">
              <p className="eyebrow">Learning</p>
              <h2>Certifications</h2>
            </div>
            <ul className="clean-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something useful.</h2>
          <p>
            Open to internships, fresher roles and project collaborations across
            data analytics, software development and AI-enabled products.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email Abhishek
          </a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
