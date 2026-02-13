"use client";

import { Briefcase, ArrowRight } from "lucide-react";
import { useInView } from "./useInView";

export default function Careers() {
  const [ref, visible] = useInView();

  return (
    <section id="careers" ref={ref} style={{ position: "relative", padding: "100px 24px", background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))" }}>
      <div className="noise-overlay" />
      <div style={{
        maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center",
        ...(visible ? { animation: "fadeInUp 0.7s ease-out forwards" } : { opacity: 0 }),
      }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-400)", margin: "0 auto 24px" }}>
          <Briefcase size={28} />
        </div>
        <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,44px)", fontWeight: 800, marginBottom: 20 }}>
          Join the <span style={{ color: "var(--teal-400)" }}>Norseman Team</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
          We&apos;re always looking for talented engineers, architects, and technologists who are passionate about solving hard problems and supporting critical missions. Competitive compensation, excellent benefits, and a culture that values every team member.
        </p>
        <a href="mailto:careers@norseman.com" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
          color: "white", padding: "16px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600,
          textDecoration: "none", boxShadow: "0 4px 20px rgba(14,165,233,0.3)", transition: "all 0.3s",
        }}>
          View Open Positions <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
