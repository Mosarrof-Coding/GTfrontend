/* eslint-disable react/no-unescaped-entities */
import couple from "../../assets/couple.jpg";

export default function Tea() {
  return (
    <>
      {/* Tee off */}
      <section className="padd">
        {" "}
        <div className="about-content max-w-[1320px] mx-auto">
          <div className="about-description">
            <h5 className="text-base lg:text-xl font-medium text-rose-600">
              COME TEE OFF TODAY
            </h5>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold my-3 sm:my-4 lg:my-5 w-full md:max-w-[540px]">
              Where imagination soars beyond the fairways, tee up, connect,
              celebrate life.
            </h2>
            <p className="description-text">
              Come join us and be a part of our vibrant golfing community.
              Whether you're an avid golfer or just beginning your journey in
              this captivating sport.
            </p>
            <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col lg:gap-4 md:text-lg xl:text-xl font-normal">
              <li className="flex gap-4 items-center">
                ◾
                <span>
                  Amenities, including shops, restaurants & locker rooms
                </span>
              </li>
              <li className="flex gap-4 items-center">
                ◾<span>A practice area where golfers can hit balls</span>
              </li>
              <li className="flex gap-4 items-center">
                ◾<span>Ponds, lakes, streams, or other water features</span>
              </li>
              <li className="flex gap-4 items-center">
                ◾<span>Mowed areas between the tees and the greens</span>
              </li>
            </ul>
          </div>
          <img alt="couple" src={couple} className="rounded-lg" />
        </div>
      </section>
    </>
  );
}
