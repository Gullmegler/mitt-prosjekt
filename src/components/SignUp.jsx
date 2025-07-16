import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { SITE_KEY } from "../config";

const SignUp = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms.");
      return;
    }
    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }
    // Sign-up logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={company} onChange={e => setCompany(e.target.value)} />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <label>
        <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
        I agree to the Terms
      </label>
      <Turnstile
        sitekey={SITE_KEY}
        onSuccess={(token) => setToken(token)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
