import golf from "../../assets/about/golf.png";
import birdie from "../../assets/about/birdie.png";
import award from "../../assets/about/award.png";
import golf_cart from "../../assets/about/golf-cart.png";
export default function Join_us() {
  return (
    <>
      {/* Why join us */}
      <div className="padd bg-yellow-200">
        <div className="contizer">
          <div className="mx-auto text-center flex flex-col gap-2 md:gap-4">
            <h5 className="text-base lg:text-xl font-medium text-rose-600">
              WHY JOIN US
            </h5>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              Come & join our Golf Club
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-3 xl:gap-6 pt-8">
            <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
              <img
                src={golf}
                alt="golf"
                className="w-10 md:w-12 lg:w-14 xl:w-16"
              />
              <span className="border"></span>
              <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                Golf Courses
              </h4>
              <p>Founded by a team of professional Golf players of USA club.</p>
            </div>
            <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
              <img
                src={birdie}
                alt="birdie"
                className="w-10 md:w-12 lg:w-14 xl:w-16"
              />
              <span className="border"></span>
              <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                Green Fields
              </h4>
              <p>Founded by a team of professional Golf players of USA club.</p>
            </div>
            <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
              <img
                src={award}
                alt="award"
                className="w-10 md:w-12 lg:w-14 xl:w-16"
              />
              <span className="border"></span>
              <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                Tournaments
              </h4>
              <p>Founded by a team of professional Golf players of USA club.</p>
            </div>
            <div className="cards bg-gray-100 py-8 px-2 rounded-lg flex flex-col gap-2 md:gap-3 lg:gap-4">
              <img
                src={golf_cart}
                alt="golf_cart"
                className="w-10 md:w-12 lg:w-14 xl:w-16"
              />
              <span className="border"></span>
              <h4 className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
                Our Caddies
              </h4>
              <p>Founded by a team of professional Golf players of USA club.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
