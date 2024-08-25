import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto h-auto sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[80vh] flex items-center sm:px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Welcome to GalfTimes
            </h2>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#2d355f] block md:mt-2 lg:mt-3">
              Elevate Your Game with Premium
            </h1>
            <p className="mt-1 sm:mt-2 lg:mt-4 text-sm md:text-lg lg:text-xl leading-relaxed">
              Discover top-quality clubs, apparel, and accessories designed to
              enhance every swing. Join the community of golfers who trust us
              for their journey from tee to green.
            </p>

            <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
              <Link
                to=""
                className="rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                className="rounded px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                to=""
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
