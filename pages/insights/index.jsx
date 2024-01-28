import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from "react";


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
          alt="xxxxxxxx"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder1.jpg" // Replace with actual image source
          width="200"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Transforming challenges into opportunities</p>
          <p className="text-sm">Explore how QubicGen transforms challenges into opportunities.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="xxxxxxxx"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder2.jpg" // Replace with actual image source
          width="200"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Better quality data for AI with Blockchain</p>
          <p className="text-sm">Learn how blockchain ensures high-quality data for AI applications.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Who will dominate this mega market"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder3.jpg" // Replace with actual image source
          width="200"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Who will dominate this mega market</p>
          <p className="text-sm">Gain insights into the competition and dominance in the industry.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Reactive, theory of mind & self-aware"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder4.jpg" // Replace with actual image source
          width="200"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Reactive, theory of mind & self-aware</p>
          <p className="text-sm">Explore the concepts of reactivity, theory of mind, and self-aware systems.</p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Accelerating Business Processes with RPA"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder5.jpg" // Replace with actual image source
          width="200"
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
          src="/placeholder6.jpg" // Replace with actual image source
          width="200"
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
          src="/placeholder7.jpg" // Replace with actual image source
          width="200"
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
          src="/placeholder8.jpg" // Replace with actual image source
          width="200"
        />
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">.NET Development for Future-Ready Solutions</p>
          <p className="text-sm">Discover how QubicGen utilizes .NET for building innovative and future-ready applications.</p>
        </div>
      </div>

      <div className="w-72 group"  data-aos="fade-up">
        <Image
          alt="Strategic Web Development for Online Success"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-lg"
          height="150"
          src="/placeholder9.jpg" // Replace with actual image source
          width="200"
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
