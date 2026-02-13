"use client";

import { useState } from "react";
import { Server, Lock, Code, Brain, Cog, Globe, ChevronRight } from "lucide-react";
import { useInView } from "./useInView";

const solutions = [
  {
    icon: <Server size={24} />, title: "Foundry", subtitle: "IT Infrastructure",
    desc: "Your mission runs on infrastructure — we make sure it's bulletproof. Foundry is our end-to-end practice for designing, deploying, and managing the compute, storage, and network backbone your enterprise depends on. From hyperconverged platforms and high-performance GPU clusters to hybrid cloud environments, we engineer foundations built to scale.",
    capabilities: ["Hybrid Cloud Architecture", "HPC / GPU Computing", "Storage & Data Management", "Network Modernization", "Edge Computing", "Data Center Consolidation"],
  },
  {
    icon: <Lock size={24} />, title: "Sentinel", subtitle: "Cyber Security",
    desc: "Threats don't sleep. Neither does Sentinel. Our cybersecurity practice delivers always-on protection through zero-trust architectures, advanced threat detection, and continuous monitoring — all built to meet the most stringent federal compliance requirements. We secure the networks that protect the nation.",
    capabilities: ["Zero Trust Architecture", "SIEM & SOAR", "Endpoint Detection & Response", "Identity & Access Management", "Compliance (CMMC, NIST, FedRAMP)", "Penetration Testing"],
  },
  {
    icon: <Code size={24} />, title: "Forge", subtitle: "DevSecOps",
    desc: "Ship faster without cutting corners. Forge is our DevSecOps practice — embedding security into every phase of the software lifecycle so your teams can deliver rapid, compliant releases across classified and unclassified environments. We build the pipelines, automate the guardrails, and accelerate your path to production.",
    capabilities: ["CI/CD Pipeline Design", "Container Orchestration", "Infrastructure as Code", "Automated Security Scanning", "GitOps & Platform Engineering", "Accreditation Acceleration"],
  },
  {
    icon: <Brain size={24} />, title: "Cortex", subtitle: "AI & Data Intelligence",
    desc: "Data is only as valuable as the decisions it drives. Cortex is our AI and analytics practice — transforming raw data into actionable intelligence at the speed of mission. From predictive models and generative AI to enterprise data platforms, we build the intelligence layer that gives your organization an unfair advantage.",
    capabilities: ["Machine Learning & Deep Learning", "Generative AI Integration", "Data Lakehouse Architecture", "Real-Time Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: <Cog size={24} />, title: "Pulse", subtitle: "Service Management & Automation",
    desc: "The heartbeat of modern IT operations. Pulse is our service automation practice — implementing intelligent ITSM platforms, robotic process automation, and AI-powered help desks that slash response times and eliminate manual toil. We orchestrate the workflows that keep your enterprise running at peak performance.",
    capabilities: ["ITSM Platform Implementation", "Robotic Process Automation", "AI-Powered Service Desk", "Workflow Orchestration", "Self-Service Portals", "Chatbot & Virtual Agent Deployment"],
  },
  {
    icon: <Globe size={24} />, title: "Horizon", subtitle: "Cloud & Edge Computing",
    desc: "From government cloud to the tactical edge — Horizon takes you there. We architect, migrate, and manage workloads across AWS GovCloud, Azure Government, and on-premise environments with full ATO support. Whether it's a data center in Virginia or a disconnected node in an austere theater, we bridge every environment.",
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
            Six Practices.<br /><span style={{ color: "var(--teal-400)" }}>One Mission.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 660, margin: "0 auto", lineHeight: 1.7 }}>
            Each practice is purpose-built to solve a specific class of problem — and battle-tested across
            the most demanding government and enterprise environments in the country.
          </p>
        </div>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {solutions.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
                background: active === i ? "rgba(14,165,233,0.1)" : "transparent",
                border: active === i ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                borderRadius: 10, cursor: "pointer", textAlign: "left", transition: "all 0.3s",
                color: active === i ? "white" : "var(--slate-400)",
              }}>
                <div style={{ color: active === i ? "var(--teal-400)" : "var(--slate-400)", transition: "color 0.3s", flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 15, display: "block", lineHeight: 1.2 }}>{s.title}</span>
                  <span style={{ fontSize: 11, color: active === i ? "var(--teal-400)" : "var(--slate-400)", fontWeight: 500, letterSpacing: "0.5px" }}>{s.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          <div key={active} style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 18, padding: "48px 44px", animation: "fadeIn 0.4s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal-400)", flexShrink: 0 }}>
                {solutions[active].icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit'", fontSize: 28, fontWeight: 800, color: "white", lineHeight: 1.1 }}>{solutions[active].title}</h3>
                <div style={{ fontSize: 14, color: "var(--teal-400)", fontWeight: 600, marginTop: 2 }}>{solutions[active].subtitle}</div>
              </div>
            </div>
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
