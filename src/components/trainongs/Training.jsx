import { Link } from "react-router-dom";
import artImg from "../../assets/page-banner.png";
import useFetch from "../../hooks/useFetch";
import Newes_letter from "../Newes_letter/Newes_letter";

export default function Training() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/trainings?populate=*`
  );

  if (loading)
    return <div className="blog-container loading-section">Loading...</div>;
  if (error)
    return (
      <div className="blog-container error-section">Something went wrong!</div>
    );

  return (
    <>
      <section className="sectionart">
        <div className="bg-white">
          <div className="contizer grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Trainings
              </h2>
              <ul className="flex gap-4 items-center sm:py-2">
                <Link
                  to="/"
                  className="text-sm font-medium text-[#000] hover:text-[#868c19]"
                >
                  Home
                </Link>
                <li className="text-[6px] text-[#868c19]">⚫</li>
                <li className="text-sm font-medium text-[#868c19]">
                  Trainings
                </li>
              </ul>
            </div>
            <div className="">
              <img src={artImg} alt="Contact Us Art" />
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-indigo-50">
        <div className="contizer">
          <div className="w-fit mx-auto text-center pb-1 sm:pb-2 lg:pb-3 xl:pb-4">
            <h5 className="text-sm sm:text-base md:text-lg">GOLF LESSONS</h5>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              Our training & course for you
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2 xl:gap-4">
            {data.map((member) => (
              <div className="mt-1 sm:mt-1.5 lg:mt-2" key={member.id}>
                <div className="teamImg border border-yellow-900/20 rounded md:rounded-lg overflow-hidden">
                  <div className="relative group transition-all duration-300">
                    <a
                      href={member.attributes.image?.data.attributes.url}
                      target="_blunk"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={member.attributes.image?.data.attributes.url}
                        alt="Member Image"
                        className="w-full object-cover"
                      />
                    </a>
                    <div className="absolute left-0 top-0 right-0 bottom-0 w-full p-2 flex justify-between flex-col transition-all duration-500 group bg-gradient-to-tr from-white/0 to-black/20">
                      <div className="flex justify-between flex-wrap gap-2 items-center">
                        <div className="flex gap-2">
                          <img
                            src={
                              member.attributes.thumbnail?.data.attributes?.url
                            }
                            alt="train"
                            className="w-12 h-12"
                          />
                          <div>
                            <h4 className="text-base md:text-lg lg:text-xl font-medium text-white w-fit text-nowrap whitespace-nowrap">
                              {" "}
                              {member.attributes?.name}
                            </h4>
                            <small className="text-sm text-white/80 w-fit text-nowrap whitespace-nowrap">
                              {member.attributes?.desig}
                              <span className="px-1">|</span>
                              {member.attributes?.Category}
                            </small>
                          </div>
                        </div>{" "}
                        <span className="text-white font-medium p-1 md:p-2 bg-black group-hover:bg-white group-hover:text-black border border-white/50 inline-block rounded transition-all duration-500">
                          {" "}
                          {member.attributes.Price}$
                        </span>
                      </div>
                      <Link
                        to={`/training-shedule/${member.id}`}
                        className="w-full py-1 md:py-1.5 lg:py-2 bg-green-700/90 hover:bg-green-700 rounded-lg text-white text-sm md:text-base xl:text-lg transition-all duration-500 text-center"
                      >
                        {member.attributes?.link}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newes_letter />
    </>
  );
}
