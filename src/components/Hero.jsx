import React from "react";
import { Sofa, Chair, Table } from "./icons"; // Husk: legg til egne ikoner eller import fra lucide-react

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-32 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6">AI-Powered CRM for Removals</h1>
      <p className="max-w-2xl mx-auto mb-8 text-gray-300">
        Streamline your removals business with advanced AI surveys, instant object detection,
        and seamless CRM automation.
      </p>
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
      >
        Get Started
      </button>
      <div className="flex justify-center gap-8 mt-12">
        <Sofa className="w-16 h-16" />
        <Chair className="w-16 h-16" />
        <Table className="w-16 h-16" />
      </div>
    </section>
  );
}
