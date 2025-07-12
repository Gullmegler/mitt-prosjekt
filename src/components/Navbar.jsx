import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide for hamburger-ikon

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLoginPopup = () => setIsLoginOpen(!isLoginOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-orange-500 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="w-40 h-auto" />

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
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
          <Link to="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Sign Up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu content */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-orange-500 p-4 flex flex-col space-y-2">
          <ScrollLink to="benefits" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer" onClick={toggleMobileMenu}>
            Benefits
          </ScrollLink>
          <ScrollLink to="prices" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer" onClick={toggleMobileMenu}>
            Prices
          </ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer" onClick={toggleMobileMenu}>
            FAQ
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:bg-black px-4 py-2 rounded cursor-pointer" onClick={toggleMobileMenu}>
            Contact
          </ScrollLink>
          <button onClick={() => { toggleLoginPopup(); toggleMobileMenu(); }} className="bg-black px-4 py-2 rounded">
            Log In
          </button>
          <Link to="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200" onClick={toggleMobileMenu}>
            Sign Up
          </Link>
        </div>
      )}

      {/* Log in popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-2xl mb-4 text-black">Log In</h2>
            <form>
              <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Log In</button>
            </form>
            <button className="mt-4 text-blue-600 w-full" onClick={toggleLoginPopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}
