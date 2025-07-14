import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignUp() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du sende data til backend, eller håndtere innsending
    console.log("Submitted email:", email);
  };

  return (
    <div className="bg-[#0d1117] text-white min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="bg-[#161b22] p-6 rounded w-full max-w-md shadow">
        <input
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-700 rounded px-4 py-3 w-full mb-4 text-black"
          required
        />
        <input
          type="text"
          placeholder="Full name"
          className="border border-gray-700 rounded px-4 py-3 w-full mb-4 text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-700 rounded px-4 py-3 w-full mb-4 text-black"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded w-full font-semibold hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
