export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent">
      <div className="text-white font-bold text-xl">AI REMOVALS</div>
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#benefits">Benefits</a>
        <a href="#prices">Prices</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <button className="bg-pink-500 px-4 py-2 rounded-md">Sign Up</button>
        <button className="border border-white px-4 py-2 rounded-md">Log In</button>
      </div>
    </nav>
  );
}
