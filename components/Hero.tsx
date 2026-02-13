"use client";

import { Shield, ArrowRight } from "lucide-react";

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "300+", label: "OEM Partners" },
  { value: "10", label: "Offices Nationwide" },
  { value: "24/7", label: "Mission Support" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(160deg, var(--navy-950) 0%, var(--navy-900) 40%, #0c1e3d 70%, var(--navy-800) 100%)",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg" />
      <div className="noise-overlay" />
      
      {/* SVG background illustrations */}
      <img src="/images/hero-bg.svg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6, pointerEvents: "none" }} />
      <img src="/images/hero-geometric.svg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, pointerEvents: "none", mixBlendMode: "screen" }} />

      {/* Decorative orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      {/* Scanline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "200px",
            background:
              "linear-gradient(transparent, rgba(14,165,233,0.02), transparent)",
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "140px 24px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 780 }}>
          <div
            className="animate-in animate-delay-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(14,165,233,0.1)",
              border: "1px solid rgba(14,165,233,0.2)",
              borderRadius: 100,
              padding: "8px 18px",
              marginBottom: 28,
            }}
          >
            <Shield size={14} style={{ color: "var(--teal-400)" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--teal-300)",
                letterSpacing: "0.5px",
              }}
            >
              SMALL BUSINESS &middot; CAGE: 0WNZ6 &middot; UEI: G8LCAVK5AVW7
            </span>
          </div>

          <h1
            className="animate-in animate-delay-2"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 24,
              background:
                "linear-gradient(135deg, #ffffff 0%, var(--slate-300) 50%, var(--teal-300) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1px",
            }}
          >
            Trusted Partners.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--teal-400), var(--teal-300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Proven Solutions.
            </span>
          </h1>

          <p
            className="animate-in animate-delay-3"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "var(--slate-400)",
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            For over three decades, Norseman Defense Technologies has delivered
            mission-critical IT solutions to the Federal Government, Department
            of Defense, Intelligence Community, and leading commercial
            enterprises across the nation.
          </p>

          <div
            className="animate-in animate-delay-4"
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 70,
            }}
          >
            <a
              href="#solutions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background:
                  "linear-gradient(135deg, var(--teal-500), #0284c7)",
                color: "white",
                padding: "16px 32px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
              }}
            >
              Explore Solutions <ArrowRight size={18} />
            </a>
            <a
              href="#contracts"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
                padding: "16px 32px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              View Contract Vehicles
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="animate-in animate-delay-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 2,
            background: "rgba(14,165,233,0.05)",
            border: "1px solid rgba(14,165,233,0.1)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "28px 24px",
                textAlign: "center",
                background: "rgba(10,22,40,0.5)",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(14,165,233,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 36,
                  fontWeight: 800,
                  color: "var(--teal-400)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--slate-400)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
