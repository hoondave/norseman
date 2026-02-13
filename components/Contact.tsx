"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useInView } from "./useInView";

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <section id="contact" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div style={visible ? { animation: "slideInLeft 0.7s ease-out forwards" } : { opacity: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
              <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> GET IN TOUCH
            </div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
              Let&apos;s Build<br /><span style={{ color: "var(--teal-400)" }}>Something Great</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--slate-400)", lineHeight: 1.7, marginBottom: 40 }}>
              Whether you need a complete infrastructure refresh, a cybersecurity assessment, or a strategic technology roadmap, our team is ready to help you succeed.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: <MapPin size={20} />, label: "Headquarters", value: "8172 Lark Brown Rd, Ste. 201\nElkridge, MD 21075" },
                { icon: <Phone size={20} />, label: "Phone", value: "410.579.8600" },
                { icon: <Mail size={20} />, label: "Email", value: "sales@norseman.com" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-400)" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--teal-400)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 15, color: "var(--slate-300)", whiteSpace: "pre-line", lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 18, padding: 40,
            ...(visible ? { animation: "fadeInUp 0.7s ease-out 0.3s forwards", opacity: 0 } : { opacity: 0 }),
          }}>
            <h3 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 700, marginBottom: 28, color: "white" }}>Request a Consultation</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input placeholder="First Name" className="form-input" />
                <input placeholder="Last Name" className="form-input" />
              </div>
              <input placeholder="Email Address" className="form-input" />
              <input placeholder="Organization" className="form-input" />
              <input placeholder="Phone Number" className="form-input" />
              <select className="form-input" defaultValue="">
                <option value="" disabled>Select Interest Area</option>
                <option>Foundry — IT Infrastructure</option>
                <option>Sentinel — Cyber Security</option>
                <option>Forge — DevSecOps</option>
                <option>Cortex — AI &amp; Data Intelligence</option>
                <option>Horizon — Cloud &amp; Edge Computing</option>
                <option>Pulse — Service Automation</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your project or requirements..." rows={4} className="form-input" style={{ resize: "vertical" }} />
              <button style={{
                background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
                color: "white", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600,
                border: "none", cursor: "pointer", transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(14,165,233,0.3)",
              }}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }}`}</style>
    </section>
  );
}
