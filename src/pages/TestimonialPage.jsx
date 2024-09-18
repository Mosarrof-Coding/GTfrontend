import Newes_letter from "../components/Newes_letter/Newes_letter";
import Trusted_partnar from "../components/home/Trusted_partnar";
import Art from "../components/ArtPage/Art";
import Testimonial from "../components/Testimonial/Testimonial";

export default function TestimonialPage() {
  const Testimonials = "Testimonials";

  return (
    <>
      <Art pgTestimonial={Testimonials} />
      <Testimonial />
      <Trusted_partnar />
      <Newes_letter />
    </>
  );
}
