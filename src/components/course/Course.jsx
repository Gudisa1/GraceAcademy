import React from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  return (
    <div className="bg-primary mb-12" id="courses">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-8 sm:mt-12 py-8 sm:py-12 font-mono">
        Here are some <span className="text-indigo-500">of our Courses</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-20">
        {/* Course 1: Basics of Programming */}
        <div className="bg-white rounded-lg shadow-xl p-6 text-center w-full sm:w-full md:w-full lg:w-full xl:w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            Basics Of Programming
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
              src="../../images/pro3.gif" // Replace with actual GIF path
              alt="Basics of Programming"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Learn the fundamental concepts of programming including variables,
            data structures, and control flow. Perfect for beginners.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>

        {/* Course 2: Web Design */}
        <div className="bg-white rounded-lg shadow-xl text-center p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            Web Design
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-40 h-40 object-cover"
              src="../../images/w.gif" // Replace with actual GIF path
              alt="Web Design"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Explore the basics of web design, including layout, typography, and
            user experience (UX). Learn how to create visually appealing
            websites.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>

        {/* Course 3: Frontend Development */}
        <div className="bg-white rounded-lg text-center shadow-xl p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            Frontend Development
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
              src="../../images/front.gif" // Replace with actual GIF path
              alt="Frontend Development"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Learn how to build interactive and dynamic web pages using HTML,
            CSS, and JavaScript. Dive into popular frontend frameworks like
            React.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>

        {/* Course 4: Backend Development */}
        <div className="bg-white rounded-lg text-center shadow-xl p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            Backend Development
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-40 h-40 object-cover"
              src="../../images/backend.gif" // Replace with actual GIF path
              alt="Backend Development"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Master server-side programming and learn about databases, API
            design, and server management using languages like Node.js and
            Python.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>

        {/* Course 5: Linux Administration */}
        <div className="bg-white rounded-lg text-center shadow-xl p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            Linux Administration
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-40 h-40 object-cover"
              src="../../images/linux.gif" // Replace with actual GIF path
              alt="Linux Administration"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Gain hands-on experience with Linux operating systems, including
            shell commands, user management, and system configuration.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>

        {/* Course 6: DevOps */}
        <div className="bg-white rounded-lg text-center shadow-xl p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500">
            DevOps
          </h2>
          <figure className="flex justify-center mt-4 mb-4">
            <img
              className="w-52 h-40 object-cover rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
              src="../../images/devops1.gif" // Replace with actual GIF path
              alt="DevOps"
            />
          </figure>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Learn about continuous integration, continuous deployment, and
            automating workflows to enhance collaboration between development
            and IT operations.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <NavLink to="/enroll">Enroll Now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
