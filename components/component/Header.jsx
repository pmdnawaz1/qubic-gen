"use client";
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link  from "next/link"
import logo from "../../public/images/logo.png"
import Image from 'next/image';
import './Header.css'

// import { useState } from 'react';
// import Image from 'next/image';
import mountain from '../../public/images/mountain.jpg';
import sea from '../../public/images/sea.jpg';

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

  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => Math.max(1, prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => Math.min(5, prevIndex + 1));
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
    <div>
<div className='flex items-center justify-between mx-20 mb-10'>
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
{/* contact div */}
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
    <div className="header-wrapper absolute z-20 w-full">

     <div className="flex items-center relative top-[-20px] justify-between w-4/5 mx-auto">
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
</div>

<div className='flex flex-col'>
      <div className={`dropdown-container ${activeDropdown ? 'active' : ''}`}>
        {activeDropdown && <DropdownContent name={activeDropdown} />}
      </div>
      </div>
  
      
    </div>
    {/* carsouel */}
    <div >
      <div id="controls-carousel" className=" w-full" data-carousel="static">
    {/* Carousel wrapper */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className={`animate duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`} data-carousel-item={index === activeIndex ? 'active' : ''}>
          <Image
            src={index % 2 === 0 ? sea : mountain}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={`Carousel Item ${index}`}
            width={600}
            height={400}
            style= {{filter: "brightness(0.6)"}}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h4 className="text-3xl font-bold mb-4">Where innovation meets compilance</h4>
              <button className="bg-[#650e32] text-white px-3 py-2 ">Read more</button>
            </div>
        </div>
      ))}
    </div>
      {/* Slider controls */}
      <button type="button" onClick={handlePrevClick} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" onClick={handleNextClick} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    </div>
    </div>
  );
  
  
};

export default HeaderWithDropdown;