import React from 'react'

const Home = () => {
  return (
    <div className="flex bg-black w-full h-96 items-center px-20" id="home">
    <div className=" mx-auto mb-11 w-48 h-48 rounded-full object-contain transforms transition-transform duration-300  hover:scale-105
     bg-[url('/Image/Pic.png')] bg-cover bg-center bg-no-repeat">
    </div> 
    <div className="ml-10 mt-10">
      <h1 className=" text-blue-500 font-bold text-4xl ">Hello, <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>I'm Manishimwe Isabella</span></h1>
      <p className="mt-4 text-lg text-gray-400">I'm a passionate web developer and 
        designer dedicated to building beautiful and functional digital experiences.</p>
          <p className="mt-2 text-lg text-gray-400">Welcome to my portfolio website</p>
      <p className='font-bold  text-lg text-gray-400'>take a look around and see what I've been working on</p>
      <div className='space-x-6 mt-6'>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-150 px-4 py-2 rounded-full">
  Contact me
</button>
<button className="bg-gradient-to-r from-cyan-400 to-yellow-400 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-150 px-4 py-2 rounded-full">
  Resume
</button>
</div>
 </div>
 </div>
  )
}
export default Home