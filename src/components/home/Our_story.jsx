/* eslint-disable react/no-unescaped-entities */
import storryImg from "../../assets/tradition-of-excellence.jpg";
import { Link } from "react-router-dom";
export default function Our_story() {
  return (
    <section className="section">
      <div className="contizer">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8 xl:gap-24">
          <div className="storyImg flex flex-col gap-4 order-2 sm:order-1 relative">
            <div className="w-full sm:w-[80%]">
              <img src={storryImg} alt="Our Story" className="rounded-lg" />
            </div>
            <ul className="w-full sm:w-[220px] xl:w-[280px] py-8 bg-[#e6c772]/90 rounded-lg sm:absolute bottom-6 right-0 flex flex-col justify-center gap-4 text-center">
              <li className="text-2xl lg:text-5xl font-semibold text-white">
                97 +
              </li>
              <li className="text-lg xl:text-xl">Happy Users Around World</li>
            </ul>
          </div>
          <div className="sm:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Our Story
            </h2>
            <p className="lg:text-xl text-gray-600 leading-8 xl:leading-9 tracking-wide">
              Journeying from British greens to Australia's fairways, we, two
              avid golfers, felt a void. Australia, while rich in golfing talent
              and enthusiasm, missed a space where the ethos of traditional
              private golf clubs could thrive digitally. The Albion Club emerged
              from this vision.
            </p>
            <ul className="pl-2 lg:pl-8 flex flex-col gap-4 xl:gap-8 mt-4 lg:mt-8 text-xl font-medium text-yellow-700/60">
              <li>
                ◾ <span className="ml-3">Premium Golf Apparel</span>
              </li>
              <li>
                ◾ <span className="ml-3">Exclusive Content</span>
              </li>
              <li>
                ◾ <span className="ml-3">Golf Membership</span>
              </li>
            </ul>
            <div>
              <Link to="/about" className="cmnBtn inline-block">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
