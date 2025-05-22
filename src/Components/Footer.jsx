import React from 'react'
import { FaYoutube, FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-blue-700 h-96 w-full flex flex-col  space-y-4">
      
     
      <div className="px-6 text-white mt-10">
  <h2 className="text-3xl font-semibold mt-8 px-10">Contact Me</h2>
  <div className="mt-8 text-sm">
    <p>
      <strong>Email:</strong>{' '}
      <a href="mailto:manishimweisabella@gmail.com" className="underline">
        manishimweisabella@gmail.com
      </a>
    </p>
    <p>
      <strong>Phone:</strong>{' '}
      <a href="tel:0793679835" className="underline">
        0793679835
      </a>
    </p>
    <p>
      <strong>Address:</strong> 123 Example Street, City, Country
    </p>
  </div>
</div>


      <div className="flex space-x-6 text-2xl text-center justify-center">
        
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white  p-3 rounded-full hover:bg-red-100 hover:text-red-600 transition"
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
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:bg-blue-200 hover:text-blue-800 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:someone@example.com"
          className="bg-white p-3 rounded-full hover:bg-green-100 hover:text-blue-600 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default Footer;
     
      
      
  



