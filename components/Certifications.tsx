"use client";

import { Award } from "lucide-react";
import { useInView } from "./useInView";

export default function Certifications() {
  const [ref, visible] = useInView();

  return (
    <section id="certifications" ref={ref} style={{ position: "relative", padding: "100px 24px", background: "var(--navy-950)" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="cert-grid" style={{
          background: "linear-gradient(135deg, rgba(14,165,233,0.06), rgba(245,158,11,0.03))",
          border: "1px solid rgba(14,165,233,0.1)", borderRadius: 20, padding: "64px 48px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
          ...(visible ? { animation: "fadeInUp 0.7s ease-out forwards" } : { opacity: 0 }),
        }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, marginBottom: 20 }}>
              Certified <span style={{ color: "var(--teal-400)" }}>Quality &amp; Security</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 24 }}>
              Our ISO certifications demonstrate our commitment to quality management, IT service management, and information security management — validated by independent third-party audits.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { cert: "ISO 9001:2015", desc: "Quality Management Systems" },
                { cert: "ISO/IEC 20000-1:2018", desc: "IT Service Management" },
                { cert: "ISO/IEC 27001:2013", desc: "Information Security Management" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Award size={20} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 15, color: "white" }}>{c.cert}</span>
                    <span style={{ fontSize: 14, color: "var(--slate-400)", marginLeft: 8 }}>{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(10,22,40,0.6)", borderRadius: 14, padding: "28px 24px", border: "1px solid rgba(14,165,233,0.08)" }}>
              <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14 }}>Company Identifiers</div>
              {[
                { label: "CAGE Code", value: "0WNZ6" },
                { label: "UEI", value: "G8LCAVK5AVW7" },
                { label: "DUNS", value: "798806766" },
                { label: "CCR", value: "1996K213311" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <span style={{ fontSize: 14, color: "var(--slate-400)" }}>{item.label}</span>
                  <span style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "white", letterSpacing: "0.5px" }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(10,22,40,0.6)", borderRadius: 14, padding: "28px 24px", border: "1px solid rgba(14,165,233,0.08)" }}>
              <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10 }}>Set-Aside Status</div>
              <div style={{ fontSize: 15, color: "white", fontWeight: 600 }}>Small Business</div>
              <div style={{ fontSize: 13, color: "var(--slate-400)", marginTop: 4 }}>SBA Certified Small Business Concern</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.cert-grid { grid-template-columns: 1fr !important; padding: 36px 24px !important; }}`}</style>
    </section>
  );
}
