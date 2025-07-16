import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SignUp = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the verification.");
      return;
    }
    // Your submit logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B0C2A]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1A1B2E] p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-center text-white text-2xl font-bold mb-6">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          required
        />

        <Turnstile
          siteKey="0x4AAAAAAAABBBAAAABBBCCCC" 
          onSuccess={(token) => setToken(token)}
          className="my-4"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
            required
          />
          <label className="text-gray-300">
            I agree to the <a href="/terms" className="underline">Terms</a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
