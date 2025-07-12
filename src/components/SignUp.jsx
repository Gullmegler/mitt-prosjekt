import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>

        {/* Plan selection */}
        <div>
          <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
            Select your plan
          </label>
          <select
            id="plan"
            name="plan"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="crm">AI Survey + Full CRM (£149 / month)</option>
            <option value="survey">AI Survey Access Only (£49 / month)</option>
          </select>
        </div>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              +44
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              required
              className="appearance-none rounded-r relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm email"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
