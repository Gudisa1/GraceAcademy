import React from "react";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-20 items-center py-36">
        <div className="flex-1 ml-[-3em] sm:ml-6 md:ml-10 mb-10 md:mb-0 font-mono">
          <h1 className="w-[10em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-left">
            GraceAcademy – Where Tech Skills Come to Life!
          </h1>
          <p className="ml-[-1em] text-sm sm:text-base md:text-lg lg:text-xl pl-4 md:pl-6 mt-4">
            Unlock your potential, learn anywhere, anytime, and transform your
            future with
            <span className="font-bold text-indigo-500"> GraceAcademy</span>!
          </p>

          <button className="mt-8 rounded-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-1 hover:scale-105">
            <NavLink to="/enroll">Start Learning</NavLink>
          </button>
        </div>
        <div className="banner-image flex-1">
          <img className="rounded-xl" src="../../../images/hero4.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
