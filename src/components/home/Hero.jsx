import { Link } from "react-router-dom";
import banner from "../../../public/gbanner.jpg";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="bg-black/10 relative">
      <img src={banner} alt="" />
      <div className="section absolute left-0 top-0 right-0 bottom-0 grid place-items-center px-[15px]">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold  text-white">
            Welcome to GalfTimes
          </h2>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-300 block md:mt-2 lg:mt-3">
            Elevate Your Game with Premium
          </h1>
          <p className="mt-1 sm:mt-2 lg:mt-4 lg:px-16 text-gray-200 text-sm md:text-lg lg:text-xl font-normal">
            Discover top-quality clubs, apparel, and accessories designed to
            enhance every swing. Join the community of golfers who trust us for
            their journey from tee to green.
          </p>
          <Link
            to=""
            className="inline-block mt-8 sm:mt-12 md:mt-16 rounded bg-red-600 px-4 md:px-6 lg:px-8 pt-2 pb-1 md:pt-3 md:pb-2 lg:pt-4 lg:pb-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none"
          >
            SHOPE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
