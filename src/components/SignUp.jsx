import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="bg-gray-100 p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="p-2 rounded border">
            <option>+44 (UK)</option>
            <option>+47 (Norway)</option>
            <option>+1 (US)</option>
          </select>
          <input type="text" placeholder="Company name" className="p-2 rounded border" />
          <input type="text" placeholder="First name" className="p-2 rounded border" />
          <input type="text" placeholder="Last name" className="p-2 rounded border" />
          <input type="text" placeholder="Address" className="p-2 rounded border" />
          <input type="text" placeholder="Zip code" className="p-2 rounded border" />
          <input type="text" placeholder="Phone number" className="p-2 rounded border" />
          <input type="email" placeholder="Email" className="p-2 rounded border" />
          <input type="email" placeholder="Confirm email" className="p-2 rounded border" />
          <input type="password" placeholder="Password" className="p-2 rounded border" />
          <input type="password" placeholder="Confirm password" className="p-2 rounded border" />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 mt-6 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
