import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <form
      action="/"
      className="flex flex-col justify-center items-center mx-auto md:w-2/5 py-10 rounded-2xl bg-gray-200 px-10  mt-10 mb-10 md:py-16 shadow-2xl"
    >
      <h1 className="text-3xl md:text-5xl mb-5 font-semibold text-red-600">
        {" "}
        Welcome to Trippin
      </h1>
      <input
        type="text"
        className="px-3 py-3  w-full rounded-xl focus:border-red-600 mb-3 border-gray-300 focus:outline-none border-2"
        placeholder="Full Name"
        required
      />
      <input
        type="text"
        className="px-3 py-3  w-full rounded-xl focus:border-red-600 mb-3 border-gray-300 focus:outline-none border-2"
        placeholder="Nationality"
        required
      />
      <input
        type="email"
        className="px-3 py-3  w-full rounded-xl focus:border-red-600 mb-3 border-gray-300 focus:outline-none border-2"
        placeholder="Email ID"
        required
      />
      <input
        type="password"
        className="px-3 py-3  w-full rounded-xl focus:border-red-600 mb-3 border-gray-300 focus:outline-none border-2"
        placeholder="Password"
        required
      />
      <input
        type="password"
        className="px-3 py-3  w-full rounded-xl focus:border-red-600 mb-3 border-gray-300 focus:outline-none border-2"
        placeholder="Re-enter Password"
        required
      />
      <h1 className="text-lg mb-5  ">
        {" "}
        Already have an account?
        <Link to="/sigin">
          <span className="text-lg   text-red-600"> Sign In</span>
        </Link>
      </h1>
      <button className=" bg-red-600 text-white flex items-center px-8 text-center mx-auto py-2 rounded-3xl">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
