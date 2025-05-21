import React from 'react'
const Skill = () => {
  return (
    <div className="py-12 px-6 bg-black text-white" id="skills">
      <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
      <p className="text-center mb-6">I have skills in the following technologies:</p>
      <div className="flex flex-wrap justify-center gap-10">

        <div className="border border-blue-500 rounded text-center w-44 font-bold">
          <div
            className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
            style={{ backgroundImage: "url('/Image/html.png')" }}
          ></div>
          <p className="mt-2">HTML</p>
        </div>

        <div className="border border-blue-500 rounded text-center w-44 font-bold">
          <div
            className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
            style={{ backgroundImage: "url('/Image/css.png')" }}
          ></div>
          <p className="mt-2">CSS</p>
        </div>

        <div className="border border-blue-500 rounded text-center w-44 font-bold">
          <div
            className="h-16 w-16 bg-no-repeat bg-contain mx-auto"
            style={{ backgroundImage: "url('/Image/js.png')" }}
          ></div>
          <p className="mt-2">JavaScript</p>
        </div>

        <div className="border border-blue-500 rounded text-center w-44 font-bold">
          <div
            className=""
            style={{ backgroundImage: "url('/Image/react.png')"}}
          ></div>
          <p className="mt-2">React</p>
        </div>
      <div>
        
      </div>
      </div>
    </div>
  )
}

export default Skill;



             


  
  