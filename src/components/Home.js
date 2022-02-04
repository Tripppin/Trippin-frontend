import React from "react";
import { Link } from "react-router-dom";
import HomeSection from "./HomeSection";

function Home() {
  return (
    <>
      <div className="max-w-full h-screen bg-hero-pattern bg-cover bg-no-repeat">
        <div className="py-40 px-2 md:py-64 md:px-36">
          <h1 className=" w-full md:w-6/12  text-5xl  md:text-7xl mb-5 font-bold text-white">
            Experience Authentic Nepal
          </h1>
          <Link
            to="/experiences"
            className=" bg-red-700 text-white hover:bg-white font-bold hover:text-red-700 px-8 text-2xl py-3 rounded-3xl"
          >
            Explore
          </Link>
        </div>
      </div>
      <HomeSection />
    </>
  );
}

export default Home;
