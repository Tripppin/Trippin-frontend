import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Graphics/Trippin_Main_Logo.svg";
import fb from "../assets/Graphics/fb_ico.svg";
import insta from "../assets/Graphics/insta_ico.svg";
import twitter from "../assets/Graphics/twiiter_ico.svg";
import search from "../assets/Graphics/search_ico.svg";

function Footer() {
  return (
    <>
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
          <Link to="/experiences">
            <button className=" bg-red-700 mx-auto mt-6 flex w-max font-bold border-2 border-red-700 hover:bg-white hover:text-red-700 text-white px-6 text-2xl py-3 rounded-3xl">
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
            <button className=" bg-red-700 font-bold border-2 border-red-700 hover:bg-white hover:text-red-700 mx-auto mt-6 mb-6 flex w-max text-white px-6 text-2xl py-3 rounded-3xl">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
      <div className="footer flex overflow-x-hidden flex-col md:flex-row py-10 justify-around p-5 items-center border-t-2 border-gray-200 ">
        <img src={logo} className="h-10 mb-5" alt="footer" />
        <div className="footer-middle flex flex-row ">
          <div className="w-9/12 ">
            <h1 className="text-2xl font-bold px-2">Site</h1>
            <div className="footer-middle-link flex flex-col ml-2">
              <Link to="/about" className="text-md">
                About Us
              </Link>
              <Link to="/experiences" className="text-md">
                Experiences Us
              </Link>
              <Link to="/hire/homestay" className="text-md">
                Hire
              </Link>
              <a
                href="https://www.facebook.com/trippin.np"
                className="text-md"
                target="_blank"
              >
                Join Our Team
              </a>
            </div>
          </div>
          <div className="w-9/12 ml-4">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="footer-middle-link flex flex-col">
              <a href="mailto:info@trippin.com" className="text-md">
                info@trippin.com
              </a>
              <a href="tel:9841414141" className="text-md">
                9841414141
              </a>
            </div>
          </div>
          <div className="w-9/12 ml-4">
            <h1 className="text-2xl font-bold">Doubts?</h1>
            <div className="footer-middle-link">
              <p> Send us mail or call us. We will attend to you.</p>
            </div>
          </div>
        </div>
        <div className="footer-right flex justify-between space-x-4 ">
          <a href="https://www.facebook.com/trippin.np" target="_blank">
            <img src={fb} className="h-12" alt="fb" />
          </a>
          <a href="https://www.facebook.com/trippin.np" target="_blank">
            <img src={insta} className="h-12" alt="insta" />
          </a>
          <a href="https://www.facebook.com/trippin.np" target="_blank">
            <img src={twitter} className="h-12" alt="twitter" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
