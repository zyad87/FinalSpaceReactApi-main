import React from 'react';
import imageLogo from '../assets/imageLogo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar bg-base-300 ">
      <div className="flex-1">
        <div className="flex justify-center items-center text-xl ">
          SHOP 
        </div>
      </div>
      <div className="flex-none mx-4 hover:bg-gray-700 p-3 rounded-lg"></div>
    </div>
  );
}

export default NavBar;
