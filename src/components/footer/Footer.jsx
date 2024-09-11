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
            <div className="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-6">
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
              {/* Company */}
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-semibold text-slate-700"
                  id="footer-about"
                >
                  Company
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
                      to="/golf_teams"
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
                      Trainings
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/events"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* The Club */}
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-services"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-semibold text-slate-700"
                  id="footer-services"
                >
                  The Club
                </h3>
                <ul className="text-sm md:text-base">
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/testimonials"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/blog"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/blogs"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Faqs
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/blogs"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Event
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Legal */}
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-resources"
              >
                <h3
                  className="mb-2 sm:mb-4 lg:mb-6 text-base font-semibold text-slate-700"
                  id="footer-resources"
                >
                  Legal
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
                      to="/Terms_conditions"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/Privacy_Policy"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="md:mb-2 leading-6">
                    <Link
                      to="/Contact"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* link */}
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-social"
              >
                <h3
                  className="pb-2 sm:pb-4 lg:pb-6 text-base font-semibold text-slate-700"
                  id="footer-social"
                >
                  Follow Us
                </h3>
                <div className="flex gap-2 sm:gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-emerald-500"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 py-2 md:py-4 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} G🏐LF. All Rights Reserved by
            EnvyTheme.
          </p>
        </div>
      </footer>
    </>
  );
}
