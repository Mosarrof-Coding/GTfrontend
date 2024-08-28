import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="min-h-[56vh] sm:min-h-[62vh] md:min-h-[39vh] lg:min-h-[64vh] xl:min-h-[50vh] 2xl:min-h-[60vh] grid place-items-center">
      <div className="text-center w-fit mx-auto">
        <h2 className="w-fit flex items-center gap-2 text-black text-xl lg:text-3xl font-semibold">
          <span className="text-3xl text-red-400">404</span>{" "}
          <span className="animate-pulse">Page not Found</span>
        </h2>
        <Link
          to="/"
          className="inline-block text-[#14BA83] hover:text-[#0c7451] mt-2 lg:mt-4 text-xl"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
