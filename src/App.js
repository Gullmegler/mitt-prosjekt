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
    <div className="bg-githubbg text-white">
      <Navbar />
      <Hero />
      <section id="benefits" className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="md:w-1/2">
          <Benefits />
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/survey-agent.png"
            alt="Survey Agent"
            className="max-w-full h-auto rounded"
          />
        </div>
      </section>
      <AiSurvey />
      <Prices />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
