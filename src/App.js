import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import FAQSection from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import AiSurvey from "./components/AiSurvey";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

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
              <Benefits />
              <AiSurvey />
              <Prices />
              <FAQSection />
              <CallToAction />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
