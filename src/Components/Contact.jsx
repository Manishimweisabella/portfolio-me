import React from 'react'
import { FaCity } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="py-12 px-6 bg-black min-h-[24rem]" id="contact">
      <h2 className="text-3xl text-white font-semibold text-center mb-8 hover:text-gray-500">
        Contact Me
      </h2>
    <div className='mt-4'> 
      <FaCity><span>street,city,country</span></FaCity> </div>
      <div className="max-w-md mx-auto p-6 rounded-xl shadow-md space-y-4 bg-gray-900">
        <form className="space-y-4">
          <div className="flex flex-col text-left">
            <label className="mb-1 font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className=" border-gray-600 text-white">Message</label>
            <textarea
              placeholder="Enter your message"
              className="bg-gray-800 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="mb-1 font-medium text-white">Telephone</label>
            <input
              type="tel"
              placeholder="Enter your telephone"
              className="bg-slate-800 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  )
}


export default Contact