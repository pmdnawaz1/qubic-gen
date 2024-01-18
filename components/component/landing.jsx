
import Header from "../component/Header";
import OurServices from "../component/OurServices";
import Footer from "../component/Footer";
import SecondCard from "../component/SecondCard";
import TestimonialCard from "../component/TestimonialCard";

import Partnership from "./partnership";


export function Landing() {

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