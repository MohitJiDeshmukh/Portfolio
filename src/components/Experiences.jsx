import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import sql from "../assets/sql.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    { id: 6, src: github, title: "GIT & GITHUB", style: "shadow-gray-400" },
    { id: 7, src: sql, title: "MYSQL", style: "shadow-blue-500" },
    { id: 8, src: mongo, title: "MongoDB", style: "shadow-green-500" },
    { id: 9, src: node, title: "NODE MODULES", style: "shadow-green-500" },
  ];

  return (
    <>
      <div
        name="experience"
        className=" mx-auto p-4 flex flex-col justify-center w-full h-full text-white bg-gradient-to-b from-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className=" space-y-3">
            <h2 className="text-4xl font-bold border-b-4 border-purple-600 p-2 inline">
              Experiences
            </h2>

            <p className=" py-6">These are technologies I've worked with</p>
          </div>

          {/* Cards */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
