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
    <section className="section">
      <div className="container">
        <div className="heading text-center max-w-[560px] mx-auto pb-8">
          <h2 className="text-2xl font-semibold my-2">Testimonials</h2>
          <h3 className="text-xl font-medium text-gray-600">
            Swinging Success Stories on the Green.Discover the passion and
            dedication that drives our golf community forward.
          </h3>
        </div>
        <div className="max-w-[1220px] mx-auto">
          <Slider {...sliderSettings}>
            {data.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="mx-auto px-4">
                  <div className="max-w-12 mx-auto mb-4 rounded-md overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${
                        testimonial.attributes.medel.data[0].attributes.url
                      }`}
                      alt=""
                    />
                  </div>
                  <p className="text-center font-light text-gray-600">
                    {testimonial.attributes.description}
                  </p>
                  <div className="flex items-center gap-4 max-w-fit mx-auto my-6">
                    <div className="max-w-16 rounded-md overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_APP_URL}${
                          testimonial.attributes.image.data[0].attributes.url
                        }`}
                        alt=""
                      />
                    </div>
                    <ul className="max-w-fit">
                      <h5 className="text-indigo-800 font-semibold text-xl">
                        {testimonial.attributes.AvName}
                      </h5>
                      <h6 className="text-gray-400 text-base">
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
