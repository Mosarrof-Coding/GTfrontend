import Hero from "../components/home/Hero";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ServicePage />
      <BlogPage />
      <ContactPage />
    </>
  );
}
