import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
      <a href="https://airemovals.co.uk" className="font-bold text-xl hover:underline">
        AI REMOVALS
      </a>
      <div className="flex gap-4">
        <Link to="/signup" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Sign Up
        </Link>
        <Link to="/login" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Log In
        </Link>
      </div>
    </nav>
  );
}
