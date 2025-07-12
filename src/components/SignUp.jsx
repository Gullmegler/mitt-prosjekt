import React, { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('+44');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setError('E-postadressene samsvarer ikke');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passordene samsvarer ikke');
      return;
    }

    try {
      // Her kan du legge inn API-kall for registrering
      console.log('User signed up:', {
        firstName, lastName, address, zipCode, phone: `${phoneCountryCode}${phone}`, email, companyName
      });
      alert('Registrering fullført!');
    } catch (err) {
      setError('Feil under registrering');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl mb-4">Sign Up</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Fornavn"
          className="w-full mb-4 p-2 border rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Etternavn"
          className="w-full mb-4 p-2 border rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Adresse"
          className="w-full mb-4 p-2 border rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Postnummer"
          className="w-full mb-4 p-2 border rounded"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="+44"
            className="w-20 p-2 border rounded mr-2"
            value={phoneCountryCode}
            onChange={(e) => setPhoneCountryCode(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Telefonnummer"
            className="flex-1 p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="E-post"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Bekreft E-post"
          className="w-full mb-4 p-2 border rounded"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passord"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Bekreft Passord"
          className="w-full mb-4 p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Firmanavn"
          className="w-full mb-4 p-2 border rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p>
          Allerede registrert? <a href="/login" className="text-blue-500">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
