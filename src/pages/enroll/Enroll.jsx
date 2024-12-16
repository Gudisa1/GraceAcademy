import React from "react";

const Enroll = () => {
  return (
    <div className="enroll-container bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white py-20">
      <div className="enroll-content text-center">
        <h1 className="text-4xl font-bold mb-4">Ready to Boost Your Skills?</h1>
        <p className="text-xl mb-8">
          Enroll in one of our amazing courses today and take the first step
          toward mastering new technologies!
        </p>

        {/* CTA Button to Direct to Form */}
        <a
          href="#enroll-form"
          className="cta-button px-8 py-4 text-lg font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition transform hover:scale-105"
        >
          Enroll Now
        </a>

        {/* Embed Google Form */}
        <div id="enroll-form" className="mt-12 px-4 md:px-20">
          <div className="google-form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-qK267aXg609bA94FnKy7M_jvhJkqstSCenFk0B3IgHHLxQ/viewform?usp=sf_link" // Use the actual embed URL
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Enroll to Course"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
