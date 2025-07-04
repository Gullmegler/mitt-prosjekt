import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">© 2025 AI Removals CRM. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#terms" className="hover:underline text-sm">Terms</a>
          <a href="#privacy" className="hover:underline text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
