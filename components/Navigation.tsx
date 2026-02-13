"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Company",
    href: "#about",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Locations", href: "#locations" },
      { label: "Certifications", href: "#certifications" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "IT Infrastructure", href: "#solutions" },
      { label: "Cyber Security", href: "#solutions" },
      { label: "DevSecOps", href: "#solutions" },
      { label: "AI & Data Intelligence", href: "#solutions" },
      { label: "Service Automation", href: "#solutions" },
      { label: "Cloud & Edge Computing", href: "#solutions" },
    ],
  },
  {
    label: "Markets",
    href: "#markets",
    children: [
      { label: "Federal Civilian", href: "#markets" },
      { label: "Department of Defense", href: "#markets" },
      { label: "Intelligence Community", href: "#markets" },
      { label: "Commercial", href: "#markets" },
      { label: "Healthcare", href: "#markets" },
      { label: "State & Local / Education", href: "#markets" },
    ],
  },
  { label: "Contracts", href: "#contracts" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(4,10,24,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(14,165,233,0.1)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 8,
              background:
                "linear-gradient(135deg, var(--teal-500), var(--navy-600))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 20,
              color: "white",
              boxShadow: "0 0 20px rgba(14,165,233,0.3)",
            }}
          >
            N
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "white",
                letterSpacing: "0.5px",
                lineHeight: 1.1,
              }}
            >
              NORSEMAN
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: "2.5px",
                color: "var(--teal-400)",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Defense Technologies
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {navLinks.map((link, i) => (
            <div
              key={i}
              style={{ position: "relative" }}
              onMouseEnter={() => link.children && setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                style={{
                  color: "var(--slate-300)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "rgba(14,165,233,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "var(--slate-300)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
                {link.children && <ChevronDown size={12} />}
              </a>
              {link.children && activeDropdown === i && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    minWidth: 220,
                    background: "rgba(10,22,40,0.97)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(14,165,233,0.15)",
                    borderRadius: 10,
                    padding: 8,
                    marginTop: 4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    animation: "fadeIn 0.2s ease-out",
                  }}
                >
                  {link.children.map((child, j) => (
                    <a
                      key={j}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        fontSize: 13,
                        color: "var(--slate-300)",
                        textDecoration: "none",
                        borderRadius: 6,
                        transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.background =
                          "rgba(14,165,233,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "var(--slate-300)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#contact"
            className="desktop-nav"
            style={{
              background: "linear-gradient(135deg, var(--teal-500), #0284c7)",
              color: "white",
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(14,165,233,0.3)",
            }}
          >
            Get Started
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "none",
              padding: 8,
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(4,10,24,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(14,165,233,0.1)",
            padding: 24,
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                color: "var(--slate-200)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
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
