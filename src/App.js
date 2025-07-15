import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import FAQSection from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="bg-[#111444] text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Prices />
                <FAQSection />
                <CallToAction />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
