import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sjekk om bruker er logget inn ved oppstart
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Her kan du evt. validere token eller hente brukerinfo
      setUser({ email: localStorage.getItem("userEmail") || "LoggedInUser" });
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", user.email);
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">AI Removals</div>

      {!user ? (
        <form onSubmit={handleLogin} className="flex items-center space-x-3">
          <input
            type="email"
            placeholder="Email"
            className="px-2 py-1 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-1 rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <div className="text-red-500 ml-4">{error}</div>}
        </form>
      ) : (
        <div className="flex items-center space-x-6">
          <a href="/crm" className="hover:text-gray-400">
            CRM Dashboard
          </a>
          <a href="/ai-survey" className="hover:text-gray-400">
            AI Survey
          </a>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
          <span className="text-gray-300">Hello, {user.email}</span>
        </div>
      )}
    </nav>
  );
}
