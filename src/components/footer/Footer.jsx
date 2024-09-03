/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-slate-500 bg-slate-100">
        <div className="contizer">
          <div className="border-t border-slate-200 py-4 sm:py-8 lg:py-12 text-base">
            <div className="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
              <div
                className="col-span-2 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <Link
                  className="mb-6 whitespace-nowrap text-lg md:text-xl lg:text-2xl leading-6 text-[#DC2626] font-black"
                  to="/"
                >
                  <span className="pb-2 sm:pb-4 lg:pb-6 inline-block">
                    G🏐LF
                  </span>
                </Link>
                <p className="hidden md:block text-sm lg:text-base">
                  Discover premium golf experiences and connect with fellow golf
                  enthusiasts. Enhance your game with expert tips and exclusive
                  membership benefits.
                </p>
                <p className="block md:hidden text-sm">
                  Discover premium golf experiences and connect with fellow golf
                  enthusiasts.
                </p>
              </div>

              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-medium text-slate-700"
                  id="footer-about"
                >
                  About
                </h3>
                <ul className="text-sm md:text-base">
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/about"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/our-team"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/training-schedule"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Training Schedule
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/events"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-services"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-medium text-slate-700"
                  id="footer-services"
                >
                  Services
                </h3>
                <ul className="text-sm md:text-base">
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/service"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Online Reservation
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/testimonials"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Testimonial
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/contact"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2 hidden md:block"
                aria-labelledby="footer-resources"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-medium text-slate-700"
                  id="footer-resources"
                >
                  Resources
                </h3>
                <ul className="text-sm md:text-base">
                  <li className="mb-2 leading-6">
                    <Link
                      to="/blog"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/faq"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      FAQ's
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/gallery"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Our Gallery
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-social"
              >
                <h3
                  className="pb-2 sm:pb-4 lg:pb-6 text-base font-medium text-slate-700"
                  id="footer-social"
                >
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 py-4 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} G🏐LF. All Rights Reserved by
            EnvyTheme.
          </p>
        </div>
      </footer>
    </>
  );
}
