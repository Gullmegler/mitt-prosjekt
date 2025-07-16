import React, { useState } from "react";
import { Link } from "react-router-dom";
import Turnstile from "react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete verification");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Turnstile token:", turnstileToken);

    // Legg til backend-kall her
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-[#181A20] p-8 rounded-md shadow-md w-full max-w-sm"
      >
        <h2 className="text-white text-xl font-bold mb-4 text-center">Log In</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <div className="mb-4">
          <Turnstile
            sitekey="0x4AAAAAAAPv93MiM9HrYBzC" // <-- bruk din egen nøkkel
            onVerify={(token) => setTurnstileToken(token)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#A855F7] text-white py-2 rounded hover:bg-purple-700"
        >
          Log In
        </button>
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <Link to="/forgot-password" className="underline">Forgot Password?</Link>
          <Link to="/signup" className="underline">Not registered?</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
