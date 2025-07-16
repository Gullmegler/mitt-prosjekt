import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du legge til login-logikk
    console.log("Email:", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0A0A2F]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161B22] p-8 rounded-md w-full max-w-md shadow-md"
      >
        <h2 className="text-center text-white text-xl mb-6 font-bold">Log In</h2>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-[#0D1117] text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-[#0D1117] text-white"
          required
        />

        <div className="mb-3">
          <Turnstile
            siteKey="0x4AAAAAAB1Vg7CV1SLjRqr6" // ← sett inn din egen siteKey
            options={{ theme: "light" }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#A259FF] text-white py-2 rounded font-semibold"
        >
          Log In
        </button>
        <div className="mt-3 flex justify-between text-sm text-gray-400">
          <Link to="/forgot-password" className="underline">Forgot Password?</Link>
          <Link to="/signup" className="underline">Not registered?</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
