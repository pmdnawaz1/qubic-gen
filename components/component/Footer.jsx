
export default function Footer() {
  return (
    <footer className="bg-[#650e32] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">QubicGen</h2>
            <p className="mb-4">Unlock Your Thoughts</p>
            <p className="mb-4">
              We are on a mission to bridge the gap between knowledge and success. Located in the heart of a vibrant
              Anantapur, Andhra Pradesh, India.
            </p>
            <div className="flex items-center mb-4">
              <MapPinIcon className="text-white w-6 h-6" />
              <span className="ml-2">Narayan Thagararam Galaxy, Opp JNTUA, Anantapur</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  Who we are
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  What we do
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  Consulting
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  Trainings
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  Insights
                </a>
              </li>
              <li className="mb-1">
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
              <div className="w-full bg-gray-300 h-24" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="flex items-center">
            <FacebookIcon className="text-white w-6 h-6" />
            <TwitterIcon className="text-white w-6 h-6 ml-4" />
            <InstagramIcon className="text-white w-6 h-6 ml-4" />
          </div>
          <p>© QubicGen | All Rights Reserved 2023</p>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

// export default Footer;