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
      <div className="contizer section text-2xl text-yellow-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="contizer section text-2xl text-red-600">
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
      <section className="section">
        <div className="contizer">
          <div className="heading max-w-[560px] mx-auto pb-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Membership Pricing
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600">
              Dive into our membership tiers designed to match your golfing
              lifestyle. Whether you're looking for casual access to fully
              commit.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-stretch lg:grid-cols-3 gap-4 lg:gap-6">
            {data.map((datam) => (
              <div
                key={datam.id}
                className="divide-y divide-gray-200 rounded-2xl border hover:border-blue-800  transition-all duration-300 border-t-8"
              >
                <div className="p-2.5 md:p-3 lg:p-4 xl:p-5 text-left">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900">
                    {datam.attributes.Package_type}
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="my-0.5 md:my-1 lg:my-2 text-sm sm:text-base md:text-lg text-gray-700">
                    {datam.attributes.Service_name}
                  </p>
                  <p className="">
                    <strong className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      {datam.attributes.Price}$
                    </strong>
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      /year
                    </span>
                  </p>
                  <button
                    type="button"
                    className="mt-1.5 sm:mt-3 lg:mt-5 w-full sm:w-auto rounded border border-rose-600 bg-rose-600 px-6 leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 text-center text-sm sm:text-base md:text-lg font-medium text-white hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer transition-all duration-500"
                    onClick={() => addToCart(datam)}
                  >
                    Join Now
                  </button>
                </div>
                <div className="p-2.5 md:p-3 lg:p-4 xl:p-5 text-left">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900">
                    What's included:
                  </p>
                  <ul className="mt-2 xl:space-y-2">
                    {datam.attributes.Features.split("\n").map(
                      (feature, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4 md:size-5 flex-shrink-0 text-indigo-900"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </span>
                          <span className="inline-block text-sm sm:text-base md:text-lg text-indigo-900">
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
