import React from 'react'

const About = () => {
  return (
    <div className="py-4 px-6 bg-black h-screen" id="about">
    <h2 className="text-3xl font-semibold text-center mb-8 text-white">About Me</h2>
  
    <div className="flex flex-col md:flex-row items-center md:space-x-20">
      <div className="w-60 h-80 rounded bg-[url('/Image/Pic.png')] bg-cover bg-no-repeat mb-8 md:mb-0 mx-10"></div>
  
      <div className="max-w-md text-white">
        <p className="text-center md:text-left">
          I'm a student of Software Development. I have different skills in web technologies 
          and I am passionate about creating interactive and responsive web applications.
        </p>
  
      
        <div className="mt-6 space-y-4">
        
          <div className="flex items-center gap-x-4">
            <label htmlFor="html-css" className="w-2/12 text-white">HTML & CSS</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[80%] transform transition-transform duration-300 hover:scale-105 rounded-full"></div>
            </div>
          </div>
  
        
          <div className="flex items-center gap-x-4">
            <label htmlFor="react-js" className="w-2/12 text-white">React & JS</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[50%] transform transition-transform duration-300 hover:scale-105 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-center gap-x-4">
            <label htmlFor="react-Tailwindcss" className="w-2/12 text-white">React & Tailwindcss</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[70%] transform transition-transform duration-300 hover:scale-105 rounded-full"></div>
            </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <label htmlFor='Node.js' className='w-2/12 text-white'>Node.js</label>
              <div className='w-10/12 h-2.5 rounded-full bg-slate-700'>
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[40%] transform transition-transform duration-300 hover:scale-105 rounded-full"></div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  
  
)
}
       
export default About

  

  

 
  