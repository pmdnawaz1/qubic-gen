import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/component/Header";
import Footer from "@/components/component/Footer";
import consultingBanner from "../../public/images/whowearebanner.png";
import collaborationImage from "../../public/images/mountain.jpg";
import innovationImage from "../../public/images/mountain.jpg";
import strategyImage from "../../public/images/mountain.jpg";
import transformationImage from "../../public/images/mountain.jpg";
import whoweare from "../../public/images/mountain.jpg";

const CaseStudyCard = ({ title, description, image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-slate-200">
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4 h-40 relative">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="bg-yellow-500 text-650e32 py-2 px-4 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300 mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};
const Consulting = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {/* Consulting Banner */}
        <Image
          src={consultingBanner}
          alt="Consulting Banner"
          width={1900}
          height={500}
        />
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Strategic Consulting Services</h1>
          <p className="text-gray-600">
            Elevate your business with our tailored consulting solutions.
          </p>
        </div>

        {/* Consulting Highlights Section */}
        <div className="flex flex-wrap justify-around items-center my-8">
          {/* Collaboration Highlight */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <Image src={collaborationImage} alt="Collaboration" />
            <h2 className="text-xl font-semibold my-2">Collaboration</h2>
            <p className="text-gray-600">
              Foster collaborative environments for innovation and growth.
            </p>
          </div>

          {/* Innovation Highlight */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <Image src={innovationImage} alt="Innovation" />
            <h2 className="text-xl font-semibold my-2">Innovation</h2>
            <p className="text-gray-600">
              Drive innovation strategies to stay ahead in the competitive market.
            </p>
          </div>

          {/* Strategy Highlight */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <Image src={strategyImage} alt="Strategy" />
            <h2 className="text-xl font-semibold my-2">Strategy</h2>
            <p className="text-gray-600">
              Develop strategic plans tailored to your business objectives.
            </p>
          </div>
        </div>

        {/* Consulting Content Section */}
        <div className="text-left my-8">
          <p className="text-gray-600 mb-6">
            {/* Add relevant and engaging consulting content here */}
            {/* Use paragraphs and formatting as needed */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Explore Our Case Studies</h2>
          <div className="flex flex-wrap justify-around">
            {/* Utilize a CaseStudyCard component for each case study */}
            <CaseStudyCard
              title="Revolutionizing Collaboration"
              description="Discover how our collaboration strategies transformed businesses."
              image={whoweare}
            />
            <CaseStudyCard
              title="Innovative Solutions for Success"
              description="Explore our innovative approaches that led to remarkable success."
              image={whoweare}
            />
            <CaseStudyCard
              title="Strategic Business Growth"
              description="Learn about our strategies that contributed to significant business growth."
              image={whoweare}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Consulting;
