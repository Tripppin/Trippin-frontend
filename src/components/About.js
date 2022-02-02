import React from "react";
import { Link } from "react-router-dom";
import trippin from "../assets/Images/whats_trippin.jpg";
import lakhe from "../assets/Images/lakhe.jpg";
import chart from "../assets/Images/10_ of total revenue-transparent.png";
import search from "../assets/Graphics/search_ico.svg";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="max-w-full overflow-x-hidden h-screen bg-about-hero-pattern bg-cover bg-no-repeat">
        <div className="py-32 px-3 md:py-64 md:px-36">
          <h1 className="w-full md:w-6/12  text-4xl  md:text-7xl mb-5 font-bold text-white">
            More than just a Travel Platform
          </h1>
          <p className="text-xl mb-5 md:w-8/12 text-white">
            Trippin is a family bond connecting travelers with local hosts for
            an authentic experience of Nepal, while leaving a positive impact on
            the community.
          </p>
          <Link to="/experiences">
            <button className=" bg-red-700 text-white px-3 md:px-8 text-lg md:text-xl py-3 rounded-3xl">
              GET TO KNOW THE EXPERIENCES
            </button>
          </Link>
        </div>
      </div>

      {/* what is Trippin */}
      <div className="tipping_section py-36 px-2 flex flex-col md:flex-row md:px-36">
        <div className="section_left">
          <h1 className=" md:w-6/12  text-5xl md:text-6xl mb-5 font-bold ">
            What is <span className="text-red-600">Trippin</span>?
          </h1>
          <p className="text-xl mb-5 w-11/12">
            Trippin is a social enterprise that provides travelers a one stop
            solution to access authentic local experiences with community hosts
            willing to share the natural paradises of their land. Trippin
            conserves Nepal’s cultural and natural heritage by helping its
            protectors generate a sustainable income through regenerativee
            tourism. Trippin provides accommodations, homestays with local home
            cooked foods and for traveling, local guides. Taking through the
            lifestyles of local people Trippin provides an immersive view into
            the real Nepali culture. Trippin experience would include all kinds
            of amenities like travel, guides, accommodation, food and safety.
            For independent travelers, Trippin would provide an online platform
            where they can easily only book the things they need, for example,
            only accommodation (homestays), only guides, only transportation.
            For individual hosts, Trippin would also allow you to list your own
            home as a place to host tourists and allows local guides to share
            their services through us.
          </p>
        </div>
        <img
          src={trippin}
          className="object-contain h-96 rounded-3xl "
          alt="memorable"
        />
      </div>
      {/* Experience */}
      <div className="tipping_section2 py-36 px-2 flex flex-col md:flex-row md:px-36 md:bg-gray-200">
        <div className="section_left">
          <h1 className=" md:w-6/12  text-5xl md:text-6xl mb-5 font-bold ">
            Experience
          </h1>
          <p className="text-xl mb-5 w-11/12">
            Traveling with Trippin lets you to know places and connect with
            people, it allows you to discover Nepal and its culture through the
            eyes of its people.We believe a trip is all about the experience and
            feel rather than just sightseeing. Trippin offers the possibility to
            experience unique tourist attractions and explore amazing
            destinations immersed in the natural paradises of the country in
            journeys out of the ordinary. In addition to enjoying an authentic
            and transformative experience, when you travel with us you
            contribute to transform tourism into a fair and sustainable
            activity. Our great mission is to regenerate nature and culture
            through socially inclusive and economically just tourism.
            Additionally, our focus includes the betterment of the local
            communities and empowerment of local people.
          </p>
        </div>
        <img
          src={lakhe}
          className="object-contain h-96 rounded-3xl"
          alt="lakhe"
        />
      </div>
      {/* stories */}
      <div className="tripping_section3 py-36 px-5 flex md:px-36">
        <div className="popular_experiences_details flex flex-col justify-center w-full items-center mx-auto ">
          <div className="popular_experiences_images mx-auto p-2 flex-wrap flex justify-center  h-full  ">
            <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-tharu-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl shadow-xl px-5 py-14 items-center md:w-3/12">
              {/* <img src={tharu} className="" alt="tharu" /> */}
              <h1 className="text-3xl text-red-600 mt-36 text-center ">
                Tharu Community
              </h1>
              <p className="text-xl text-center ">
                “For us it has been very important to be able to receive
                visitors because thanks to them, sources of employment are
                generated and the development of the tourist attractions is
                detonated. It is also a great opportunity for people to live
                together, to share and to learn about other visions.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-bardiya-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl shadow-xl px-5 py-14 items-center md:w-3/12">
              {/* <img src={tharu} className="" alt="tharu" /> */}
              <h1 className="text-3xl text-red-600 mt-36 md:mt-24 text-center ">
                Bardiya Community
              </h1>
              <p className="text-xl text-center ">
                “Thanks to Trippin, lot more tourists know about us and are
                visting frequenty. It has made us easier to make a sustainable
                income through hosting the tourists. Additionally, their help in
                empowering the community makes us really ecstatic.”
              </p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 mr-5 mt-5 bg-sherpas-hero-pattern bg-top bg-contain bg-no-repeat w-full rounded-3xl shadow-xl px-5 py-14 items-center md:w-3/12">
              {/* <img src={tharu} className="" alt="tharu" /> */}
              <h1 className="text-3xl text-red-600 mt-20 md:mt-16 text-center ">
                Sherpa Community
              </h1>
              <p className="text-xl text-center ">
                “Everything has seemed very good to us, the information is
                complete, it is very practical, the dissemination that is done
                in social networks has pleased us. As a group they are a good
                alliance to work with.”
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our impact */}
      <div className="our_impact  w-auto md:h-screen md:bg-gray-200 ">
        <div className="hidden md:flex flex-col md:flex-row  justify-center  mx-auto  md:w-10/12">
          <div className="md:flex-1 justify-center items-center p-14 md:px-14 w-full">
            <h1 className="text-5xl md:text-6xl font-bold w-full ">
              <span className="text-red-600">Our Impact</span> on the
              Communities
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
    </>
  );
}

export default About;
