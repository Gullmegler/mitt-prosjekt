import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // Viktig! Bruk Link for navigasjon til ny side

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginPopup = () => setIsLoginOpen(!isLoginOpen);

  return (
    <nav className="bg-orange-500 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
        </div>

        <div className="space-x-4">
          <ScrollLink to="benefits" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer">
            Benefits
          </ScrollLink>
          <ScrollLink to="prices" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer">
            Prices
          </ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer">
            FAQ
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer">
            Contact
          </ScrollLink>
          <button onClick={toggleLoginPopup} className="bg-black px-4 py-2 rounded">
            Log In
          </button>
          <Link to="/signup" className="bg-white text-black px-4 py-2 rounded">
            Sign Up
          </Link>
        </div>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Log In</h2>
            <form>
              <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Log In</button>
            </form>
            <button className="mt-4 text-blue-500" onClick={toggleLoginPopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}
