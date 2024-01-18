import NavBar from "../component/Navbar";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";
import SecondCard from "../component/SecondCard";
import TestimonialCard from "../component/TestimonialCard";

import Courosel from "../component/Header/Courosel";
import HeaderCards from "../component/Header/HeaderCards";
import Top from "../component/Header/Top";

import Partnership from "./partnership";


export function Landing() {

  return (
    <div>
      <Top/>
        <div className="relative  sm:-mt-10 sm:top-10 sm:z-10">
          <NavBar />
        </div>
      
        <Courosel/>
        <HeaderCards/>    
      <SecondCard/>
      <OurServices />
      <Partnership />
      <TestimonialCard/>
      <Footer />
    </div>
  );
}
export default Landing;