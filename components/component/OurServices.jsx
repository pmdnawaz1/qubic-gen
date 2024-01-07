"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import Image from "next/image"
import RPA from "../../public/images/RPA.jpg"
import sql from "../../public/images/sql.jpg"
import UI from "../../public/images/UI.jpg"
import Net from "../../public/images/Net.jpg"
import './OurServices.css'


export default function Component() {
  const [isHovered, setIsHovered] = useState(Array(4).fill(false));

  const images = [
    {
      src: RPA,
      alt: "RPA",
      title: "RPA",
    },
    {
      src: sql,
      alt: "sql",
      title: "SQL",
    },
    {
      src: UI,
      alt: "UI",
      title: "UI",
    },
    {
      src: Net,
      alt: "Net",
      title: "Net",
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
    <div className="bg-black text-white">
      <div className="py-8 px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Discover the Qubic Gen Expertise</h2>
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
                }}
                width="600"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black p-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <Button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Read More
</span>
</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
