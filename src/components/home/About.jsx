/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import gAboutImg from "../../assets/tradition-of-excellence.jpg";
import artImg from "../../assets/page-banner.png";
import Newes_letter from "../Newes_letter/Newes_letter";
import golf from "../../assets/about/golf.png";
import birdie from "../../assets/about/birdie.png";
import award from "../../assets/about/award.png";
import golf_cart from "../../assets/about/golf-cart.png";
import couple from "../../assets/couple.jpg";
import prtnr1 from "../../assets/partnar/partner1.png";
import prtnr2 from "../../assets/partnar/partner2.png";
import prtnr3 from "../../assets/partnar/partner3.png";
import prtnr4 from "../../assets/partnar/partner4.png";
import prtnr5 from "../../assets/partnar/partner5.png";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="about-title">
              <h2 className="about-title-text">About Us</h2>
              <ul className="about-breadcrumbs">
                <Link to="/" className="breadcrumb-home">
                  Home
                </Link>
                <li className="breadcrumb-divider">⚫</li>
                <li className="breadcrumb-current">About Us</li>
              </ul>
            </div>
            <div className="about-image">
              <img src={artImg} alt="Artwork" />
            </div>
          </div>
          {/* about-content */}
          <div className="about-content max-w-[1420px] mx-auto">
            <div className="about-description">
              <h5 className="text-base lg:text-xl font-medium text-rose-600">
                TRADITION OF EXCELLENCE
              </h5>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold my-3 sm:my-4 lg:my-5 w-full md:max-w-[540px]">
                A Golfer's Sanctuary in Nature's Embrace. Beyond Golf, A
                Lifestyle Awaits.
              </h2>
              <p className="description-text">
                Come join us and be a part of our vibrant golfing community.
                Whether you're an avid golfer or just beginning your journey in
                this captivating sport.
              </p>
              <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col lg:gap-4 md:text-lg xl:text-xl font-normal">
                <li className="flex gap-4 items-center">
                  ◾ <span>Where legends are made, one swing at a time.</span>
                </li>
                <li className="flex gap-4 items-center">
                  ◾
                  <span>Play, relax, repeat - your ultimate golf escape.</span>
                </li>
              </ul>
              <Link to="/service" className="cmnBtn hidden md:inline-block">
                Get Started
              </Link>
            </div>
            <div className="about-image-portion">
              <div className="image-container md:h-full h-auto">
                <img
                  alt="About us"
                  src={gAboutImg}
                  className="about-main-image"
                />
                <div className="customer flex flex-col gap-4 md:gap-8 lg:gap-12 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 absolute left-0 bottom-0 bg-[#bcb583]/95 rounded-lg text-center">
                  <div>
                    <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                      28 +
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                      International Tournaments
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                      167 +
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                      Beautiful acres of forest
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                      29 +
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                      Happy Users Around World
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/service" className="cmnBtn md:hidden inline-block">
                Get Started
              </Link>
            </div>
          </div>
          {/* WHY JOIN US */}
          <div>
            <div className="mx-auto text-center flex flex-col gap-2 md:gap-4">
              <h5 className="text-base lg:text-xl font-medium text-rose-600">
                WHY JOIN US
              </h5>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                Come & join our Golf Club
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-3 xl:gap-6 pt-8">
              <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
                <img
                  src={golf}
                  alt="golf"
                  className="w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <span className="border"></span>
                <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                  Golf Courses
                </h4>
                <p>
                  Founded by a team of professional Golf players of USA club.
                </p>
              </div>
              <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
                <img
                  src={birdie}
                  alt="birdie"
                  className="w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <span className="border"></span>
                <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                  Green Fields
                </h4>
                <p>
                  Founded by a team of professional Golf players of USA club.
                </p>
              </div>
              <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
                <img
                  src={award}
                  alt="award"
                  className="w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <span className="border"></span>
                <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                  Tournaments
                </h4>
                <p>
                  Founded by a team of professional Golf players of USA club.
                </p>
              </div>
              <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
                <img
                  src={golf_cart}
                  alt="golf_cart"
                  className="w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <span className="border"></span>
                <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                  Our Caddies
                </h4>
                <p>
                  Founded by a team of professional Golf players of USA club.
                </p>
              </div>
            </div>
          </div>
          {/* TEE OFF */}
          <div className="about-content max-w-[1320px] mx-auto">
            <div className="about-description">
              <h5 className="text-base lg:text-xl font-medium text-rose-600">
                COME TEE OFF TODAY
              </h5>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold my-3 sm:my-4 lg:my-5 w-full md:max-w-[540px]">
                Where imagination soars beyond the fairways, tee up, connect,
                celebrate life.
              </h2>
              <p className="description-text">
                Come join us and be a part of our vibrant golfing community.
                Whether you're an avid golfer or just beginning your journey in
                this captivating sport.
              </p>
              <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col lg:gap-4 md:text-lg xl:text-xl font-normal">
                <li className="flex gap-4 items-center">
                  ◾
                  <span>
                    Amenities, including shops, restaurants & locker rooms
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  ◾<span>A practice area where golfers can hit balls</span>
                </li>
                <li className="flex gap-4 items-center">
                  ◾<span>Ponds, lakes, streams, or other water features</span>
                </li>
                <li className="flex gap-4 items-center">
                  ◾<span>Mowed areas between the tees and the greens</span>
                </li>
              </ul>
            </div>
            <img alt="couple" src={couple} className="rounded-lg" />
          </div>

          {/* OUR TRUSTED PARTNER  */}
          <div className="about-description">
            <h5 className="text-sm lg:text-base font-medium text-rose-600 text-center">
              OUR TRUSTED PARTNER
            </h5>
            <ul className="flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-6 lg:mt-8 max-w-[1120px] mx-auto">
              <li className="fit">
                <img src={prtnr1} alt="prtnr1" className="h-5 sm:h-8" />
              </li>
              <li className="fit">
                <img src={prtnr2} alt="prtnr2" className="h-5 sm:h-8" />
              </li>
              <li className="fit">
                <img src={prtnr3} alt="prtnr3" className="h-5 sm:h-8" />
              </li>
              <li className="fit">
                <img src={prtnr4} alt="prtnr4" className="h-5 sm:h-8" />
              </li>
              <li className="fit">
                <img src={prtnr5} alt="prtnr5" className="h-5 sm:h-8" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Newes_letter />
    </>
  );
}
