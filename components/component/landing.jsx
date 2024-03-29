import NavBar from "../component/Navbar";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";
import SecondCard from "../component/SecondCard";
import TestimonialCard from "../component/TestimonialCard";
import SpeedDial from "../component/SpeedDail";

import Courosel from "../component/Header/Courosel";
import HeaderCards from "../component/Header/HeaderCards";
import Top from "../component/Header/Top";

import Partnership from "./partnership";
import ThirdCard from "./ThirdCard";


export function Landing() {

  return (
    <div>
      <Top/>
        <div className="relative  sm:-mt-10 sm:top-10 sm:z-10">
          <NavBar />
        </div>
        <SpeedDial/>
        <Courosel/> 
        <HeaderCards/>    
      <SecondCard/>
      <ThirdCard />
      <OurServices />
      <Partnership />
      <TestimonialCard/>
      <Footer />  
    </div>
  );
}
export default Landing;