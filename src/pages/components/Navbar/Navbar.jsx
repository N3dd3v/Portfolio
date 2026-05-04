import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar__logo mono">&gt; clivia<span>.dev</span></a>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {links.map((l, i) => (
          <li key={l} style={{ animationDelay: `${i * 0.06}s` }}>
            <a href={`#${l}`} className="mono" onClick={() => setMenuOpen(false)}>
              <span className="link-num">{String(i + 1).padStart(2, "0")}.</span>{l}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
