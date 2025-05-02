import React from 'react'


  const Skill = () => {
    return (
      <div className="py-12 px-6 bg-blue-200" id="skills">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <p className="text-center mb-6">I have skills in the following technologies:</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <div
              className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
              style={{ backgroundImage: "url('/Image/html.png')" }}
            ></div>
            <p>HTML</p>
          </div>
  
          <div className="text-center">
            <div
              className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
              style={{ backgroundImage: "url('/Image/css.png')" }}
            ></div>
            <p>CSS</p>
          </div>
  
          <div className="text-center">
            <div
              className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
              style={{ backgroundImage: "url('/Image/js.png')" }}
            ></div>
            <p>JavaScript</p>
          </div>
           <div className='text-center'>
            <div
              className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
              style={{ backgroundImage: "url('/Image/react.webp')" }}
            ></div>
            <p>React</p>
          </div>
  
          <div className="text-center">
            <div 
              className="h-16 w-16 bg-no-repeat bg-contain mx-auto bg-white"
              style={{ backgroundImage: "url('/Image/tailwind.png')" }}
            ></div>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skill;
  