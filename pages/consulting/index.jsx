// pages/whoweare/index.js
import Image from "next/image";
import "../../app/globals.css";
import whoweare from "../../public/images/whoweare.png";
import whowearebanner from "../../public/images/whowearebanner.png";
import Header from "../../components/component/Header";
import Footer from "@/components/component/Footer";
import Awards from "@/components/component/Awards";
import tesla from "../../public/images/whoweare.png";


const consulting = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <Image src={whowearebanner} alt="QubicGen Banner" width={1900} height={500} />
        <h1 className="text-2xl font-semibold mb-2 my">
          <a href="/" className="hover:underline hover:text-yellow-500">
            Home
          </a>{" "}
          <p className="inline text-yellow-500 px-2">&gt;</p> Consulting
        </h1>
        <div className="text-left my-8 flex flex-row">
          <div className="flex flex-row">
            <p className="text-gray-600 mb-6">
            <br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <br/>Lorem Ipsum.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <br/>Lorem Ipsum.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <br/>Lorem Ipsum.`
            </p>
          </div>
          <div className="flex flex-col m-2">
            <h3 className="text-xl font-semibold mb-2">Case studies</h3>
            <div className="inline-block">
              <Image
                src={whoweare}
                alt="QubicGen Logo"
                width={1200}
                height={700}
              />
              <Image
                src={whoweare}
                alt="QubicGen Logo"
                width={1900}
                height={700}
              />
              <Image
                src={whoweare}
                alt="QubicGen Logo"
                width={1900}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Awards/> */}
      <Footer />
    </div>
  );
};

export default consulting;
