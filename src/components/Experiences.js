import React from "react";
import chitwan from "../assets/Images/chitwan_tour.png";
import nagarkot from "../assets/Images/NagarkotCamping.png";
import pokhara from "../assets/Images/pokhara tour.png";
import jomsom from "../assets/Images/hike_from_jomsom.png";
import safe from "../assets/Images/Safe.png";
import memorable from "../assets/Images/memorable.png";
import authentic from "../assets/Images/Authentic.png";
import impactful from "../assets/Images/Impactful.png";

import { Link } from "react-router-dom";

function Experiences() {
  return (
    <div className="experiences   mx-auto flex-col w-full ">
      {/* popular_experiences_details */}
      <div className="flex flex-col  items-center md:h-screen pt-10 md:pt-36 md:bg-gray-100 ">
        <div className="popular_experiences_header px-8 ">
          <h1 className="text-6xl font-bold md:w-7/12 ">Popular Experiences</h1>
          <p className="py-5 text-xl ">
            Unwind an exciting and memorable community experience led by the
            local community hosts and local guides through Trippin
          </p>
        </div>
        <div className="popular_experiences_details flex flex-col justify-center w-full items-center align-middle  mx-auto ">
          <div className="popular_experiences_images  flex-wrap flex justify-center md:w-9/12 h-full  ">
            <img
              className="w-1/2 md:w-1/4 object-contain "
              src={chitwan}
              alt="Chitwan"
            />
            <img
              className="w-1/2 md:w-1/4 object-contain "
              src={nagarkot}
              alt="nagarkot"
            />
            <img
              className="w-1/2 md:w-1/4 object-contain "
              src={pokhara}
              alt="pokhara"
            />
            <img
              className="w-1/2 md:w-1/4 object-contain "
              src={jomsom}
              alt="jomsom"
            />
          </div>
          <Link to="/">
            <button className=" bg-red-700 mx-auto flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
              View All
            </button>
          </Link>
        </div>
      </div>
      {/* typical_tripping_experiences */}
      <>
        <div className="popular_experiences_header w-auto md:h-screen pt-40 md:bg-gray-200 ">
          <div className="flex flex-col justify-center items-center w-full px-10 md:w-9/12 ">
            <div>
              <h1 className="text-6xl font-bold  ">
                Typical Tripping Experiences
              </h1>
              <p className="py-5 text-xl ">
                So what does a normal tripping experience feels like?
              </p>
            </div>
          </div>

          <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
            <div className="popular_experiences_images  flex-wrap flex justify-center md:w-9/12 h-full  ">
              <div className="flex flex-col justify-center items-center w-1/2 md:w-3/12">
                <img src={safe} alt="safe" />
                <p className="text-2xl font-semibold">Safe</p>
              </div>
              <div className="flex flex-col justify-center items-center w-1/2 md:w-3/12">
                <img src={memorable} alt="memorable" />
                <p className="text-2xl font-semibold">Memorable</p>
              </div>
              <div className="flex flex-col justify-center items-center w-1/2 md:w-3/12">
                <img src={authentic} alt="authentic" />
                <p className="text-2xl font-semibold">Authentic</p>
              </div>

              <div className="flex flex-col justify-center items-center w-1/2 md:w-3/12">
                <img src={impactful} alt="impactful" />
                <p className="text-2xl font-semibold">Impactful</p>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* why tripping */}
      <div className="why_tripping w-auto md:h-screen pt-40 md:bg-gray-200 ">
        <div className="flex flex-col md:flex-row  justify-center  mx-auto  md:w-10/12">
          <div className="md:flex-1 px-10 w-full">
            <h1 className="text-6xl font-bold w-full ">Why Trippin?</h1>
            <div className="flex  -z-10">
              <img src={safe} className="h-80" alt="why trippin?" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <ul className="list-disc w-full p-7 ">
              <li className="text-2xl mb-4  ">
                Easy to plan and Book your trip.
              </li>
              <li className="text-2xl mb-4  ">
                24/7 Remote Accompany throughout your trip.
              </li>
              <li className="text-2xl mb-4  ">Flexible Date and Time</li>
              <li className="text-2xl mb-4  ">
                Authentic and Memorable experience
              </li>
              <li className="text-2xl mb-4  ">Feel True Nepali Culture</li>
              <li className="text-2xl mb-4  ">Contribute to Greater Cause</li>
            </ul>
            <Link to="/">
              <button className=" bg-red-700 mx-auto flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
