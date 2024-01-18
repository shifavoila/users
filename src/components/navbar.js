// src/components/Navbar.js
import React from "react";
import react from "../images/react.png";

const Navbar = () => {
  return (
    <nav className="shadow-lg bg-gradient-to-b from-cyan-500 to-cyan-700">
      <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto sm:px-20">
        <div className="text-xl font-semibold text-white">React <span className="text-yellow-400">App</span></div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white">Home</a>
          </li>
          <li>
            <a href="#" className="text-white">About</a>
          </li>
          <li>
            <a href="#" className="text-white">Contact</a>
          </li>
        </ul>
        
      </div>

    </nav>
  );
};

export default Navbar;
