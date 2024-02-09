import { Metadata } from "next";
import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from "react";


export const metadata = {
  title: "Insights",
}

export default function InsightsComponent() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
    AOS.refresh();
  })
  return (
    <>
    <Header/>
    <div className="flex flex-wrap gap-6 items-center justify-center py-8 mx-auto" data-aos="fade-up">
      <div className="max-w-screen-md mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Insights of QubicGen</h2>
      <div className="h-2 w-24 bg-[#FFD700] mb-8" />
      <p className="text-lg leading-7 mb-6">
        QubicGen is a leading IT consulting and training company based in Ananthapur, India. With a strong focus on innovation and technology, we empower businesses to achieve their goals and stay ahead in today&apos;s dynamic digital landscape.
      </p>
      <p className="text-lg leading-7 mb-6">
        Our expertise spans a wide range of technologies, including Robotic Process Automation (RPA), UI Path, SQL databases, .NET development, web development, and more. We are committed to delivering high-quality solutions that drive efficiency, enhance user experiences, and accelerate business growth.
      </p>
      <p className="text-lg leading-7 mb-6">
        At QubicGen, we believe in continuous learning and staying at the forefront of technological advancements. Our team of experts is dedicated to providing insights, solutions, and services that transform challenges into opportunities for our clients.
      </p>
      <p className="text-lg leading-7 mb-6">
        Explore the future with QubicGen, where innovation meets excellence. Partner with us for your IT consulting and training needs, and let&apos;s embark on a journey of success together.
      </p>
      <button className="bg-[#650e32] text-white py-2 px-6 rounded-md hover:bg-[#eab308] transition duration-300" >
        Contact Us
      </button>
    </div>
    <div className="w-72 group"  data-aos="fade-up" >
        <Image
          alt="Team Collaboration"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/TeamWork.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Innovative Team Collaboration</p>
          <p className="text-sm">Discover the power of teamwork at QubicGen, where collaboration fuels innovation.</p>
        </div>
    </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Tech Pioneers"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/pioneers.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Leading with Technology</p>
          <p className="text-sm">Learn how QubicGen leads with cutting-edge technology to pioneer new solutions.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Client Partnerships"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/partnerships.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Building Strong Partnerships</p>
          <p className="text-sm">Explore our approach to forging lasting partnerships with our clients.</p>
        </div>
      </div>


      {/* Additional Content */}
      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Custom Software Solutions"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/dev.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Custom Software Solutions</p>
          <p className="text-sm">Discover how our bespoke software solutions are tailored to meet your business needs.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Cybersecurity"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/cyber.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Fortified Cybersecurity</p>
          <p className="text-sm">Learn about our robust cybersecurity measures designed to protect your digital assets.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Cloud Solutions"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/cloud.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Innovative Cloud Solutions</p>
          <p className="text-sm">Explore how our cloud solutions can elevate your business to new heights.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Strategic IT Consulting"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/consulting.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Strategic IT Consulting</p>
          <p className="text-sm">Discover strategic IT consulting that drives business growth and innovation.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Digital Transformation"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/digital.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Leading Digital Transformation</p>
          <p className="text-sm">Learn how QubicGen leads businesses through successful digital transformation journeys.</p>
        </div>
      </div>
      <div className="w-72 group"  data-aos="fade-up" >
        <Image
          alt="Transforming challenges into opportunities"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/oppurtunity.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Transforming challenges into opportunities</p>
          <p className="text-sm">Explore how QubicGen transforms challenges into opportunities.</p>
        </div>
      </div>     

      {/* Additional Content */}
      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Accelerating Business Processes with RPA"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/RPA.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Accelerating Business Processes with RPA</p>
          <p className="text-sm">Discover how Robotic Process Automation (RPA) boosts efficiency in business operations.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Innovative UI Path Solutions for Seamless Experiences"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/RPA.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Innovative UI Path Solutions for Seamless Experiences</p>
          <p className="text-sm">Explore how QubicGen implements UI Path for creating user-friendly and efficient interfaces.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Empowering Businesses with SQL Database Solutions"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/SQL.png" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Empowering Businesses with SQL Database Solutions</p>
          <p className="text-sm">Learn how QubicGen leverages SQL databases for robust and scalable data management.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt=".NET Development for Future-Ready Solutions"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/net.jpg" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">.NET Development for Future-Ready Solutions</p>
          <p className="text-sm">Discover how QubicGen utilizes .NET for building innovative and future-ready applications.</p>
        </div>
      </div>

      <div className="w-72 group "  data-aos="fade-up">
        <Image
          alt="Strategic Web Development for Online Success"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/images/insights/webdevelopment.avif" // Replace with actual image source
          width="300"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Strategic Web Development for Online Success</p>
          <p className="text-sm">Explore QubicGen&apos;s approach to web development for achieving online success and visibility.</p>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}
