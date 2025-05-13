import { Link } from "react-router"

const Navbar = () => {
  return (
    
        <div className='bg-black text-white px-8 md:px-16 lg:px-24'>
          <div className="container py-3 flex justify-center md:justify-between items-center">
            <div className="flex justify-start p-4">
        <button className="text-2xl  hidden  font-bold  md:inline text-white">

          <Link to="/">isabella</Link>
          </button>
          </div>
            <ul className="flex space-x-6">
              <li className="hover:text-gray-400"><Link to="/">Home</Link></li>
              <li className="hover:text-gray-400"><Link to="/about">About me</Link></li>
              <li className="hover:text-gray-400"><Link to="/skill">Skill</Link></li>
              <li className="hover:text-gray-400"><Link to="/contact">Contact me</Link></li>
            </ul>
            <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-150 px-4 py-2 rounded-full">
              Contact me
            </button>
          </div>
        </div>
      )
    }
    

    
export default Navbar