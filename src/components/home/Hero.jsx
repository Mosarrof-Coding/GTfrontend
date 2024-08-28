import { Link } from "react-router-dom";
import banner from "../../../public/gbanner.jpg";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="bg-black/10 relative">
      <img src={banner} alt="" />
      <div className="absolute left-0 top-0 right-0 bottom-0 grid place-items-center px-[15px]">
        <div className="mx-auto max-w-[800px] text-center flex flex-col justify-between gap-2 md:flex-none">
          <div className="w-full">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold text-white">
              Welcome to GalfTimes
            </h2>
            <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-300 sm:py-1 md:py-2">
              Elevate Your Game with Premium
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[1] sm:leading-normal tracking-tight sm:tracking-normal">
              Discover top-quality clubs, apparel, and accessories designed to
              enhance every swing. Join the community of golfers who trust us
              for their journey from tee to green.
            </p>
          </div>
          <Link
            to=""
            className="w-fit mx-auto mt-2 sm:mt-8 md:mt-16 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none"
          >
            SHOPE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
