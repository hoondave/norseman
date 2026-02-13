export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-950)", borderTop: "1px solid rgba(14,165,233,0.08)", padding: "60px 24px 30px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: "linear-gradient(135deg, var(--teal-500), var(--navy-600))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit'", fontWeight: 900, fontSize: 18, color: "white" }}>N</div>
              <div>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: "white" }}>NORSEMAN</div>
                <div style={{ fontSize: 8, letterSpacing: "2px", color: "var(--teal-400)", fontWeight: 500 }}>DEFENSE TECHNOLOGIES</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--slate-400)", lineHeight: 1.7, maxWidth: 320 }}>
              Over 30 years of delivering mission-critical IT solutions to the Federal Government, Defense, Intelligence Community, and leading commercial enterprises.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/norseman-defense-technologies/" },
                { label: "Twitter", href: "https://twitter.com/norsemandefense" },
                { label: "Facebook", href: "https://www.facebook.com/NorsemanDefense/" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 12, color: "var(--slate-400)", textDecoration: "none", padding: "6px 12px",
                  background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.08)",
                  borderRadius: 6, transition: "all 0.2s",
                }}>{s.label}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Solutions</h4>
            {["Foundry — Infrastructure", "Sentinel — Cyber Security", "Forge — DevSecOps", "Cortex — AI & Data", "Pulse — Automation", "Horizon — Cloud & Edge"].map((item, i) => (
              <a key={i} href="#solutions" style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}>{item}</a>
            ))}
          </div>

          {/* Markets */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Markets</h4>
            {["Federal Civilian", "Dept. of Defense", "Intelligence Community", "Commercial", "Healthcare", "State & Local / Education"].map((item, i) => (
              <a key={i} href="#markets" style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}>{item}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: "var(--teal-400)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Company</h4>
            {[
              { label: "About Us", href: "#about" },
              { label: "Locations", href: "#locations" },
              { label: "Careers", href: "#careers" },
              { label: "Partners", href: "#partners" },
              { label: "Certifications", href: "#certifications" },
              { label: "Contact Us", href: "#contact" },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: "block", fontSize: 14, color: "var(--slate-400)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}>{item.label}</a>
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
      <style>{`@media(max-width:800px){.footer-grid { grid-template-columns: 1fr 1fr !important; }}`}</style>
    </footer>
  );
}
