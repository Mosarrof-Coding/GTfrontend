/* eslint-disable react/no-unescaped-entities */
import shopImgab from "../../assets/experience-wrap1.jpg";
import shopImgab2 from "../../assets/experience-wrap2.jpg";
import { Link } from "react-router-dom";
export default function ClubShop() {
  return (
    <section className="padd">
      <div className="contizer">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8 xl:gap-24">
          <div>
            <h4 className="text-base tracking-wider py-1 lg:py-1.5">
              OUR SHOP
            </h4>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              The Golf Club Shop
            </h2>
            <p className="lg:text-xl text-gray-600 leading-8 xl:leading-9 tracking-wide">
              Step onto the course with confidence in our exclusive Lyle and
              Scott collection. It's all about performance, comfort, and that
              timeless look that says you know your game. From polos that keep
              you cool to trousers that move with you, we've curated the best to
              ensure you look as good as you play.
            </p>
            <ul className="pl-2 lg:pl-8 flex flex-col gap-4 xl:gap-8 mt-4 lg:mt-8 text-xl font-medium text-yellow-700/60">
              <li>
                ✔ <span className="ml-3">Pure golf</span>
              </li>
              <li>
                ✔ <span className="ml-3">Pure style.</span>
              </li>
            </ul>
            <div>
              <Link to="/shop" className="cmnBtn inline-block">
                Shop Collection
              </Link>
            </div>
          </div>
          <div className="storyImg relative">
            <div className="w-[80%] ms-auto">
              <img src={shopImgab} alt="shopImgab" className="rounded-lg" />
            </div>
            <ul className="w-[320px] xl:w-[480px] bg-[#e6c772]/90 rounded-lg absolute bottom-0 left-0 flex flex-col justify-center gap-4 text-center">
              <img src={shopImgab2} alt="" className="rounded-lg" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
