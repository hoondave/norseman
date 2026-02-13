import { useState, useEffect, useRef } from "react";
import { Shield, Server, Code, Brain, Cog, Lock, ChevronRight, MapPin, Phone, Mail, Menu, X, ExternalLink, ArrowRight, CheckCircle, Globe, Building2, Landmark, Briefcase, HeartPulse, GraduationCap, Users, Award, Zap, Eye, Target, ChevronDown } from "lucide-react";

// ─── STYLE INJECTION ─────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
  --navy-950: #040a18;
  --navy-900: #0a1628;
  --navy-800: #0f2240;
  --navy-700: #162d52;
  --navy-600: #1e3a68;
  --navy-500: #2a4f8a;
  --teal-500: #0ea5e9;
  --teal-400: #38bdf8;
  --teal-300: #7dd3fc;
  --gold-500: #f59e0b;
  --gold-400: #fbbf24;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --white: #ffffff;
  --red-accent: #dc2626;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--navy-950);
  color: var(--white);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
}

/* Hero background animation */
@keyframes subtleShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

@keyframes scanline {
  0% { top: -100%; }
  100% { top: 200%; }
}

.animate-in {
  animation: fadeInUp 0.7s ease-out forwards;
}

.animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
.animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
.animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
.animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
.animate-delay-5 { animation-delay: 0.5s; opacity: 0; }
.animate-delay-6 { animation-delay: 0.6s; opacity: 0; }
.animate-delay-7 { animation-delay: 0.7s; opacity: 0; }
.animate-delay-8 { animation-delay: 0.8s; opacity: 0; }

/* Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--navy-950); }
::-webkit-scrollbar-thumb { background: var(--navy-600); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--teal-500); }

/* Grid background pattern */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

