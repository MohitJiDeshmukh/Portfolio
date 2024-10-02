import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //Shortcut for multiple link creation & achive D'NotRept
  const links = [
    { id: 1, link: "home" },
    // { id: 2, link: "about" },
    { id: 2, link: "portfolio" },
    { id: 3, link: "experience" },
    { id: 4, link: "contact" },
  ];

  return (
    <div className="flex w-full h-20 px-4 text-white bg-black justify-between items-center fixed">
      <div>
        <h1 className=" font-greatVibes text-5xl ml-2">Mohit</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            keys={id}
            className="font-medium px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 transition-all duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
