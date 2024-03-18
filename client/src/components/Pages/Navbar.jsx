import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Profile from "./Profile";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const signin = () => {
  //     window.localStorage.getItem("isLogedIn");
  //   };
  //   signin();
  // });
  const signin = () => {
    localStorage.getItem("isLogedIn");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className=" border-black font-bold">
        <nav className="bg-cyan-400 container mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="Image">
              <Link to="/" className="flex items-center ">
                <img
                  className="w-18 h-12"
                  src="../../../public/images/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              }lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm lg:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200  mr-4 hover:underline underline-offset-4"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/images"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 hover:underline underline-offset-4"
                  onClick={closeMenu}
                >
                  Images
                </Link>
                <Link
                  to="/contact-us"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 hover:underline underline-offset-4"
                  onClick={closeMenu}
                >
                  Contact us
                </Link>

                <Link
                  to="/package"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 hover:underline underline-offset-4"
                  onClick={closeMenu}
                >
                  Packages
                </Link>
                {signin ? (
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 hover:underline underline-offset-4"
                    onClick={closeMenu}
                  >
                    <Profile />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 hover:underline underline-offset-4"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
