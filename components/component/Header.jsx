"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import "./Header.css";
import phoneicon from "../../assets/partnership/phoneicon.png";
import iconMail from "../../assets/partnership/iconmail.png";

import mountain from "../../public/images/mountain.jpg";
import sea from "../../public/images/sea.jpg";

import { motion } from "framer-motion";

const HeaderWithDropdown = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeLink, setActiveLink] = useState("");

  let dropdownTimer;

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(dropdownName);
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
      {isMobile ? (
        <div className="mobile-header">
          <div className="mobile-carousel">{/* Carousel code here */}</div>

          {/* Third Line (Reliable, Experienced, etc. Boxes) */}
          <div className="mobile-reliability">
            {/* Reliable, Experienced, etc. boxes code here */}
            {/* ... */}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mt-10 justify-between mx-20 mb-10">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onSetActive={handleSetActive}
              onClick={() => handleScrollTo("home")}
              className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "home" ? "active" : ""}`}
            >
              <Image
                src={logo}
                width={120}
                height={32}
                alt="Logo"
                className="m-2"
              />
            </ScrollLink>
            {/* contact div */}
            <div className="flex items-center">
              <Image
                src={phoneicon}
                alt="mobile icon"
                className="bg-customColor w-12 p-3 rounded-3xl text-customColor"
              />
              <div className="ml-4 mr-2">
                {/* <Image src="/path/to/phone-icon.png" alt="Phone Icon" width={20} height={20} /> */}
                <p className="text-sm">Contact Number</p>
                <p className="font-bold ">+91 123456789</p>
              </div>
              <Image
                src={iconMail}
                alt="Mail icon"
                className="bg-customColor w-12 p-3 rounded-3xl text-customColor"
              />
              <div className="ml-2">
                {/* <Image src="/path/to/email-icon.png" alt="Email Icon" width={20} height={20} /> */}
                <p className="text-sm">Email Address</p>
                <p className="font-bold">0rjZa@example.com</p>
              </div>
            </div>
          </div>
          <div className="header-wrapper absolute z-20 w-full">
            <div className="flex items-center relative top-[-20px] justify-between w-4/5 mx-auto">
              <div className="bg-yellow-500 rounded-full px-4 py-2 w-4/5 mx-auto">
                <nav className=" sm:gap-6 ">
                  <div className="flex justify-between mx-4 items-center">
                    <div className="flex gap-6 ">
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
                    </div>

                    <div className="flex justify-end">
                      <div
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={handleMouseLeave}
                        className="relative bg-customColor px-3 py-2 text-white"
                      >
                        <Link
                          href="/contact"
                          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "contact" ? "active" : ""}`}
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`dropdown-container ${activeDropdown ? "active" : ""}`}
              >
                {activeDropdown && <DropdownContent name={activeDropdown} />}
              </div>
            </div>
          </div>
          {/* carsouel */}
          <div>
            <div
              id="controls-carousel"
              className=" w-full"
              data-carousel="static"
            >
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`animate duration-700 ease-in-out ${index === activeIndex ? "" : "hidden"}`}
                    data-carousel-item={index === activeIndex ? "active" : ""}
                  >
                    <Image
                      src={index % 2 === 0 ? sea : mountain}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt={`Carousel Item ${index}`}
                      width={600}
                      height={400}
                      style={{ filter: "brightness(0.6)" }}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                      <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl font-bold mb-4"
                      >
                        Where innovation meets compliance
                      </motion.h4>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-[#650e32] text-white px-3 py-2"
                      >
                        Read more
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Slider controls */}
              <button
                type="button"
                onClick={handlePrevClick}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                onClick={handleNextClick}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

                    <div className="relative top-[-100px] firstcard">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-4 py-8"
            >
              <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 lg:space-x-8 xl:space-x-10 md:px-10 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
                >
                  <div className="text-center md:text-left">
                    <BaselineIcon className="h-6 w-6" />
                    <h3 className="font-bold">Reliable</h3>
                    <p>Reliable to be the voice of your business for the digital future.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
                >
                  <div className="text-center md:text-left">
                    <XIcon className="h-6 w-6" />
                    <h3 className="font-bold">Experienced</h3>
                    <p>Experienced in-house team with an agile mindset.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
                >
                  <div className="text-center md:text-left">
                    <CheckIcon className="h-6 w-6" />
                    <h3 className="font-bold">Compliance</h3>
                    <p>Compliance to enable digital transformation with ease.</p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>

        </div>
      )}
      {/* Rest of your component code... */}
    </div>
  );
};
function BaselineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
export default HeaderWithDropdown;
