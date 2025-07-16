import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a23] to-[#151531] text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="mb-6 max-w-xl">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>

      <form onSubmit={handleSubmit} className="relative w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full py-3 pl-4 pr-28 rounded-full text-black outline-none"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-1 translate-y-[-50%] bg-orange-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-orange-600 transition"
        >
          Sign Up
        </button>
      </form>

      <img
        src="/removals-company.png"
        alt="CRM Illustration"
        className="mt-10 max-w-xs md:max-w-md"
      />
    </section>
  );
};

export default Hero;
