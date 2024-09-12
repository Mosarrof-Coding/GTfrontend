import Hero from "../components/home/Hero";
import Newes_letter from "../components/Newes_letter/Newes_letter";
import Our_story from "../components/home/Our_story";
import ClubShop from "../components/Shop/ClubShop";
import Blog_home from "../components/Blog_club/Blog_home";
import Member_Ship from "../components/memberShip/Member_Ship";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Our_story />
      <ClubShop />
      <Blog_home />
      <Member_Ship />
      <Newes_letter />
    </>
  );
}
