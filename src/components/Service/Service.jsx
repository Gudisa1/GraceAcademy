import React from "react";

const Service = () => {
  return (
    <div className="mt-16 mb-10 font-mono">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-blue-600 mt-12 sm:mt-16">
        Transform Your Skills with
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-8 md:px-20 mx-auto">
        <div className="card w-11/12 bg-[#171836] shadow-xl rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 transition-transform duration-300 ease-in-out mt-4">
          <figure className="flex justify-center mb-4">
            <img
              className="w-32"
              src="../../images/interactive.jpg"
              alt="Interactive Learning"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-semibold text-teal-500">
              Interactive Learning
            </h2>
            <p className="text-center text-base mt-2">
              Learn through interactive tutorials, quizzes, and hands-on
              exercises designed to keep you engaged.
            </p>
          </div>
        </div>

        <div className="card w-11/12 bg-[#171836] shadow-xl rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 transition-transform duration-300 ease-in-out mt-4">
          <figure className="flex justify-center mb-4">
            <img
              className="w-32 h-24"
              src="../../images/video.jpg"
              alt="Video Lessons"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-semibold text-teal-500">
              Video Lessons
            </h2>
            <p className="text-center text-base mt-2">
              Watch high-quality video lessons from industry experts at your own
              pace, anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="card w-11/12 bg-[#171836] shadow-xl rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 transition-transform duration-300 ease-in-out mt-4">
          <figure className="flex justify-center mb-4">
            <img
              className="w-32"
              src="../../images/certification.jpg"
              alt="Certification"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-semibold text-teal-500">
              Certifications
            </h2>
            <p className="text-center text-base mt-2">
              Earn certificates upon completing courses to validate your skills
              and boost your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
