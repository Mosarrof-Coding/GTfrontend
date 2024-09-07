import Hero from "../components/home/Hero";
import Newes_letter from "../components/Newes_letter/Newes_letter";
import BlogPage from "./BlogPage";
import ServicePage from "./ServicePage";
import TestimonialPage from "./TestimonialPage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePage />
      <BlogPage />
      <TestimonialPage />
      <Newes_letter />
    </>
  );
}
