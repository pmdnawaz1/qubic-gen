"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import phoneicon from "../../../assets/partnership/phoneicon.png";
import iconMail from "../../../assets/partnership/iconmail.png";
import { Link as ScrollLink } from "react-scroll";


export default function Top() {
  
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  return (
    <div className=" relative sm:mt-10  sm:flex items-center -mt-10 justify-between mx-20 mb-10">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onSetActive={handleSetActive}
            onClick={() => handleScrollTo("home")}
            className={`text-sm hidden sm:flex font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === "home" ? "active" : ""}`}
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
          <div className="hidden sm:flex items-center">
            <Image
              src={phoneicon}
              alt="mobile icon"
              className="bg-customColor  w-12 p-3 rounded-3xl text-customColor"
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
  )
}