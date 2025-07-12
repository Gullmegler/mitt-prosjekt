import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Prices from './components/Prices';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Contact from './components/Contact';  // Legg til en kontaktseksjon

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* Andre ruter */}
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

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
