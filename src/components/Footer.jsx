import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5648b1] text-white py-6 text-center">
      <p className="mb-2">&copy; 2025 AI Removals. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-sm">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <span>|</span>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
