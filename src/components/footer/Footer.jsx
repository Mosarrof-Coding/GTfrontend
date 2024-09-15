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
      <footer className="w-full text-slate-500 bg-slate-50">
        <div className="contizer">
          <div className="flex flex-wrap justify-between gap-4 md:gap-6 xl:gap-16 mx-auto py-4 sm:py-8 lg:py-12 text-base tracking-wide">
            <div
              className="max-w-full lg:max-w-[480px]"
              aria-labelledby="footer-header"
            >
              <Link
                className="whitespace-nowrap text-lg md:text-xl lg:text-2xl leading-6 text-[#DC2626] font-black"
                to="/"
              >
                <span className="pb-1 inline-block">G🏐LF</span>
              </Link>
              <p className="text-sm lg:text-base">
                Discover premium golf experiences and connect with fellow golf
                enthusiasts. Enhance your game with expert tips and exclusive
                membership benefits.Discover premium golf experiences and
                connect with fellow golf enthusiasts.
              </p>
            </div>
            {/* Company */}
            <nav
              className="col-span-1 md:col-span-4 lg:col-span-2 w-fit"
              aria-labelledby="footer-about"
            >
              <h3
                className="mb-2 text-base font-semibold text-slate-700"
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
            <nav className="w-fit" aria-labelledby="footer-services">
              <h3
                className="mb-2 text-base font-semibold text-slate-700"
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
            <nav className="w-fit" aria-labelledby="footer-resources">
              <h3
                className="mb-2 text-base font-semibold text-slate-700"
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
            <nav className="w-fit" aria-labelledby="footer-social">
              <h3
                className="pb-2 text-base font-semibold text-slate-700"
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
