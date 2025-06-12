import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white h-96 w-full flex flex-col space-y-4">
      <div className="px-6 text-black mt-10">
        <h2 className="text-3xl font-semibold mt-8 px-10">Contact Me</h2>
        <div className="mt-8 text-sm">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:manishimweisabella@gmail.com" className="underline">
              manishimweisabella@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:0783679835" className="underline">
              0783679835
            </a>
          </p>
          <p>
            <strong>Address:</strong> 123 Example Street, City, Country
          </p>
        </div>
      </div>

<div className="flex space-x-6 text-2xl text-center justify-center">
  <a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-3 rounded-full hover:bg-blue-500 hover:text-white transition"
  >
    <FaGoogle />
  </a>
  <a
    href="https://github.com/manishimweisabella"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-3 rounded-full hover:bg-gray-800 hover:text-white transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.facebook.com/login?email=0789595666&pass=gatsibo"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-3 rounded-full hover:bg-blue-700 hover:text-white transition"
  >
    <FaFacebook />
  </a>
</div>

      </div>
    
  )
}

export default Footer;
