import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Benefits from "./components/Benefits";
import FAQSection from "./components/FAQSection";
import Prices from "./components/Prices";
import CallToAction from "./components/CallToAction";
import AiSurvey from "./components/AiSurvey";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/cta" element={<CallToAction />} />
          <Route path="/survey" element={<AiSurvey />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
