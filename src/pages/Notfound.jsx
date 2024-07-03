import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="section grid place-items-center">
      <div className="text-center">
        <h2 className="max-w-fit text-black text-3xl font-semibold">
          <span className="text-3xl text-red-400">404</span>{" "}
          <span className="animate-pulse">Page not found</span>
        </h2>
        <Link to="/" className=" inline-block text-[#14BA83] mt-4 text-xl">
          Go to Home
        </Link>
      </div>
    </section>
  );
}
