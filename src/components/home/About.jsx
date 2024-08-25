import { Link } from "react-router-dom";
import gAboutImg from "../../assets/gAbout.jpg";

export default function About() {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-center">
          <div className="w-full overflow-hidden rounded-lg order-1 lg:order-2">
            <img
              alt="About us"
              src={gAboutImg}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              About Us
            </h2>

            <p className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 text-gray-600 text-sm md:text-lg xl:text-xl leading-relaxed">
              Welcome to{" "}
              <strong>
                <a href="#" className="text-red-600 hover:underline">
                  Albion Club
                </a>
              </strong>
              , your premier destination for quality golf equipment, apparel,
              and accessories. Since 24019, we have been dedicated to enhancing
              your golfing experience with top-notch products and expert advice.
              <br className="hidden lg:block" /> <br /> Our extensive selection
              caters to golfers of all skill levels, ensuring you find the
              perfect gear to improve your game. Our knowledgeable team offers
              personalized services, including club fittings and swing analysis,
              to help you make informed decisions.
              <br className="hidden lg:block" />
              <br /> We are committed to fostering a vibrant golfing community
              through events, tournaments, and clinics. Discover the Albion Club
              difference and elevate your game with us. Visit our store or shop
              online today.
            </p>

            <Link
              to=""
              className="mt-4 md:mt-6 lg:mt-8 inline-block rounded bg-red-600 px-8 py-1 md:py-2 lg:py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
