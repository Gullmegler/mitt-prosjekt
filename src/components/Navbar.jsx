import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0A0A23] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <a href="https://airemovals.co.uk" className="flex items-center">
        <img src="/logo.png" alt="CRM" className="h-10 mr-2" />
        <span className="text-xl font-bold">CRM</span>
      </a>
      <ul className="flex space-x-6">
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/prices">Pricing</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/survey">AI Survey</Link></li>
        <li><Link to="/cta">Contact</Link></li>
        <li>
          <Link to="/signup" className="bg-purple-600 px-3 py-1 rounded text-white">Sign Up</Link>
        </li>
        <li>
          <Link to="/login" className="border border-white px-3 py-1 rounded text-white">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
