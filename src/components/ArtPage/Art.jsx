/* eslint-disable react/prop-types */
import artImg from "../../assets/page-banner.png";
import { Link } from "react-router-dom";
export default function Art({
  pgName,
  pgContact,
  pgShop,
  pgTestimonial,
  pgMembership,
  pgAbout,
  pgTeams,
  pgTrainings,
  pgPolichy,
  pgConditions,
  compName,
  pgPrdct_name,
}) {
  return (
    <section className="padd bg-white">
      <div className="contizer">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            {(pgName ||
              pgShop ||
              pgContact ||
              pgTestimonial ||
              pgMembership ||
              pgAbout ||
              pgTeams ||
              pgTrainings ||
              pgPolichy ||
              pgConditions ||
              pgPrdct_name) && (
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase">
                {pgName ||
                  pgShop ||
                  pgContact ||
                  pgTestimonial ||
                  pgMembership ||
                  pgAbout ||
                  pgTeams ||
                  pgTrainings ||
                  pgPolichy ||
                  pgConditions ||
                  pgPrdct_name}
              </h2>
            )}
            <ul className="flex gap-4 items-center sm:pt-2 lg:pt-4">
              {/* Breadcrumb navigation */}
              <li>
                <Link
                  to="/"
                  className="text-sm lg:text-base font-medium text-[#000] hover:text-[#bfc80f]"
                >
                  Home
                </Link>
              </li>
              <li className="text-[6px] text-[#bfc80f]">⚫</li>
              {compName && (
                <li>
                  <Link
                    to="/shop"
                    className="text-sm lg:text-base font-medium text-[#000] hover:text-[#bfc80f]"
                  >
                    {compName}
                  </Link>
                </li>
              )}
              {/* Display breadcrumb for the current page */}
              {(pgName ||
                pgShop ||
                pgContact ||
                pgTestimonial ||
                pgMembership ||
                pgAbout ||
                pgTeams ||
                pgTrainings ||
                pgPolichy ||
                pgConditions) && (
                <li className="text-sm lg:text-base font-medium text-[#bfc80f]">
                  {pgName ||
                    pgShop ||
                    pgContact ||
                    pgTestimonial ||
                    pgMembership ||
                    pgAbout ||
                    pgTeams ||
                    pgTrainings ||
                    pgPolichy ||
                    pgConditions}
                </li>
              )}
              {pgPrdct_name && (
                <>
                  <li className="text-[6px] text-[#bfc80f]">⚫</li>
                  <li className="text-sm lg:text-base font-medium text-[#bfc80f] capitalize">
                    {pgPrdct_name}
                  </li>
                </>
              )}
            </ul>
          </div>

          <img src={artImg} alt="artImg" />
        </div>
      </div>
    </section>
  );
}
