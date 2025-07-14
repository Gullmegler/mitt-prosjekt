import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email) {
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/signup");
    }
  };

  return (
    <section className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Best AI-powered CRM for Removal Company 2025</h1>
      <p className="mb-6 text-lg max-w-2xl mx-auto">Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.</p>
      <div className="flex justify-center gap-3">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded text-black"
        />
        <button onClick={handleSignup} className="bg-pink-500 px-4 py-2 rounded text-white font-semibold">Sign Up CRM</button>
      </div>
    </section>
  );
}
