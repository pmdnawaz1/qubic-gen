'use client'
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Header from '../component/Header';
import OurServices from '../component/OurServices';
import Footer from '../component/Footer';
import Banner from './Banner';
import Image from 'next/image';
import mountain from '../../public/images/mountain.jpg';

import './styles.css'
import '../../app/globals.css'
// import Banner from "./banner"

export function Landing() {
  const [activeLink, setActiveLink] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleScrollTo = (to) => {
    scroll.scrollTo(to, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Handle success, e.g. show a success message to the user
        console.log('Email sent successfully');
      } else {
        // Handle error, e.g. show an error message to the user
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <Header/>
      {/* <Courosel/> */}
      <Banner/>
     
        <section
          className="bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg')",
          }}
        >
         {/*  */}
        </section>
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-[#F0F0F3] text-black">
              <CardContent>
                <BaselineIcon className="h-6 w-6" />
                <h3 className="font-bold">Reliable</h3>
                <p>Reliable to be the voice of your business for the digital future.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F0F0F3] text-black">
              <CardContent>
                <XIcon className="h-6 w-6" />
                <h3 className="font-bold">Experienced</h3>
                <p>Experienced in-house team with an agile mindset.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F0F0F3] text-black">
              <CardContent>
                <CheckIcon className="h-6 w-6" />
                <h3 className="font-bold">Compliance</h3>
                <p>Compliance to enable digital transformation with ease.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <OurServices/>
        <div className="bg-[#062d42] py-8">
  <div className="container mx-auto px-4 flex">
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white">Why QubicGen</h2>
      <button className="text-white mt-4 bg-[#7b0032] hover:underline" variant="outline" href="#">
        Get to know us more
      </button>
    </div>
    <p className="text-white ml-12">
      QubicGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, fostering an environment where ideas flourish and ambitions are realized. With a focus on innovation and excellence, QubicGen empowers individuals to unlock their potential and contribute meaningfully to their communities. Here, tradition meets technology, creating a unique synergy that inspires....
    </p>
  </div>
</div>
  
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold">Partnership & Alliances</h2>
          <div className="h-2 w-24 bg-[#FFD700] mb-8" />
          <div className="flex justify-between items-center mt-4">
            <Image
              alt="IBM"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <Image
              alt="Microsoft"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <Image
              alt="SAP"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <Image
              alt="Tesla"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
            <Image
              alt="Adobe"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/50",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
          <Link className="text-blue-600 hover:underline" href="#">
            View all
          </Link>
        </section>
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl font-bold">What people say about us</h2>
              <div className="h-2 w-24 bg-[#FFD700] mb-8" />
              <p className="mt-2">
              &quot;I had the privilege of working with QubicGen on a digital project. The team&apos;s expertise and dedication
                were impressive.&quot;
              </p>
              <p className="mt-2">- John Doe, CEO of Innotech</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our location</h2>
              <div className="h-2 w-24 bg-[#FFD700] mb-8" />
              <Image
                alt="Map"
                className="mt-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
          </div>
        </section>
      
    

    <Footer/>
  </>);
}
function BaselineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
export default Landing;