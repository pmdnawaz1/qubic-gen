'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaLaptopCode, FaMobileAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';
import Header from '@/components/component/Header';
import Footer from '@/components/component/Footer';
import whoweare from '../../public/images/whoweare.png';
import RPA from '../../public/images/insights/RPA.jpg';
import dev from '../../public/images/insights/dev.jpg';
import SQL from '../../public/images/insights/SQL.png';
import webdevelopment from '../../public/images/insights/digital.jpg';
import cloud from '../../public/images/insights/cloud.jpg';
import net from '../../public/images/insights/net.jpg';


const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease' });
  }, []);

  const servicesData = [
		{
			title: 'Robotic Process Automation (RPA)',
			description: 'Empower your business by automating routine tasks with our advanced RPA solutions, freeing up your team for more strategic activities.',
			imagePath: RPA,
		},
		{
			title: 'UI/UX Design & Development',
			description: 'Craft engaging and user-friendly digital experiences with our comprehensive UI/UX design and development services.',
			imagePath: dev,
		},
		{
			title: 'Data Management & Analytics',
			description: 'Harness the power of your data with our bespoke database solutions and analytics to drive decision-making and innovation.',
			imagePath: SQL,
		},
		{
			title: 'Custom Software Development',
			description: 'From concept to code, our custom software development services are tailored to meet your unique business requirements.',
			imagePath: webdevelopment,
		},
		{
			title: 'Cloud Computing Services',
			description: 'Accelerate your digital transformation with our cloud computing services, offering scalable, secure, and cost-effective solutions.',
			imagePath: cloud,
		},
		{
			title: 'Mobile App Development',
			description: 'Build captivating mobile applications that enhance user engagement and drive business growth on both Android and iOS platforms.',
			imagePath: net,
		},
		{
			title: 'Web Development',
			description: 'Develop dynamic, high-performance web applications designed to deliver seamless user experiences across all platforms.',
			imagePath: webdevelopment,
		},
	];

  return (
    <div>
    <Header />

      <main className="bg-gray-100 py-12 m-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <div className="h-2 w-24 bg-[#FFD700] mb-8" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} data-aos="fade-up" className="service-card bg-white shadow-lg rounded-lg overflow-hidden">
                <Image className="w-full h-48 object-cover" src={service.imagePath} alt={service.title} width={500} height={500}/>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Custom Software Development */}
            <div data-aos="fade-up" className="service-card">
              <FaLaptopCode className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">Custom Software Development</h2>
              <p className="text-center">
                We craft tailored software solutions to meet your unique business requirements and drive growth.
              </p>
            </div>

            {/* Web and Mobile App Development */}
            <div data-aos="fade-up" data-aos-delay="100" className="service-card">
              <FaMobileAlt className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">Web and Mobile App Development</h2>
              <p className="text-center">
                Our team develops responsive and user-friendly web and mobile applications for seamless experiences.
              </p>
            </div>

            {/* IT Consulting */}
            <div data-aos="fade-up" data-aos-delay="200" className="service-card">
              <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">IT Consulting</h2>
              <p className="text-center">
                Get strategic IT guidance and support to leverage technology for achieving your business goals.
              </p>
            </div>

            {/* Cybersecurity Solutions */}
            <div data-aos="fade-up" data-aos-delay="300" className="service-card">
              <FaShieldAlt className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">Cybersecurity Solutions</h2>
              <p className="text-center">
                Protect your digital assets and sensitive data with our robust cybersecurity measures and solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
