import React, { useRef } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',        
      'your_template_id',       
      form.current,
      'your_user_id'            
    )
    .then((result) => {
      alert("Message sent successfully!");
      console.log(result.text);
    }, (error) => {
      alert("Failed to send message.");
      console.log(error.text);
    });

    e.target.reset(); 
  };

  return (
    <div className="bg-white h-auto w-full flex flex-col space-y-4 p-6">
      <div className="text-black">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-4 max-w-md">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="border border-gray-300 p-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-sm mt-6">
        <p><strong>Email:</strong> <a href="mailto:manishimweisabella@gmail.com" className="underline">manishimweisabella@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:0793679835" className="underline">0793679835</a></p>
        <p><strong>Address:</strong> 123 Example Street, City, Country</p>
      </div>

      <div className="flex space-x-6 text-2xl justify-center mt-6">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full hover:bg-blue-500 hover:text-white transition">
          <FaGoogle />
        </a>
        <a href="https://github.com/manishimweisabella" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full hover:bg-gray-800 hover:text-white transition">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full hover:bg-blue-700 hover:text-white transition">
          <FaFacebook />
        </a>
        <a href="mailto:manishimweisabella@gmail.com" className="bg-white p-3 rounded-full hover:bg-red-600 hover:text-white transition">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default Footer;
