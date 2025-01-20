import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleNavClick = () => {
    window.scrollTo(0, 0); // Scrolls the page to the top
    setIsDropdownOpen(false); // Closes the dropdown (for small screens)
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'active-link' : 'link')}
          to="/"
          onClick={handleNavClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'active-link' : 'link')}
          to="/Career"
          onClick={handleNavClick}
        >
          Career
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'active-link' : 'link')}
          to="/enroll"
          onClick={handleNavClick}
        >
          Enroll
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'active-link' : 'link')}
          to="/courses"
          onClick={handleNavClick}
        >
          Free Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'active-link' : 'link')}
          to="/about"
          onClick={handleNavClick}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 mt-12">
      <div className="navbar px-4 md:px-28 font-mono flex flex-row justify-between items-center relative">
        {/* Logo at the Start */}
        <div className="navbar-start">
          <NavLink to="/">
            <img
              className="w-20 h-20 rounded-[50%]"
              src="/images/logo.jpg"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Horizontal Menu for Larger Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex flex-row space-x-20">
            {menuItems}
          </ul>
        </div>

        {/* Hamburger Menu at the End for Small Screens */}
        <div className="navbar-end lg:hidden relative">
          <button
            tabIndex="0"
            className="btn btn-ghost"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isDropdownOpen
                    ? 'M6 18L18 6M6 6l12 12' // "X" Icon
                    : 'M4 6h16M4 12h8m-8 6h16' // Hamburger Icon
                }
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul
              tabIndex="0"
              className="menu menu-compact absolute top-full right-0 mt-3 p-2 flex gap-3 flex-col shadow-xl bg-[#2D3748] text-white rounded-lg w-52 z-10 transition-transform duration-200 ease-in-out transform hover:scale-105"
            >
              {menuItems}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
