import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-white font-bold">AI REMOVALS ©</span>
      </div>
      <div className="flex space-x-4">
        <Link to="/signup" className="text-white">Sign Up</Link>
        <Link to="/login" className="text-white">Log In</Link>
      </div>
    </nav>
  );
}
