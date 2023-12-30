'use client'
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './styles.css'

export function Landing() {
  const [activeLink, setActiveLink] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleScrollTo = (to) => {
    scroll.scrollTo(to, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Handle success, e.g. show a success message to the user
        console.log('Email sent successfully');
      } else {
        // Handle error, e.g. show an error message to the user
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onSetActive={handleSetActive}
          onClick={() => handleScrollTo('home')}
          
          className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'home' ? 'active' : ''}`}
        >
          QubicGen is a IT consulting & Training company based in Ananthapur, India 
        </ScrollLink>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ScrollLink
            to="who_are_we"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onSetActive={handleSetActive}
            onClick={() => handleScrollTo('who_are_we')}
            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'who_are_we' ? 'active' : ''}`}
          >
            Who We Are
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onSetActive={handleSetActive}
            onClick={() => handleScrollTo('services')}
            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'services' ? 'active' : ''}`}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="insights"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onSetActive={handleSetActive}
            onClick={() => handleScrollTo('insights')}
            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'insights' ? 'active' : ''}`}
          >
            Insights
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onSetActive={handleSetActive}
            onClick={() => handleScrollTo('contact')}
            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer ${activeLink === 'contact' ? 'active' : ''}`}
          >
            Contact Us
          </ScrollLink>
        </nav>
      </header>
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                QubicGen IT consulting and Training
              </h1>
              <p className="max-w-[600px] text-black-500 md:text-xl dark:text-black-400">
                Specializing in RPA, UI.Path, .NET, and SQL database services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-black-900 px-8 text-sm font-medium text-black-50 shadow transition-colors hover:bg-black-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-black-50 dark:text-black-900 dark:hover:bg-black-50/90 dark:focus-visible:ring-black-300"
                href="#">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-black-100 dark:bg-yellowBG"
        id="who_are_we">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
              <p
                className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
                Founded in 2022, we are a team of IT professionals dedicated to delivering top-notch RPA, UI.Path,
                .NET, and SQL database services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                With over 10 years of experience in the field, we deliver high-quality IT solutions.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                Our team of experts specialize in RPA, UI.Path, .NET, and SQL database services.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                We pride ourselves on our commitment to customer satisfaction and exceptional service.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                We constantly innovate and adapt to the latest technologies to serve our clients better.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="services">
        <div
          className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Consulting Services</h2>
            <p
              className="max-w-[600px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
              We offer a wide range of consulting services to help you optimize your IT operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>RPA Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                We help businesses automate their processes through Robotic Process Automation (RPA).
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>UI.Path Development</CardTitle>
              </CardHeader>
              <CardContent>Our team of experts can help you develop efficient UI.Path solutions.</CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>.NET Application Development</CardTitle>
              </CardHeader>
              <CardContent>We specialize in developing robust and scalable .NET applications.</CardContent>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>SQL Database Optimization</CardTitle>
              </CardHeader>
              <CardContent>Our team can help you optimize your SQL databases for better performance.</CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-black-100 dark:bg-yellowBG"
        id="training">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Training Programs</h2>
              <p
                className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
                We offer a variety of training programs to help you improve your skills and knowledge.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>RPA Training</CardTitle>
              </CardHeader>
              <CardContent>
                Learn how to implement and manage RPA solutions with our comprehensive training program.
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>UI.Path Training</CardTitle>
              </CardHeader>
              <CardContent>
                Get hands-on experience in developing UI.Path solutions with our expert-led training.
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>.NET Training</CardTitle>
              </CardHeader>
              <CardContent>
                Enhance your .NET application development skills with our in-depth training program.
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>SQL Database Training</CardTitle>
              </CardHeader>
              <CardContent>
                Learn how to optimize SQL databases for better performance with our specialized training.
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="insights">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insights & Resources</h2>
              <p
                className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
                Explore our latest insights, case studies, and whitepapers to stay up-to-date on industry trends and
                best practices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg ">
              <CardHeader>
                <CardTitle>Insight 1</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Insight 1"
                  className="w-full aspect-[1/1] object-cover rounded-lg"
                  height="200"
                  src="/placeholder.svg"
                  width="200" />
                <p className="mt-4">Explore our latest insights on RPA implementation.</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">Read More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Case Study 1</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Case Study 1"
                  className="w-full aspect-[1/1] object-cover rounded-lg"
                  height="200"
                  src="/placeholder.svg"
                  width="200" />
                <p className="mt-4">Read our latest case study on UI.Path development.</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">Read More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Whitepaper 1</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Whitepaper 1"
                  className="w-full aspect-[1/1] object-cover rounded-lg"
                  height="200"
                  src="/placeholder.svg"
                  width="200" />
                <p className="mt-4">Download our latest whitepaper on .NET application development.</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-black-100 dark:bg-yellowBG"
        id="contact">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
              <p
                className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
                Have any questions or need help? Don't hesitate to reach out.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Card className="hover:shadow-lg">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
      <Input
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="h-[150px] w-full p-3 border rounded-md"
        id="message"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-black-500 dark:text-black-400">© IT Company. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy Policy
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
      </nav>
    </footer>
  </>);
}

export default Landing;