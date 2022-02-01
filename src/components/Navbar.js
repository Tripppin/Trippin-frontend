import React from "react";
import logo from "../assets/Graphics/Trippin_Main_Logo.svg";
import search from "../assets/Graphics/search_ico.svg";
import menu from "../assets/Graphics/menu_pc.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  const handleBtn = () => {
    const menu = document.querySelector(".mobile-menu");

    menu.classList.toggle("hidden");
  };

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="navbar p-4 flex justify-between md:justify-around items-center h-20 border-b-2">
        <div className="navbar-left flex md:w-2/5 md:space-x-7 items-center justify-center">
          <Link to="/">
            <img src={logo} className="h-14 md:h-12" alt="Trippin" />
          </Link>
          <div className="flex w-full items-center justify-center">
            <input
              type="text"
              className=" hidden md:flex w-full border-2 border-gray-700 px-5 py-3 rounded-full"
              placeholder="Book Homestays, Local Guides, etc."
            />
            <img
              src={search}
              className="hidden md:flex h-10 relative md:right-16 cursor-pointer"
              alt="search"
            />
          </div>
        </div>
        <div className="navbar-middle">
          <ul className="hidden md:flex space-x-6 text-xl">
            {path === "about" ? (
              <Link
                to="/about"
                className="cursor-pointer px-5 py-2  border-b-2 border-red-500 "
              >
                About
              </Link>
            ) : (
              <Link
                className="cursor-pointer px-5 py-2 border-b-2 border-white hover:border-red-500 "
                to="/about"
              >
                About
              </Link>
            )}
            {path === "experiences" ? (
              <Link
                to="/experiences"
                className="cursor-pointer px-5 py-2  border-b-2 border-red-500 "
              >
                Experiences
              </Link>
            ) : (
              <Link
                className="cursor-pointer px-5 py-2 border-b-2 border-white hover:border-red-500 "
                to="/experiences"
              >
                Experiences
              </Link>
            )}
            {path === "blog" ? (
              <Link
                to="/blog"
                className="cursor-pointer px-5 py-2  border-b-2 border-red-500 "
              >
                Blog
              </Link>
            ) : (
              <Link
                className="cursor-pointer px-5 py-2 border-b-2 border-white hover:border-red-500 "
                to="/blog"
              >
                Blog
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-right hidden md:flex items-center space-x-5 justify-center">
          <div className="border-gray-700 rounded-full border-2 h-14 w-14 flex items-center justify-center">
            USD
          </div>
          <img src={menu} className="h-14" alt="menu" />
        </div>
        {/* mobile responsive */}
        <div className="mobile-btn flex md:hidden space-x-5">
          <img
            src={search}
            className="h-10 relative md:right-16 cursor-pointer"
            alt="search"
          />
          <button className="" onClick={handleBtn}>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 absolute w-screen p-2 hidden mobile-menu text-center">
        <ul className="md:hidden">
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/experiences">Experiences</Link>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
