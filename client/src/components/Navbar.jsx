/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo_final from "../assets/tab-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logoStyle = {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <nav className='bg-gray-800 sticky z-50 top-0' style={{ height: "5rem" }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link to='/' className='text-white font-bold flex items-center'>
              <img src={logo_final} alt='Logo' style={logoStyle} />
              <span className='ml-2'>GlucoBuddy</span>
            </Link>
          </div>
          <div className='hidden 850px:block'>
            <div className='ml-10 flex items-center space-x-4'>
              <NavLink to='/' onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to='/data-info' onClick={closeMenu}>
                Data Info
              </NavLink>
              <NavLink to='/prediction' onClick={closeMenu}>
                Prediction
              </NavLink>
              <NavLink to='/visualization' onClick={closeMenu}>
                Visualization
              </NavLink>
              <NavLink to='/contact' onClick={closeMenu}>
                Contact Us
              </NavLink>
              <NavLink to='/FAQ' onClick={closeMenu}>
                FAQ
              </NavLink>
            </div>
          </div>
          <div className='-mr-2 flex 850px:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              {isOpen ? (
                <FaTimes className='block h-6 w-6' />
              ) : (
                <FaBars className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='absolute top-20 left-0 w-full bg-gray-900 text-white p-5 space-y-4'
          style={{ zIndex: 40 }}
        >
          <NavLink to='/' onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to='/data-info' onClick={closeMenu}>
            Data Info
          </NavLink>
          <NavLink to='/prediction' onClick={closeMenu}>
            Prediction
          </NavLink>
          <NavLink to='/visualization' onClick={closeMenu}>
            Visualization
          </NavLink>
          <NavLink to='/contact' onClick={closeMenu}>
            Contact Us
          </NavLink>
          <NavLink to='/FAQ' onClick={closeMenu}>
            FAQ
          </NavLink>
        </div>
      )}
    </nav>
  );
};

// Custom NavLink component for internal links
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
  >
    {children}
  </Link>
);

export default Navbar;
