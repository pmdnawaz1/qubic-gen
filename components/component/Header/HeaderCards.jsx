"use client";
import { motion } from "framer-motion";

export default function HeaderCards() {
  return (
    <div className="relative lg:top-[-100px] firstcard">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 lg:space-x-8 xl:space-x-10 md:px-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
              >
                <div className="text-center p-5 md:text-left">
                  <BaselineIcon className="h-6 w-6" />
                  <h3 className="font-bold">Reliable</h3>
                  <p>
                    Reliable to be the voice of your business for the digital
                    future.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
              >
                <div className="text-center p-5 md:text-left">
                  <XIcon className="h-6 w-6" />
                  <h3 className="font-bold">Experienced</h3>
                  <p>Experienced in-house team with an agile mindset.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-[#F0F0F3] py-4 text-black flex flex-col items-center md:items-start"
              >
                <div className="text-center p-5 md:text-left">
                  <CheckIcon className="h-6 w-6" />
                  <h3 className="font-bold">Compliance</h3>
                  <p>Compliance to enable digital transformation with ease.</p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
  )
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
  );
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
  );
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
  );
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
  );
}
