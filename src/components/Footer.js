import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Graphics/Trippin_Main_Logo.svg";
import fb from "../assets/Graphics/fb_ico.svg";
import insta from "../assets/Graphics/insta_ico.svg";
import twitter from "../assets/Graphics/twiiter_ico.svg";

function Footer() {
  return (
    <div className="footer flex overflow-x-hidden flex-col md:flex-row mt-10 mb-10 justify-around p-5 items-center border-t-2 border-gray-200 ">
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
            <Link to="/blog" className="text-md">
              Blog
            </Link>
            <Link to="/join" className="text-md">
              Join Our Team
            </Link>
          </div>
        </div>
        <div className="w-9/12 ml-4">
          <h1 className="text-2xl font-bold">Contact</h1>
          <div className="footer-middle-link flex flex-col">
            <Link to="/about" className="text-md">
              info@trippin.com
            </Link>
            <Link to="/experiences" className="text-md">
              9841414141
            </Link>
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
        <img src={fb} className="h-12" alt="fb" />
        <img src={insta} className="h-12" alt="insta" />
        <img src={twitter} className="h-12" alt="twitter" />
      </div>
    </div>
  );
}

export default Footer;
