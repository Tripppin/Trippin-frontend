import React, { useState } from "react";
import logo from "../assets/Graphics/Trippin_Main_Logo.svg";
import search from "../assets/Graphics/search_ico.svg";
import menu from "../assets/Graphics/menu_pc.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dollarB, setDollarB] = useState(false);
  const [dollar, setDollar] = useState(0);
  const [rupee, setRupee] = useState(0);
  const [rupeeB, setRupeeB] = useState(false);

  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  const handleBtn = () => {
    const menu = document.querySelector(".mobile-menu");

    menu.classList.toggle("hidden");
  };
  const convertDollar = (e) => {
    const dollarToConvert = e.target.value;
    const rupees = (dollarToConvert * 120.05).toFixed(2);
    setDollar(rupees);
  };
  const convertToDollarsBtn = (e) => {
    e.preventDefault();
    setDollarB(true) && setRupeeB(false);
  };
  const convertToRupeesBtn = (e) => {
    e.preventDefault();
    setDollarB(false) && setRupeeB(true);
  };
  const convertRupee = (e) => {
    const rupeeToConvert = e.target.value;
    const dollars = (rupeeToConvert / 120.05).toFixed(2);
    setRupee(dollars);
  };
  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="navbar p-4 flex justify-between md:justify-around items-center h-20 border-b-2">
        <div className="navbar-left flex md:w-2/5 md:space-x-7 items-center justify-center">
          <Link to="/">
            <img src={logo} className="h-14 md:h-12" alt="Trippin" />
          </Link>
          <div className="flex w-full relative items-center justify-center">
            <input
              type="text"
              className=" hidden md:flex w-full border-2 border-gray-700 px-5 py-3 rounded-full"
              placeholder="Book Homestays, Local Guides, etc."
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            />
            <div
              className="collapse absolute top-14 "
              id="multiCollapseExample2"
            >
              <div className="flex w-11/12 justify-center  items-center px-12 py-5 rounded-xl space-x-2 shadow-2xl bg-white">
                <Link
                  to="/hire/guide"
                  className=" bg-red-700 text-white flex items-center w-full px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Hire a Guide
                </Link>
                <Link
                  to="/hire/homestay"
                  className=" bg-red-700 text-white flex items-center w-full px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Book Homestay
                </Link>
                <Link
                  to="/experiences"
                  className=" bg-red-700 text-white flex items-center w-full px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Book Experience
                </Link>
              </div>
            </div>
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
            {path === "hire" ? (
              <Link
                to="/hire/homestay"
                className="cursor-pointer px-5 py-2  border-b-2 border-red-500 "
              >
                Hire
              </Link>
            ) : (
              <Link
                className="cursor-pointer px-5 py-2 border-b-2 border-white hover:border-red-500 "
                to="/hire/homestay"
              >
                Hire
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-right hidden md:flex items-center space-x-5 justify-center">
          <div className="flex flex-col justify-center items-center relative">
            <button
              className="border-gray-700 rounded-full border-2 leading-tight h-14 w-14 flex transition duration-150 ease-in-out items-center justify-center"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              USD
            </button>
            <div
              className="collapse flex flex-col absolute  top-16"
              id="collapseExample"
            >
              <div className="flex flex-col justify-center items-center p-6 w-52 rounded-lg shadow-lg  bg-white">
                <button
                  onClick={convertToRupeesBtn}
                  className="text-lg font-bold bg-red-600  text-white rounded-lg px-2 mb-2"
                >
                  {" "}
                  Convert to Dollar
                </button>
                <button
                  onClick={convertToDollarsBtn}
                  className="text-lg font-bold bg-red-600  text-white rounded-lg px-2 mb-2"
                >
                  Convert to Rupees
                </button>
                {dollarB ? (
                  <>
                    <div className="flex justify-center mt-2">
                      <label
                        htmlFor="dollar"
                        className="font-bold text-xl mr-1"
                      >
                        $.
                      </label>
                      <input
                        type="text"
                        onChange={convertDollar}
                        className="border-2  px-2 border-gray-400 rounded-lg w-5/6"
                      />
                    </div>
                    <h1 className="text-lg mt-4 font-bold">
                      Result: Rs.{dollar}
                    </h1>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center mt-2">
                      <label
                        htmlFor="dollar"
                        className="font-bold text-xl mr-1"
                      >
                        Rs.
                      </label>
                      <input
                        type="text"
                        onChange={convertRupee}
                        className="border-2  px-2 border-gray-400 rounded-lg w-5/6"
                      />
                    </div>
                    <h1 className="text-lg mt-4 font-bold">
                      Result: $.{rupee}
                    </h1>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={menu}
              className="h-14 cursor-pointer transition duration-150 ease-in-out"
              alt="menu"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample"
              aria-expanded="false"
              aria-controls="multiCollapseExample"
            />
            <div
              className="collapse absolute top-14 right-5 "
              id="multiCollapseExample"
            >
              <div className="flex md:flex-col justify-center  items-center px-12 py-5 rounded-xl space-x-2 shadow-2xl bg-white">
                <Link to="/signin">
                  <div className="text-xl font-semibold hover:bg-gray-200 w-full px-5 rounded-xl py-1 ">
                    Sign In
                  </div>
                </Link>
                <Link to="/signup">
                  <div className="text-xl font-semibold hover:bg-gray-200 w-full px-5 rounded-xl py-1">
                    Sign Up
                  </div>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_XNM7DAezyL_NMKqlbXaPZyQ-O5_0k43Nr0HPFOrVd2j5hw/viewform"
                  target="_blank"
                >
                  <div className="text-xl font-semibold hover:bg-gray-200 w-full px-5 rounded-xl py-1">
                    Register Service
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* mobile responsive */}
        <div className="mobile-btn flex md:hidden relative space-x-5">
          <div className="flex flex-col justify-center items-center ">
            <img
              src={search}
              className="h-10 relative md:right-16 cursor-pointer"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              alt="search"
            />
            <div
              className="collapse absolute top-10 right-5"
              id="collapseExample"
            >
              <div className="flex justify-center items-center p-6 rounded-t-lg  bg-white">
                <input
                  type="text"
                  className="rounded-xl border-2 border-gray-200 px-2 "
                />
                <img
                  src={search}
                  className="h-7 ml-2 relative md:right-16 cursor-pointer"
                  alt="search"
                />
              </div>
              <div className="flex flex-col justify-center  items-center px-12  rounded-b-xl space-x-2 shadow-sm bg-white">
                <Link
                  to="/hire/guide"
                  className=" bg-red-700 text-white flex items-center mb-2 px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Hire a Guide
                </Link>
                <Link
                  to="/hire/homestay"
                  className=" bg-red-700 text-white flex items-center mb-2 px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Book Homestay
                </Link>
                <Link
                  to="/experiences"
                  className=" bg-red-700 text-white flex items-center mb-2 px-3 text-center mx-auto py-2 rounded-3xl"
                >
                  Book Experience
                </Link>
              </div>
            </div>
          </div>

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
      <div className="bg-gray-100 absolute w-screen p-2 hidden  mobile-menu text-center">
        <ul className="md:hidden">
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/experiences">Experiences</Link>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200">
            <Link to="/hire/homestay">Hire</Link>
          </li>
          <div className="flex text-center items-center justify-center space-x-2">
            <li className="cursor-pointer p-2 hover:bg-gray-200">
              <Link to="/signin">Sign in</Link>
            </li>
            <li className="cursor-pointer p-2 hover:bg-gray-200">
              <Link to="/signup">Sign up</Link>
            </li>
            <li className="cursor-pointer p-2 hover:bg-gray-200">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_XNM7DAezyL_NMKqlbXaPZyQ-O5_0k43Nr0HPFOrVd2j5hw/viewform"
                target="_blank"
              >
                Register Service
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
