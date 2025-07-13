import React from "react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form className="bg-gray-800 p-8 rounded-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>
        <select className="w-full mb-4 p-2 rounded bg-gray-700">
          <option>+44 (UK)</option>
          <option>+47 (NO)</option>
        </select>
        <input type="text" placeholder="First name" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="text" placeholder="Last name" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="text" placeholder="Address" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="text" placeholder="Zip code" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="text" placeholder="Phone number" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="email" placeholder="Confirm email" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="password" placeholder="Confirm password" className="w-full mb-4 p-2 rounded bg-gray-700" />
        <input type="text" placeholder="Company name" className="w-full mb-6 p-2 rounded bg-gray-700" />
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
