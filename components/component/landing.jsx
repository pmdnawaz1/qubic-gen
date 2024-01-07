'use client'
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Header from '../component/Header';
import OurServices from '../component/OurServices';
import Footer from '../component/Footer';
import Courosel from '../component/Courosel';

import './styles.css'

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
      <Courosel/>
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                QubicGen IT consulting and Training
              </h1>
              <p className="max-w-[600px] text-black-500 md:text-xl dark:text-black-400">
                Specializing in RPA, UI Path, .NET, and SQL database services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
              Explore our services
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <OurServices/>
    
      
    </main>
    <Footer/>
  </>);
}

export default Landing;