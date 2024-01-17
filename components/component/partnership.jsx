import Image from 'next/image';
import Link from 'next/link';
import ibm from "../../assets/partnership/ibm.png";
import tesla from "../../assets/partnership/tesla.png";
import sap from "../../assets/partnership/sap.png";
import microsoft from "../../assets/partnership/microsoft.png";
import aws from "../../assets/partnership/aws.png";
import adobe from "../../assets/partnership/adobe.png";

import './Partnership.css'

export default function Partnership() {
  return (
    <section className="container bg-slate-100 mx-auto mt-14 px-4 py-8">
      <h2 className="text-2xl font-bold">Partnership & Alliances</h2>
      <div className="h-2 w-24 bg-[#FFD700] mb-12" />
      <div className="flex justify-between items-center mt-4 overflow-hidden">
        <div className="flex space-x-4 justify-between animate-scroll">
          <div className="flex space-x-4">
            <Image alt="IBM" height="100" src={ibm} width="150" />
            <Image alt="Microsoft" height="50" src={microsoft} width="150" />
            <Image alt="SAP" height="50" src={sap} width="150" />
            <Image alt="Tesla" height="50" src={tesla} width="150" />
            <Image alt="aws" height="50" src={aws} width="150" />
            <Image alt="Adobe" height="50" src={adobe} width="150" />
          </div>
          <div className="flex space-x-4">
            <Image alt="IBM" height="100" src={ibm} width="150" />
            <Image alt="Microsoft" height="50" src={microsoft} width="150" />
            <Image alt="SAP" height="50" src={sap} width="150" />
            <Image alt="Tesla" height="50" src={tesla} width="150" />
            <Image alt="aws" height="50" src={aws} width="150" />
            <Image alt="Adobe" height="50" src={adobe} width="150" />
          </div>
        </div>
      </div>
      <Link className="text-blue-600 hover:underline" href="#">
        View all
      </Link>
    </section>
  );
}