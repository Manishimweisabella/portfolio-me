import React from 'react'

const About = () => {
  return (
    <div className="py-4 px-6 bg-black h-screen " id="about">
    <h2 className="text-3xl font-semibold text-center mb-8 text-white">About Me</h2>
    <div className="flex flex-col md:flex-row items-center md:space-x-20">
      
     
      <div className="w-60 h-80 rounded bg-[url('/Image/Pic.png')] bg-cover bg-no-repeat mb-8 md:mb-0 mx-10"/>
     <div className="max-w-md">
        <p className="text-center md:text-left text-white">
          I'm a student of Software Development. I have different skills in web technologies 
          and I am passionate about creating interactive and responsive web applications.
        </p>
      </div>
      
    </div>
  </div>
  

  

 
  
  )  
}

export default About