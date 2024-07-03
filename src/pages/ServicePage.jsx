/* eslint-disable react/no-unescaped-entities */
import PriceCard from "../components/Service/PriceCard";

export default function ServicePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="heading text-center max-w-[760px] mx-auto pb-8">
          <h2 className="text-2xl font-semibold my-2">Our Services</h2>
          <h3 className="text-xl font-medium text-gray-600">
            Dive into our membership tiers designed to match your golfing
            lifestyle. Whether you're looking for casual access or you're ready
            to fully commit, we've got you covered.
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch lg:grid-cols-3 md:gap-8">
          <PriceCard />
        </div>
      </div>
    </section>
  );
}
