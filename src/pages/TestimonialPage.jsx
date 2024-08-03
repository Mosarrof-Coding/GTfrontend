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
      <div className="container section text-2xl text-yellow-400 pt-14">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="container section text-2xl text-red-600 pt-14">
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
    <section className="section py-8 md:py-12 lg:py-16 overflow-x-hidden">
      <div className="container">
        <div className="heading text-center max-w-[560px] mx-auto pb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold my-2">
            Testimonials
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600">
            Swinging Success Stories on the Green. Discover the passion and
            dedication that drives our golf community forward.
          </h3>
        </div>

        <div className="max-w-[1120px] mx-auto">
          <Slider {...sliderSettings}>
            {data.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="mx-auto px-4">
                  <div className="max-w-14 mx-auto mb-1 rounded-md overflow-hidden">
                    <img
                      src={`https://res.cloudinary.com/dokkpior6/image/upload/${testimonial.attributes.medel.data.attributes.url}`}
                      alt="medel"
                      className="w-full h-auto"
                    />
                  </div>
                  <h6 className="font-bold text-indigo-600 mb-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="text-sm text-black">Award:</span>{" "}
                    {testimonial.attributes.win}
                  </h6>
                  <p className="text-center font-light text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
                    {testimonial.attributes.Description}
                  </p>
                  <div className="flex items-center gap-4 max-w-fit mx-auto my-6">
                    <div className="max-w-16 rounded-md overflow-hidden">
                      <img
                        src={`https://res.cloudinary.com/dokkpior6/image/upload/${testimonial.attributes.image.data[0].attributes.url}`}
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
    </section>
  );
}
