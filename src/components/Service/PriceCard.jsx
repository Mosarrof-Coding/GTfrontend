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
      <div className="container section text-2xl text-yellow-400">
        Loading....
      </div>
    );
  if (error)
    return (
      <div className="container section pt-14 text-2xl text-red-600">
        Something went wrong...!
      </div>
    );

  // Add to cart
  const addToCart = (item) => {
    setCart([item]);
    navigate("/checkout");
  };

  return (
    <>
      {data.map((datam) => (
        <div
          key={datam.id}
          className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
        >
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              {datam.attributes.Package_type}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              {datam.attributes.Service_name}
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {datam.attributes.Price}$
              </strong>

              <span className="text-sm font-medium text-gray-700">/year</span>
            </p>

            <button
              type="button"
              className="mt-4 block rounded border border-red-600 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-red-700 focus:outline-none sm:mt-6 cursor-pointer"
              onClick={() => addToCart(datam)}
            >
              Get Started
            </button>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              {datam.attributes.Features.split("\n").map((feature, index) => (
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
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
