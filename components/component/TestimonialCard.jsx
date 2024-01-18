"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tesla from '../../assets/partnership/tesla.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I had the privilege of taking the RPA training program at Qubicgen, and I couldn&apos;t be more satisfied with the experience.",
      author: 'Michael Scott',
      image: tesla, // Replace with the actual image path
    },
    {
      id: 2,
      quote: "I had the privilege of taking the RPA training program at Qubicgen, and I couldn&apos;t be more satisfied with the experience.",
      author: 'Michael Scott',
      image: tesla, // Replace with the actual image path
    },
    {
      id: 3,
      quote: `I had the privilege of taking the RPA training program at Qubicgen, and I couldn&apos;t be more satisfied with the experience.`,
      author: 'Michael Scott',
      image: tesla, // Replace with the actual image path
    },
  ];
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      AOS.init();
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              What people say about us
            </h2>
            <div className="h-2 w-24 bg-[#FFD700] mb-8" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 relative">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.id}
              className="flex h-full flex-col justify-between bg-white p-6 shadow-md hover:shadow-lg sm:p-8 transition-transform transform hover:scale-105"
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
            >
              <div>
                <div
                  className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden"
                  data-aos="zoom-in" 
                >
                  <Image
                    src={testimonial.image}
                    alt="Tesla"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />

                </div>

                <div className="flex gap-0.5 text-green-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">AWS</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {testimonial.quote}
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;