import React from "react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4" style={{
      background: "radial-gradient(circle at bottom center, #E2D5FF 0%, #6A58D3 40%, #1D1B4F 100%)",
    }}>
      <form className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>
        <select className="w-full mb-4 p-2 rounded bg-white/20">
          <option>+44 (UK)</option>
          <option>+47 (NO)</option>
        </select>
        <input type="text" placeholder="First name" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="text" placeholder="Last name" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="text" placeholder="Address" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="text" placeholder="Zip code" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="text" placeholder="Phone number" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="email" placeholder="Confirm email" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="password" placeholder="Confirm password" className="w-full mb-4 p-2 rounded bg-white/20" />
        <input type="text" placeholder="Company name" className="w-full mb-6 p-2 rounded bg-white/20" />
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white font-bold py-2 rounded transition">
          Sign Up
        </button>
      </form>
    </div>
  );
}
