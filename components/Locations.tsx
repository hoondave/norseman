"use client";

import { MapPin } from "lucide-react";
import { useInView } from "./useInView";

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

export default function Locations() {
  const [ref, visible] = useInView();

  return (
    <section id="locations" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))" }}>
      <div className="noise-overlay" />
      <img src="/images/us-map-locations.svg" alt="" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "90%", maxWidth: 1000, height: "auto", opacity: 0.15, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-400)", fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} /> NATIONWIDE PRESENCE <div style={{ width: 30, height: 2, background: "var(--teal-500)" }} />
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Coast to Coast<br /><span style={{ color: "var(--teal-400)" }}>Mission Coverage</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--slate-400)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Headquartered in the Baltimore-Washington corridor with strategic locations positioned near major military installations and government hubs across the country.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {locations.map((loc, i) => (
            <div key={i} style={{
              background: loc.highlight ? "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(14,165,233,0.04))" : "rgba(14,165,233,0.03)",
              border: `1px solid ${loc.highlight ? "rgba(14,165,233,0.25)" : "rgba(14,165,233,0.08)"}`,
              borderRadius: 14, padding: "24px 20px", transition: "all 0.3s",
              ...(visible ? { animation: `fadeInUp 0.5s ease-out ${0.06 * i}s forwards`, opacity: 0 } : { opacity: 0 }),
            }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <MapPin size={18} style={{ color: loc.highlight ? "var(--teal-400)" : "var(--slate-400)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  {loc.highlight && (
                    <div style={{ fontSize: 10, fontWeight: 700, color: "var(--gold-400)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 4 }}>★ HEADQUARTERS</div>
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
