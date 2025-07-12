import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Prices from "./components/Prices.jsx";
import FAQSection from "./components/FAQSection.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="benefits">
                <Benefits />
              </section>
              <section id="prices">
                <Prices />
              </section>
              <section id="faq">
                <FAQSection />
              </section>
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
