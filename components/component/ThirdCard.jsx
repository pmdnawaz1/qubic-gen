'use client'
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./thirdcard.css"
import { FaUser, FaCogs, FaUsers, FaBullseye } from 'react-icons/fa';

const ThirdCard = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease" });
  }, []);

  return (
    <div className="m-4 p-4">
      <p className="text-4xl font-bold mb-4">Know About Us</p>
      <div className="h-2 w-24 bg-[#FFD700] mb-8" />
      <section>
        <div className="timeline">
          {/* Who We Are */}
          <div className="entry">
            <div className="title">
              <h3><FaUser className="inline mr-2"/>Who We Are</h3>
            </div>
            <div className="body">
              <p className="para-light">
                Welcome to QubicGen, where innovation meets excellence in IT solutions. We are a dynamic and forward-thinking service-based IT firm dedicated to pushing the boundaries of technology. Our team consists of seasoned professionals, tech enthusiasts, and creative minds committed to delivering cutting-edge solutions to propel your business into the digital future.
              </p>
            </div>
          </div>
          {/* What We Serve */}
          <div className="entry">
            <div className="title">
              <h3><FaCogs className="inline mr-2"/>What We Serve</h3>
            </div>
            <div className="body">
              <p className="para-light">
                At QubicGen, our service offerings are as diverse as the ever-evolving digital landscape. From custom software development to robust cybersecurity solutions, cloud computing, and beyond – we cater to a broad spectrum of IT needs. Our expertise spans across industries, ensuring that our clients receive tailored solutions that align seamlessly with their unique business requirements.
              </p>
            </div>
          </div>
          {/* To Whom We Serve */}
          <div className="entry">
            <div className="title">
              <h3><FaUsers className="inline mr-2"/>To Whom We Serve</h3>
            </div>
            <div className="body">
              <p className="para-light">
                QubicGen is dedicated to serving businesses of all sizes and industries. Whether you are a startup looking to establish a strong digital presence, a mid-sized company aiming for efficiency and scalability, or an enterprise seeking innovative solutions for complex challenges – we have the expertise to meet your needs. Our client base spans across sectors such as finance, healthcare, e-commerce, and more, reflecting our adaptability and versatility in delivering solutions that drive success.
              </p>
            </div>
          </div>
          {/* Why Clients Need QubicGen */}
          <div className="entry">
            <div className="title">
              <h3><FaBullseye className="inline mr-2"/>Why Clients Need QubicGen</h3>
            </div>
            <div className="body">
              <p className="para-light">
                Choosing QubicGen as your IT partner means embracing a commitment to excellence, reliability, and forward-thinking solutions. Our track record speaks volumes – we have consistently delivered results for top-performing companies in the industry. Clients choose QubicGen not only for our technical prowess but also for our dedication to understanding their unique challenges and crafting solutions that position them for success in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdCard;