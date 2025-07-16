import React, { useState } from "react";
import Turnstile from "@marsidev/react-turnstile";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please complete the Turnstile verification.");
      return;
    }

    console.log({ email, password, token });

    // Eksempel: await axios.post("/api/login", { email, password, token })
  };

  return (
    <section className="bg-[#0e0f11] text-white py-20 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1f24] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          required
        />

        <Turnstile
          siteKey="0x4AAAAAAB1Vg7CV1SLjRqr6"
          onSuccess={(token) => setToken(token)}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded font-bold"
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default LogIn;
