import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skills = [
  { cat: "Frontend", items: [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML & CSS", level: 92 },
    { name: "Vite", level: 78 },
    { name: "Tailwind CSS", level: 80 },
    ,
  ]},
  { cat: "Backend", items: [
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "SQLite / SQL", level: 94 },
    { name: "REST APIs", level: 85 },
    { name: "Python", level: 95 },
    { name: "C", level: 95 },
    { name: "C++", level: 88 },
  ]},
  { cat: "Tooling", items: [
    { name: "Git & GitHub", level: 88 },
    { name: "npm / package mgmt", level: 84 },
    { name: "VS Code", level: 95 },
    { name: "Linux / Terminal", level: 76 },
    { name: "PyCharm", level: 80 },
    { name: "JetBrains IDEs", level: 70 },
    { name: "Claude Code", level: 89 },
    { name: "MatLab", level: 65 },
  ]},
];

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header mono">
        <span>{name}</span>
        <span className="green">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="glitch-line" />
      <div style={{ paddingTop: "4rem" }}>
        <p className="section-label">02. skills</p>
        <h2 className="section-title">My <span>Stack</span></h2>

        <div className="skills__grid">
          {skills.map((cat, ci) => (
            <div key={cat.cat} className="skill-cat fade-up" style={{ animationDelay: `${ci * 0.1}s` }}>
              <h3 className="skill-cat__title mono">
                <span className="green">[</span>{cat.cat}<span className="green">]</span>
              </h3>
              {cat.items.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} animate={animate} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
