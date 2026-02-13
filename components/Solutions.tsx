"use client";

import { useState } from "react";
import { Server, Lock, Code, Brain, Cog, Globe, ChevronRight } from "lucide-react";
import { useInView } from "./useInView";

const solutions = [
  {
    icon: <Server size={24} />, title: "IT Infrastructure",
    desc: "End-to-end infrastructure design, deployment, and lifecycle management. From hyperconverged platforms and high-performance computing to hybrid cloud environments, we engineer the foundation your mission depends on.",
    capabilities: ["Hybrid Cloud Architecture", "HPC / GPU Computing", "Storage & Data Management", "Network Modernization", "Edge Computing", "Data Center Consolidation"],
  },
  {
    icon: <Lock size={24} />, title: "Cyber Security",
    desc: "Comprehensive cybersecurity solutions meeting the most stringent federal compliance requirements. We protect critical infrastructure with zero-trust architectures, advanced threat detection, and continuous monitoring.",
    capabilities: ["Zero Trust Architecture", "SIEM & SOAR", "Endpoint Detection & Response", "Identity & Access Management", "Compliance (CMMC, NIST, FedRAMP)", "Penetration Testing"],
  },
  {
    icon: <Code size={24} />, title: "DevSecOps",
    desc: "Accelerate software delivery without sacrificing security. Our DevSecOps practice embeds security into every phase of the development lifecycle, enabling rapid, compliant deployments across classified and unclassified environments.",
    capabilities: ["CI/CD Pipeline Design", "Container Orchestration", "Infrastructure as Code", "Automated Security Scanning", "GitOps & Platform Engineering", "Accreditation Acceleration"],
  },
  {
    icon: <Brain size={24} />, title: "AI & Data Intelligence",
    desc: "Transform raw data into actionable intelligence with our AI/ML solutions. From predictive analytics to generative AI, we build data platforms that accelerate decision-making at the speed of mission.",
    capabilities: ["Machine Learning & Deep Learning", "Generative AI Integration", "Data Lakehouse Architecture", "Real-Time Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: <Cog size={24} />, title: "Service Management & Automation",
    desc: "Modernize IT service delivery with intelligent automation. We implement ITSM platforms, robotic process automation, and AI-powered help desks that reduce costs while improving user experience and response times.",
    capabilities: ["ITSM Platform Implementation", "Robotic Process Automation", "AI-Powered Service Desk", "Workflow Orchestration", "Self-Service Portals", "Chatbot & Virtual Agent Deployment"],
  },
  {
    icon: <Globe size={24} />, title: "Cloud & Edge Computing",
    desc: "Navigate the complexities of government cloud with confidence. We architect, migrate, and manage workloads across AWS GovCloud, Azure Government, and on-premise environments with full ATO support.",
    capabilities: ["Cloud Migration Strategy", "AWS GovCloud / Azure Gov", "FedRAMP Authorization Support", "Multi-Cloud Management", "Tactical Edge Deployments", "Disconnected & Austere Environments"],
  },
];

export default function Solutions() {
  const [ref, visible] = useInView();
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))" }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> TECHNOLOGY FOCUS <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Solutions That Drive<br /><span style={{ color: "var(--teal-400)" }}>Mission Success</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            From data center to tactical edge, we deliver custom IT solutions, services, and support designed to exceed the demands of the most complex missions.
          </p>
        </div>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {solutions.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
                background: active === i ? "rgba(14,165,233,0.1)" : "transparent",
                border: active === i ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                borderRadius: 10, cursor: "pointer", textAlign: "left", transition: "all 0.3s",
                color: active === i ? "white" : "var(--slate-400)",
              }}>
                <div style={{ color: active === i ? "var(--teal-400)" : "var(--slate-400)", transition: "color 0.3s" }}>{s.icon}</div>
                <span style={{ fontFamily: "'Outfit'", fontWeight: 600, fontSize: 15 }}>{s.title}</span>
              </button>
            ))}
          </div>

          <div key={active} style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 18, padding: "48px 44px", animation: "fadeIn 0.4s ease-out" }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-400)", marginBottom: 24 }}>
              {solutions[active].icon}
            </div>
            <h3 style={{ fontFamily: "'Outfit'", fontSize: 28, fontWeight: 800, marginBottom: 16, color: "white" }}>{solutions[active].title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 28 }}>{solutions[active].desc}</p>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Key Capabilities</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {solutions[active].capabilities.map((c, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--slate-300)" }}>
                  <ChevronRight size={14} style={{ color: "var(--teal-500)", flexShrink: 0 }} /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.solutions-grid { grid-template-columns: 1fr !important; }}`}</style>
    </section>
  );
}
