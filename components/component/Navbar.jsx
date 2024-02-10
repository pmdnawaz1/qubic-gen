"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import close from "../../assets/partnership/close.svg";
import hamburger from "../../public/images/hamburgerMenu.png";

const NavbarItem = ({ title, dropdownItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState({});

  const handleHover = () => {
    setIsHovered(true);
    clearTimeout(timeoutIds[title]);
  };

  const handleLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 100); // 5000 milliseconds (5 seconds)

    setTimeoutIds((prevTimeoutIds) => ({
      ...prevTimeoutIds,
      [title]: id,
    }));
  };

  return (
    <li
      className={`group relative ${isHovered ? "hover" : ""}`} onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <button
        id={`${title.toLowerCase()}DropdownButton`}
        className="pb-6 sm:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none font-medium rounded-lg text-sm inline-flex items-center relative group"
        type="button"
      >
        {title}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id={`${title.toLowerCase()}Dropdown`}
        className={`z-10 ${isHovered ? "block" : "hidden"} bg-[#650e32] divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-0 mt-1`}
      >
        <ul className="py-2 text-sm text-gray-700" aria-labelledby={`${title.toLowerCase()}DropdownButton`}>
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="block px-4 py-2 hover:bg-yellow-500 text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );  
};
function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className={`sm:mx-auto ${navbar ? "bottom-[-60px]" : ""} sm:w-3/4 rounded-none sm:rounded-full sm:bg-yellow-500 left-0 right-0 z-10`}>
        <div className="justify-between sm:flex-row-reverse px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center sm:pt-2  flex-row-reverse sm:flex  justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className="flex justify-end">
                <div className="sm:hidden md:hidden relative lg:hidden flex items-center mr-16 text-center sm:py-2 text-white">
                  <Image src={logo} alt="logo" height={50} width={70} />
                </div>
                <div className="relative sm:flex bg-customColor px-3 py-2 text-white">
                  <Link
                    href="/contact"
                    className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer`}
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
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "md:p-0 block absolute bg-white m-0 w-full z-50" : "hidden"}`}>
              <ul className={`${navbar ? "flex flex-col items-center" : "h-screen md:h-auto items-center justify-center md:flex"} `}>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} href="/"> Home </Link>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} href="/insights"> Insights </Link>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} href="/whoweare"> Who We Are </Link>
                <NavbarItem title="What we do" dropdownItems={[{ label: "Overview", link: "/whatwedo" },{ label: "Learning Programs", link: "/learning" },{ label: "Services", link: "/services" } ]} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col"></div>
    </div>
  );
}

export default NavBar;
