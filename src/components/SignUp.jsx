import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Turnstile from "react-turnstile";

const SignUp = () => {
  const location = useLocation();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const emailParam = query.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms to proceed.");
      return;
    }
    // Submit logic here (e.g. API call including captchaToken)
    console.log({ company, email, fullName, password, captchaToken });
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#0a0a23] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a2e] p-8 rounded-lg shadow-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold mb-2 text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="w-full p-3 rounded bg-[#2c2c3e] text-white outline-none"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded bg-[#2c2c3e] text-white outline-none"
        />
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full p-3 rounded bg-[#2c2c3e] text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-[#2c2c3e] text-white outline-none"
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            required
          />
          <span>
            I accept the{" "}
            <a href="/terms" className="underline text-purple-400">
              Terms
            </a>
          </span>
        </div>

        <Turnstile
          sitekey="0x4AAAAAAB1Vg7CV1SLjRqr6" // Replace with your actual site key
          onVerify={(token) => setCaptchaToken(token)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignUp;
