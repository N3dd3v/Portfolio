import "./About.css";


function About() {
  return (
    <section id="about" className="about-section">
      <div className="glitch-line" />
      <div className="about__inner">
        <div className="about__text fade-up">
          <p className="section-label">01. about</p>
          <h2 className="section-title">Who I <span>Am</span></h2>

          <p>
            Hey, I&apos;m <strong>N3D</strong>, a developer who thrives at the intersection of
            clean code and great user experience. I spend most of my time building full-stack
           applications and obsessing over the details that make software not just functional, but ensure a great experience for users.
          </p>
          <br />
          <p>
            I&apos;ve started coding because I&apos;ve always been fascinated by the process of bringing ideas to life through code. I&apos;m passionate about problem solving, developer tooling,
            and learning new technologies.
          </p>
          <br />
          <p>
            When I&apos;m not in the terminal, I&apos;m probably exploring new frameworks,
            contributing to open source, or finding new ways to over-engineer something simple.
          </p>

          <div className="about__links">
            <a href="/public/Resume-7.pdf" className="btn-primary" download>Download CV</a>
          </div>
        </div>

        <div className="about__meta fade-up delay-2">
          <div className="meta-card mono">
            <div className="meta-row">
              <span className="meta-key green">&gt; name</span>
              <span>N3D</span>
            </div>
            <div className="meta-row">
              <span className="meta-key green">&gt; role</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="meta-row">
              <span className="meta-key green">&gt; focus</span>
              <span>Software Development</span>
            </div>
            <div className="meta-row">
              <span className="meta-key green">&gt; status</span>
              <span className="status-available">● available for work</span>
            </div>
            <div className="meta-row">
              <span className="meta-key green">&gt; interests</span>
              <span>OSS, Back-End , Debugging</span>
            </div>
          </div>

          <div className="about__img-wrap">
            <img src="/public/me.jpg" alt="Me" className="about__img" />
            <div className="about__img-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;