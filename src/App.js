import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import FAQSection from "./components/FAQSection";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

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
