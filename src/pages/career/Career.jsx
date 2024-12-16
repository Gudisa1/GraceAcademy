import React, { useState, useEffect } from "react";

const Career = () => {
  const [isHiring, setIsHiring] = useState(false);

  // Simulate status change (this could come from an API or a state update)
  useEffect(() => {
    // Assuming you'd change the hiring status later
    setIsHiring(false); // Change to true when you start accepting applications
  }, []);

  return (
    <div className="career-container bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white min-h-screen flex items-center justify-center">
      <div className="career-content text-center px-6 md:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Amazing Team!
        </h1>
        <p className="text-xl mb-6">
          At <span className="font-bold">GraceAcademy</span>, we believe in
          creating opportunities for talented individuals to grow and excel.
          Whether you're an intern or a seasoned professional, we value passion,
          creativity, and a drive to succeed.
        </p>

        {/* Status Message */}
        <div className="status-message bg-[#2D3748] rounded-lg py-4 px-6 mb-8 inline-block">
          <p className="text-2xl font-semibold">
            {isHiring
              ? "We're Currently Accepting Applications!"
              : "We're Closed for Now, But Check Back Soon!"}
          </p>
          {isHiring && (
            <p className="mt-2 text-lg">
              If you're looking for an internship or a job, apply below!
            </p>
          )}
        </div>
        {/* Aesthetic Image */}
        <div className="mt-12">
          <img
            src="../../images/career3.gif"
            alt="Career at GraceAcademy"
            className="rounded-xl shadow-lg w-full md:w-2/3 mx-auto mb-8"
          />
          {/* Apply Button (only shows if hiring) */}
          {isHiring ? (
            <button className="btn-apply text-lg bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg">
              Apply Now
            </button>
          ) : (
            <button
              className="btn-not-hiring text-lg bg-gray-500 text-white py-3 px-8 rounded-lg cursor-not-allowed opacity-50"
              disabled
            >
              Applications Closed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
