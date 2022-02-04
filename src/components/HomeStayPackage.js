import React from "react";
import { Link } from "react-router-dom";
import heart_tapped from "../assets/Graphics/heart_tapped.svg";
import tiger from "../assets/Images/tiger.png";
import ImageSlider from "./ImageSlider";
import Map from "./Map";
import heart_def from "../assets/Graphics/heart_def.svg";
import map from "../assets/Graphics/map_icon.svg";
import date from "../assets/Graphics/date_icon.svg";
import Footer from "./Footer";
import Modal from "./Modal";
import bardia from "../assets/Images/bardia.jpg";

function HomeStayPackage() {
  return (
    <>
      <div className="">
        <div className="flex md:flex-row flex-col-reverse justify-center">
          <div className="flex-1 py-12 px-2 md:py-36 md:px-36">
            <h1 className=" w-full  text-5xl  md:text-7xl mb-5 font-bold ">
              Ramey Ko Ghar
            </h1>
            <p className="  text-xl mb-5">
              5+ Years of Experience Hosting Tourists
            </p>
            <p className="  text-xl">
              Live as a local! Located only 200m from Bardiya National Park.
              peaceful house in very quiet area with enough flora and fauna but
              also very close to town, restaurants and night life. Food Market
              is at 300 meters only!
            </p>

            <div className="flex  bg-gray-100 mr-5 mt-5 w-full justify-between items-center rounded-3xl shadow-xl px-12 py-14 ">
              <div className="inquiry-left ">
                <div className="flex flex-col">
                  <div className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <label className="text-lg" htmlFor="checkin">
                      Check in
                    </label>
                  </div>
                  <input
                    type="date"
                    className="border-2 border-gray-400 rounded-3xl px-3 mt-1 mb-2"
                    id="checkin"
                    name="checkin"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <label className="text-lg" htmlFor="nights">
                      No. of nights
                    </label>
                  </div>
                  <input
                    type="date"
                    className="border-2 border-gray-400 rounded-3xl px-3 mt-1 mb-2"
                    id="nights"
                    name="nights"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <label htmlFor="guests" className="text-lg">
                      No.of guests
                    </label>
                  </div>
                  <select
                    name="guests"
                    className="border-2 text-center border-gray-400 rounded-3xl px-3 mt-1 mb-2"
                    id="guests"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <Modal
                  button={true}
                  name={"INQUIRY"}
                  title="Inquiry"
                  datatarget="#exampleModalCenteredScrollable"
                />
              </div>
              <div className="inquiry-right ml-2">
                <h1 className="text-4xl md:text-5xl flex flex-col md:flex-row justify-center items-center text-red-600 font-bold">
                  {" "}
                  $17.00
                  <span className="text-lg text-black font-normal ml-1">
                    {" "}
                    /guest/night{" "}
                  </span>
                </h1>
                <div className="flex mt-3 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="text-xl font-semibold text-red-600 ">
                    {" "}
                    Bardiya, Nepal
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-1 relative justify-end mr-5 ml-5">
            <img src={bardia} className="h-4/6  rounded-b-3xl" alt="bardia" />
            <div className=" right-10 top-10 absolute md:h-20 flex flex-col justify-center items-center">
              <img src={heart_tapped} alt="" />
              <h1 className="text-white font-extrabold text-3xl">273</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="tipping_section py-24 px-2 flex flex-col  md:flex-row md:px-40">
        <div className="section_left">
          <h1 className="  text-4xl md:text-6xl mb-5 font-bold ">Traits</h1>
          <p className="text-xl md:text-xl mb-5">
            English Speaking, Sunrise and Sunset View, Calm Atmosphere, Tharu
            Food
          </p>
        </div>
      </div>
      {/* Itinery */}

      {/* include and extend */}
      <div className="include_exclude flex justify-center md:justify-between md:w-5/6 mx-auto py-10 bg-gray-100 rounded-3xl md:shadow-2xl mb-10 md:mb-40 md:py-32 md:px-20">
        <div className="include flex flex-col ml-2">
          <h1 className="  text-4xl md:text-6xl mb-5 font-bold text-red-600">
            What's Included
          </h1>
          <p className="text-xl">24hr WiFi</p>
          <p className="text-xl">Sunrise and Sunset View</p>
          <p className="text-xl">Tharu Dinner</p>
          <p className="text-xl">Single Bed</p>
          <p className="text-xl">Garden</p>
          <p className="text-xl">Local Music </p>
        </div>
        <div className="exclude flex flex-col">
          <h1 className="  text-4xl md:text-6xl mr-2 mb-5 font-bold text-red-600">
            What's Excluded
          </h1>
          <p className="text-xl">Personal Expenses</p>
          <p className="text-xl">Lunch Expenses</p>
          <p className="text-xl">Personal Equipments</p>
        </div>
      </div>
      {/* Explore Bardiya  */}
      <div className="explore_bardiya md:bg-gray-200 py-20 md:py-32">
        <h1 className="  md:px-36 text-4xl px-2 md:text-6xl mb-5 font-bold ">
          Gallery
        </h1>
        <div className="w-full md:px-36 md:py-10">
          <ImageSlider />
        </div>
      </div>

      {/* Interested In */}
      <div className="interested_in py-24  ">
        <h1 className=" px-2 md:px-36 text-4xl md:text-6xl mb-5 font-bold ">
          You Might Also Be Interested In
        </h1>
        <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
          <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  h-full  ">
            <Link
              to="/package"
              className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bandipur-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-32   ">
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
            </Link>
            <Link
              to="/package"
              className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bardiya_tab-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-32   ">
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
            </Link>
            <Link
              to="/package"
              className="flex flex-col justify-center md:bg-gray-100 mr-5 mt-5 bg-narphu-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl relative shadow-xl px-5 py-14 items-center md:w-3/12"
            >
              <div className="flex flex-col  absolute top-12 right-5 items-center">
                <img src={heart_def} className="h-12" alt="heart" />
                <p className="text-xl font-semibold text-white">273</p>
              </div>
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-32   ">
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
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeStayPackage;
