import { useState } from "react";
import { Link } from "react-router-dom";
import { cartState } from "../../context/Context";
import { GoChevronDown } from "react-icons/go";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { cart } = cartState();

  const [active, setActive] = useState(false);
  const accHndle = () => {
    setActive(!active);
  };

  return (
    <header className="">
      <div className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav className="flex py-2 items-stretch justify-between font-medium text-slate-700">
            {/* <!-- Brand logo --> */}
            <div>
              <Link
                className="flex items-center gap-1 whitespace-nowrap py-3 text-3xl text-[#DC2626] font-black focus:outline-none lg:flex-1"
                to="/"
              >
                <span className="">G🏐LF</span>
              </Link>
            </div>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/* <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/"
                >
                  <span> Home</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/about"
                >
                  <span>About</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/service"
                >
                  <span>Service</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/blog"
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/testimonials"
                >
                  <span>Testimonial</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/contact"
                >
                  <span>Contact</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={accHndle}
                  className="flex items-center py-4 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4 cursor-pointer relative group"
                >
                  Account
                  <GoChevronDown size={20} />
                  <ul
                    className={`absolute top-full bg-white shadow-lg w-32 py-3 rounded-md flex flex-col border-t-4 border-red-600 group-hover:opacity-100 ${
                      active ? "group-hover:flex visible" : "hidden invisible"
                    } cursor-default`}
                  >
                    <Link
                      to={"/signup"}
                      className="text-sm text-gray-600 hover:text-blue-500 hover:bg-slate-200 transition-all duration-300 py-1.5 px-2 lg:px-4"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to={"/login"}
                      className="text-sm text-gray-600 hover:text-blue-500 hover:bg-slate-200 transition-all duration-300 py-1.5 px-2 lg:px-4"
                    >
                      Login
                    </Link>
                  </ul>
                </Link>
              </li>

              <div className="flex items-center lg:ml-4">
                <li>
                  <Link
                    to={"/checkout"}
                    className="relative inline-flex h-8 w-8 items-center justify-center rounded text-xl"
                  >
                    🛒
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center gap-1 rounded-full border-2 border-purple-600 bg-pink-500 px-1 text-xs text-white">
                      {cart.length}
                      <span className="sr-only"> new emails </span>
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
