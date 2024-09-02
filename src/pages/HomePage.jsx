import Hero from "../components/home/Hero";
import MessageTransport from "../components/Message/MessageTransport";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";
import TestimonialPage from "./TestimonialPage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ServicePage />
      <BlogPage />
      <TestimonialPage />
      <ContactPage />
      <MessageTransport />
    </>
  );
}
