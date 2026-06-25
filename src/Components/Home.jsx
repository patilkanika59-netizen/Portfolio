import "./Home.css";

const projects = [
  {
    title: "E-Commerce Platform",
    link: "https://ecommerce-website-sooty-xi.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Full-stack shop with cart, auth, and Stripe payments.",
  },
  {
    title: "AI Dashboard",
    tech: ["Next.js", "Python", "OpenAI"],
    desc: "Analytics dashboard with LLM-powered data summaries.",
  },
  {
    title: "Design System",
    tech: ["React", "Storybook", "CSS"],
    desc: "Component library with 40+ accessible, themeable parts.",
  },
];

export default function Home({ setActivePage }) {
  return (
    <section className="page home">
      {/* Hero */}
      <div className="hero">
        <p className="eyebrow">Full-Stack Developer</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kanika Patil</span>.
          <br />I build things for the web.
        </h1>
        <p className="hero-sub">
          Tech enthusiast • Developer • Lifelong learner
Building innovative solutions, exploring new technologies, and creating meaningful digital experiences.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => setActivePage("contact")}>
            Get in touch ↗
          </button>
          <button className="btn btn-outline" onClick={() => setActivePage("about")}>
            About me
          </button>
        </div>

        {/* Stats */}
        <div className="stats">
          {[
            ["3+", "Years exp."],
            ["20+", "Projects shipped"],
            ["3+", "Hackathons"],
            ["8+", "College events"],
          ].map(([num, label]) => (
            <div className="stat" key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="section-header">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">Recent Projects</h2>
        <div className="divider" />
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="card project-card" key={p.title}>
            <div className="project-top">
              <span className="folder-icon">◈</span>
              <span className="external-icon">↗</span>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="tech-tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}