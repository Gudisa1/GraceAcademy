import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-20 items-center py-36">
        <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
          <h1 className="text-3xl md:text-5xl font-semibold">
            GraceAcademy – Where Tech Skills Come to Life!
          </h1>
          <p className="text-base md:text-xl pl-2 mt-4">
            Unlock your potential, learn anywhere, anytime, and transform your
            future with
            <span className="font-bold text-indigo-500"> GraceAcademy</span>!
          </p>
          <button className="mt-8 rounded-lg px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg font-semibold shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-1 hover:scale-105">
            Start Learning
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
