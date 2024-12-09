import { useState } from 'react';
import './App.css';
import Contant from "./assets/Components/Contant"


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          My React App
        </a>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <a href="#" className="block md:inline hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block md:inline hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block md:inline hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block md:inline hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Contant/>
    </div>

  );
}

export default App;
