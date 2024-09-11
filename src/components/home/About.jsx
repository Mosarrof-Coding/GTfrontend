import { Link } from "react-router-dom";
import gAboutImg from "../../assets/gAbout.jpg";
import artImg from "../../assets/page-banner.png";
import Newes_letter from "../Newes_letter/Newes_letter";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="about-title">
              <h2 className="about-title-text">About Us</h2>
              <ul className="about-breadcrumbs">
                <Link to="/" className="breadcrumb-home">
                  Home
                </Link>
                <li className="breadcrumb-divider">⚫</li>
                <li className="breadcrumb-current">About Us</li>
              </ul>
            </div>
            <div className="about-image">
              <img src={artImg} alt="Artwork" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-image-portion">
              <div className="image-container">
                <img
                  alt="About us"
                  src={gAboutImg}
                  className="about-main-image"
                />
              </div>
              <Link to="/service" className="cmnBtn lg:hidden inline-block">
                Get Started
              </Link>
            </div>

            <div className="about-description">
              <p className="description-text">
                Welcome to{" "}
                <strong>
                  <a href="#" className="description-link">
                    Albion Club
                  </a>
                </strong>
                , your premier destination for quality golf equipment, apparel,
                and accessories. Since 24019, we have been dedicated to
                enhancing your golfing experience with top-notch products and
                expert advice.
                <br className="hidden lg:block" /> <br /> Our extensive
                selection caters to golfers of all skill levels, ensuring you
                find the perfect gear to improve your game. Our knowledgeable
                team offers personalized services, including club fittings and
                swing analysis, to help you make informed decisions.
                <br className="hidden lg:block" />
                <br /> We are committed to fostering a vibrant golfing community
                through events, tournaments, and clinics. Discover the Albion
                Club difference and elevate your game with us. Visit our store
                or shop online today.
              </p>
              <Link to="/service" className="cmnBtn hidden lg:inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Newes_letter />
    </>
  );
}
