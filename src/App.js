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
    <div className="bg-github text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <AiSurvey />
      <Prices />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
