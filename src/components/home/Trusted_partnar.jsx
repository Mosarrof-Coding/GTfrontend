import prtnr1 from "../../assets/partnar/partner1.png";
import prtnr2 from "../../assets/partnar/partner2.png";
import prtnr3 from "../../assets/partnar/partner3.png";
import prtnr4 from "../../assets/partnar/partner4.png";
import prtnr5 from "../../assets/partnar/partner5.png";
export default function Trusted_partnar() {
  return (
    <div className="about-description">
      <h5 className="text-sm lg:text-base font-medium text-rose-600 text-center">
        OUR TRUSTED PARTNER
      </h5>
      <ul className="flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-6 lg:mt-8 max-w-[1120px] mx-auto">
        <li className="fit">
          <img src={prtnr1} alt="prtnr1" className="h-5 sm:h-8" />
        </li>
        <li className="fit">
          <img src={prtnr2} alt="prtnr2" className="h-5 sm:h-8" />
        </li>
        <li className="fit">
          <img src={prtnr3} alt="prtnr3" className="h-5 sm:h-8" />
        </li>
        <li className="fit">
          <img src={prtnr4} alt="prtnr4" className="h-5 sm:h-8" />
        </li>
        <li className="fit">
          <img src={prtnr5} alt="prtnr5" className="h-5 sm:h-8" />
        </li>
      </ul>
    </div>
  );
}
