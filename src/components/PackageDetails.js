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
function PackageDetails() {
  return (
    <>
      <div className="max-w-full h-screen bg-complete-bardiya-hero-pattern relative bg-cover bg-no-repeat">
        <div className=" absolute right-6 top-10  md:h-20 flex flex-col justify-center items-center">
          <img src={heart_tapped} alt="" />
          <h1 className="text-white font-extrabold text-3xl">5172</h1>
        </div>
        <div className="py-40 px-2 md:py-36 md:px-36">
          <h1 className=" w-full md:w-6/12  text-5xl  md:text-7xl mb-5 font-bold text-white">
            Complete Bardiya
          </h1>
          <p className="text-white md:w-1/2 text-xl">
            Explore the natural beauty of Bardiya National Park while
            experiencing the Tharu Culture in person.
          </p>
          <Link to="/experiences">
            <button className=" bg-red-700 text-white px-8 mt-2 text-2xl py-3 rounded-3xl">
              Explore
            </button>
          </Link>
          <div className="flex  bg-gray-100 mr-5 mt-5 w-full justify-between items-center rounded-3xl shadow-xl px-12 py-14 md:w-1/2">
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
                $540.00
                <span className="text-lg text-black font-normal ml-1">
                  {" "}
                  per guest{" "}
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
              <div className="flex mt-3 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600 mr-1 "
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
                <h1 className="text-xl font-semibold text-red-600 "> 6 days</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tipping_section py-24 px-2 flex flex-col justify-center items-center md:flex-row md:px-40">
        <div className="section_left">
          <h1 className="  text-4xl md:text-6xl mb-5 font-bold ">
            Complete Bardiya
          </h1>
          <p className="text-lg md:text-xl mb-5 w-11/12">
            Bardiya located near south west corner of Nepal is home to one of
            Nepal’s best gems, Bardiya National Park. Known to few foreign
            travellers, Bardiya National Park with its unspoiled wilderness of
            grassland and beautiful riverine forest is one of the best places to
            explore wildlife and the indegeneus Tharu Culture in Nepal.
            <br />
            During this trip you will be staying with locals in one of the
            community homestay close to Bardiya National park. This way, you
            will be getting a glance in the way of life that has remained
            unchanged over time and can observe the Tharu traditions that is
            unique to this place. You will also be having a close encounter with
            the natural wildlife and a great possibility of seeing the rare
            Bengal Tiger during the safari. From exploring an authentic local
            life to discovering the rare wildlife in Nepal, this trip gives you
            an memorable and unforgettable experience.
          </p>
        </div>
        <img
          src={tiger}
          className="object-contain h-96 rounded-3xl "
          alt="memorable"
        />
      </div>
      {/* Itinery */}

      <div className="itinery flex flex-col mt-100 mb-40  ">
        <h1 className="font-extrabold  text-4xl mx-auto md:mx-0 md:text-6xl px-2 md:px-40 mb-5 md:mb-24 ">
          Itinery
        </h1>
        <div className="flex mx-auto flex-col md:flex-row  relative md:items-center md:w-5/6  ">
          <div className="hidden md:flex w-full h-1 -z-10 absolute top-8 bg-black"></div>
          <div className=" flex flex-col justify-center items-center  ">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full  bg-red-600">
              {" "}
            </div>
            <h1 className="text-2xl font-extrabold">Day 1</h1>
            <p className="text-lg w-3/4 text-center ">
              Arrival in Bardiya Familiarize with Hosts
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full  bg-red-600">
              {" "}
            </div>
            <h1 className="text-2xl font-extrabold">Day 2</h1>
            <p className="text-lg w-3/4 text-center">
              Jeep Safari Bardia National Park
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full  bg-red-600">
              {" "}
            </div>
            <h1 className="text-2xl font-extrabold">Day 3</h1>
            <p className="text-lg w-3/4 text-center">
              Explore the jungle of Bardia
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full  bg-red-600">
              {" "}
            </div>
            <h1 className="text-2xl font-extrabold">Day 4</h1>
            <p className="text-lg w-3/4 text-center">
              Village Exploration & Cultural Display
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full  bg-red-600">
              {" "}
            </div>
            <h1 className="text-2xl font-extrabold">Day 5</h1>
            <p className="text-lg w-3/4 text-center">
              Experience Tharu Traditions and Cultures
            </p>
          </div>
        </div>
      </div>
      {/* include and extend */}
      <div className="include_exclude flex justify-center md:justify-between md:w-5/6 mx-auto py-10 bg-gray-100  md:bg-gray-200 rounded-3xl md:shadow-2xl mb-10 md:mb-40 md:py-32 md:px-20">
        <div className="include flex flex-col ml-2">
          <h1 className="  text-4xl md:text-6xl mb-5 font-bold text-red-600">
            What's Included
          </h1>
          <p className="text-xl">Accommodation in Homestays (Full Board)</p>
          <p className="text-xl">Bardia National Park Jeep Safari</p>
          <p className="text-xl">Bird Watching</p>
          <p className="text-xl">Jungle Walk</p>
          <p className="text-xl">Cultural Display</p>
          <p className="text-xl">Traditional Local Foods </p>
          <p className="text-xl">English Speaking Local Guide</p>
          <p className="text-xl">Pick Up/Drop Airport & Homestay</p>
          <p className="text-xl">Required Permits</p>
          <p className="text-xl">Your Satisfaction</p>
        </div>
        <div className="exclude flex flex-col">
          <h1 className="  text-4xl md:text-6xl mr-2 mb-5 font-bold text-red-600">
            What's Excluded
          </h1>
          <p className="text-xl">Travel Insurance</p>
          <p className="text-xl">Personal Expenses</p>
          <p className="text-xl">Personal Equipments</p>
          <p className="text-xl">Your Disatisfaction</p>
        </div>
      </div>
      {/* Explore Bardiya  */}
      <div className="explore_bardiya md:bg-gray-200 py-20 md:py-32">
        <h1 className="  md:px-36 text-4xl px-2 md:text-6xl mb-5 font-bold ">
          Explore Bardiya Through Photos
        </h1>
        <div className="w-full md:px-36 md:py-10">
          <ImageSlider />
        </div>
      </div>
      {/* Location */}
      <div className="location py-20 md:py-32">
        <h1 className=" px-2 md:px-36 text-4xl md:text-6xl mb-5 font-bold ">
          Location
        </h1>
        <div className="w-full md:px-36 md:py-10">
          <Map />
        </div>
      </div>
      {/* Interested In */}
      <div className="interested_in py-24 md:bg-gray-200 ">
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
              <h1 className="text-2xl text-white w-max bg-red-700 px-2 absolute top-32     ">
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

export default PackageDetails;
