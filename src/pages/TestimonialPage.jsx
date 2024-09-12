import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";

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
      <div>
        <h5 className="text-xl font-medium text-rose-600 text-center mb-2 mt-4">
          Our Testimonials
        </h5>
        <div className="max-w-[1020px] mx-auto overflow-hidden">
          <Slider {...sliderSettings}>
            {data.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-slide overflow-x-hidden"
              >
                <div className="mx-auto md:px-2 lg:px-4">
                  <div className="max-w-14 mx-auto mb-1 rounded-md">
                    <img
                      src={testimonial.attributes.medel.data?.attributes.url}
                      alt="medel"
                      className="w-full"
                    />
                  </div>
                  <h6 className="font-bold text-indigo-600 sm:mb-2 lg:mb-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="text-sm text-black">Award:</span>{" "}
                    {testimonial.attributes.win}
                  </h6>
                  <p className="text-justify font-light text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
                    {testimonial.attributes.Description.slice(0, 480)}...
                  </p>
                  <div className="flex items-center gap-4 max-w-fit mx-auto mt-2 md:mt-4 lg:mt-6">
                    <div className="w-12 lg:w-16 rounded-md overflow-hidden">
                      <img
                        src={testimonial.attributes.image.data?.attributes.url}
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
    </>
  );
}
