import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111144] text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm">&copy; 2025 AI Removals. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link to="/privacy" className="text-sm hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-sm hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
