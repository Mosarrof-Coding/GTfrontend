import Newes_letter from "../components/Newes_letter/Newes_letter";
import Trusted_partnar from "../components/home/Trusted_partnar";
import Art from "../components/ArtPage/Art";
import Testimonial from "../components/Testimonial/Testimonial";

export default function TestimonialPage() {
  const Testimonials = "Testimonials";

  return (
    <div className="pt-10 md:pt-12 lg:pt-[62px]">
      <Art pgTestimonial={Testimonials} />
      <Testimonial />
      <Trusted_partnar />
      <Newes_letter />
    </div>
  );
}
