import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Naviger med e-post som query parameter
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">Best AI-powered CRM for Removal Company 2025</h1>
      <p className="mt-2 text-lg">Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.</p>
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded px-3 py-2"
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Sign Up CRM</button>
      </form>
    </div>
  );
}
