/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container lg:min-h-[96vh] lg:flex lg:items-center">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Wellcome to GalfTimes
            <strong className="font-bold text-[#2d355f] text-5xl block mt-4">
              Elevate Your Game with Premium
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Discover top-quality clubs, apparel, and accessories designed to
            enhance every swing. Join the community of golfers who trust us for
            their journey from tee to green.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
