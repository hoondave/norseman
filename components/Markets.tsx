"use client";

import { Landmark, Shield, Eye, Building2, HeartPulse, GraduationCap } from "lucide-react";
import { useInView } from "./useInView";

const markets = [
  { icon: <Landmark size={28} />, title: "Federal Civilian", image: "/images/federal-government.svg", desc: "We support major federal agencies in modernizing their IT infrastructure, improving citizen services, and meeting stringent compliance mandates. Our deep understanding of FedRAMP, FISMA, and federal acquisition processes ensures rapid, compliant deployments.", color: "#0ea5e9", highlight: true },
  { icon: <Shield size={28} />, title: "Department of Defense", image: "/images/defense-pentagon.svg", desc: "Trusted by the warfighter. We deliver solutions across the DoD enterprise — from garrison IT modernization to tactical edge computing in austere environments. Our cleared personnel and IL4/IL5 experience make us a go-to partner for defense missions.", color: "#0ea5e9", highlight: true },
  { icon: <Eye size={28} />, title: "Intelligence Community", image: "/images/intelligence-community.svg", desc: "Mission-critical solutions for the IC. We bring specialized expertise in high-side environments, cross-domain solutions, and data analytics platforms that turn signals into actionable intelligence at the speed of relevance.", color: "#0ea5e9", highlight: true },
  { icon: <Building2 size={28} />, title: "Commercial Enterprise", image: "/images/commercial-enterprise.svg", desc: "Fortune 500 companies trust Norseman for the same technical rigor we bring to government. We deliver enterprise IT transformation, cloud migration, cybersecurity, and AI solutions for businesses that demand reliability and performance.", color: "#f59e0b" },
  { icon: <HeartPulse size={28} />, title: "Healthcare", image: "/images/healthcare.svg", desc: "Supporting healthcare organizations with HIPAA-compliant infrastructure, secure telehealth platforms, clinical data analytics, and cybersecurity solutions that protect sensitive patient data while enabling innovation in care delivery.", color: "#10b981" },
  { icon: <GraduationCap size={28} />, title: "State, Local & Education", image: "/images/sled-education.svg", desc: "Bringing federal-grade technology solutions to state, local governments, and educational institutions. We help modernize learning environments, secure public infrastructure, and improve digital services for communities nationwide.", color: "#8b5cf6" },
];

export default function Markets() {
  const [ref, visible] = useInView();

  return (
    <section id="markets" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-950), var(--navy-900), var(--navy-950))" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> MARKETS WE SERVE <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Serving Those Who<br /><span style={{ color: "var(--teal-400)" }}>Serve the Mission</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Whether protecting national security or transforming commercial enterprises, we bring the same rigor, expertise, and commitment to every engagement.
          </p>
        </div>

        <div className="markets-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 20 }}>
          {markets.map((m, i) => (
            <div key={i} style={{
              background: m.highlight ? "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(14,165,233,0.02))" : "rgba(255,255,255,0.02)",
              border: `1px solid ${m.highlight ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 16, padding: 32, transition: "all 0.4s", position: "relative", overflow: "hidden",
              ...(visible ? { animation: `fadeInUp 0.6s ease-out ${0.1 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = m.color + "40"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = m.highlight ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {m.highlight && (
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(14,165,233,0.15)", borderRadius: 6, padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "var(--teal-300)", letterSpacing: "1px", textTransform: "uppercase" }}>PRIMARY FOCUS</div>
              )}
              {/* Market segment illustration */}
              <div style={{ marginBottom: 16, borderRadius: 10, overflow: "hidden", height: 120, border: `1px solid ${m.color}15` }}>
                <img src={m.image} alt={m.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: `linear-gradient(135deg, ${m.color}22, ${m.color}08)`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, marginBottom: 20 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 700, marginBottom: 12, color: "white" }}>{m.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--slate-400)" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:800px){.markets-grid { grid-template-columns: 1fr !important; }}`}</style>
    </section>
  );
}
