import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white fixed w-full z-50 shadow-lg">
      <a href="https://airemovals.co.uk" className="font-bold text-xl hover:underline">
        AI REMOVALS
      </a>
      <div className="flex gap-6 items-center">
        <Link to="benefits" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Benefits
        </Link>
        <Link to="prices" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Prices
        </Link>
        <Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:underline">
          FAQ
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Contact
        </Link>
        <button
          onClick={() => navigate("/signup")}
          className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Sign Up CRM
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition"
        >
          Log In
        </button>
      </div>
    </nav>
  );
}
