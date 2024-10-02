import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 w-full  h-screen"
    >
      <div className="flex flex-col p-4 justify-center mx-auto h-full max-w-screen-lg ">
        <div className="">
          <h2 className="font-bold text-4xl  border-b-4 border-purple-600   inline ">
            Contact
          </h2>

          <p className="py-6 text-xl">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full rounded-lg md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="my-3 p-2 border-2 rounded-lg bg-transparent focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Type your message"
              rows="10"
              className=" my-3  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="border-2 rounded-lg px-6 py-3 my-2 m flex items-center w-fit bg-gradient-to-r from-purple-800 to-pink-500">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
