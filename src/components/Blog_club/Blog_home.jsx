/* eslint-disable react/no-unescaped-entities */
import bghm1img from "../../assets/blog-large4.jpg";
import bghm2img from "../../assets/blog-large3.jpg";
import bghmUser from "../../assets/user.jpg";
import { Link } from "react-router-dom";
export default function Blog_home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="section">
      <div className="contizer">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 sm:gap-3 lg:gap-4 xl:gap-12">
          <div>
            <h4 className="text-sm lg:text-base tracking-wider py-1 lg:py-1.5">
              OUR NEWS & INSIGHTS
            </h4>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
              The Golf Club Blog
            </h2>
          </div>
          <p className="w-full ms-auto lg:text-xl text-gray-600 leading-8 xl:leading-9 tracking-wide">
            Welcome to our blog, where golf's more than just a game—it's a way
            of life. Here, we blend professional insight with a modern twist,
            offering you the latest in golf-style tips, deep dives into the
            lives of our favorite legendary golfers, and intriguing stories from
            around the globe. Perfect for those looking to refine their style on
            the course or simply indulge in a little bit of golf culture.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 sm:gap-3 lg:gap-4 xl:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8 py-4 lg:py-8 xl:py-14">
            <div className="overflow-hidden rounded-lg">
              <img
                src={bghm1img}
                alt="bghm1img"
                className="h-full scale-[1.1] w-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between gap-4 sm:gap-8 py-4">
              <div className="flex flex-col justify-center gap-1 sm:gap-2 lg:gap-4">
                <h6 className="text-sm lg:text-base text-[#5d6024]">
                  Tournaments
                </h6>
                <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Tournaments Golfing Gear Guru: Essential Equipment and
                  Accessories
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={bghmUser}
                    alt="bghmUser"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className=""> by</span>
                </div>
              </div>
              <div> 📆 {formattedDate}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8 py-4 lg:py-8 xl:py-14">
            <div className="overflow-hidden rounded-lg">
              <img
                src={bghm2img}
                alt="bghm2img"
                className="h-full scale-[1.1] w-full object-cover "
              />
            </div>
            <div className="w-full flex flex-col justify-between gap-4 sm:gap-8 py-4">
              <div className="flex flex-col justify-center gap-1 sm:gap-2 lg:gap-4">
                <h6 className="text-sm lg:text-base text-[#5d6024]">Players</h6>
                <h3 className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold">
                  From Tee to Green: A Comprehensive Guide to Course
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={bghmUser}
                    alt="bghmUser"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className=""> by</span>
                </div>
              </div>
              <div> 📆 {formattedDate}</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/shop" className="cmnBtn inline-block">
            Read Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
