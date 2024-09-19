/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import gAboutImg from "../../assets/tradition-of-excellence.jpg";
import { useEffect, useRef, useState } from "react";
export default function AboutContent() {
  const [counters, setCounters] = useState({
    tournaments: 0,
    acres: 0,
    users: 0,
  });

  const [hasStarted, setHasStarted] = useState(false); // Track if the animation has started
  const countersRef = useRef(null); // Reference for the whole block

  const startCounting = (key, target, duration) => {
    let start = 0;
    const increment = target / ((duration / 1000) * 60); // Calculates the increment based on target and duration
    const interval = setInterval(() => {
      start += increment;
      setCounters((prev) => ({
        ...prev,
        [key]: Math.floor(start), // Update the corresponding counter state
      }));
      if (start >= target) {
        clearInterval(interval); // Stop counting when the target is reached
        setCounters((prev) => ({ ...prev, [key]: target }));
      }
    }, 60);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Ensure the counting only starts once
          startCounting("tournaments", 28, 3000); // 28 tournaments in 3 seconds
          startCounting("acres", 167, 3000); // 167 acres in 3 seconds
          startCounting("users", 29, 3000); // 29 users in 3 seconds
        }
      },
      { threshold: 0.1 } // Start animation when 10% of the block is visible
    );

    if (countersRef.current) {
      observer.observe(countersRef.current); // Observe the counters container
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, [hasStarted]);
  return (
    <section className="padd">
      <div className="contizer">
        {/* about-content */}
        <div className="about-content max-w-[1420px] mx-auto">
          <div className="about-description">
            <h5 className="text-base lg:text-xl font-medium text-rose-600">
              TRADITION OF EXCELLENCE
            </h5>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold my-3 sm:my-4 lg:my-5 w-full md:max-w-[540px]">
              A Golfer's Sanctuary in Nature's Embrace. Beyond Golf, A Lifestyle
              Awaits.
            </h2>
            <p className="description-text">
              Come join us and be a part of our vibrant golfing community.
              Whether you're an avid golfer or just beginning your journey in
              this captivating sport.
            </p>
            <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col lg:gap-4 md:text-lg xl:text-xl font-normal">
              <li className="flex gap-4 items-center">
                ◾ <span>Where legends are made, one swing at a time.</span>
              </li>
              <li className="flex gap-4 items-center">
                ◾<span>Play, relax, repeat - your ultimate golf escape.</span>
              </li>
            </ul>
            <Link to="/service" className="cmnBtn hidden md:inline-block">
              Get Started
            </Link>
          </div>
          <div className="about-image-portion">
            <div className="image-container md:h-full h-auto">
              <img
                alt="About us"
                src={gAboutImg}
                className="about-main-image"
              />
              <div
                ref={countersRef}
                className="customer flex flex-col gap-4 md:gap-8 lg:gap-12 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 absolute left-0 bottom-0 bg-[#bcb583]/95 rounded-lg text-center"
              >
                <div>
                  <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                    {counters.tournaments} +
                  </h3>
                  <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                    International Tournaments
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                    {counters.acres} +
                  </h3>
                  <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                    Beautiful acres of forest
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl xl:text-4xl text-[#eee] font-semibold">
                    {counters.users} +
                  </h3>
                  <p className="text-sm lg:text-base font-medium text-fuchsia-900">
                    Happy Users Around World
                  </p>
                </div>
              </div>
            </div>
            <Link to="/service" className="cmnBtn md:hidden inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
