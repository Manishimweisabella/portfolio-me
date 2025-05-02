import React from 'react'

const Home = () => {
  return (
    <div className="flex bg-blue-200 w-full h-96 items-center px-20" id="home">
    <div className="w-20 h-20 bg-[url('/Image/Pic.png')] bg-cover bg-center bg-no-repeat rounded-full">
    </div> 
    <div className="ml-10 mt-10">
      <h1 className="text-2xl font-bold">Hello, <span>I'm Manishimwe Isabella</span></h1>
      <p className="mt-4 text-lg">I'm a passionate web developer and 
        designer dedicated to building beautiful and functional digital experiences.</p>
          <p> take a look around and see what I've been working on</p>
      <p className="mt-2 text-lg">Welcome to my portfolio website</p>
    </div>
  </div>
  )
}
export default Home