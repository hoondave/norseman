"use client";

import { Target, Users, Zap, Award, CheckCircle } from "lucide-react";
import { useInView } from "./useInView";

const pillars = [
  { icon: <Target size={22} />, title: "Mission-Focused", desc: "Every solution engineered to meet your specific operational requirements and compliance mandates." },
  { icon: <Users size={22} />, title: "Partnership-Driven", desc: "We succeed when you succeed. Our client relationships span decades, not just contracts." },
  { icon: <Zap size={22} />, title: "Agile Delivery", desc: "Small business speed with enterprise-grade capability. We deploy faster than the big integrators." },
  { icon: <Award size={22} />, title: "ISO Certified", desc: "ISO 9001, ISO 20000, and ISO 27001 certified processes ensuring quality, service, and security." },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={visible ? { animation: "slideInLeft 0.7s ease-out forwards" } : { opacity: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
              <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> WHO WE ARE
            </div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Elite Federal Technology<br /><span style={{ color: "var(--teal-400)" }}>Partner &amp; Integrator</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 20 }}>
              Norseman Defense Technologies is a certified Small Business with over 30 years of proven success as an Information Technology provider and systems integrator. Headquartered near Baltimore, Maryland, we partner with more than 300 OEMs and service integrators to deliver best-of-breed solutions that solve complex IT challenges within real-world constraints.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 32 }}>
              From securing the nation&apos;s most sensitive networks to modernizing enterprise infrastructure for Fortune 500 companies, our teams bring deep technical expertise and an unwavering commitment to mission success.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--slate-300)", fontSize: 14 }}>
                <CheckCircle size={16} style={{ color: "var(--teal-400)" }} /> SDVOSB Eligible
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--slate-300)", fontSize: 14 }}>
                <CheckCircle size={16} style={{ color: "var(--teal-400)" }} /> ISO 9001 / 20000 / 27001
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--slate-300)", fontSize: 14 }}>
                <CheckCircle size={16} style={{ color: "var(--teal-400)" }} /> Top Secret Cleared Staff
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, ...(visible ? { animation: "fadeInUp 0.7s ease-out 0.3s forwards", opacity: 0 } : { opacity: 0 }) }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.08)", borderRadius: 14, padding: 24, transition: "all 0.3s" }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)"; e.currentTarget.style.background = "rgba(14,165,233,0.07)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.08)"; e.currentTarget.style.background = "rgba(14,165,233,0.04)"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-400)", marginBottom: 14 }}>{p.icon}</div>
                <h4 style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 700, marginBottom: 8, color: "white" }}>{p.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--slate-400)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }}`}</style>
    </section>
  );
}
