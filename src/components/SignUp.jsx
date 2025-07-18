import React, { useState } from "react";
import Turnstile from "react-turnstile";

const SignUp = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign-up logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        <input
          type="text"
          placeholder="Company"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <label className="flex items-center mb-4">
          <input type="checkbox" required className="mr-2" />
          I agree to the <a href="#" className="text-blue-600">Terms</a>
        </label>
        <Turnstile
          sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onVerify={setToken}
          className="mb-4"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
          disabled={!token}
        >
          Create Account
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
