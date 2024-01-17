"use client"
// import { button } from "@/components/ui/button"
import { useState } from 'react';
import Image from "next/image"
import RPA from "../../public/images/RPA.jpg"
import sql from "../../public/images/sql.jpg"
import UI from "../../public/images/UI.jpg"
import Net from "../../public/images/Net.jpg"
import './OurServices.css'
import img2 from "../../assets/partnership/img2.png"
import img3 from "../../assets/partnership/img3.png"
import img4 from "../../assets/partnership/img4.png"
import img5 from "../../assets/partnership/img5.png"
import img from "../../assets/partnership/img5.png"
import img1 from "../../assets/partnership/img5.png"

export default function Component() {
  const [isHovered, setIsHovered] = useState(Array(4).fill(false));

  const images = [
    {
      src: img2,
      alt: "RPA",
      title: "Cloud Accerleration",
    },
    {
      src: img3,
      alt: "sql",
      title: "Data Modernization",
    },
    {
      src: img4,
      alt: "UI",
      title: "Automation & Optimization",
    },
    {
      src: img5,
      alt: "Net",
      title: "Digital Transformation",
    },
    {
      src: img1,
      alt: "Net",
      title: "Quality Analysis & Testing",
    },
    {
      src: img,
      alt: "Net",
      title: "Enterprise Application Integration",
    }
  ]

  const handleMouseEnter = (index) => {
    setIsHovered((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
  };

  return (
    <div className=" text-white mt-10 ">
      <div className="py-8  px-4 lg:px-8">
        <h2 className="text-3xl text-black font-bold mb-6">Discover the Qubic Gen Expertise</h2>
         <div className="h-2 w-24 bg-[#FFD700] mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${isHovered[index] ? "zoom-out" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                alt={image.alt}
                className="w-full h-auto"
                height="400"
                src={image.src}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                  filter: "brightness(0.4)",
                }}
                width="600"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-transperent p-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <button className="m-4 border-2 w-32 h-8 border-yellow-500 ">
                
                Know More
               
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
