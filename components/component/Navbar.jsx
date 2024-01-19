"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from "../../public/images/logo.png";
import close from "../../assets/partnership/close.svg"
import hamburger from "../../public/images/hamburgerMenu.png"
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeLink, setActiveLink] = useState("");

  let dropdownTimer;

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(dropdownName);
    console.log("mouse entered")
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown("");
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimer);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown("");
    }, 300);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleScrollTo = (link) => {};

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
      <div
        className={`dropdown-content ${isVisible ? "active" : ""} ${isVisible ? "active animate-fadeIn" : ""} m-4 p-4 flex content-center items-center `}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {isVisible && (
          <>
            {name === "insights" && (
              <div className="">
                <p>Extraordinary expertise leads to remarkable results.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}
            {name === "whoweare" && (
              <div>
                <p>Discover our team of experts.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}
            {name === "services" && (
              <div>
                <p>Discover our services.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}
            {name === "consultancy" && (
              <div>
                <p>we are consultancy.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}
            {name === "training" && (
              <div>
                <p>we give training.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}

            {name === "contact" && (
              <div>
                <p>Get in touch with us.</p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  click here
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  return (
    <div>
      <nav className=" sm:mx-auto  bottom-[-60px]  sm:w-3/4 rounded-none sm:rounded-full sm:bg-yellow-500 left-0 right-0 z-10">
        <div className="justify-between sm:flex-row-reverse px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center sm:pt-2  flex-row-reverse sm:flex  justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className="flex justify-end">
              <div 
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={handleMouseLeave}
                        className="sm:hidden md:hidden relative lg:hidden flex items-center mr-16 text-center sm:py-2 text-white"
                      >
                        <Image src={logo} alt="logo"
                        height={50}
                        width={70}
                        />
                      </div>
                      <div
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={handleMouseLeave}
                        className="relative sm:flex bg-customColor px-3 py-2 text-white"
                      >
                        <Link
                          href="/contact"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "contact" ? "active" : ""}`}
                        >
                          Contact Us
                        </Link>
                      </div>
                      

                    </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={hamburger}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl sm:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <div
                        onMouseEnter={() => handleMouseEnter("insights")}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          href="/insights"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "insights" ? "active" : ""}`}
                        >
                          Insights
                        </Link>
                      </div>
                </li>
                <li className="pb-6 text-xl sm:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <div
                        onMouseEnter={() => handleMouseEnter("consultancy")}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          href="/consulting"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "consulting" ? "active" : ""}`}
                        >
                          Consultancy
                        </Link>
                      </div>
                </li>
                <li className="pb-6 text-xl sm:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <div
                        onMouseEnter={() => handleMouseEnter("training")}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          href="/training"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "training" ? "active" : ""}`}
                        >
                          Training
                        </Link>
                      </div>
                </li>
                <li className="pb-6 text-xl sm:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <div
                        onMouseEnter={() => handleMouseEnter("whoweare")}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          href="/whoweare"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "whoweare" ? "active" : ""}`}
                        >
                          Who we are
                        </Link>
                      </div>
                </li>
                <li className="pb-6 text-xl sm:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <div
                        onMouseEnter={() => handleMouseEnter("services")}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          href="/services"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "services" ? "active" : ""}`}
                        >
                          what we do
                        </Link>
                      </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col">
              <div
                className={`dropdown-container ${activeDropdown ? "active" : ""}`}
              >
                {activeDropdown && <DropdownContent name={activeDropdown} />}
              </div>
            </div>
    </div>
  );
}

export default NavBar;
