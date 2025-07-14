import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import AiSurvey from "./components/AiSurvey";
import Prices from "./components/Prices";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <AiSurvey />
      <Prices />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
