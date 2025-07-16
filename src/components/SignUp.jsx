import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const emailParam = params.get("email") || "";

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState(emailParam);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    // Her kan du legge til faktisk submit-logikk
    alert(`Account created for ${company}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white px-4">
      <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mr-2"
            required
          />
          <label className="text-sm">
            I agree to the <Link to="/terms" className="underline">Terms</Link>
          </label>
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-white">Create Account</button>
      </form>
    </div>
  );
}
