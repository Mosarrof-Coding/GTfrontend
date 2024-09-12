import Hero from "../components/home/Hero";
import ServicePage from "./ServicePage";
import TestimonialPage from "./TestimonialPage";
import Newes_letter from "../components/Newes_letter/Newes_letter";
import Our_story from "../components/home/Our_story";
import ClubShop from "../components/Shop/ClubShop";
import Blog_home from "../components/Blog_club/Blog_home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Our_story />
      <ClubShop />
      <Blog_home />
      <ServicePage />
      <TestimonialPage />
      <Newes_letter />
    </>
  );
}
