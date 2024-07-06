import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="section py-8 md:py-12 lg:py-16">
      <div className="container mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Welcome to GalfTimes
            <strong className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#2d355f] block mt-2 lg:mt-3">
              Elevate Your Game with Premium
            </strong>
          </h1>

          <p className="mt-4 text-sm md:text-lg lg:text-xl leading-relaxed">
            Discover top-quality clubs, apparel, and accessories designed to
            enhance every swing. Join the community of golfers who trust us for
            their journey from tee to green.
          </p>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4">
            <Link
              to=""
              className="block w-full rounded bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded px-8 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              to=""
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
