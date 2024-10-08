import { useEffect, useState } from "react";
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
  const mobMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  // header act
  const [act, setAct] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.floor(window.scrollY);
      if (currentScrollY < prevScrollY) {
        setAct(false);
      } else {
        setAct(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`flex items-center border-b border-slate-200 shadow-lg shadow-slate-700/5 ${
        act
          ? "absolute left-0 top-0 w-full bg-white"
          : "fixed w-full left-0 z-50 bg-white/90 mybounce"
      }`}
    >
      <div className="contizer border-b-1 relative z-20 w-full after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative">
          <nav
            className={`flex md:py-1 items-center justify-between font-medium text-slate-700`}
          >
            {/* <!-- Brand logo --> */}
            <Link
              className={`flex items-center gap-1 text-xl md:text-2xl lg:text-3xl text-[#DC2626] font-black focus:outline-none lg:flex-1`}
              to="/"
            >
              <span className="inline-block">G🏐LF</span>
            </Link>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={mobMenu}
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
              className={`fixed left-0 top-0 z-[-1] w-full justify-center overscroll-contain bg-white/90 px-8 font-medium transition-all duration-1000 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "backdrop-blur-sm w-full h-screen py-16 overflow-hidden"
                  : "transition-all duration-500 h-0 overflow-hidden"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-1 lg:py-4 transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/"
                  onClick={mobMenu}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-1 lg:py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/service"
                  onClick={mobMenu}
                >
                  <span>Member Ship</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-1 lg:py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/blog"
                  onClick={mobMenu}
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-1 lg:py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/testimonials"
                  onClick={mobMenu}
                >
                  <span>Testimonial</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={accHndle}
                  className="flex items-center py-1 lg:py-4 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4 cursor-pointer relative group"
                >
                  Profile
                  <GoChevronDown size={20} />
                  <ul
                    className={`absolute top-full bg-white shadow-lg w-32 py-3 rounded-md flex flex-col border-t-4 border-red-600 group-hover:opacity-100 ${
                      active ? "group-hover:flex visible" : "hidden invisible"
                    } cursor-default z-30`}
                  >
                    <Link
                      to="/signup"
                      className="text-sm text-gray-600 hover:text-blue-500 hover:bg-slate-200 transition-all duration-300 py-1.5 px-2 lg:px-4"
                      onClick={mobMenu}
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/login"
                      className="text-sm text-gray-600 hover:text-blue-500 hover:bg-slate-200 transition-all duration-300 py-1.5 px-2 lg:px-4"
                      onClick={mobMenu}
                    >
                      Login
                    </Link>
                  </ul>
                </Link>
              </li>
              <div className="flex items-center lg:ml-4">
                <li>
                  <Link
                    to="/checkout"
                    className="relative inline-flex h-8 w-8 items-center justify-center rounded text-base lg:text-xl pr-2"
                    onClick={mobMenu}
                  >
                    🛒
                    <span className="absolute -top-2 -right-1 inline-flex items-center justify-center gap-1 rounded-full border-2 border-purple-600 bg-pink-500 px-1 text-xs font-semibold text-white">
                      {cart.length}
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
