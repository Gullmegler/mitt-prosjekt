import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Bekreft at du ikke er en robot.");
      return;
    }

    try {
      const res = await axios.post("/api/signup", {
        username,
        email,
        password,
        "cf-turnstile-response": token,
      });

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup-feil:", error);
      alert("Noe gikk galt ved registrering.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Registrer deg</h2>

        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />

        <Turnstile
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setToken(token)}
          className="rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
        >
          Registrer
        </button>
      </form>
    </div>
  );
};

export default SignUp;
