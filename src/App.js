import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/login" component={LogIn} />
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
  );
}

export default App;
