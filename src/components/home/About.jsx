import Newes_letter from "../Newes_letter/Newes_letter";
import Art from "../ArtPage/Art";
import Testimonial from "../Testimonial/Testimonial";
import Trusted_partnar from "./Trusted_partnar";
import AboutContent from "./AboutContent";
import Join_us from "./Join_us";
import Tea from "./Tea";

export default function About() {
  const pgAbout = "About";
  return (
    <>
      <Art pgAbout={pgAbout} />
      <AboutContent />
      <Join_us />
      <Tea />
      <Testimonial />
      <Trusted_partnar />
      <Newes_letter />
    </>
  );
}
