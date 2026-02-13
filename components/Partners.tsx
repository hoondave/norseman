"use client";

import { useInView } from "./useInView";

const partnerGroups = [
  { category: "Infrastructure & Compute", names: ["Hewlett Packard Enterprise", "Dell Technologies", "Cisco Systems", "Lenovo", "NetApp", "Pure Storage", "NVIDIA", "Intel"] },
  { category: "Cybersecurity", names: ["Palo Alto Networks", "CrowdStrike", "Fortinet", "Elastic Security", "Tenable", "Splunk", "SentinelOne", "Trellix"] },
  { category: "DevSecOps & Software", names: ["GitLab", "JFrog", "Red Hat", "VMware", "Atlassian", "HashiCorp", "Docker", "Ansible"] },
  { category: "Cloud & Data", names: ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks", "MongoDB", "Confluent", "Cloudera"] },
];

export default function Partners() {
  const [ref, visible] = useInView();

  return (
    <section id="partners" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))" }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> OEM ECOSYSTEM <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Only As Good As<br /><span style={{ color: "var(--teal-400)" }}>The Company We Keep</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Strategic partnerships with 300+ industry leaders enable us to deliver best-of-breed, vendor-agnostic solutions tailored to your mission.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {partnerGroups.map((group, i) => (
            <div key={i} style={{
              background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)", borderRadius: 16, padding: 28,
              ...(visible ? { animation: `fadeInUp 0.6s ease-out ${0.15 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}>
              <h4 style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid rgba(14,165,233,0.1)" }}>{group.category}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {group.names.map((name, j) => (
                  <div key={j} style={{ fontSize: 14, color: "var(--slate-300)", padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal-500)", opacity: 0.5 }} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
