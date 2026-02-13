import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Markets from "@/components/Markets";
import Contracts from "@/components/Contracts";
import Partners from "@/components/Partners";
import Locations from "@/components/Locations";
import Certifications from "@/components/Certifications";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
