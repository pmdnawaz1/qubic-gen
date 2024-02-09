'use client';
import React, { useEffect } from 'react';
import { AiOutlineBook, AiOutlineHourglass, AiOutlineTrophy } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';
import Header from '@/components/component/Header';
import Footer from '@/components/component/Footer';

const LearningPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease' });
  }, []);

  return (
    <div>
     <Header />

      <main className="bg-gray-100 m-4">
        {/* Our Courses Section */}
        <section id="our-courses" className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
                <div className="h-2 w-24 bg-[#FFD700] mb-8" />
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                  <p>
                    Explore a variety of programming languages such as JavaScript, Python, and Java.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p>
                    Dive into front-end and back-end web development with HTML, CSS, and frameworks like React and Node.js.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                  <p>
                    Learn data analysis, machine learning, and data visualization techniques using Python and R.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                  <p>
                    Master digital marketing strategies including SEO, SEM, and social media marketing.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <AiOutlineBook className="text-6xl text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Experience Section */}
        <section id="learning-experience" className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">Learning Experience</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
                  <p>
                    Study at your own pace with courses available 24/7 to fit your schedule.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
                  <p>
                    Apply your knowledge with practical projects and real-world scenarios.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                  <p>
                    Learn from industry professionals with years of experience in their respective fields.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                  <p>
                    Engage in interactive quizzes, discussions, and peer-to-peer learning.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <AiOutlineHourglass className="text-6xl text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                  <p>
                    Access high-quality learning materials curated by industry experts.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Career Advancement</h3>
                  <p>
                    Enhance your skills and boost your career prospects with our courses.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                  <p>
                    Join a vibrant learning community and network with like-minded individuals.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Certification</h3>
                  <p>
                    Earn certificates upon course completion to showcase your achievements.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="flex justify-center">
                  <AiOutlineTrophy className="text-6xl text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default LearningPage;
