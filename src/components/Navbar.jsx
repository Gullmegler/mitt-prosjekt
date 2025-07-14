export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#0d1117]">
      <a href="https://airemovals.co.uk" className="text-white font-bold text-lg">
        AI REMOVALS
      </a>
      <div className="hidden md:flex gap-6">
        <a href="#benefits" className="text-white hover:underline">Benefits</a>
        <a href="#prices" className="text-white hover:underline">Prices</a>
        <a href="#faq" className="text-white hover:underline">FAQ</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
        <a href="/signup" className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</a>
        <a href="/login" className="border border-white text-white px-4 py-2 rounded">Log In</a>
      </div>
    </nav>
  );
}
