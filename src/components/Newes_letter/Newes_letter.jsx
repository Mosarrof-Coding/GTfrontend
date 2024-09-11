import subsImg from "../../assets/subscribe.png";
export default function Newes_letter() {
  return (
    <section className=" bg-slate-100 ">
      <div className="contizer section relative">
        <form action="" className="max-w-[800px] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl xl:text-4xl font-bold text-blue-950 mb-2 md:mb-3 lg:mb-4">
            Receive exclusive offers and special{" "}
            <br className="hidden lg:inline-block"></br> news via Email
          </h1>
          <img
            src={subsImg}
            alt="subsImg"
            className="absolute right-4 bottom-0 w-4 sm:w-6 md:w-8 lg:w-10"
          />
          <div className="relative inline-flex items-center w-[290px] sm:w-[320px] md:w-[360] xl:w-[420px] rounded border border-rose-600 overflow-hidden">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-sm sm:text-base lg:text-lg font-medium py-0.5 sm:py-1 lg:py-1.5 px-2 lg:px-4 border-none focus:outline-none w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="text-sm sm:text-base lg:text-lg font-medium text-white py-0.5 sm:py-1 lg:py-1.5 px-2 lg:px-4 bg-rose-600 hover:bg-rose-700 border-none transition-all duration-300 focus:outline-none cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
