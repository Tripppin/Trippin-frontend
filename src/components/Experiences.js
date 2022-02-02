import React from "react";
import heart_def from "../assets/Graphics/heart_def.svg";
import map from "../assets/Graphics/map_icon.svg";
import date from "../assets/Graphics/date_icon.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Experiences() {
  return (
    <div className="experiences">
      <div className="experience_section1 ">
        {/* stories */}
        <div className="experience_header flex w-max  space-x-6 md:space-x-12 mt-14 text-xl  mx-auto">
          <h1>All</h1>
          <h1>Experience</h1>
          <h1>Trekking</h1>
          <h1>Wildlife</h1>
        </div>
        <div className="tripping_section3 py-10 px-5 flex flex-col md:px-36">
          <h1 className=" md:w-max text-5xl md:text-6xl mb-5 font-bold md:px-28 ">
            Experiences
          </h1>
          <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
            <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  h-full  ">
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Discover Bandipur
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Bandipur, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Complete Bardiya
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Bardiya, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Nar Phu Trek
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Koto, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Discover Bandipur
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Bandipur, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Complete Bardiya
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Bardiya, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12">
                <div className="flex flex-col  absolute top-12 right-5 items-center">
                  <img src={heart_def} className="h-12" alt="heart" />
                  <p className="text-xl font-semibold text-white">273</p>
                </div>
                <h1 className="text-3xl text-white w-max absolute top-32   ">
                  | Nar Phu Trek
                </h1>
                <div className="flex justify-between mt-44 md:mt-36 items-center">
                  <h1 className="text-2xl text-center text-red-600 ">
                    $280<p className="text-xl text-black">per guest</p>
                  </h1>

                  <div className="border-l-2 w-7/12  border-gray-400">
                    <div className="flex px-5 items-center">
                      <img src={map} className="h-5" alt="map" />
                      <p className="text-xl ml-4">Koto, Nepal</p>
                    </div>
                    <div className="flex px-5 items-center">
                      <img src={date} className="h-5" alt="date" />

                      <p className="text-xl ml-4">6 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <button className=" bg-red-700 mx-auto mt-6 flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experiences;
