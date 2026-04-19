import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { TeachersSection } from "../components/TeachersSection";
import { CatalogSection } from "../components/CatalogSection";
import { HowItWorks } from "../components/HowItWorks";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { ContactForm } from "../components/ContactForm";

export default function Index() {
  useEffect(() => {
    document.title = "esporfa — онлайн-школа испанского языка";
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Stats />
        <TeachersSection />
        <CatalogSection />
        <HowItWorks />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
