'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/component/Header';
import Footer from '../../components/component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';
import whoweare from '../../public/images/whoweare.png';

const ServicesComponent = () => {
	// Initialize AOS library
	React.useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 200,
			easing: 'ease-in-out',
			mirror: false,
		});
	}, []);

	const [selectedService, setSelectedService] = useState(null);

	const openPopup = (service) => {
		console.log(' open meeeeeeee', service);
		setSelectedService(service);
	};

	const closePopup = () => {
		console.log(' close meeeeeeee');
		setSelectedService(null);
	};
	const servicesData = [
		{
			title: 'Robotic Process Automation (RPA)',
			description:
				'Streamline repetitive tasks and reduce costs with our RPA solutions.',
			imagePath: whoweare,
		},
		{
			title: 'UI Path Development',
			description:
				'Create seamless and intuitive user experiences with UI Path development.',
			imagePath: whoweare,
		},
		{
			title: 'SQL Database Solutions',
			description:
				'Unlock the potential of your data with our SQL database solutions.',
			imagePath: whoweare,
		},
		{
			title: 'Custom Software Development',
			description:
				'Build tailored software solutions to meet your specific business needs.',
			imagePath: whoweare,
		},
		{
			title: 'Cloud Computing Services',
			description:
				'Leverage the power of the cloud for scalable and flexible solutions.',
			imagePath: whoweare,
		},
		{
			title: 'Mobile App Development',
			description:
				'Create innovative mobile applications for Android and iOS platforms.',
			imagePath: whoweare,
		},
		{
			title: 'Web App Development',
			description: 'Create innovative mobile applications for web platforms.',
			imagePath: whoweare,
		},
	];

	return (
		<>
			<Header />
			<div className="p-8">
				<h2 className="text-4xl font-bold mb-8">Our Services</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="bg-slate-200 p-6 rounded-md shadow-md hover:shadow-lg">
              <div className="mb-4 h-24 relative">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              {/* Remove 'hidden' class from the paragraph */}
              <p className="text-gray-600">{service.description}</p>
              <button
                onClick={() => openPopup(service)}
                className="bg-yellow-500 text-650e32 py-2 px-4 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

				{/* Popup */}
				{selectedService && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
						<div className="bg-white p-8 rounded-md">
							<h2 className="text-2xl font-bold mb-4">
								{selectedService.title}
							</h2>
							<div className="mb-4 h-40">
								<Image
                  src={selectedService.imagePath}
                  alt={selectedService.title}
									width={300}
									height={200}
                />
							</div>
							<p className="text-gray-600">{selectedService.description}</p>
							<button
								onClick={() => closePopup()}
								className="mt-4 bg-yellow-500 text-650e32 py-2 px-4 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
							>
								Close
							</button>
						</div>
					</div>
				)}

				{/* Call to Action */}
				<div className="mt-8 text-center" data-aos="fade-up">
					<p className="text-lg leading-7 mb-6">
						Ready to transform your business with our cutting-edge technology
						solutions? Partner with QubicGen for innovative and reliable
						services.
					</p>
					<button className="bg-yellow-500 text-650e32 py-2 px-6 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300">
						Get Started
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ServicesComponent;
