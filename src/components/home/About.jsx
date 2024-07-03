export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-center">
          <div className="w-full overflow-hidden rounded-lg lg:order-last">
            <img
              alt=""
              src={`https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
            />
          </div>

          <div className="">
            <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

            <p className="mt-4 text-gray-600">
              Welcome to [Golf Company Name], your premier destination for
              quality golf equipment, apparel, and accessories. Since [Year], we
              have been dedicated to enhancing your golfing experience with
              top-notch products and expert advice.
              <br /> <br /> Our extensive selection caters to golfers of all
              skill levels, ensuring you find the perfect gear to improve your
              game. Our knowledgeable team offers personalized services,
              including club fittings and swing analysis, to help you make
              informed decisions.
              <br />
              <br /> We are committed to fostering a vibrant golfing community
              through events, tournaments, and clinics. Discover the [Golf
              Company Name] difference and elevate your game with us. Visit our
              store or shop.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
