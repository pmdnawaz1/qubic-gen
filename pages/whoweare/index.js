// pages/whoweare/index.js
import Image from "next/image";
import "../../app/globals.css";
import whoweare from "../../public/images/whoweare.png";
import whowearebanner from "../../public/images/whowearebanner.png";
import Header from "../../components/component/Header";
import Footer from "@/components/component/Footer";
import Awards from "../../components/component/awards";
import bulb from "../../public/images/bulb.png";
import target from "../../public/images/target.png";


const WhoWeAre = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <Image src={whowearebanner} alt="QubicGen Banner" width={1900} height={500} />
        <h1 className="text-2xl font-semibold mb-2">
          <a href="/" className="hover:underline hover:text-yellow-500">
            Home
          </a>{" "}
          <p className="inline text-yellow-500 px-2">&gt;</p> Who we are
        </h1>
        <div className="text-left my-8 flex flex-row">
          <div className="flex flex-row">
            <p className="text-gray-600 mb-6">
              QubicGen, situated in the dynamic and thriving city of Anantapur,
              Andhra Pradesh, India, stands as a beacon of knowledge and a
              catalyst for success. Our mission is to bridge the gap between
              learning and achievement, fostering an environment where ideas
              flourish and ambitions are realized. With a focus on innovation
              and excellence, QubicGen empowers individuals to unlock their
              potential and contribute meaningfully to their communities. Here,
              tradition meets technology, creating a unique synergy that
              inspires...
            </p>
          </div>
          <div className="flex flex-col m-2">
            <div className="inline-block">
              <Image
                src={whoweare}
                alt="QubicGen Logo"
                width={1900}
                height={700}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 my-8 bg-slate-100">
          <div className="flex flex-col items-center p-8">
           <div className="h-40 w-40 bg-white">
           <Image src={bulb} alt="QubicGen Logo" width={150} height={150} />
           </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                QubicGen, situated in the dynamic and thriving city of <br />
                Anantapur, Andhra Pradesh, India, <br /> stands as a beacon of
                knowledge and a catalyst for success...
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">            
            <div className="h-40 w-40 bg-white">
            <Image src={target} alt="Lightbulb Idea" width={150} height={150} />
           </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Our mission is to bridge the gap between learning and
                achievement, <br /> fostering an environment where ideas <br />{" "}
                flourish and ambitions are realized..
              </p>
            </div>
          </div>
        </div>
      </div>
      <Awards/>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
