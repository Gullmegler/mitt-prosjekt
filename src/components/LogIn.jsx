import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    try {
      console.log('User logged in with email:', email);
      alert('Log in successful!');
    } catch (err) {
      setError('Error during log in');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4" style={{
      background: "radial-gradient(circle at bottom center, #E2D5FF 0%, #6A58D3 40%, #1D1B4F 100%)",
    }}>
      <form onSubmit={handleLogIn} className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 rounded bg-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white font-bold py-2 rounded transition">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
