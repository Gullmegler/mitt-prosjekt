import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import CallToAction from "./components/CallToAction";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Benefits />
      <Prices />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';  // Endre fra SignIn til LogIn
import SignUp from './components/SignUp';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Prices from './components/Prices';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Switch>
          <Route path="/login" component={LogIn} /> {/* Endre ruten til /login */}
          <Route path="/signup" component={SignUp} />
        </Switch>
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
      </div>
    </Router>
 e8abf7b4801434a1bc200d41c77ee87f1b6e3443
  );
}

export default App;
