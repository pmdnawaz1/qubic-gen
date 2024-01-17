"use client";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Header from "../component/Header";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";

import "./styles.css";
import "../../app/globals.css";
import Partnership from "./partnership";
// import Banner from "./banner"

export function Landing() {
  const [activeLink, setActiveLink] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleScrollTo = (to) => {
    scroll.scrollTo(to, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Handle success, e.g. show a success message to the user
        console.log("Email sent successfully");
      } else {
        // Handle error, e.g. show an error message to the user
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <div className="relative">
        <Header />
      </div>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      >
      </section>

      <div className="bg-[#062d42] md:-mt-10 py-8 secondcard">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-white">Why QubicGen</h2>
            <button
              className="flex items-center text-white mt-4 bg-[#7b0032] p-3.5 hover:underline"
              variant="outline"
              href="#"
            >
              Get to know us more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <p className="text-white mt-4 md:ml-12 md:w-1/2">
            QubicGen, situated in the dynamic and thriving city of Anantapur,
            Andhra Pradesh, India, stands as a beacon of knowledge and a
            catalyst for success. Our mission is to bridge the gap between
            learning and achievement, fostering an environment where ideas
            flourish and ambitions are realized. With a focus on innovation and
            excellence, QubicGen empowers individuals to unlock their potential
            and contribute meaningfully to their communities. Here, tradition
            meets technology, creating a unique synergy that inspires....
          </p>
        </div>
      </div>
      <OurServices />

      <Partnership />
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">What people say about us</h2>
            <div className="h-2 w-24 bg-[#FFD700] mb-4 md:mb-8" />
            <p className="mt-2">
              &quot;I had the privilege of working with QubicGen on a digital
              project. The team&apos;s expertise and dedication were
              impressive.&quot;
            </p>
            <p className="mt-2">- John Doe, CEO of Innotech</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our location</h2>
            <div className="h-2 w-24 bg-[#FFD700] mb-4 md:mb-8" />
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.871311807345!2d77.6091169242712!3d14.647452316587293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b000140666b%3A0x8edcaad72813c8d8!2sQubicgen!5e0!3m2!1sen!2sin!4v1705479944621!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Landing;