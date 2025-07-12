import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import AiSurvey from "./components/AiSurvey";
import Prices from "./components/Prices";
import FAQSection from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <AiSurvey />
      <Prices />
      <CallToAction />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
