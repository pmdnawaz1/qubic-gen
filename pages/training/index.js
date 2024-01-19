import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/component/Header";
import Footer from "@/components/component/Footer";
import TestimonialCard from "@/components/component/TestimonialCard";
import consultingBanner from "../../public/images/whowearebanner.png";
import collaborationImage from "../../public/images/mountain.jpg";
import innovationImage from "../../public/images/mountain.jpg";
import strategyImage from "../../public/images/mountain.jpg";
import transformationImage from "../../public/images/mountain.jpg";
import whoweare from "../../public/images/mountain.jpg";

const CourseCard = ({ title, description, image }) => {
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
          <h1 className="text-4xl font-bold mb-4">Training</h1>
          <p className="text-gray-600">
            Elevate your talent with our tailored training solutions.
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
           Our training programs are designed to help students achieve success.
           
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Explore Our Courses</h2>
          <div className="flex flex-wrap justify-around">
            {/* Utilize a CourseCard component for each case study */}
            <CourseCard
              title="Rpa Development"
              description="Learn how our Rpa development services helped businesses achieve success."
              image={whoweare}
            />
            <CourseCard
              title="UI Path Development"
              description="Discover how our UI Path development services helped businesses achieve success."
              image={whoweare}
            />
            <CourseCard
              title="Web Development"
              description="Explore our web development services to help businesses achieve success."
              image={whoweare}
            />
            <CourseCard
              title="Mobile Development"
              description="Explore our mobile development services to help businesses achieve success."
              image={whoweare}
            />
            <CourseCard
              title="Software Development"
              description="Unlock the full potential of our software development services."
              image={whoweare}
            />
            <CourseCard
              title="Data Engineering"
              description="Discover how our data engineering services helped businesses achieve success."
              image={whoweare}
            />
          </div>
        </div>
      </div>
      <TestimonialCard/>
      <Footer />
    </div>
  );
};

export default Consulting;
