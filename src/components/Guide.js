import React from "react";
import { Link } from "react-router-dom";
import heart_def from "../assets/Graphics/heart_def.svg";
import map from "../assets/Graphics/map_icon.svg";
import Footer from "./Footer";
import Hire from "./Hire";
function Guide() {
  return (
    <>
      <Hire />
      <div className="tripping_section3 py-10 px-5 flex flex-col md:px-36">
        <h1 className=" md:w-max text-4xl md:text-6xl mb-5 font-bold md:px-28 ">
          Guide
        </h1>
        <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
          <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  h-full  ">
            <Link
              to="/guide-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110  bg-gray-100 mr-5 mt-5 bg-alex-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Alexander Ashiesh
              </h1>
              <div className="flex flex-col justify-center mt-44   items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I will guide through local community of Kathmandu
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$20/day</span>
                </h1>
              </div>
            </Link>
            <Link
              to="/guide-package"
              className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 transition-all transform ease-in-out hover:scale-110  bg-ankit-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">290</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Ankit Rajbhandari
              </h1>
              <div className="flex flex-col justify-center mt-44  items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I love Bardiya and so will you. Let me show you why.
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$25/day</span>
                </h1>
              </div>
            </Link>
            <Link
              to="/guide-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110  bg-gray-100 mr-5 mt-5 bg-bibhas-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">873</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Ramey ko Ghar
              </h1>
              <div className="flex flex-col justify-center mt-44  items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I specialize in hidden trek routes within Dolpa region of
                  Nepal.
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$25/day</span>
                </h1>
              </div>
            </Link>
            <Link
              to="/guide-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110  bg-gray-100 mr-5 mt-5 bg-alex-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Alexander Ashiesh
              </h1>
              <div className="flex flex-col justify-center mt-44  items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I will guide through local community of Kathmandu
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$20/day</span>
                </h1>
              </div>
            </Link>
            <Link
              to="/guide-package"
              className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 transition-all transform ease-in-out hover:scale-110  bg-ankit-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">290</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Ankit Rajbhandari
              </h1>
              <div className="flex flex-col justify-center mt-44  items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I love Bardiya and so will you. Let me show you why.
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$25/day</span>
                </h1>
              </div>
            </Link>
            <Link
              to="/guide-package"
              className="flex flex-col justify-center transition-all transform ease-in-out hover:scale-110  bg-gray-100 mr-5 mt-5 bg-bibhas-guide-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">873</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-40  ">
                | Ramey ko Ghar
              </h1>
              <div className="flex flex-col justify-center mt-44  items-center">
                <h1 className="text-xl text-center mb-2  ">
                  I specialize in hidden trek routes within Dolpa region of
                  Nepal.
                </h1>
                <h1 className="text-xl text-center  ">
                  Starting from{" "}
                  <span className="font-bold text-red-600">$25/day</span>
                </h1>
              </div>
            </Link>
          </div>
          <Link to="/">
            <button className=" bg-red-700 mx-auto mt-6 flex w-max font-bold border-2 border-red-700 hover:bg-white hover:text-red-700 text-white px-6 text-2xl py-3 rounded-3xl">
              View All
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Guide;
