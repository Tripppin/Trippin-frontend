import React from "react";
import { Link } from "react-router-dom";
import heart_def from "../assets/Graphics/heart_def.svg";
import map from "../assets/Graphics/map_icon.svg";
import Footer from "./Footer";
import Hire from "./Hire";
function HomeStay() {
  return (
    <>
      <Hire />
      <div className="tripping_section3 py-10 px-5 flex flex-col md:px-36">
        <h1 className=" md:w-max text-4xl md:text-6xl mb-5 font-bold md:px-28 ">
          Homestay
        </h1>
        <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
          <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  h-full  ">
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-newari-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36    ">
                | Newari Khaja Homestay
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $23<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Bhaktapur</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-bardiya-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36  ">
                | Ramey ko Ghar
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $17<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Bardiya</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-pokhara-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">575</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36   ">
                | Family Home
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $28<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Pokhara</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-newari-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36    ">
                | Newari Khaja Homestay
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $23<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Bhaktapur</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-bardiya-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36  ">
                | Ramey ko Ghar
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $17<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Bardiya</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/home-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110 bg-gray-100 mr-5 mt-5 bg-pokhara-home-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">575</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-36   ">
                | Family Home
              </h1>
              <div className="flex justify-between mt-44 md:mt-36 items-center">
                <h1 className="text-2xl text-center text-red-600 ">
                  $28<p className="text-lg text-black">per guest/night</p>
                </h1>

                <div className="border-l-2 w-1/2 h-full flex flex-col items-center justify-center border-gray-400">
                  <div className="flex px-5 items-center">
                    <img src={map} className="h-5" alt="map" />
                    <p className="text-xl ml-2">Pokhara</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <Link to="/">
            <button className=" bg-red-700 mx-auto font-bold border-2 border-red-700 hover:bg-white hover:text-red-700 mt-6 flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
              View All
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeStay;
