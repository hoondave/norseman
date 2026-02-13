import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norseman Defense Technologies | Trusted IT Solutions Partner",
  description:
    "Over 30 years delivering mission-critical IT solutions to Federal Government, DoD, Intelligence Community, and commercial enterprises. Headquartered near Baltimore, MD with nationwide presence.",
  keywords: [
    "IT solutions",
    "federal contractor",
    "defense technology",
    "cybersecurity",
    "systems integrator",
    "government IT",
    "DevSecOps",
    "AI solutions",
    "value added reseller",
  ],
  openGraph: {
    title: "Norseman Defense Technologies",
    description:
      "Trusted Partners. Proven Solutions. Over 30 years of mission-critical IT.",
    url: "https://www.norseman.com",
    siteName: "Norseman Defense Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
