import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SITE_KEY = "0x4AAAAAABlVg7CV1SLjRqr6";

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
    if (!agree) {
      alert("You must agree to the terms.");
      return;
    }
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }
    // Add logic to handle signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111144]">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
        />

        <Turnstile
          sitekey={SITE_KEY}
          onVerify={(token) => setToken(token)}
          className="my-3"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
            required
          />
          <label>I agree to the <a href="/terms" className="underline">Terms</a></label>
        </div>

        <button type="submit" className="w-full bg-purple-600 p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
