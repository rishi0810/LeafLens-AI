import React from "react";
import pfp from "../assets/pfp.jpg"
import gsvg from "../assets/github-142-svgrepo-com.svg"
import lsvg from "../assets/linkedin-svgrepo-com.svg"
const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-10 font-geist">
      <h1 className="text-3xl font-bold mb-10">About Me</h1>
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img
            className="shrink-0 w-[72px] h-[72px] rounded-full"
            src={pfp}
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <h1 className="text-[24px] font-semibold text-zinc-800">Rishi Raj</h1>
          <p className="text-[20px] text-zinc-600">
            Web Developer && College Student
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[16px] text-gray-600">
          I am a learning developer aiming to create appealing and user-centric
          web designs and backend logic. My interest spans across UI design,
          system design, and backend logic flow including request handling, rest
          API and database manipulation. I aim to work in a professional
          infrastructure alongside an organisation to bring their digital
          visions to life.
        </p>

        <p className="mt-3 text-[16px] text-gray-600">
          Currently, I build projects and develop my skills, where I design
          template UIs, convert them into React and Express logical schemas, and
          provide a good experience to users. I am passionate about crafting
          functional and logically-sound designs that enhance user experiences.
        </p>

        <ul className="mt-8 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <img src={lsvg} alt="LinkedInLogo" className="size-3.5" />
            <a
              className="text-[16px] text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-hidden focus:decoration-2"
              href="https://www.linkedin.com/in/rishiraj2003/"
            >
              @rishiraj2003
            </a>
          </li>

          <li className="flex items-center gap-x-2.5">
            <img src={gsvg} alt="GithubLogo" className="size-3.5" />            
            <a
              className="text-[16px] text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-hidden focus:decoration-2"
              href="https://github.com/rishi0810"
            >
              @rishi0810
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
