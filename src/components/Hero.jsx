import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex flex-col space-y-10 font-geist">
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-zinc-800 text-4xl md:text-5xl lg:text-6xl">
            LeafLens AI
          </h1>
        </div>

        <div className=" max-w-3xl text-center mx-auto">
          <p className="text-lg text-slate-600">
          Keep your crops healthy and thriving with AI-powered insights. Upload a leaf image for rapid disease detection and receive information to make informed decisions about plant care.
          </p>
        </div>

        <div className="gap-3 flex justify-center">
          <Link
            to={"/analysis"}
            className="bg-zinc-950 hover:bg-zinc-800 cursor-pointer text-white px-5 py-2 rounded-md shadow-md text-md font-semibold hover:scale-110 transition duration-100"
            href="#"
          >
            Try it out
          </Link>
        </div>
      </div>
  );
};

export default Hero;
