import Slider from "react-slick";
import useFetch from "../hooks/useFetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artImg from "../assets/page-banner.png";
import { Link } from "react-router-dom";
import Newes_letter from "../components/Newes_letter/Newes_letter";
import Trusted_partnar from "../components/home/Trusted_partnar";

export default function TestimonialPage() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/testimonials?populate=*`
  );

  if (loading)
    return (
      <div className="contizer section text-2xl text-yellow-400">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="contizer section text-2xl text-red-600">
        Something went wrong!
      </div>
    );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="section flex flex-col gap-8 lg:gap-16">
        <div className="contizer grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-14 xl:gap-16">
          <div className="col-span-5 lg:col-span-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Testimonials
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
                Testimonials
              </li>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <img src={artImg} alt="" />
          </div>
        </div>
        <div className="bg-[#ffec8c] p-[15px] lg:p-0 lg:py-[1px]">
          <div className="max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2 xl:gap-12">
            <div className="testimonImg rounded-3xl lg:rounded-none lg:rounded-e-3xl overflow-hidden"></div>
            <div className="px-[15px] py-4 sm:py-6 md:py-8 lg:py-12 xl:py-14">
              <h5 className="text-xl font-medium text-red-500 my-2 lg:my-4">
                Our Testimonials
              </h5>
              <div className="max-w-full lg:max-w-[620px] xl:max-w-[820px] overflow-hidden">
                <Slider {...sliderSettings}>
                  {data.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="testimonial-slide overflow-x-hidden"
                    >
                      <div className="">
                        <div className="max-w-14 mb-1 rounded-md">
                          <img
                            src={
                              testimonial.attributes.medel.data?.attributes.url
                            }
                            alt="medel"
                            className="w-full"
                          />
                        </div>
                        <h6 className="font-medium text-indigo-600 sm:mb-2 lg:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl">
                          Award: {testimonial.attributes.win}
                        </h6>
                        <p className="font-light text-gray-600 text-base md:text-lg lg:text-xl xl:text-2xl">
                          {testimonial.attributes.Description.slice(0, 480)}...
                        </p>
                        <div className="flex items-center gap-4 max-w-fit mt-2 md:mt-4 lg:mt-6">
                          <div className="w-12 lg:w-16 rounded-md overflow-hidden">
                            <img
                              src={
                                testimonial.attributes.image.data?.attributes
                                  .url
                              }
                              alt={testimonial.attributes.AvName}
                              className="w-full h-auto"
                            />
                          </div>
                          <ul className="max-w-fit">
                            <h5 className="text-indigo-800 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                              {testimonial.attributes.AvName}
                            </h5>
                            <h6 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                              {testimonial.attributes.AvDesig}
                            </h6>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Trusted_partnar />
      </section>
      <Newes_letter />
    </>
  );
}
