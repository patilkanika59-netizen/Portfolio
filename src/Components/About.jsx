import "./About.css";

const skills = [
  { category: "UI/UX Design", items: ["Figma", "Adobe XD", "Canva", "Wireframing"] },
  { category: "Frontend",     items: ["React", "HTML5", "CSS3", "JavaScript"] },
  { category: "Backend",      items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools",        items: ["Git", "GitHub", "VS Code", "Postman"] },
];

const timeline = [
  { year: "2024", role: "3+ Hackathons & College Events", place: "Various Institutions" },
  { year: "2023", role: "UI/UX Projects & Web Dev",       place: "Personal & Team Projects" },
  { year: "2022", role: "Started Coding Journey",         place: "Computer Engineering" },
  { year: "2021", role: "B.E. Computer Engineering",      place: "University" },
];

export default function About() {
  return (
    <section className="page about">
      <p className="eyebrow">Who I Am</p>
      <h2 className="about-title">About Me</h2>
      <div className="divider" />

      <div className="about-grid">
        <div className="bio">

          {/* Girl with laptop illustration */}
          <div className="illustration">
            <svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" className="girl-svg">
              <ellipse cx="110" cy="245" rx="70" ry="10" fill="rgba(127,90,240,0.18)" />
              <rect x="62" y="130" width="96" height="90" rx="18" fill="#7f5af0" />
              <rect x="90" y="175" width="40" height="28" rx="8" fill="#6b44e0" />
              <rect x="30" y="135" width="34" height="18" rx="9" fill="#7f5af0" />
              <rect x="156" y="135" width="34" height="18" rx="9" fill="#7f5af0" />
              <ellipse cx="38" cy="162" rx="12" ry="10" fill="#f4c08a" />
              <ellipse cx="182" cy="162" rx="12" ry="10" fill="#f4c08a" />
              <rect x="98" y="108" width="24" height="26" rx="8" fill="#f4c08a" />
              <ellipse cx="110" cy="88" rx="36" ry="38" fill="#f4c08a" />
              <ellipse cx="110" cy="58" rx="36" ry="20" fill="#2d1b69" />
              <ellipse cx="78" cy="82" rx="12" ry="28" fill="#2d1b69" />
              <ellipse cx="142" cy="82" rx="12" ry="28" fill="#2d1b69" />
              <rect x="76" y="90" width="14" height="45" rx="7" fill="#2d1b69" />
              <rect x="130" y="90" width="14" height="45" rx="7" fill="#2d1b69" />
              <ellipse cx="97" cy="88" rx="5" ry="6" fill="#2d1b69" />
              <ellipse cx="123" cy="88" rx="5" ry="6" fill="#2d1b69" />
              <circle cx="99" cy="86" r="1.5" fill="white" />
              <circle cx="125" cy="86" r="1.5" fill="white" />
              <path d="M100 100 Q110 108 120 100" stroke="#c47a3a" strokeWidth="2" fill="none" strokeLinecap="round" />
              <ellipse cx="88" cy="97" rx="7" ry="4" fill="rgba(255,150,120,0.35)" />
              <ellipse cx="132" cy="97" rx="7" ry="4" fill="rgba(255,150,120,0.35)" />
              <rect x="28" y="192" width="164" height="10" rx="5" fill="#1e2030" />
              <rect x="38" y="155" width="144" height="40" rx="6" fill="#13141a" />
              <rect x="42" y="158" width="136" height="34" rx="4" fill="#0b0c10" />
              <rect x="42" y="158" width="136" height="34" rx="4" fill="url(#screenGlow)" opacity="0.7" />
              <rect x="50" y="164" width="50" height="3" rx="1.5" fill="#7f5af0" opacity="0.9" />
              <rect x="50" y="171" width="80" height="3" rx="1.5" fill="#2cb67d" opacity="0.9" />
              <rect x="50" y="178" width="60" height="3" rx="1.5" fill="#ff8906" opacity="0.9" />
              <rect x="50" y="185" width="40" height="3" rx="1.5" fill="#7f5af0" opacity="0.9" />
              <rect x="94" y="185" width="2" height="3" rx="1" fill="white" opacity="0.9" />
              <defs>
                <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7f5af0" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#2cb67d" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <text x="168" y="75" fontSize="14" fill="#7f5af0" opacity="0.8">✦</text>
              <text x="20" y="115" fontSize="10" fill="#2cb67d" opacity="0.7">✦</text>
              <text x="185" y="130" fontSize="8" fill="#ff8906" opacity="0.6">✦</text>
            </svg>
          </div>

          <p className="bio-text">
            Hey! I'm <strong>Kanika Patil</strong>, a Computer Engineering graduate
            with a strong passion for <strong>UI/UX Design</strong> and front-end development.
            I love turning ideas into beautiful, intuitive digital experiences that
            people actually enjoy using.
          </p>
          <p className="bio-text">
            I've participated in <strong>3+ hackathons</strong> and represented at
            various college events, which shaped my ability to build fast, think
            creatively, and collaborate under pressure. For me, great design isn't
            just about how something looks — it's about how it feels.
          </p>
          <div className="about-links">
            <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">
              Download CV ↓
            </a>
            <a className="btn btn-outline" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="sub-heading">Skills</h3>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="card skill-card" key={s.category}>
                <p className="skill-category">{s.category}</p>
                <ul className="skill-list">
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="skill-dot">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h3 className="sub-heading">Journey</h3>
        <div className="timeline">
          {timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-left">
                <span className="timeline-year">{t.year}</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                {i < timeline.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-right card">
                <p className="timeline-role">{t.role}</p>
                <p className="timeline-place">{t.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}