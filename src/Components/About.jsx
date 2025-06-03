import React from 'react'

const About = () => {
  return (
    <div className="py-4 px-6 bg-black h-auto" id="about">
    <h2 className="text-3xl font-semibold text-center mb-8 text-white">About Me</h2>
  
    <div className="flex flex-col md:flex-row items-center md:space-x-20">
      <div className="w-40 h-52 rounded bg-[url('/Image/Pic.png')] bg-cover bg-no-repeat mb-8 md:mb-0 mx-10"></div>
  
      <div className="max-w-md text-white">
        <p className="text-center md:text-left mb-6">
          I'm a student of Software Development. I have different skills in web technologies 
          and I am passionate about creating interactive and responsive web applications.
        </p>
  
        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <label className="w-2/12 text-white">HTML & CSS</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[80%] rounded-full transition-transform duration-300 hover:scale-105"></div>
            </div>
          </div>
  
          <div className="flex items-center gap-x-4">
            <label className="w-2/12 text-white">React & JS</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[90%] rounded-full transition-transform duration-300 hover:scale-105"></div>
            </div>
          </div>
  
          <div className="flex items-center gap-x-4">
            <label className="w-2/12 text-white">Tailwind CSS</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[70%] rounded-full transition-transform duration-300 hover:scale-105"></div>
            </div>
          </div>
  
          <div className="flex items-center gap-x-4">
            <label className="w-2/12 text-white">Node.js</label>
            <div className="w-10/12 h-2.5 rounded-full bg-gray-700">
              <div className="h-2.5 bg-gradient-to-r from-green-400 to-blue-500 w-[40%] rounded-full transition-transform duration-300 hover:scale-105"></div>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4 mt-6 flex-wrap">
  <div className="bg-gray-800 p-4 rounded flex-1 min-w-[250px]">
    <h3 className="text-xl font-semibold text-blue-400">Web Developer</h3>
    <p className="text-sm text-gray-300">
      I build and maintain websites using modern technologies to ensure fast performance and great user experience.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded flex-1 min-w-[250px]">
    <h3 className="text-xl font-semibold text-blue-400">Frontend Developer</h3>
    <p className="text-sm text-gray-300">
      I specialize in crafting interfaces with HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded flex-1 min-w-[250px]">
    <h3 className="text-xl font-semibold text-blue-400">Web Designer</h3>
    <p className="text-sm text-gray-300">
      I design clean and intuitive layouts with a focus on user experience and visual aesthetics.
    </p>
  </div>
</div>
</div>
</div>
</div>
  
    

  
    
  )
}

export default About;

  

  

 
  