import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Handle sign up logic here (e.g., API call)
      // Simulate successful registration
      console.log('User signed up with email:', email);
      alert('Sign up successful!');
    } catch (err) {
      setError('Error during sign up');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl mb-4">Sign Up</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full mb-4 p-2 border rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p>
          Already have an account? <a href="/signin" className="text-blue-500">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
