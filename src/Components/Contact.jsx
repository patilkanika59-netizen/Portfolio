import { useState } from "react";
import "./Contact.css";

const socials = [
  { label: "GitHub",   href: "https://github.com",   icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com",  icon: "in" },
  { label: "Twitter",  href: "https://twitter.com",   icon: "𝕏" },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState(null); // null | "sending" | "sent"
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                         e.name    = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email needed.";
    if (form.message.trim().length < 10)           e.message = "Message too short.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("sending");
    // Simulated send — replace with real fetch/emailjs call
    setTimeout(() => setStatus("sent"), 1500);
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <section className="page contact">
      <p className="eyebrow">Reach Out</p>
      <h2 className="contact-title">Let's Work Together</h2>
      <div className="divider" />

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <p className="contact-intro">
            Whether you have a project in mind, a role to fill, or just want to
            say hi — my inbox is always open.
          </p>

          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">✉</span>
              <span>kanika31@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Mumbai,India</span>
            </div>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
              >
                <span className="social-icon">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="card sent-card">
            <div className="sent-icon">✓</div>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <button
              className="btn btn-outline"
              onClick={() => { setForm({ name: "", email: "", message: "" }); setStatus(null); }}
            >
              Send another
            </button>
          </div>
        ) : (
          <div className="contact-form card">
            <div className="field">
              <label className="field-label">Name</label>
              <input
                className={`field-input ${errors.name ? "error" : ""}`}
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className="field">
              <label className="field-label">Email</label>
              <input
                className={`field-input ${errors.email ? "error" : ""}`}
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="field">
              <label className="field-label">Message</label>
              <textarea
                className={`field-input field-textarea ${errors.message ? "error" : ""}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              {errors.message && <p className="field-error">{errors.message}</p>}
            </div>

            <button
              className={`btn btn-primary submit-btn ${status === "sending" ? "sending" : ""}`}
              onClick={handleSubmit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
