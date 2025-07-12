import React from "react";
import logo from "../assets/logo.png"; // Pass på at logoen er riktig path

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo til venstre */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-10" />
        </a>

        {/* Midt-lenker */}
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#benefits" className="hover:text-orange-500 transition">Benefits</a>
          </li>
          <li>
            <a href="#prices" className="hover:text-orange-500 transition">Prices</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
          </li>
        </ul>

        {/* Høyre knapper */}
        <div className="flex space-x-4">
          <a href="/signup" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Sign Up</a>
          <a href="/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">Log In</a>
        </div>
      </div>
    </nav>
  );
}
