import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#prices">Prices</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