/* Noise texture overlay */
.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}
`;

// ─── SECTION OBSERVER HOOK ───────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

// ─── NAVIGATION ──────────────────────────────────────────────────
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    {
      label: "Company", href: "#about",
      children: [
        { label: "About Us", href: "#about" },
        { label: "Locations", href: "#locations" },
        { label: "Certifications", href: "#certifications" },
        { label: "Careers", href: "#careers" },
      ]
    },
    {
      label: "Solutions", href: "#solutions",
      children: [
        { label: "IT Infrastructure", href: "#solutions" },
        { label: "Cyber Security", href: "#solutions" },
        { label: "DevSecOps", href: "#solutions" },
        { label: "AI & Data Intelligence", href: "#solutions" },
        { label: "Service Automation", href: "#solutions" },
        { label: "Cloud & Edge Computing", href: "#solutions" },
      ]
    },
    {
      label: "Markets", href: "#markets",
      children: [
        { label: "Federal Civilian", href: "#markets" },
        { label: "Department of Defense", href: "#markets" },
        { label: "Intelligence Community", href: "#markets" },
        { label: "Commercial", href: "#markets" },
        { label: "Healthcare", href: "#markets" },
        { label: "State & Local / Education", href: "#markets" },
      ]
    },
    { label: "Contracts", href: "#contracts" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(4,10,24,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(14,165,233,0.1)" : "1px solid transparent",
      transition: "all 0.4s ease",
      padding: scrolled ? "12px 0" : "20px 0",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{
            width: 42, height: 42, borderRadius: 8,
            background: "linear-gradient(135deg, var(--teal-500), var(--navy-600))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 20, color: "white",
            boxShadow: "0 0 20px rgba(14,165,233,0.3)",
          }}>N</div>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: "white", letterSpacing: "0.5px", lineHeight: 1.1 }}>NORSEMAN</div>
            <div style={{ fontSize: 9, letterSpacing: "2.5px", color: "var(--teal-400)", fontWeight: 500, textTransform: "uppercase" }}>Defense Technologies</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <div key={i} style={{ position: "relative" }}
              onMouseEnter={() => link.children && setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}>
              <a href={link.href} style={{
                color: "var(--slate-300)", textDecoration: "none", fontSize: 14, fontWeight: 500,
                padding: "8px 14px", borderRadius: 6, transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 4,
              }}
                onMouseOver={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(14,165,233,0.1)"; }}
                onMouseOut={e => { e.currentTarget.style.color = "var(--slate-300)"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
                {link.children && <ChevronDown size={12} />}
              </a>
              {link.children && activeDropdown === i && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, minWidth: 220,
                  background: "rgba(10,22,40,0.97)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(14,165,233,0.15)", borderRadius: 10,
                  padding: 8, marginTop: 4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  animation: "fadeIn 0.2s ease-out",
                }}>
                  {link.children.map((child, j) => (
                    <a key={j} href={child.href} style={{
                      display: "block", padding: "10px 14px", fontSize: 13, color: "var(--slate-300)",
                      textDecoration: "none", borderRadius: 6, transition: "all 0.2s",
                    }}
                      onMouseOver={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(14,165,233,0.1)"; }}
                      onMouseOut={e => { e.currentTarget.style.color = "var(--slate-300)"; e.currentTarget.style.background = "transparent"; }}
                    >{child.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#contact" className="desktop-nav" style={{
            background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
            color: "white", padding: "10px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            textDecoration: "none", transition: "all 0.3s",
            boxShadow: "0 4px 15px rgba(14,165,233,0.3)",
          }}
            onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 25px rgba(14,165,233,0.5)"}
            onMouseOut={e => e.currentTarget.style.boxShadow = "0 4px 15px rgba(14,165,233,0.3)"}
          >Get Started</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{
            background: "transparent", border: "none", color: "white", cursor: "pointer",
            display: "none", padding: 8,
          }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(4,10,24,0.98)", backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(14,165,233,0.1)", padding: 24,
        }}>
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} onClick={() => setMobileOpen(false)} style={{
              display: "block", padding: "14px 0", color: "var(--slate-200)", textDecoration: "none",
              fontSize: 16, fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{link.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── HERO SECTION ────────────────────────────────────────────────
function Hero() {
  const stats = [
    { value: "30+", label: "Years of Excellence" },
    { value: "300+", label: "OEM Partners" },
    { value: "10", label: "Offices Nationwide" },
    { value: "24/7", label: "Mission Support" },
  ];

  return (
    <section id="home" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(160deg, var(--navy-950) 0%, var(--navy-900) 40%, #0c1e3d 70%, var(--navy-800) 100%)",
      overflow: "hidden",
    }}>
      <div className="grid-bg" />
      <div className="noise-overlay" />

      {/* Decorative orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)", animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(50px)", animation: "float 10s ease-in-out infinite 2s",
      }} />

      {/* Scanline effect */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: "200px",
          background: "linear-gradient(transparent, rgba(14,165,233,0.02), transparent)",
          animation: "scanline 8s linear infinite",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "140px 24px 80px", width: "100%" }}>
        <div style={{ maxWidth: 780 }}>
          {/* Badge */}
          <div className="animate-in animate-delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)",
            borderRadius: 100, padding: "8px 18px", marginBottom: 28,
          }}>
            <Shield size={14} style={{ color: "var(--teal-400)" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal-300)", letterSpacing: "0.5px" }}>
              SMALL BUSINESS &middot; CAGE: 0WNZ6 &middot; UEI: G8LCAVK5AVW7
            </span>
          </div>

          <h1 className="animate-in animate-delay-2" style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(40px, 5.5vw, 72px)",
            fontWeight: 800, lineHeight: 1.05, marginBottom: 24,
            background: "linear-gradient(135deg, #ffffff 0%, var(--slate-300) 50%, var(--teal-300) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-1px",
          }}>
            Trusted Partners.<br />
            <span style={{
              background: "linear-gradient(135deg, var(--teal-400), var(--teal-300))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Proven Solutions.</span>
          </h1>

          <p className="animate-in animate-delay-3" style={{
            fontSize: 19, lineHeight: 1.7, color: "var(--slate-400)",
            maxWidth: 600, marginBottom: 40,
          }}>
            For over three decades, Norseman Defense Technologies has delivered mission-critical IT solutions 
            to the Federal Government, Department of Defense, Intelligence Community, and leading commercial 
            enterprises across the nation.
          </p>

          <div className="animate-in animate-delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 70 }}>
            <a href="#solutions" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
              color: "white", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600,
              textDecoration: "none", transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
            }}>
              Explore Solutions <ArrowRight size={18} />
            </a>
            <a href="#contracts" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              color: "white", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600,
              textDecoration: "none", transition: "all 0.3s",
            }}>
              View Contract Vehicles
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="animate-in animate-delay-5" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2,
          background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.1)",
          borderRadius: 16, overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "28px 24px", textAlign: "center",
              background: "rgba(10,22,40,0.5)",
              borderRight: i < stats.length - 1 ? "1px solid rgba(14,165,233,0.08)" : "none",
            }}>
              <div style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, color: "var(--teal-400)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "var(--slate-400)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT SECTION ───────────────────────────────────────────────
function About() {
  const [ref, visible] = useInView();
  const pillars = [
    { icon: <Target size={22} />, title: "Mission-Focused", desc: "Every solution engineered to meet your specific operational requirements and compliance mandates." },
    { icon: <Users size={22} />, title: "Partnership-Driven", desc: "We succeed when you succeed. Our client relationships span decades, not just contracts." },
    { icon: <Zap size={22} />, title: "Agile Delivery", desc: "Small business speed with enterprise-grade capability. We deploy faster than the big integrators." },
    { icon: <Award size={22} />, title: "ISO Certified", desc: "ISO 9001, ISO 20000, and ISO 27001 certified processes ensuring quality, service, and security." },
  ];

  return (
    <section id="about" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={visible ? { animation: "slideInLeft 0.7s ease-out forwards" } : { opacity: 0 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
              textTransform: "uppercase", marginBottom: 16,
            }}>
              <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> WHO WE ARE
            </div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Elite Federal Technology<br />
              <span style={{ color: "var(--teal-400)" }}>Partner & Integrator</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 20 }}>
              Norseman Defense Technologies is a certified Small Business with over 30 years of proven success 
              as an Information Technology provider and systems integrator. Headquartered near Baltimore, Maryland, 
              we partner with more than 300 OEMs and service integrators to deliver best-of-breed solutions 
              that solve complex IT challenges within real-world constraints.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 32 }}>
              From securing the nation's most sensitive networks to modernizing enterprise infrastructure for 
              Fortune 500 companies, our teams bring deep technical expertise and an unwavering commitment to 
              mission success.
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

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
            ...(visible ? { animation: "fadeInUp 0.7s ease-out 0.3s forwards", opacity: 0 } : { opacity: 0 })
          }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.08)",
                borderRadius: 14, padding: 24, transition: "all 0.3s",
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)"; e.currentTarget.style.background = "rgba(14,165,233,0.07)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.08)"; e.currentTarget.style.background = "rgba(14,165,233,0.04)"; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--teal-400)", marginBottom: 14,
                }}>{p.icon}</div>
                <h4 style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 700, marginBottom: 8, color: "white" }}>{p.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--slate-400)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }}`}</style>
    </section>
  );
}

