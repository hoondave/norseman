"use client";

import { useEffect } from "react";
import { Server, Lock, Code, Brain, Cog, Globe, ChevronRight } from "lucide-react";

const solutions = [
  {
    icon: <Server size={28} />,
    title: "Foundry",
    subtitle: "IT Infrastructure",
    image: "/images/foundry-infrastructure.jpg",
    fallbackImage: "/images/data-center.svg",
    desc: "Your mission runs on infrastructure — we make sure it's bulletproof. End-to-end design, deployment, and management of the compute, storage, and network backbone your enterprise depends on.",
    capabilities: ["Hybrid Cloud Architecture", "HPC / GPU Computing", "Storage & Data Management", "Network Modernization", "Edge Computing", "Data Center Consolidation"],
  },
  {
    icon: <Lock size={28} />,
    title: "Sentinel",
    subtitle: "Cyber Security",
    image: "/images/sentinel-cyber.jpg",
    fallbackImage: "/images/cybersecurity.svg",
    desc: "Proactive defense for the nation's most sensitive networks. Protecting endpoints, clouds, and everything in between with zero-trust architectures and continuous monitoring.",
    capabilities: ["Zero Trust Architecture", "SIEM & SOAR", "Endpoint Detection & Response", "Identity & Access Management", "Compliance (CMMC, NIST, FedRAMP)", "Penetration Testing"],
  },
  {
    icon: <Code size={28} />,
    title: "Forge",
    subtitle: "DevSecOps",
    image: "/images/forge-devsecops.jpg",
    fallbackImage: "/images/devsecops.svg",
    desc: "Ship faster without cutting corners. Embedding security into every phase of the software lifecycle so your teams can deliver rapid, compliant releases across classified and unclassified environments.",
    capabilities: ["CI/CD Pipeline Design", "Container Orchestration", "Infrastructure as Code", "Automated Security Scanning", "GitOps & Platform Engineering", "Accreditation Acceleration"],
  },
  {
    icon: <Brain size={28} />,
    title: "Cortex",
    subtitle: "AI & Data Intelligence",
    image: "/images/cortex-ai.jpg",
    fallbackImage: "/images/ai-neural-network.svg",
    desc: "Transforming raw data into actionable intelligence at the speed of mission. From predictive models and generative AI to enterprise data platforms, we build the intelligence layer that gives your organization an unfair advantage.",
    capabilities: ["Machine Learning & Deep Learning", "Generative AI Integration", "Data Lakehouse Architecture", "Real-Time Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: <Cog size={28} />,
    title: "Pulse",
    subtitle: "Service Management & Automation",
    image: "/images/pulse-automation.jpg",
    fallbackImage: "/images/service-management.svg",
    desc: "The heartbeat of modern IT operations. Intelligent ITSM platforms, robotic process automation, and AI-powered help desks that slash response times and eliminate manual toil.",
    capabilities: ["ITSM Platform Implementation", "Robotic Process Automation", "AI-Powered Service Desk", "Workflow Orchestration", "Self-Service Portals", "Chatbot & Virtual Agent Deployment"],
  },
  {
    icon: <Globe size={28} />,
    title: "Horizon",
    subtitle: "Cloud & Edge Computing",
    image: "/images/horizon-cloud.jpg",
    fallbackImage: "/images/cloud-infrastructure.svg",
    desc: "From government cloud to the tactical edge — we architect, migrate, and manage workloads across AWS GovCloud, Azure Government, and on-premise environments with full ATO support.",
    capabilities: ["Cloud Migration Strategy", "AWS GovCloud / Azure Gov", "FedRAMP Authorization Support", "Multi-Cloud Management", "Tactical Edge Deployments", "Disconnected & Austere Environments"],
  },
];

export default function Solutions() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    const panels = document.querySelectorAll(".scrolly-panel");
    panels.forEach((panel) => scrollObserver.observe(panel));

    // Image fallback handler — if JPG exists, use it; otherwise SVG
    const bgElements = document.querySelectorAll<HTMLElement>(".sticky-background");
    bgElements.forEach((el) => {
      const fallback = el.dataset.fallback;
      const primary = el.dataset.primary;
      if (primary) {
        const img = new Image();
        img.onload = () => {
          el.style.backgroundImage = `linear-gradient(rgba(4,10,24,0.55), rgba(4,10,24,0.7)), url('${primary}')`;
        };
        img.onerror = () => {
          if (fallback) {
            el.style.backgroundImage = `linear-gradient(rgba(4,10,24,0.4), rgba(4,10,24,0.6)), url('${fallback}')`;
          }
        };
        img.src = primary;
      }
    });

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <>
      {/* Section header */}
      <section
        id="solutions"
        style={{
          position: "relative",
          padding: "100px 24px 60px",
          background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))",
          textAlign: "center",
        }}
      >
        <div className="noise-overlay" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--teal-400)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> TECHNOLOGY FOCUS{" "}
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Outfit'",
              fontSize: "clamp(32px,3.5vw,48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Six Practices.
            <br />
            <span style={{ color: "var(--teal-400)" }}>One Mission.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--slate-400)",
              maxWidth: 660,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Each practice is purpose-built to solve a specific class of problem — and battle-tested
            across the most demanding government and enterprise environments in the country.
          </p>
        </div>
      </section>

      {/* Parallax scrolling solution panels */}
      {solutions.map((s, i) => (
        <section key={i} className="scrolly-container">
          <div
            className="sticky-background"
            data-primary={s.image}
            data-fallback={s.fallbackImage}
            style={{
              backgroundImage: `linear-gradient(rgba(4,10,24,0.5), rgba(4,10,24,0.65)), url('${s.fallbackImage}')`,
            }}
          />
          <div className="scrolling-content">
            <div className="scrolly-panel">
              <div className="scrolly-panel-inner">
                {/* Practice number indicator */}
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--teal-400)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  opacity: 0.7,
                }}>
                  PRACTICE {String(i + 1).padStart(2, "0")} / 06
                </div>

                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(14,165,233,0.08))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--teal-400)", flexShrink: 0,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(14,165,233,0.2)",
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <h2 style={{
                      fontFamily: "'Outfit'",
                      fontSize: "clamp(28px, 4vw, 48px)",
                      fontWeight: 800, lineHeight: 1.1, color: "white",
                    }}>
                      {s.title}
                    </h2>
                    <div style={{
                      fontSize: 15, color: "var(--teal-400)",
                      fontWeight: 600, letterSpacing: "0.5px", marginTop: 2,
                    }}>
                      {s.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: 1.7, color: "var(--slate-200)",
                  maxWidth: 700, marginBottom: 32,
                }}>
                  {s.desc}
                </p>

                {/* Capabilities as pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, maxWidth: 700 }}>
                  {s.capabilities.map((c, j) => (
                    <div key={j} style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 16px",
                      background: "rgba(14,165,233,0.1)",
                      border: "1px solid rgba(14,165,233,0.2)",
                      borderRadius: 100, fontSize: 13, fontWeight: 500,
                      color: "var(--teal-300)",
                      backdropFilter: "blur(6px)",
                    }}>
                      <ChevronRight size={12} style={{ color: "var(--teal-400)", flexShrink: 0 }} />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Parallax styles */}
      <style>{`
        .scrolly-container {
          position: relative;
        }

        .sticky-background {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .scrolling-content {
          position: relative;
          z-index: 1;
          margin-top: -100vh;
        }

        .scrolly-panel {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 2rem 2rem 2rem calc(max(2rem, (100vw - 1280px) / 2 + 2rem));
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }

        .scrolly-panel.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scrolly-panel-inner {
          max-width: 680px;
          padding: 44px;
          background: rgba(4, 10, 24, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(14, 165, 233, 0.12);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        @media (max-width: 768px) {
          .scrolly-panel {
            align-items: center;
            padding: 1.5rem;
          }
          .scrolly-panel-inner {
            padding: 28px 20px;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
