import React from "react";
import chitwan from "../assets/Images/chitwan_tour.png";
import nagarkot from "../assets/Images/NagarkotCamping.png";
import pokhara from "../assets/Images/pokhara tour.png";
import jomsom from "../assets/Images/hike_from_jomsom.png";
import safe from "../assets/Images/Safe.png";
import memorable from "../assets/Images/memorable.png";
import authentic from "../assets/Images/Authentic.png";
import impactful from "../assets/Images/Impactful.png";
import chart from "../assets/Images/10_ of total revenue-transparent.png";
import search from "../assets/Graphics/search_ico.svg";

import { Link } from "react-router-dom";
import Footer from "./Footer";

function HomeSection() {
  return (
    <div className="experiences overflow-x-hidden  mx-auto flex-col w-full ">
      {/* popular_experiences_details */}
      <div className="flex flex-col  items-center md:h-screen pt-10 md:pt-36 md:bg-gray-100 ">
        <div className="popular_experiences_header px-8 ">
          <h1 className="text-5xl md:text-6xl font-bold md:w-7/12 ">
            Popular Experiences
          </h1>
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
              <h1 className="text-5xl md:text-6xl font-bold  ">
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
      <div className="why_tripping w-auto md:h-screen pt-40 ">
        <div className="flex flex-col md:flex-row  justify-center  mx-auto  md:w-10/12">
          <div className="md:flex-1 justify-center items-center px-10 md:px-14 w-full">
            <h1 className="text-5xl md:text-6xl font-bold w-max ">
              Why Trippin?
            </h1>
            <img src={safe} className="h-80" alt="why trippin?" />
          </div>
          <div className="flex flex-col items-start px-10 ">
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
      {/* customer reviews */}
      <div className="customer_reviewes w-auto md:h-screen pt-40 md:bg-gray-200 ">
        <div className="flex flex-col justify-center items-center w-full px-10  md:w-7/12 ">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold  ">
              Customer Reviews
            </h1>
            <p className="py-5 text-xl ">
              Serving more than 5600 tourists from all over the world.
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-xl ml-3">4.9 avg rating</p>
            </div>
          </div>
        </div>

        <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
          <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  md:w-9/12 h-full  ">
            <div className="flex flex-col bg-gray-100 mr-5 mt-5  w-full rounded-3xl shadow-xl px-5 py-14 md:-w-23">
              <h1 className="text-3xl text-red-600 ">|Sara & Family</h1>
              <p className="text-xl ">
                We adored our Homestay. The family was so kind, welcoming, and
                knowledgeable about the local area. It was a very fun and
                memorable experience
              </p>
            </div>
            <div className="flex flex-col bg-gray-100 mr-5 mt-5 w-full rounded-3xl shadow-xl px-5 py-14 md:-w-23">
              <h1 className="text-3xl text-red-600 ">|Sara & Family</h1>
              <p className="text-xl ">
                We adored our Homestay. The family was so kind, welcoming, and
                knowledgeable about the local area. It was a very fun and
                memorable experience
              </p>
            </div>
            <div className="flex flex-col bg-gray-100 mr-5 mt-5 w-full rounded-3xl shadow-xl px-5 py-14 md:-w-23">
              <h1 className="text-3xl text-red-600 ">|Sara & Family</h1>
              <p className="text-xl ">
                We adored our Homestay. The family was so kind, welcoming, and
                knowledgeable about the local area. It was a very fun and
                memorable experience
              </p>
            </div>
            <div className="flex flex-col bg-gray-100 mr-5 mt-5 w-full rounded-3xl shadow-xl px-5 py-14 md:-w-23">
              <h1 className="text-3xl text-red-600 ">|Sara & Family</h1>
              <p className="text-xl ">
                We adored our Homestay. The family was so kind, welcoming, and
                knowledgeable about the local area. It was a very fun and
                memorable experience
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our impact */}
      <div className="our_impact  w-auto md:h-screen md:pt-40 ">
        <div className="hidden md:flex flex-col md:flex-row  justify-center  mx-auto  md:w-10/12">
          <div className="md:flex-1 justify-center items-center p-14 md:px-14 w-full">
            <h1 className="text-5xl md:text-6xl font-bold w-full ">
              Our Impact
            </h1>
            <img
              src={chart}
              className="h-2/3 md:h-full object-contain"
              alt="why trippin?"
            />
          </div>
        </div>
      </div>
      {/* what are you waiting */}
      <div className="waiting  w-auto md:h-screen md:pt-40 ">
        <div className="flex flex-col   justify-center items-center  mx-auto  md:w-10/12">
          <div className="md:flex-1 justify-center items-center p-14 md:px-14 w-full md:w-8/12">
            <h1 className="text-4xl md:text-5xl font-bold w-full mb-3 ">
              So what are you waiting for?
            </h1>
            <p className="text-lg">
              Don’t hesitate. We take care of everything, and we will be with
              you throughout your whole journey
            </p>
          </div>
          <div className="flex w-full  items-center justify-center">
            <input
              type="text"
              className="  flex w-7/12 border-2 border-gray-700 px-5 py-3 rounded-full"
              placeholder="Book Homestays, Local Guides, etc."
            />
            <img
              src={search}
              className=" flex h-10 relative md:right-16 cursor-pointer"
              alt="search"
            />
          </div>
          <Link to="/">
            <button className=" bg-red-700 mx-auto mt-6 flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
              Explore Experiences
            </button>
          </Link>
        </div>
      </div>
      {/* stay inspired */}
      <div className="waiting  w-auto md:h-screen md:pt-40 md:bg-gray-200 ">
        <div className="flex flex-col   justify-center items-center  mx-auto  md:w-9/12">
          <div className="md:flex-1 justify-center items-center p-14 md:px-14 w-full md:w-8/12">
            <h1 className="text-4xl md:text-5xl font-bold w-full mb-3 ">
              Stay Inspired All Year Round?
            </h1>
            <p className="text-lg">
              Subscribe to our Newsletter and recieve latest travel news and
              stories
            </p>
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <input
              type="text"
              className="  flex w-7/12 border-2 border-gray-700 px-5 py-3 mb-5 rounded-full"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="  flex w-7/12 border-2 border-gray-700 px-5 py-3 rounded-full"
              placeholder="name@email.com"
            />
          </div>
          <Link to="/">
            <button className=" bg-red-700 mx-auto mt-6 flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomeSection;
