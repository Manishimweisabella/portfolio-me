import { Link } from "react-router"

const Navbar = () => {
  return (
    
    <div className='flex bg-blue-950 h-10 px-20'>
       <ul className="flex text-white font-bold  space-x-10 px-60  items-center w-full">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About me</Link></li>
  <li><Link to="/skill">Skill</Link></li>
  <li><Link to="/contact">Contact me</Link></li>
</ul>
</div>
  )


}
export default Navbar