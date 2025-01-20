import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-14 gap-[8em] items-center ">
        <p className="flex-1 ml-[-3em] sm:ml-6 md:ml-10 mb-0 md:mb-0 font-mono">
          Welcome to{' '}
          <span className="font-bold text-indigo-500">Grace Academy</span>,
          Ethiopia's gateway to mastering the skills of tomorrow. Whether you're
          diving into
          <span className="font-bold text-indigo-500"> Web Development</span>,
          <span className="font-bold text-indigo-500">DevOps</span>,
          <span className="font-bold text-indigo-500">
            Linux Administration
          </span>
          , or
          <span className="font-bold text-indigo-500"> Cloud Computing</span>,
          our expert-led courses are designed to ignite your potential. We focus
          on hands-on, practical learning to prepare you for real-world
          challenges in the fast-paced tech landscape. At{' '}
          <span className="font-bold text-indigo-500">Grace Academy</span>, we
          don’t just teach—we transform. Backed by partnerships with top
          organizations, our programs are cutting-edge, industry-relevant, and
          tailored to help you excel. No matter where you’re starting, we’ll
          guide you to new heights. Join the community that’s shaping the
          future. Your journey to success starts here!
        </p>

        <div className="banner-image flex-1">
          <img className="rounded-xl" src="../../../images/model.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
