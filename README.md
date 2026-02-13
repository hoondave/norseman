# Norseman Defense Technologies — Website

Modern, responsive website for Norseman Defense Technologies built with **Next.js 14** and optimized for **Vercel** deployment.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Variables + Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Outfit + DM Sans (Google Fonts)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
norseman/
├── app/
│   ├── globals.css      # Global styles, animations, CSS variables
│   ├── layout.tsx       # Root layout with metadata/SEO
│   └── page.tsx         # Main page (imports all sections)
├── components/
│   ├── Navigation.tsx   # Fixed header with dropdown menus
│   ├── Hero.tsx         # Hero banner with stats
│   ├── About.tsx        # Company overview
│   ├── Solutions.tsx    # Interactive tabbed solutions panel
│   ├── Markets.tsx      # Market segments served
│   ├── Contracts.tsx    # Government contract vehicles
│   ├── Partners.tsx     # OEM partner ecosystem
│   ├── Locations.tsx    # Nationwide office locations
│   ├── Certifications.tsx # ISO certs & company IDs
│   ├── Careers.tsx      # Careers CTA
│   ├── Contact.tsx      # Contact form & info
│   ├── Footer.tsx       # Site footer
│   └── useInView.ts     # Intersection Observer hook
├── public/              # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
