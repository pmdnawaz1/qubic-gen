"use client";
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link  from "next/link"
import logo from "../../public/images/logo.png"
import Image from 'next/image';
import './Header.css'

const HeaderWithDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeLink, setActiveLink] = useState('');

  let dropdownTimer; 

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(dropdownTimer); 
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown('');
    }, 300); 
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimer); 
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown('');
    }, 300); 
  };


  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleScrollTo = (link) => {
   
  };

  const DropdownContent = ({ name }) => {
    const isVisible = activeDropdown === name;
  
    return (
      <div className={`dropdown-content ${isVisible ? 'active' : ''} ${isVisible ? 'active animate-fadeIn' : ''} m-4 p-4 flex content-center items-center ` } onMouseEnter={handleDropdownMouseEnter}       onMouseLeave={handleDropdownMouseLeave}>
        {isVisible && (
          <>
            {name === 'insights' && (
              <div className=''>
                <p>Extraordinary expertise leads to remarkable results.</p>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">click here</button>
              </div>
            )}
            {name === 'whoweare' && (
              <div>
                <p>Discover our team of experts.</p>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">click here</button>
              </div>
            )}
            {name === 'services' && (
              <div>
                <p>Discover our services.</p>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">click here</button>
              </div>
            )}
            {name === 'contact' && (
              <div>
                <p>Get in touch with us.</p>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">click here</button>
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  
  return (
    <div className="header-wrapper ">
     <div className="flex items-center justify-between w-4/5 mx-auto">
  <ScrollLink
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={800}
    onSetActive={handleSetActive}
    onClick={() => handleScrollTo('home')}
    className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'home' ? 'active' : ''}`}
  >
    <Image src={logo} width={120} height={32} alt="Logo" className="m-2" />
  </ScrollLink>

  <div className="flex items-center">
    <div className="ml-4">
    {/* <Image src="/path/to/phone-icon.png" alt="Phone Icon" width={20} height={20} /> */}
      <p>Contact Number</p>
      <p>+91 123456789</p>
    </div>

    <div className="ml-2">
    {/* <Image src="/path/to/email-icon.png" alt="Email Icon" width={20} height={20} /> */}
      <p>Email Address</p>
      <p>0rjZa@example.com</p>
    </div>
  </div>
</div>

      <div className='bg-yellow-500 rounded-full px-4 py-2 w-4/5 mx-auto'>
      <nav className="flex justify-center gap-4 sm:gap-6 ">
        <div
          onMouseEnter={() => handleMouseEnter('insights')}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link  href="/insights"
      className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'insights' ? 'active' : ''}`}
    >
      Insights
    </Link>
        </div>
  
        <div
          onMouseEnter={() => handleMouseEnter('whoweare')}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link  href="/whoweare"
      className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'whoweare' ? 'active' : ''}`}
    >
      Who we are
    </Link>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
         <Link  href="/services"
      className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'services' ? 'active' : ''}`}
    >
      Services
    </Link>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link  href="/contact"
      className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'contact' ? 'active' : ''}`}
    >
      Contact Us
    </Link>
        </div>

        
      </nav>
      </div>

      <div className={`dropdown-container ${activeDropdown ? 'active' : ''}`}>
        {activeDropdown && <DropdownContent name={activeDropdown} />}
      </div>
  
      
    </div>
  );
  
  
};

export default HeaderWithDropdown;