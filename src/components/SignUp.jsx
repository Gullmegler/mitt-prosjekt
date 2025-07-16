import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms of service.");
      return;
    }
    // Handle sign up logic
  };

  return (
    <section className="bg-[#0f172a] text-white py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-md mx-auto bg-[#1f1f2e] p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-3 rounded bg-gray-900 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-900 text-white"
            required
          />
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded bg-gray-900 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-900 text-white"
            required
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-purple-600"
              required
            />
            <label>
              I agree to the <a href="/terms" className="underline">Terms of Service</a>.
            </label>
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 rounded hover:bg-green-700 transition">
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
