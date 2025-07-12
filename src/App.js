import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
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

        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
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
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