// ─── SOLUTIONS SECTION ───────────────────────────────────────────
function Solutions() {
  const [ref, visible] = useInView();
  const [activeSolution, setActiveSolution] = useState(0);

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

  return (
    <section id="solutions" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))",
    }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
            TECHNOLOGY FOCUS
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Solutions That Drive<br /><span style={{ color: "var(--teal-400)" }}>Mission Success</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            From data center to tactical edge, we deliver custom IT solutions, services, and support 
            designed to exceed the demands of the most complex missions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>
          {/* Solution tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {solutions.map((s, i) => (
              <button key={i} onClick={() => setActiveSolution(i)} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
                background: activeSolution === i ? "rgba(14,165,233,0.1)" : "transparent",
                border: activeSolution === i ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                borderRadius: 10, cursor: "pointer", textAlign: "left", transition: "all 0.3s",
                color: activeSolution === i ? "white" : "var(--slate-400)",
              }}>
                <div style={{ color: activeSolution === i ? "var(--teal-400)" : "var(--slate-400)", transition: "color 0.3s" }}>{s.icon}</div>
                <span style={{ fontFamily: "'Outfit'", fontWeight: 600, fontSize: 15 }}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active solution detail */}
          <div style={{
            background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)",
            borderRadius: 18, padding: "48px 44px",
            animation: "fadeIn 0.4s ease-out",
          }} key={activeSolution}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--teal-400)", marginBottom: 24,
            }}>{solutions[activeSolution].icon}</div>
            <h3 style={{ fontFamily: "'Outfit'", fontSize: 28, fontWeight: 800, marginBottom: 16, color: "white" }}>
              {solutions[activeSolution].title}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 28 }}>
              {solutions[activeSolution].desc}
            </p>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>
              Key Capabilities
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {solutions[activeSolution].capabilities.map((c, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--slate-300)" }}>
                  <ChevronRight size={14} style={{ color: "var(--teal-500)", flexShrink: 0 }} /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#solutions > div > div:last-child { grid-template-columns: 1fr !important; }}`}</style>
    </section>
  );
}

