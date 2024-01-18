"use client";
import { useState } from "react";
import Header from "../component/Header";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";
import SecondCard from "../component/SecondCard";
import TestimonialCard from "../component/TestimonialCard";

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
      <Header />    
      <SecondCard/>
      <OurServices />
      <Partnership />
      <TestimonialCard/>
      <Footer />
    </div>
  );
}
export default Landing;