import React from "react";
import HeroImage from "../assets/ProfileImg.png";

function Hero() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white
      "
    >
      <div className="max-w-screen-lg flex flex-col mx-auto justify-between text-center h-full px-4 py-20 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" font-raleway  text-4xl sm:text-6xl font-bold">
            Hey👋, I'm <br />
            Mohit ;)
          </h2>
          <p className="font-raleway text-gray-400 py-4 max-w-md">
            I am a dedicated coder who thrives in dynamic environments, eager to
            learn and contribute to meaningful projects. Committed to
            excellence, I aim to exceed expectations with creativity and
            dedication.
          </p>
          <button className="border-2 rounded-lg px-6 py-3 my-2 mb-8 bg-gradient-to-r from-purple-800 to-pink-500">
            <a
              href="https://drive.google.com/file/d/1apcXjUReJPjYRMh0J4bZ4Nw-FrRW7OgK/view?usp=drivesdk"
              target="_blank"
              download="true"
              rel="noreferrer"
            >
              RESUME
            </a>
          </button>
        </div>

        {/* img section */}
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto -mt-14 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
