import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';  // Import SignUp component
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Prices from './components/Prices';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />  {/* Add route for SignUp */}
          {/* Add other routes here */}
        </Switch>
        <Hero />
        <Benefits />
        <Prices />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