// ─── MARKETS SECTION ─────────────────────────────────────────────
function Markets() {
  const [ref, visible] = useInView();
  const markets = [
    {
      icon: <Landmark size={28} />, title: "Federal Civilian",
      desc: "We support major federal agencies in modernizing their IT infrastructure, improving citizen services, and meeting stringent compliance mandates. Our deep understanding of FedRAMP, FISMA, and federal acquisition processes ensures rapid, compliant deployments.",
      color: "#0ea5e9", highlight: true,
    },
    {
      icon: <Shield size={28} />, title: "Department of Defense",
      desc: "Trusted by the warfighter. We deliver solutions across the DoD enterprise — from garrison IT modernization to tactical edge computing in austere environments. Our cleared personnel and IL4/IL5 experience make us a go-to partner for defense missions.",
      color: "#0ea5e9", highlight: true,
    },
    {
      icon: <Eye size={28} />, title: "Intelligence Community",
      desc: "Mission-critical solutions for the IC. We bring specialized expertise in high-side environments, cross-domain solutions, and data analytics platforms that turn signals into actionable intelligence at the speed of relevance.",
      color: "#0ea5e9", highlight: true,
    },
    {
      icon: <Building2 size={28} />, title: "Commercial Enterprise",
      desc: "Fortune 500 companies trust Norseman for the same technical rigor we bring to government. We deliver enterprise IT transformation, cloud migration, cybersecurity, and AI solutions for businesses that demand reliability and performance.",
      color: "#f59e0b",
    },
    {
      icon: <HeartPulse size={28} />, title: "Healthcare",
      desc: "Supporting healthcare organizations with HIPAA-compliant infrastructure, secure telehealth platforms, clinical data analytics, and cybersecurity solutions that protect sensitive patient data while enabling innovation in care delivery.",
      color: "#10b981",
    },
    {
      icon: <GraduationCap size={28} />, title: "State, Local & Education",
      desc: "Bringing federal-grade technology solutions to state, local governments, and educational institutions. We help modernize learning environments, secure public infrastructure, and improve digital services for communities nationwide.",
      color: "#8b5cf6",
    },
  ];

  return (
    <section id="markets" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-950), var(--navy-900), var(--navy-950))",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
            MARKETS WE SERVE
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Serving Those Who<br /><span style={{ color: "var(--teal-400)" }}>Serve the Mission</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Whether protecting national security or transforming commercial enterprises, 
            we bring the same rigor, expertise, and commitment to every engagement.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 20 }}>
          {markets.map((m, i) => (
            <div key={i} style={{
              background: m.highlight
                ? "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(14,165,233,0.02))"
                : "rgba(255,255,255,0.02)",
              border: `1px solid ${m.highlight ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 16, padding: 32, transition: "all 0.4s", position: "relative", overflow: "hidden",
              ...(visible ? { animation: `fadeInUp 0.6s ease-out ${0.1 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = m.color + "40"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = m.highlight ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {m.highlight && (
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: "rgba(14,165,233,0.15)", borderRadius: 6,
                  padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "var(--teal-300)",
                  letterSpacing: "1px", textTransform: "uppercase",
                }}>PRIMARY FOCUS</div>
              )}
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: `linear-gradient(135deg, ${m.color}22, ${m.color}08)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: m.color, marginBottom: 20,
              }}>{m.icon}</div>
              <h3 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 700, marginBottom: 12, color: "white" }}>{m.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--slate-400)" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:800px){#markets > div > div:last-child { grid-template-columns: 1fr !important; }}`}</style>
    </section>
  );
}

// ─── CONTRACTS SECTION ───────────────────────────────────────────
function Contracts() {
  const [ref, visible] = useInView();
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

  return (
    <section id="contracts" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "var(--navy-900)",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
            CONTRACT VEHICLES
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Streamlined<br /><span style={{ color: "var(--teal-400)" }}>Procurement</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Multiple contract vehicles to simplify acquisition. Procure best-of-breed solutions 
            quickly and compliantly through our established government contracts.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {contracts.map((c, i) => (
            <div key={i} style={{
              background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)",
              borderRadius: 14, padding: "24px 28px", transition: "all 0.3s", cursor: "pointer",
              ...(visible ? { animation: `fadeInUp 0.5s ease-out ${0.05 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(14,165,233,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: "var(--teal-400)", marginBottom: 6,
              }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "var(--slate-400)", marginBottom: 10, fontWeight: 500 }}>{c.full}</div>
              <div style={{ fontSize: 13, color: "var(--slate-400)", lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERS SECTION ────────────────────────────────────────────
function Partners() {
  const [ref, visible] = useInView();
  const partnerGroups = [
    { category: "Infrastructure & Compute", names: ["Hewlett Packard Enterprise", "Dell Technologies", "Cisco Systems", "Lenovo", "NetApp", "Pure Storage", "NVIDIA", "Intel"] },
    { category: "Cybersecurity", names: ["Palo Alto Networks", "CrowdStrike", "Fortinet", "Elastic Security", "Tenable", "Splunk", "SentinelOne", "Trellix"] },
    { category: "DevSecOps & Software", names: ["GitLab", "JFrog", "Red Hat", "VMware", "Atlassian", "HashiCorp", "Docker", "Ansible"] },
    { category: "Cloud & Data", names: ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks", "MongoDB", "Confluent", "Cloudera"] },
  ];

  return (
    <section id="partners" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
            OEM ECOSYSTEM
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Only As Good As<br /><span style={{ color: "var(--teal-400)" }}>The Company We Keep</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Strategic partnerships with 300+ industry leaders enable us to deliver 
            best-of-breed, vendor-agnostic solutions tailored to your mission.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {partnerGroups.map((group, i) => (
            <div key={i} style={{
              background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)",
              borderRadius: 16, padding: 28, 
              ...(visible ? { animation: `fadeInUp 0.6s ease-out ${0.15 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}>
              <h4 style={{
                fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: "var(--teal-400)",
                letterSpacing: "1px", textTransform: "uppercase", marginBottom: 18,
                paddingBottom: 12, borderBottom: "1px solid rgba(14,165,233,0.1)",
              }}>{group.category}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {group.names.map((name, j) => (
                  <div key={j} style={{
                    fontSize: 14, color: "var(--slate-300)", padding: "8px 12px",
                    background: "rgba(255,255,255,0.02)", borderRadius: 8,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
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

// ─── LOCATIONS SECTION ───────────────────────────────────────────
function Locations() {
  const [ref, visible] = useInView();
  const locations = [
    { city: "Baltimore / Elkridge, MD", role: "HEADQUARTERS", address: "8172 Lark Brown Rd, Ste. 201, Elkridge, MD 21075", highlight: true },
    { city: "Tampa, FL", role: "CENTCOM / SOCOM Support", address: "Tampa Bay Area" },
    { city: "Charleston, SC", role: "Southeast Operations", address: "Charleston Metro Area" },
    { city: "Denver, CO", role: "Mountain West Operations", address: "Denver Metro Area" },
    { city: "Phoenix, AZ", role: "Southwest Operations", address: "Phoenix Metro Area" },
    { city: "Omaha, NE", role: "STRATCOM Support", address: "Omaha Metro Area" },
    { city: "San Antonio, TX", role: "Cyber Command Support", address: "San Antonio Metro Area" },
    { city: "New York Metro", role: "Northeast Operations", address: "NY Metro Area" },
    { city: "Midwest Region", role: "Central US Operations", address: "Multiple Locations" },
  ];

  return (
    <section id="locations" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
            NATIONWIDE PRESENCE
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Coast to Coast<br /><span style={{ color: "var(--teal-400)" }}>Mission Coverage</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Headquartered in the Baltimore-Washington corridor with strategic locations 
            positioned near major military installations and government hubs across the country.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {locations.map((loc, i) => (
            <div key={i} style={{
              background: loc.highlight
                ? "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(14,165,233,0.04))"
                : "rgba(14,165,233,0.03)",
              border: `1px solid ${loc.highlight ? "rgba(14,165,233,0.25)" : "rgba(14,165,233,0.08)"}`,
              borderRadius: 14, padding: "24px 20px", transition: "all 0.3s",
              ...(visible ? { animation: `fadeInUp 0.5s ease-out ${0.06 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <MapPin size={18} style={{ color: loc.highlight ? "var(--teal-400)" : "var(--slate-400)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  {loc.highlight && (
                    <div style={{
                      fontSize: 10, fontWeight: 700, color: "var(--gold-400)", letterSpacing: "1.5px",
                      textTransform: "uppercase", marginBottom: 4,
                    }}>★ HEADQUARTERS</div>
                  )}
                  <div style={{ fontFamily: "'Outfit'", fontSize: 17, fontWeight: 700, color: "white", marginBottom: 4 }}>{loc.city}</div>
                  <div style={{ fontSize: 12, color: "var(--teal-400)", fontWeight: 600, marginBottom: 4 }}>{loc.role}</div>
                  <div style={{ fontSize: 12, color: "var(--slate-400)" }}>{loc.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATIONS SECTION ──────────────────────────────────────
function Certifications() {
  const [ref, visible] = useInView();
  return (
    <section id="certifications" ref={ref} style={{
      position: "relative", padding: "100px 24px",
      background: "var(--navy-950)",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(14,165,233,0.06), rgba(245,158,11,0.03))",
          border: "1px solid rgba(14,165,233,0.1)", borderRadius: 20, padding: "64px 48px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
          ...(visible ? { animation: "fadeInUp 0.7s ease-out forwards" } : { opacity: 0 }),
        }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, marginBottom: 20 }}>
              Certified <span style={{ color: "var(--teal-400)" }}>Quality & Security</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--slate-400)", marginBottom: 24 }}>
              Our ISO certifications demonstrate our commitment to quality management, 
              IT service management, and information security management — validated by 
              independent third-party audits.
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
            <div style={{
              background: "rgba(10,22,40,0.6)", borderRadius: 14, padding: "28px 24px",
              border: "1px solid rgba(14,165,233,0.08)",
            }}>
              <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14 }}>
                Company Identifiers
              </div>
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
            <div style={{
              background: "rgba(10,22,40,0.6)", borderRadius: 14, padding: "28px 24px",
              border: "1px solid rgba(14,165,233,0.08)",
            }}>
              <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 600, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10 }}>
                Set-Aside Status
              </div>
              <div style={{ fontSize: 15, color: "white", fontWeight: 600 }}>Small Business</div>
              <div style={{ fontSize: 13, color: "var(--slate-400)", marginTop: 4 }}>SBA Certified Small Business Concern</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#certifications > div > div { grid-template-columns: 1fr !important; padding: 36px 24px !important; }}`}</style>
    </section>
  );
}

// ─── CAREERS CTA ─────────────────────────────────────────────────
function Careers() {
  const [ref, visible] = useInView();
  return (
    <section id="careers" ref={ref} style={{
      position: "relative", padding: "100px 24px",
      background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))",
    }}>
      <div className="noise-overlay" />
      <div style={{
        maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center",
        ...(visible ? { animation: "fadeInUp 0.7s ease-out forwards" } : { opacity: 0 }),
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--teal-400)", margin: "0 auto 24px",
        }}>
          <Briefcase size={28} />
        </div>
        <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,44px)", fontWeight: 800, marginBottom: 20 }}>
          Join the <span style={{ color: "var(--teal-400)" }}>Norseman Team</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
          We're always looking for talented engineers, architects, and technologists who are passionate 
          about solving hard problems and supporting critical missions. Competitive compensation, 
          excellent benefits, and a culture that values every team member.
        </p>
        <a href="mailto:careers@norseman.com" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
          color: "white", padding: "16px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600,
          textDecoration: "none", boxShadow: "0 4px 20px rgba(14,165,233,0.3)",
          transition: "all 0.3s",
        }}>
          View Open Positions <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useInView();
  return (
    <section id="contact" ref={ref} style={{
      position: "relative", padding: "120px 24px",
      background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))",
    }}>
      <div className="noise-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div style={visible ? { animation: "slideInLeft 0.7s ease-out forwards" } : { opacity: 0 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px",
              textTransform: "uppercase", marginBottom: 16,
            }}>
              <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> GET IN TOUCH
            </div>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
              Let's Build<br /><span style={{ color: "var(--teal-400)" }}>Something Great</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--slate-400)", lineHeight: 1.7, marginBottom: 40 }}>
              Whether you need a complete infrastructure refresh, a cybersecurity assessment, 
              or a strategic technology roadmap, our team is ready to help you succeed.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: <MapPin size={20} />, label: "Headquarters", value: "8172 Lark Brown Rd, Ste. 201\nElkridge, MD 21075" },
                { icon: <Phone size={20} />, label: "Phone", value: "410.579.8600" },
                { icon: <Mail size={20} />, label: "Email", value: "sales@norseman.com" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--teal-400)",
                  }}>{item.icon}</div>
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
            background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)",
            borderRadius: 18, padding: 40,
            ...(visible ? { animation: "fadeInUp 0.7s ease-out 0.3s forwards", opacity: 0 } : { opacity: 0 }),
          }}>
            <h3 style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 700, marginBottom: 28, color: "white" }}>Request a Consultation</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input placeholder="First Name" style={inputStyle} />
                <input placeholder="Last Name" style={inputStyle} />
              </div>
              <input placeholder="Email Address" style={inputStyle} />
              <input placeholder="Organization" style={inputStyle} />
              <input placeholder="Phone Number" style={inputStyle} />
              <select style={{ ...inputStyle, color: "var(--slate-400)" }}>
                <option value="">Select Interest Area</option>
                <option>IT Infrastructure</option>
                <option>Cyber Security</option>
                <option>DevSecOps</option>
                <option>AI & Data Intelligence</option>
                <option>Cloud & Edge Computing</option>
                <option>Service Automation</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your project or requirements..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
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
      <style>{`@media(max-width:900px){#contact > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }}`}</style>
    </section>
  );
}

const inputStyle = {
  background: "rgba(10,22,40,0.6)", border: "1px solid rgba(14,165,233,0.12)",
  borderRadius: 10, padding: "14px 16px", fontSize: 14, color: "white",
  outline: "none", fontFamily: "'DM Sans', sans-serif", width: "100%",
};

// ─── FOOTER ──────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: "var(--navy-950)", borderTop: "1px solid rgba(14,165,233,0.08)",
      padding: "60px 24px 30px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 8,
                background: "linear-gradient(135deg, var(--teal-500), var(--navy-600))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Outfit'", fontWeight: 900, fontSize: 18, color: "white",
              }}>N</div>
              <div>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: "white" }}>NORSEMAN</div>
                <div style={{ fontSize: 8, letterSpacing: "2px", color: "var(--teal-400)", fontWeight: 500 }}>DEFENSE TECHNOLOGIES</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--slate-400)", lineHeight: 1.7, maxWidth: 320 }}>
              Over 30 years of delivering mission-critical IT solutions to the Federal Government, 
              Defense, Intelligence Community, and leading commercial enterprises.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Solutions</h4>
            {["IT Infrastructure", "Cyber Security", "DevSecOps", "AI & Data Intelligence", "Service Automation", "Cloud & Edge"].map((item, i) => (
              <a key={i} href="#solutions" style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = "white"} onMouseOut={e => e.currentTarget.style.color = "var(--slate-400)"}>{item}</a>
            ))}
          </div>

          {/* Markets */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Markets</h4>
            {["Federal Civilian", "Dept. of Defense", "Intelligence Community", "Commercial", "Healthcare", "State & Local / Education"].map((item, i) => (
              <a key={i} href="#markets" style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = "white"} onMouseOut={e => e.currentTarget.style.color = "var(--slate-400)"}>{item}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Company</h4>
            {["About Us", "Locations", "Careers", "Partners", "Certifications", "Contact Us"].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase().replace(/ /g, "")}`} style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = "white"} onMouseOut={e => e.currentTarget.style.color = "var(--slate-400)"}>{item}</a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <div style={{ fontSize: 13, color: "var(--slate-400)" }}>
            © 2026 Norseman Defense Technologies. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item, i) => (
              <a key={i} href="#" style={{ fontSize: 13, color: "var(--slate-400)", textDecoration: "none", padding: "4px 8px" }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:800px){footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }}`}</style>
    </footer>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────
export default function NorsemanWebsite() {
  return (
    <div>
      <style>{STYLES}</style>
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Markets />
      <Contracts />
      <Partners />
      <Locations />
      <Certifications />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
