import { Link } from "react-scroll"; // hvis du bruker react-scroll for smooth scroll

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-700 to-purple-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="https://airemovals.co.uk" className="text-white font-bold text-lg">AI REMOVALS</a>
        <div className="space-x-6 text-white hidden md:flex">
          <Link to="benefits" smooth={true} duration={500} className="cursor-pointer hover:underline">Benefits</Link>
          <Link to="prices" smooth={true} duration={500} className="cursor-pointer hover:underline">Prices</Link>
          <Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:underline">FAQ</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contact</Link>
          <a href="/signup" className="bg-pink-500 px-4 py-2 rounded text-white font-semibold">Sign Up CRM</a>
          <a href="/login" className="border border-white px-4 py-2 rounded text-white font-semibold">Log In</a>
        </div>
      </div>
    </nav>
  );
}
