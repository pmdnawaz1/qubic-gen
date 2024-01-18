import Image from 'next/image';
import Link from 'next/link';
import ibm from "../../assets/partnership/ibm.png";
import tesla from "../../assets/partnership/tesla.png";
import sap from "../../assets/partnership/sap.png";
import microsoft from "../../assets/partnership/microsoft.png";
import aws from "../../assets/partnership/aws.png";
import adobe from "../../assets/partnership/adobe.png";

import './Partnership.css'

export default function Awards() {
  return (
    <section className="container bg-slate-100 mx-auto mt-14 px-4 py-8">
     <div className='flex justify-center items-center'>
      <div className='flex flex-col'>
     <h2 className="text-2xl font-bold">Awards</h2>
     <div className="h-2 w-12 bg-[#FFD700]" />
     </div>
     <button
            className=" ml-auto"
            variant="outline"
            href="#"
          >
            View more &gt;
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg> */}
          </button>
      
     </div>
      <div className="flex justify-between items-center mt-4 overflow-hidden">
        <div className="flex space-x-4 justify-between animate-scroll">
          <div className="flex space-x-4">
            <Image alt="IBM" height="100" src={ibm} width="150" />
            <Image alt="Microsoft" height="50" src={microsoft} width="150" />
            <Image alt="SAP" height="50" src={sap} width="150" />
            <Image alt="Tesla" height="50" src={tesla} width="150" />
            <Image alt="aws" height="50" src={aws} width="150" />
            <Image alt="Adobe" height="50" src={adobe} width="150" />
            <Image alt="IBM" height="100" src={ibm} width="150" />
            <Image alt="Microsoft" height="50" src={microsoft} width="150" />
            <Image alt="SAP" height="50" src={sap} width="150" />
            <Image alt="Tesla" height="50" src={tesla} width="150" />
            <Image alt="aws" height="50" src={aws} width="150" />
            <Image alt="Adobe" height="50" src={adobe} width="150" />
         
            
          </div>
        </div>
      </div>
      
    </section>
  );
}