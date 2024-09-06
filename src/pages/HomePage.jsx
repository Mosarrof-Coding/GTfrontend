import Hero from "../components/home/Hero";
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
    </>
  );
}
