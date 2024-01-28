import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import phoneicon from "../../../assets/partnership/phoneicon.png";
import iconMail from "../../../assets/partnership/iconmail.png";
import Link from "next/link";

export default function Top() {
  return (
    <div className=" relative sm:mt-10  sm:flex items-center -mt-10 justify-between mx-12 mb-10">
      <Link
        href="/"
        className={`text-sm hidden sm:flex font-medium hover:underline underline-offset-4 cursor-pointer`}
      >
        <Image src={logo} width={120} height={32} alt="Logo" className="m-2" />
      </Link>
      {/* <div className="text-base hover:underline cursor-pointer">
        Qubic Gen is a leading software development and training firm based in Anantapur, AP, India.
      </div> */}
      {/* contact div */}
      <div className="hidden sm:flex items-center">
        <Image
          src={phoneicon}
          alt="mobile icon"
          className="bg-customColor  w-12 p-3 rounded-3xl text-customColor"
        />
        <div className="ml-4 mr-2">
          <p className="text-sm">Contact Number</p>
          <p className="font-bold ">+91 123456789</p>
        </div>
        <Image
          src={iconMail}
          alt="Mail icon"
          className="bg-customColor w-12 p-3 rounded-3xl text-customColor"
        />
        <div className="ml-2">
          <p className="text-sm">Email Address</p>
          <p className="font-bold">0rjZa@example.com</p>
        </div>
      </div>
    </div>
  );
}
