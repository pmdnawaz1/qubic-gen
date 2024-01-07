'use client'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Zoom } from 'react-awesome-reveal';
// import { FaEnvelope } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let data = [
  {
      img : "https://s7ap1.scene7.com/is/image/TCSCOMprod/collaboration-new:Large?wid=1260&hei=768&dpr=off",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  },
  {
      img : "https://s7ap1.scene7.com/is/image/TCSCOMprod/banking-beyond-boundaries-new:Large?wid=1260&hei=768&dpr=off",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  },
  {
      img : "https://s7ap1.scene7.com/is/image/TCSCOMprod/progress-with-purpose-new:Large?wid=1134&hei=691&dpr=off",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  },
  {
      img : "https://s7ap1.scene7.com/is/image/TCSCOMprod/progress-with-purpose-new:Large?wid=1134&hei=691&dpr=off",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  },
  {
      img : "https://s7ap1.scene7.com/is/image/TCSCOMprod/progress-with-purpose-new:Large?wid=1134&hei=691&dpr=off",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  }
];

let settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ],
  beforeChange: (current, next) => {
    const slideElements = document.querySelectorAll('.slick-slide');
    slideElements.forEach((slide, index) => {
      if (index === current) {
        slide.style.filter = 'none';
        slide.classList.add('active');
      } else if (index === next) {
        slide.style.filter = 'blur(4px)';
        slide.classList.remove('active');
      } else {
        slide.style.filter = 'blur(4px)';
        slide.classList.remove('active');
      }
    });
  }
};

const Courosel = () => {
   const arrowRef = useRef(null);

   const sliderRef = useRef(null);
   const [current, setCurrent] = useState(0);

   const handlePrevClick = () => {
     sliderRef.current.slickPrev();
   };
 
   const handleNextClick = () => {
     sliderRef.current.slickNext();
   };

  const sliderProjects = data.map((item, i) => (
    <div key={i} className="project bg-gray-700 rounded cursor-pointer relative overflow-hidden mx-auto" >
      <img src={item.img} alt="project" className="w-full h-full object-cover transition-transform duration-400 ease-in-out" />
      <div className="disc absolute inset-x-0 bottom-[-10rem] text-left p-0 bg-gradient-to-b from-transparent to-black transition-all duration-400 ease-in-out">
        <h1 className="text-lg">Description</h1>
        <p className="w-11/12 text-sm">
          {item.disc}
          <a href="#" className="ml-1 text-red-600">demo</a>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto my-2vh px-4 text-center relative" style={{ height: '30rem', width: '50rem' }}>
    <Zoom>
      <div className="slide relative">
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <Slider ref={sliderRef} {...settings} beforeChange={(current, next) => setCurrent(next)}>
              {sliderProjects}
            </Slider>
            
          </div>
          
        </div>
        <div className="carousel-buttons absolute bottom-2 right-2 flex gap-2">
              <button
                onClick={handlePrevClick}
                className="w-10 h-8 bg-transparent cursor-pointer text-teal-200 border-none"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNextClick}
                className="w-10 h-8 bg-transparent cursor-pointer text-teal-200 border-none"
              >
                <IoIosArrowForward />
              </button>
            </div>
      </div>
    </Zoom>
  </div>
  

  );
};

export default Courosel;