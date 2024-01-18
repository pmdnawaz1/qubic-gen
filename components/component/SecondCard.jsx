"use client"
import {useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);

  const [displayText, setDisplayText] = useState('');
  const fullText = "QubicGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, fostering an environment where ideas flourish and ambitions are realized. With a focus on innovation and excellence, QubicGen empowers individuals to unlock their potential and contribute meaningfully to their communities. Here, tradition meets technology, creating a unique synergy that inspires....";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(fullText.substring(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 20); 

    return () => clearInterval(intervalId);
  }, [fullText]);


  return (
    <div className="bg-[#062d42] md:-mt-10 py-8 secondcard" data-aos="fade-up">
      <div className="container mx-auto px-4 flex flex-col h-96 sm:h-48 md:flex-row">
        <div className="w-full md:w-1/2 flex items-center">
          <h2 className="text-2xl font-bold text-white">Why QubicGen</h2>
          <button
            className=" items-center text-white bg-[#7b0032] h-15 m-5 p-4  hover:underline"
            variant="outline"
            href="#"
          >
            Get to know us more &gt;
            
          </button>
          
        </div>
        <p className="text-white mt-4 md:ml-12 md:w-1/2">
        {displayText}
        </p>
      </div>
    </div>
  );
};

export default SecondCard;
