import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import withPageTransitions from "./withPageTransitions";

emailjs.init("QXH-ZNI5yK9ppXX6W");

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    setEmailStatus("sending");

    emailjs
      .sendForm(
        "service_c3ykmr4",
        "template_d2s1obw",
        e.target,
        "QXH-ZNI5yK9ppXX6W"
      )
      .then(
        (result) => {
          setEmailStatus("success");
        },
        (error) => {
          setEmailStatus("failed");
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-start min-h-screen m-12 sm:px-0">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center sm:text-3xl">
          Contact
        </h1>
        {emailStatus === "success" && (
          <div className="text-center text-green-500 mb-4">
            Email successfully sent!
          </div>
        )}
        {emailStatus === "failed" && (
          <div className="text-center text-red-500 mb-4">
            Failed to send email. Please try again.
          </div>
        )}
        <form
          className="bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col space-y-4"
          onSubmit={sendEmail}>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="5"
            />
          </div>
          <div className="w-[70%] m-auto">
            <motion.button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}>
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withPageTransitions(Contact);
