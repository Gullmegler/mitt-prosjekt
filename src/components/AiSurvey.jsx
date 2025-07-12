import React from "react";

export default function AiSurvey() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">AI Survey Workflow</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-300">
        Upload videos and images directly from your surveys. Our AI detects and labels furniture and items,
        then seamlessly updates your CRM — saving you time and impressing your customers.
      </p>
      <div className="flex justify-center">
        <iframe
          src="https://app.roboflow.com/workflows/embed/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3JrZmxvd0lkIjoiTW9iSWFudXpwREZuYVh1Y0YzZGIiLCJ3b3Jrc3BhY2VJZCI6IlRsdFJVYWhhakxQNkVzY3pOUkdoNGVjWUNWeTIiLCJ1c2VySWQiOiJUbHRSVWFoYWpMUDZFc2N6TlJHaDRlY1lDVnkyIiwiaWF0IjoxNzUyMzU4NTcxfQ.O8XAxptZw6yHRnUOyrTsiz58nh-UBjF-qI7USV5ZxJw"
          title="AI Workflow"
          width="100%"
          height="600"
          allowFullScreen
          className="rounded-lg shadow-2xl max-w-5xl"
        ></iframe>
      </div>
    </section>
  );
}
