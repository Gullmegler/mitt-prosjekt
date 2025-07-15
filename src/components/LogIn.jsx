import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Eksempel: Kall til backend eller sjekk lokalt
    // Her MÅ du bruke backend API som sjekker abonnementstype
    // Dette er bare demo
    if (email.includes("crm")) {
      window.location.href = "https://crm.airemovals.co.uk";
    } else if (email.includes("survey")) {
      window.location.href = "https://aisurvey.airemovals.co.uk";
    } else {
      alert("Email not recognized. Please contact support.");
    }
  };

  return (
    <section className="bg-[#5648b1] text-white py-20 px-6 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-6">Log In</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded text-black focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default LogIn;
