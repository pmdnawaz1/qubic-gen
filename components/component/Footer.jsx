"use client"
import { useState } from 'react';
import sendSym from "../../assets/partnership/send-01.png"
import Image from 'next/image';
import Link  from 'next/link';
export default function Footer() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email submitted: ${email}`);

    // Reset the email input
    setEmail('');
  };
  return (
    <div className="absolute sm:relative w-full sm:w-full">
       <div className=' mt-5 flex  justify-between   py-8 sm:grid sm:grid-cols-2 sm:py-0 sm:w-3/4 sm:mx-auto items-center sm:gap-0 bg-[#062d42] rounded-none sm:rounded-full  h-20 sm:absolute sm:z-10 sm:top-[-37px] sm:left-0 sm:right-0' >
      <h4 className=" sm:text-2xl ml-10 text-xl text-center mr-5 sm:mr-0 sm:ml-10 sm:max-w-fit sm:w-full text-white font-semibold ">Subscribe <span className='hidden sm:inline'>to Newsletter</span></h4>
      <form onSubmit={handleSubmit} className="flex  items-center sm:ml-0 sm:mr-0">
        <div className='-ml-10'>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleInputChange}
          className="p-3 sm:ml-0 sm:top-[80px] max-w-48 w-max sm:max-w-3xl sm:w-[400px] bg-slate-300 border-gray-300 rounded-2xl sm:rounded-full"
          required
        />
        </div>
        <button type="submit" className="bg-yellow-500 sm:right-[62px] right-[49px]  sm:inline relative text-white rounded-2xl px-3 py-3 sm:px-5 sm:py-3 sm:rounded-full">
          <Image src={sendSym}  alt="sendSym" className=' bg-transparent' />
        </button>
      </form>
    </div>
    <div className="bg-[#650e32] text-white sm:top-[20px] absolute  sm:relative sm:mt-10 mt-5 ">
      <div className="container mx-auto px-6  py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:mt-20 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">QubicGen</h2>
            <p className="mb-4">Unlock Your Thoughts</p>
            <p className="mb-4">
              We are on a mission to bridge the gap between knowledge and success. Located in the heart of a vibrant
              Anantapur, Andhra Pradesh, India.
            </p>
            <div className="flex items-center mb-4">
              <MapPinIcon className="text-white w-6 h-6" />
              <span className="ml-2">Narayan Thagararam Galaxy, Opp JNTUA, Anantapur</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <Link className="hover:underline" href="/whoweare">
                  Who we are
                </Link>
              </li>
              <li className="mb-1">
                <Link className="hover:underline" href="/services">
                  What we do
                </Link>
              </li>
              <li className="mb-1">
                <Link className="hover:underline" href="/services">
                  Consulting
                </Link>
              </li>
              <li className="mb-1">
                <Link className="hover:underline" href="/services">
                  Trainings
                </Link>
              </li>
              <li className="mb-1">
                <Link className="hover:underline" href="/insights">
                  Insights
                </Link>
              </li>
              <li className="mb-1">
                <Link className="hover:underline" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
            </div>
          </div>
          <div className="responsive-iframe-container">
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
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
        <div className="flex flex-col gap-3 justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="flex items-center">
            <FacebookIcon className="text-white w-6 h-6" />
            <TwitterIcon className="text-white w-6 h-6 ml-4" />
            <InstagramIcon className="text-white w-6 h-6 ml-4" />
          </div>
          <p>© QubicGen | All Rights Reserved 2023</p>
        </div>
      </div>
      </div>
    </div>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

// export default Footer;