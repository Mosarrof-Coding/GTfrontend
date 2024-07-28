import { Link } from "react-router-dom";
import gAboutImg from "../../assets/gAbout.jpg";

export default function About() {
  return (
    <section className="section bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-center">
          <div className="w-full overflow-hidden rounded-lg lg:order-last">
            <img
              alt="About us"
              src={gAboutImg}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              About Us
            </h2>

            <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Welcome to{" "}
              <strong>
                <a href="#" className="text-red-600 hover:underline">
                  Albion Club
                </a>
              </strong>
              , your premier destination for quality golf equipment, apparel,
              and accessories. Since 24019, we have been dedicated to enhancing
              your golfing experience with top-notch products and expert advice.
              <br /> <br /> Our extensive selection caters to golfers of all
              skill levels, ensuring you find the perfect gear to improve your
              game. Our knowledgeable team offers personalized services,
              including club fittings and swing analysis, to help you make
              informed decisions.
              <br />
              <br /> We are committed to fostering a vibrant golfing community
              through events, tournaments, and clinics. Discover the Albion Club
              difference and elevate your game with us. Visit our store or shop
              online today.
            </p>

            <Link
              to=""
              className="mt-8 inline-block rounded bg-red-600 px-8 py-2 md:py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
