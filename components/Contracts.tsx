"use client";

import { useInView } from "./useInView";

const contracts = [
  { name: "ITES-4H", full: "Information Technology Enterprise Solutions - 4 Hardware", desc: "Army enterprise IT hardware and solutions contract vehicle." },
  { name: "SEWP VI", full: "Solutions for Enterprise-Wide Procurement", desc: "NASA GWAC for IT products, services, and solutions." },
  { name: "CIO-CS", full: "Chief Information Officer - Commodities & Solutions", desc: "DHS contract for IT commodities and services." },
  { name: "GSA MAS", full: "General Services Administration Multiple Award Schedule", desc: "Government-wide contract for IT products and services." },
  { name: "Elastic ESI", full: "Elastic Enterprise Software Initiative", desc: "DoD ESI for Elastic search and analytics solutions." },
  { name: "GitLab ESI", full: "GitLab Enterprise Software Initiative", desc: "DoD ESI for GitLab DevSecOps platform." },
  { name: "Palo Alto ESI", full: "Palo Alto Networks Enterprise Software Initiative", desc: "DoD ESI for Palo Alto cybersecurity solutions." },
  { name: "JFrog ESI", full: "JFrog Enterprise Software Initiative", desc: "DoD ESI for JFrog DevOps platform and artifact management." },
];

export default function Contracts() {
  const [ref, visible] = useInView();

  return (
    <section id="contracts" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "var(--navy-900)" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> CONTRACT VEHICLES <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Streamlined<br /><span style={{ color: "var(--teal-400)" }}>Procurement</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Multiple contract vehicles to simplify acquisition. Procure best-of-breed solutions quickly and compliantly through our established government contracts.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {contracts.map((c, i) => (
            <div key={i} style={{
              background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)",
              borderRadius: 14, padding: "24px 28px", transition: "all 0.3s", cursor: "pointer",
              ...(visible ? { animation: `fadeInUp 0.5s ease-out ${0.05 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: "var(--teal-400)", marginBottom: 6 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "var(--slate-400)", marginBottom: 10, fontWeight: 500 }}>{c.full}</div>
              <div style={{ fontSize: 13, color: "var(--slate-400)", lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
