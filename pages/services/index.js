import React from 'react';
import "../../app/globals.css";
import Image from "next/image";
import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";
const ServicesComponent = () => {
	return (
    <>
    <Header/>
		<div className="max-w-screen-md mx-auto p-8">
			<h2 className="text-4xl font-bold mb-8">Our Services</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{/* Service Box 1 */}
				<div className="bg-white p-6 rounded-md shadow-md">
					<h3 className="text-xl font-semibold mb-4">
						Robotic Process Automation (RPA)
					</h3>
					<p className="text-gray-600">
						Leverage the power of automation to streamline repetitive tasks,
						enhance operational efficiency, and reduce costs with our RPA
						solutions.
					</p>
				</div>

				{/* Service Box 2 */}
				<div className="bg-white p-6 rounded-md shadow-md">
					<h3 className="text-xl font-semibold mb-4">UI Path Development</h3>
					<p className="text-gray-600">
						Create seamless and intuitive user experiences with our UI Path
						development services. We design and build user-friendly interfaces
						tailored to your needs.
					</p>
				</div>

				{/* Service Box 3 */}
				<div className="bg-white p-6 rounded-md shadow-md">
					<h3 className="text-xl font-semibold mb-4">SQL Database Solutions</h3>
					<p className="text-gray-600">
						Unlock the potential of your data with our SQL database solutions.
						We design and implement robust database systems for efficient data
						management.
					</p>
				</div>

				{/* Additional Service Boxes... */}
			</div>

			{/* Call to Action */}
			<div className="mt-8 text-center">
				<p className="text-lg leading-7 mb-6">
					Ready to transform your business with our cutting-edge technology
					solutions? Partner with QubicGen for innovative and reliable services.
				</p>
				<button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
					Get Started
				</button>
			</div>
		</div>
    <Footer/>
    </>
	);
};

export default ServicesComponent;
