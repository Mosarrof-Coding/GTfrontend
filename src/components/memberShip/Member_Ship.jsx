import { Link } from "react-router-dom";
import memImg from "../../assets/membership.jpg";
export default function Member_Ship() {
  return (
    <section className="padd">
      <div className="max-w-[1230px] mx-auto px-[15px]">
        <div className=" bg-[#e8e498] px-2 sm:px-4 lg:px-8 xl:px-16 py-4 sm:py-8 md:py-12 lg:py-16 rounded-3xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold max-w-[300px] md:max-w-[460px] mx-auto text-center">
            The ACE Membership is your perfect solution!
          </h1>
          <div className="rounded-2xl overflow-hidden my-4 md:my-6 lg:my-8">
            <img src={memImg} alt="memImg" />
          </div>
          <div className="flex flex-wrap justify-between gap-4 sm:gap-6 lg:gap-8 mx-auto">
            <p className="max-w-[600px] text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wider sm:leading-8 lg:leading-10 mx-auto">
              Are you a passionate golfer who can’t justify the expense of
              joining a traditional golf club?{" "}
              <strong>
                Do you find it hard to allocate time for frequent golf rounds?
              </strong>{" "}
              Or do you simply need an official golf handicap?
            </p>
            <Link to={"/service"} className="cmnBtn w-fit self-end">
              Get Startet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
