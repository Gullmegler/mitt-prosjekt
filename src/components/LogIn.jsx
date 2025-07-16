import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please complete the captcha.");
      return;
    }

    console.log({ email, password, token });

    // Eksempel: await axios.post("/api/login", { email, password, token })
  };

  return (
    <section className="bg-[#0A0A2A] text-white py-20 min-h-screen flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161A23] p-8 rounded-md w-full max-w-md text-white"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700"
          required
        />

        <Turnstile
          siteKey="1382f03e605d2aaf7f19449f049be5c8d2b62"
          onVerify={(token) => setToken(token)}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded"
        >
          Log In
        </button>

        <div className="text-center mt-4 text-sm">
          <a href="/forgot-password" className="underline text-blue-400 mr-4">
            Forgot Password?
          </a>
          <a href="/signup" className="underline text-blue-400">
            Not registered?
          </a>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
