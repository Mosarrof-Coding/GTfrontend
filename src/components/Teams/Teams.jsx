import useFetch from "../../hooks/useFetch";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiInsta360 } from "react-icons/si";
import Newes_letter from "../Newes_letter/Newes_letter";
import Art from "../ArtPage/Art";
import LoadingDots from "../LoadingDots";

export default function Teams() {
  const teams = "Our Teams";
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/teams?populate=*`
  );

  if (loading)
    return (
      <div className="contizer mt-16">
        <LoadingDots />
      </div>
    );
  if (error)
    return (
      <div className="contizer mt-16 text-2xl text-red-600">
        Something went wrong!
      </div>
    );

  return (
    <>
      <Art pgTeams={teams} />
      <section className="padd">
        <div className="contizer">
          <div className="w-fit mx-auto text-center pb-1 sm:pb-2 lg:pb-3 xl:pb-4">
            <h5 className="text-sm sm:text-base md:text-lg">
              PROFESSIONAL TEAM
            </h5>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              Best Instructors to teach you Golf
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
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
                    <div className="flex items-center gap-2 pl-4 py-2 absolute left-0 -bottom-12 transition-all duration-300 group-hover:bottom-4">
                      <span className="bg-white inline-block rounded-full">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook
                            size={28}
                            className="hover:text-blue-600 transition-colors cursor-pointer"
                          />
                        </a>
                      </span>
                      <span className="bg-white inline-block rounded-full">
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillTwitterCircle
                            size={30}
                            className="hover:text-blue-400 transition-colors cursor-pointer"
                          />
                        </a>
                      </span>
                      <span className="bg-white inline-block rounded-full">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiInsta360
                            size={27}
                            className="hover:text-pink-600 transition-colors cursor-pointer"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-1.5 lg:py-2 xl:py-4">
                  <h6 className="text-sm text-gray-700">
                    {member.attributes?.Desig}
                  </h6>
                  <h4 className="text-base md:text-lg lg:text-xl font-medium text-blue-950 pt-1">
                    {" "}
                    {member.attributes?.Name}
                  </h4>
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
