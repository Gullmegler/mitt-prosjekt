import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold">AI REMOVALS ©</span>
      </div>
      <div className="space-x-4">
        <Link to="/benefits" className="hover:underline">Benefits</Link>
        <Link to="/prices" className="hover:underline">Prices</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/signup" className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">Sign Up</Link>
        <Link to="/login" className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-50">Log In</Link>
      </div>
    </nav>
  );
}
