"use client";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Header from "../component/Header";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";
import SecondCard from "../component/SecondCard";
import TestimonialCard from "../component/TestimonialCard";

import "./styles.css";
import "../../app/globals.css";
import Partnership from "./partnership";
import NavBar from "./Navbar";
// import Banner from "./banner"

export function Landing() {
  const [activeLink, setActiveLink] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

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

     <SecondCard/>
      <OurServices />

      <Partnership />
     <TestimonialCard/>
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
      <Footer />
    </div>
  );
}
export default Landing;