import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function ThankU() {
  return (
    <section className="section">
      <div className="contizer">
        <div className="heading text-center max-w-[760px] mx-auto pb-8">
          <h2 className="text-2xl font-semibold my-2">Thank You</h2>
          <h3 className="text-5xl font-medium mb-5">💗</h3>
          <p>
            Lorem ipsum dolor sit, amet consec elit. Amet officia
            atqueexercitationem excepturi ut ullam? Velit adipisci enim
            aspernatur soluta laudantium incidunt sunt assumenda, doloremque
            exercitationem ipsam nulla, perspiciatis repellendus architecto
            quasi expedita, reprehenderit accusantium atque. Debitis minus
            praesentium aspernatur, aut dolorem provident corrupti, ea animi
            quod optio voluptatibus iste temporibus veritatis magni, repudiandae
            natus atque rerum expedita minima nequscipit blanditiis fuga?
            Blanditiis deleniti facere soluta ut itaque, quam nam vitae vero, ea
            dolor mollitia?
          </p>
          <Link
            to={"/service"}
            className="px-8 pt-2 pb-[6px] bg-green-500 rounded-md hover:bg-green-600 text-white inline-block transition-all duration-300 my-8 uppercase"
          >
            Purchase more
          </Link>
        </div>
      </div>
    </section>
  );
}
