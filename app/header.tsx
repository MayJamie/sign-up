import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Logo and site name */}
      <div className="flex items-center">
        <img src="/careersight.png" alt="Careersight Logo" className="h-10 mr-2" /> {/* Adjust height and margin as needed */}
        <div className="text-2xl font-bold">Careersight</div>
      </div>

      {/* Navigation links */}
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 hover:text-purple-500">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-purple-500">CareerSight</a></li>
          <li><a href="#" className="text-gray-800 hover:text-purple-500">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;