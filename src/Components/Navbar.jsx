import { useState } from "react";
import "./Navbar.css";

const links = [
  { id: "home",    label: "Home" },
  { id: "about",   label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <button className="logo" onClick={() => handleNav("home")}>
          <span className="logo-bracket">&lt;</span>
          Kanika Patil
          <span className="logo-bracket">/&gt;</span>
        </button>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activePage === link.id ? "active" : ""}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
                {activePage === link.id && <span className="active-dot" />}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="btn btn-primary nav-cta" onClick={() => handleNav("contact")}>
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`}>
        {links.map((link) => (
          <button
            key={link.id}
            className={`mobile-link ${activePage === link.id ? "active" : ""}`}
            onClick={() => handleNav(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn btn-primary mobile-cta" onClick={() => handleNav("contact")}>
          Hire Me
        </button>
      </div>
    </nav>
  );
}
