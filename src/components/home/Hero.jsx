import { Link } from "react-router-dom";
import banner from "../../../public/gbanner.jpg";
/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <section className="hero-section">
      <img src={banner} alt="Golf Banner" className="hero-banner" />
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-tagline">
              <h2 className="tagline-text">Welcome to The Golf Club ~</h2>
            </div>
            <h1 className="hero-title">
              Elevate your Game{" "}
              <span className="hero-subtitle">with Premium</span>
            </h1>
            <p className="hero-description">
              Discover top-quality clubs, apparel, and accessories designed to
              enhance every swing.
              <span className="hero-additional-text">
                Join the community of golfers who trust us for their journey
                from tee to green.
              </span>
            </p>
          </div>
          <Link to="/shop" className="cmnBtn">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
