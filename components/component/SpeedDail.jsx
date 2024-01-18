'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../app/globals.css';

const SpeedDial = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div data-dial-init className="fixed bottom-6 right-6 group z-50">
      <div
        id="speed-dial-menu-default"
        className={`flex flex-col items-center ${
          isMenuOpen ? '' : 'hidden'
        } space-y-2`}
      >
        <Link href="/contact" className="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            data-tooltip-target="tooltip-contact"
            data-tooltip-placement="left">
        
           
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >

            </svg>
        </Link>
      </div>
      <button
        type="button"
        onClick={handleToggleMenu}
        className="flex items-center justify-center text-white bg-[#650e32] rounded-full w-14 h-14 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 focus:outline-none"
        aria-controls="speed-dial-menu-default"
        aria-expanded={isMenuOpen}
      >
        {/* Menu Toggle Icon */}
        {isMenuOpen ? (
          <svg
            className="w-6 h-6 transition-transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SpeedDial;
