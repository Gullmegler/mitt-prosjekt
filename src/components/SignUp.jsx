import React from "react";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-8 text-gray-100">
        <h2 className="text-center text-2xl font-extrabold mb-6">
          Create your account
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="countryCode" className="block text-sm font-medium mb-1">
              Country code
            </label>
            <select
              id="countryCode"
              name="countryCode"
              className="w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="+44">+44 (UK)</option>
              <option value="+47">+47 (NO)</option>
              <option value="+1">+1 (US)</option>
              <option value="+33">+33 (FR)</option>
              <option value="+49">+49 (DE)</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="First name"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Zip code"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Confirm email"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Company name"
            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-green-400 hover:text-green-300">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
