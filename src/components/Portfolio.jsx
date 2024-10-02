import React from "react";
import razorpay from "../assets/portfolio/razorpay.png";
import vacation from "../assets/portfolio/Vacation.png";
import course from "../assets/portfolio/course.png";
import gif from "../assets/portfolio/gif.png";
import event from "../assets/portfolio/event.png";
import servihub from "../assets/portfolio/servihub.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Razorpay",
      src: razorpay,
      demo: "https://mohitjideshmukh.github.io/Razorpay/",
      code: "https://github.com/MohitJiDeshmukh/Razorpay",
    },
    {
      id: 2,
      title: "Vacation Planing",
      src: vacation,
      demo: "https://mohitjideshmukh.github.io/Razorpay/",
      code: "https://github.com/MohitJiDeshmukh/Vacation_Planing",
    },
    {
      id: 3,
      title: "Courses",
      src: course,
      demo: "https://mohitjideshmukh.github.io/Courses_Category_Cards/",
      code: "https://github.com/MohitJiDeshmukh/Courses_Category_Cards",
    },
    {
      id: 4,
      title: "Gif Generatore",
      src: gif,
      demo: "https://mohitjideshmukh.github.io/GifGenerator/",
      code: "https://github.com/MohitJiDeshmukh/GifGenerator",
    },
    {
      id: 5,
      title: "Event Planner",
      src: event,
      demo: "https://manthaneventandpromotion.in/",
      code: "https://github.com/MohitJiDeshmukh/EventPlanner",
    },
    {
      id: 6,
      title: "ServiHub",
      src: servihub,
      demo: "https://github.com/MohitJiDeshmukh/ServiHub",
      code: "https://github.com/MohitJiDeshmukh/ServiHub",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center text-white">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-purple-500 inline ">
            Portfolio
          </h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* card */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, title, src, demo, code }) => (
            <div key={id} className="shadow-lg shadow-purple-700 rounded-lg">
              <h3 className="bg-gradient-to-r from-purple-900 to-purple-600  flex justify-center rounded-lg text-2xl p-2">
                {title}
              </h3>
              <img
                src={src}
                alt=""
                className="hover:scale-105 duration-200 rounded-b-lg"
              />

              <div className="flex item-center justify-center  text-lg border-t-2 border-r-2 border-purple-500">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 flex justify-center "
                >
                  <button className="w-full px-6 py-3 duration-200 hover:scale-105 hover:bg-pink-500 rounded">
                    Demo
                  </button>
                </a>

                <div className="border-2  border-purple-500 "></div>

                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 flex justify-center"
                >
                  <button className="w-full px-6 py-3 duration-200 hover:scale-105 hover:bg-pink-500 rounded">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
