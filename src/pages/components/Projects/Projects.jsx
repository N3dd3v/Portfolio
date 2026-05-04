import "./Projects.css";

const projects = [
  {
    id: "01",
    name: "DevHub",
    desc: "A developer dashboard that aggregates GitHub activity, open issues, and PR stats in one place. Built with React, Express, and the GitHub REST API.",
    tags: ["React", "Express", "GitHub API", "SQLite"],
    repo: "#",
    live: "#",
    featured: true,
  },
  {
    id: "02",
    name: "TermiNote",
    desc: "A terminal-styled note-taking app with Markdown support, local SQLite storage, and keyboard-first navigation.",
    tags: ["React", "Node.js", "SQLite", "Vite"],
    repo: "#",
    live: "#",
    featured: false,
  },
  {
    id: "03",
    name: "LinkPulse",
    desc: "A self-hosted link shortener with analytics tracking — click counts, referrer logs, and geolocation data stored in SQLite.",
    tags: ["Express", "SQLite", "REST API", "Vanilla JS"],
    repo: "#",
    live: null,
    featured: false,
  },
  {
    id: "04",
    name: "ReactPDF Kit",
    desc: "A lightweight React component library for rendering, paginating, and annotating PDF files in the browser.",
    tags: ["React", "PDF.js", "npm package"],
    repo: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="glitch-line" />
      <div style={{ paddingTop: "4rem" }}>
        <p className="section-label">03. projects</p>
        <h2 className="section-title">Things I&apos;ve <span>Built</span></h2>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card fade-up ${p.featured ? "project-card--featured" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="project-card__top">
                <span className="project-card__id mono green">{p.id}</span>
                {p.featured && <span className="project-card__badge mono">★ featured</span>}
              </div>

              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span key={t} className="tag mono">{t}</span>
                ))}
              </div>

              <div className="project-card__links">
                {p.repo && <a href={p.repo} className="project-link mono" target="_blank" rel="noreferrer">&gt; source</a>}
                {p.live && <a href={p.live} className="project-link mono green" target="_blank" rel="noreferrer">&gt; live demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
