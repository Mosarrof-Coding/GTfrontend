import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <>
      <footer className="w-full text-slate-500">
        <div className="border-t border-slate-200 bg-slate-100 py-12 text-base">
          <div className="container">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <Link
                  className="mb-6 whitespace-nowrap text-lg md:text-xl lg:text-2xl leading-6 text-[#DC2626] font-black"
                  to="/"
                >
                  <span className="pb-6 inline-block">G🏐LF</span>
                </Link>
                <p className="hidden md:block">
                  Expertly made, responsive, accessible components in React and
                  HTML ready to be used on your website or app. Just copy and
                  paste them on your Tailwind CSS project.
                </p>
                <p className="block md:hidden">
                  Expertly made, responsive, accessible components in React and
                  HTML ready to be used on your website or app.
                </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2 hidden md:block"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/service"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/customers"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/why-us"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Why us?
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/pricing"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2 hidden md:block"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Docs & Help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/documentation"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/training"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Training
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/system-status"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      System status
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/faqs"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      FAQ's
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/help-center"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Help center
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-company-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-company-5-logo"
                >
                  Company
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/about"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About us
                    </Link>
                  </li>
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
                      to="/testimonials"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Testimonial
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/contact"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-legal-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-legal-5-logo"
                >
                  Legal
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/terms"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Terms
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/privacy"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/cookies"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Cookies
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/licenses"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Licenses
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/settings"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
