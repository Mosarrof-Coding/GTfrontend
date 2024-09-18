/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import gAboutImg from "../../assets/tradition-of-excellence.jpg";
export default function AboutContent() {
  return (
    <section className="padd">
      <div className="contizer">
        {/* about-content */}
        <div className="about-content max-w-[1420px] mx-auto">
          <div className="about-description">
            <h5 className="text-base lg:text-xl font-medium text-rose-600">
              TRADITION OF EXCELLENCE
            </h5>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold my-3 sm:my-4 lg:my-5 w-full md:max-w-[540px]">
              A Golfer's Sanctuary in Nature's Embrace. Beyond Golf, A Lifestyle
              Awaits.
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
                ◾<span>Play, relax, repeat - your ultimate golf escape.</span>
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
      </div>
    </section>
  );
}
