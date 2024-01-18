"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion";
import mountain from "../../../public/images/mountain.jpg";
import sea from "../../../public/images/sea.jpg";



export default function Courosel() {

  const [activeIndex, setActiveIndex] = useState(1);
  
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => Math.max(1, prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => Math.min(5, prevIndex + 1));
  };
  
  return (
    <div>
    <div
      id="controls-carousel"
      className=" w-full "
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative mt-5 h-56 sm:mt-0 overflow-hidden rounded-lg md:h-96">
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
        className="absolute top-0 start-0 z-30 hidden  sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        className="absolute hidden top-0 end-0 z-30 sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
  )
}