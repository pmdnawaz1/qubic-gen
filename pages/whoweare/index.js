import React from 'react';
import "../../app/globals.css";

import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";

const WhoWeAreComponent = () => {
  const data = [ 
    {
      link: "/",
      description: "QubicGen is a leading IT consulting and training company ",
      imageUrl: "/images/mountain.jpg",
      title: "QubicGen Overview",
    },
    {
      link: "/",
      description: "At QubicGen, we believe in the power of innovation and collaboration.",
      imageUrl: "/images/mountain.jpg",
      title: "Our Technology Expertise",
    },
  ];
  const {link,description,imageUrl,title}= data;

  return (
    <>
    <Header/>
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-4xl font-bold mb-8">Who We Are</h2>

      <p className="text-lg leading-7 mb-6">
        QubicGen is a leading IT consulting and training company based in Ananthapur, India. We are dedicated to providing extraordinary expertise that leads to remarkable results. Our team of experts is committed to transforming businesses through cutting-edge technology solutions.
      </p>

      <p className="text-lg leading-7 mb-6">
        At QubicGen, we believe in the power of innovation and collaboration. We have a dynamic team that is passionate about leveraging the latest technologies to drive success. Whether it&apos;s RPA, UI Path, SQL databases, .NET, or web development, we excel in a wide range of technology domains.
      </p>

      <p className="text-lg leading-7 mb-6">
        Our mission is to redefine possibilities and empower businesses for the digital age. With a focus on excellence and client satisfaction, QubicGen strives to be a trusted partner for businesses looking to thrive in the ever-evolving technology landscape.
      </p>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <p className="text-lg leading-7 mb-6">
          Discover the QubicGen difference and join us on the journey of innovation and growth.
        </p>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300">
          Learn More
        </button>
      </div>
     
     


    </div>
    <div className="flex flex-wrap flex-row justify-center items-center bg-black">
          {data.map((card, index) => (
            <div key={index} className="m-5 p-5 max-w-sm bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700 overflow-hidden">
              <a href={card.link}>
                <img className="rounded-t-lg w-full" src={card.imageUrl} alt={card.title} />
              </a>
              <div className="p-5">
                <a href={card.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{card.title}</h5>
                </a>
                <p className="mb-3 font-normal text-white-700 dark:text-white-400">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all duration-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
    <Footer/>
    </>
  );
};

export default WhoWeAreComponent;
