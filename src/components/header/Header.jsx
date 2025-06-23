import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartState } from "../../context/Context";
import { GoChevronDown } from "react-icons/go";
import { PiShoppingCartDuotone } from "react-icons/pi";

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
  const [prevScrollY, setPrevScrollY] = useState(null);

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
      className={`flex w-full items-center z-50 bg-white ${
        act
          ? ""
          : "sticky top-0 transition duration-300 shadow-lg shadow-slate-700/5"
      }`}
    >
      <div className="lg:after:hidden after:block after:top-full after:left-0 z-20 after:z-10 after:absolute relative bg-white/90 after:bg-slate-200 lg:backdrop-blur-sm w-full after:w-full after:h-px contizer">
        <nav className="flex justify-between items-center font-medium text-slate-700">
          {/* <!-- Brand logo --> */}
          <Link
            to="/"
            className="flex lg:flex-1 items-center gap-1 focus:outline-none font-black text-[#DC2626] text-xl md:text-2xl lg:text-3xl"
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
            <div className="top-1/2 left-1/2 absolute w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 rounded-full w-9/12 h-0.5 transition-all -translate-y-2 duration-300 transform"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 rounded-full w-6 h-0.5 transition duration-300 transform"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 rounded-full w-1/2 h-0.5 origin-top-left transition-all translate-y-2 duration-300 transform"
              ></span>
            </div>
          </button>
          {/* <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute right-0 top-full h-screen  overscroll-contain bg-white/90 font-medium lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:opacity-100 text-sm sm:text-base ${
              isToggleOpen
                ? "backdrop-blur-sm w-full overflow-hidden transion duration-300"
                : "w-0 transion duration-300 "
            }`}
          >
            <li role="none" className="flex items-stretch pt-6 lg:pt-0">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 px-4 py-1 lg:py-4 focus-visible:outline-none focus:outline-none hover:text-emerald-500 focus:text-emerald-600 transition-colors duration-300"
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
                className="flex items-center gap-2 px-4 py-1 lg:py-4 focus-visible:outline-none focus:outline-none hover:text-emerald-500 focus:text-emerald-600 transition-colors duration-300"
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
                className="flex items-center gap-2 px-4 py-1 lg:py-4 focus-visible:outline-none focus:outline-none hover:text-emerald-500 focus:text-emerald-600 transition-colors duration-300"
                to="/testimonials"
                onClick={mobMenu}
              >
                <span>Testimonial</span>
              </Link>
            </li>
            <li role="none" className="flex items-stretch">
              <Link
                onClick={accHndle}
                className="group relative flex items-center px-4 py-1 lg:py-4 focus-visible:outline-none focus:outline-none hover:text-emerald-500 focus:text-emerald-600 cursor-pointer"
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
                    className="hover:bg-slate-200 px-2 lg:px-4 py-1.5 text-gray-600 hover:text-blue-500 text-sm transition-all duration-300"
                    onClick={mobMenu}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="hover:bg-slate-200 px-2 lg:px-4 py-1.5 text-gray-600 hover:text-blue-500 text-sm transition-all duration-300"
                    onClick={mobMenu}
                  >
                    Login
                  </Link>
                </ul>
              </Link>
            </li>
            {/* cart */}
            <div className="relative flex items-center mx-4 my-1 lg:my-4 w-fit h-fit">
              <Link
                to="/checkout"
                className="inline-block rounded text-base lg:text-xl"
                onClick={mobMenu}
              >
                <PiShoppingCartDuotone size={22} />
              </Link>
              <div className="bottom-[45%] left-[50%] z-10 absolute p-0.5 rounded-full h-fit aspect-square font-semibold text-[10px] text-pink-800">
                {cart.length}
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
