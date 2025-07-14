import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import AiSurvey from "./components/AiSurvey";
import Prices from "./components/Prices";
import FAQ from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-text">
      <Navbar />

      <main>
        <Hero />
        <section id="benefits" className="bg-background text-text">
          <Benefits />
        </section>
        <section id="ai-survey" className="bg-background text-text">
          <AiSurvey />
        </section>
        <section id="prices" className="bg-background text-text">
          <Prices />
        </section>
        <section id="faq" className="bg-background text-text">
          <FAQ />
        </section>
        <section id="cta" className="bg-background text-text">
          <CallToAction />
        </section>
      </main>

      <Footer />
    </div>
  );
}
