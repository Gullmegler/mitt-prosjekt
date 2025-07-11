import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Benefits />
      <UploadSection />
      <Prices />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
