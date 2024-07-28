/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import useFetch from "../../hooks/useFetch";
import { cartState } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function PriceCard() {
  const { setCart } = cartState();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/services?populate=*`
  );

  if (loading)
    return (
      <div className="container section text-2xl text-yellow-400 pt-14">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="container section text-2xl text-red-600 pt-14">
        Something went wrong!
      </div>
    );

  // Add to cart
  const addToCart = (item) => {
    setCart([item]);
    navigate("/checkout");
  };

  return (
    <>
      <section className="section py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="heading max-w-[560px] mx-auto pb-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold my-2">
              Our Services
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600">
              Dive into our membership tiers designed to match your golfing
              lifestyle. Whether you're looking for casual access to fully
              commit.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch lg:grid-cols-3 md:gap-8">
            {data.map((datam) => (
              <div
                key={datam.id}
                className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="p-4 md:p-6  text-left">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
                    {datam.attributes.Package_type}
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                    {datam.attributes.Service_name}
                  </p>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                      {datam.attributes.Price}$
                    </strong>

                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      /year
                    </span>
                  </p>

                  <button
                    type="button"
                    className="mt-4 w-full sm:w-auto rounded border border-red-600 bg-red-600 px-6 py-2 md:py-3 text-center text-sm sm:text-base md:text-lg font-medium text-white hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-6 cursor-pointer"
                    onClick={() => addToCart(datam)}
                  >
                    Get Started
                  </button>
                </div>

                <div className="p-4 md:p-6  text-left">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
                    What's included:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {datam.attributes.Features.split("\n").map(
                      (feature, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 flex-shrink-0 text-indigo-700 mt-[1px]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span className="text-sm sm:text-base md:text-lg text-gray-700">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
