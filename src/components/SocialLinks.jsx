import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/contact-mohit-deshmukh",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohitJiDeshmukh",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mohitdeshmukh2025@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Phone <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "tel:7223976406",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="flex flex-col  top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            id={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              target="_blank"
              download={download}
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
