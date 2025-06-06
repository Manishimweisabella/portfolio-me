

import { FaYoutube, FaGoogle, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-400 h-60 w-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-semibold text-white">Contact me</h2>
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:bg-red-100 hover:text-red-600 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:bg-blue-100 hover:text-blue-500 transition"
        >
          <FaGoogle />
        </a>
        <a
          href="mailto:someone@example.com"
          className="bg-white p-3 rounded-full hover:bg-green-100 hover:text-green-600 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Footer;
