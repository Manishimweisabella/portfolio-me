import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div
      className="container mx-auto py-12 px-8 md:px-16 lg:px-24 bg-black h-screen w-full"
      id="contact"
    >
      <h2 className="text-3xl text-white font-semibold text-center mb-11">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 text-white">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Let's Talk</h3>
          <p className="mt-2">
            I'm open to discussing web development opportunities.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <FaEnvelope className="inline-block text-green-400 mr-2"/>
              <span>Email: example@example.com</span>
            </div>
            <div>
            <FaPhoneAlt className='inline-block text-green-400 mr-2'/>
            <span>+250793679835</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md p-6 rounded-xl shadow-md space-y-4 bg-gray-900 w-full">
          <form className="space-y-4">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-slate-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="telephone" className="text-white mb-2">
                Telephone
              </label>
              <input
                type="tel"
                id="telephone"
                placeholder="Enter your telephone"
                className="w-full p-2 bg-slate-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 bg-slate-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="5"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-400 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
