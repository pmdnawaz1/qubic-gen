'use client';
import React, { useEffect } from 'react';
import { AiOutlineLock, AiOutlineBulb, AiOutlineTeam } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';
import Link from 'next/link';

import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease' });
  }, []);

  return (
    <div >
      <Header />
      <main className="bg-gray-100 relative m-4 p-4">
        {/* What We Serve Section */}
        <section id="what-we-serve" className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">What We Serve</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Bespoke Software Solutions</h3>
                  <p className='text-lg'>
                    Tailored applications designed to fit unique business needs.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Web and Mobile Excellence</h3>
                  <p className='text-lg'>
                    Crafting seamless user experiences with responsive applications.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Strategic IT Consulting</h3>
                  <p className='text-lg'>
                    Guiding businesses with strategic IT insights.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Fortified Cybersecurity</h3>
                  <p className='text-lg'>
                    Vigilant protection of digital assets and sensitive data.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <AiOutlineLock className="text-6xl text-blue-500" />
                  <AiOutlineBulb className="text-6xl text-yellow-500 ml-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* To Whom We Serve Section */}
        <section id="to-whom-we-serve" className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">To Whom We Serve</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">SMEs with Vision</h3>
                  <p className='text-lg'>
                    Scalable solutions that align with SME budget considerations.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise Empowerment</h3>
                  <p className='text-lg'>
                    Comprehensive IT services optimizing large-scale operations.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Startup Acceleration</h3>
                  <p className='text-lg'>
                    Agile development for rapid market entry.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Public Sector Impact</h3>
                  <p className='text-lg'>
                    Customized solutions addressing public sector requirements.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <BiWorld className="text-6xl text-green-500" />
                  <AiOutlineTeam className="text-6xl text-purple-500 ml-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Need QubicGen Section */}
        <section id="why-clients-need-qubicgen" className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">Why Clients Need QubicGen</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Expertise and Legacy</h3>
                  <p className='text-lg'>
                    Tap into the knowledge of seasoned professionals.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Innovation Catalyst</h3>
                  <p className='text-lg'>
                    Propel your business with our commitment to innovation.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Client-Centric Commitment</h3>
                  <p className='text-lg'>
                    Experience personalized solutions and attentive support.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
                  <p className='text-lg'>
                    Explore a history of successful projects and ecstatic clients.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <BsCheckCircle className="text-6xl text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='flex flex-row justify-center gap-4'>
        <Link href="/services" className="bg-[#650e32] text-white py-4 px-6 rounded-md hover:bg-[#eab308] transition duration-300 flex justify-center items-center" >Our Services</Link>
        <Link href="/learning" className="bg-[#eab308] text-white py-2 px-6 rounded-md hover:bg-[#650e32] transition duration-300 flex justify-center items-center" >Our Learning Programs</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
