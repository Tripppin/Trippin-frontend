import React from "react";
import bg_image from "../assets/Images/Hero Image.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="overflow-hidden max-w-full h-screen bg-hero-pattern bg-cover bg-no-repeat">
      {/* <img src={bg_image} alt="Background image" /> */}
      <div className="py-32 px-24 md:py-64 md:px-36">
        <h1 className=" md:w-6/12  text-5xl  md:text-7xl mb-5 font-bold text-white">
          Experience Authentic Nepal
        </h1>
        <Link
          to="/experiences"
          className=" bg-red-700 text-white px-8 text-2xl py-3 rounded-3xl"
        >
          Explore
        </Link>
      </div>
      //{" "}
    </div>
  );
}

export default Home;
