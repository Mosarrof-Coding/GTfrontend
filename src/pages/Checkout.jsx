import { Link } from "react-router-dom";
import { cartState } from "../context/Context";

export default function Checkout() {
  const { cart, setCart } = cartState();
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <header className="text-center">
              <h1 className="text-xl font-bold text-green-500 sm:text-3xl">
                Checkout
              </h1>
            </header>

            <form className="mt-8 w-full mx-auto">
              {cart.length !== 0 ? (
                cart.map(
                  (item, index) =>
                    index === 0 && (
                      <ul className="" key={item.id}>
                        <li className="flex items-center gap-4">
                          <div>
                            <h4 className="text-sm text-gray-900">
                              {item.attributes.Package_type}
                            </h4>
                            <h3 className="font-bold text-gray-900">
                              {item.attributes.Service_name}
                            </h3>
                          </div>
                        </li>
                        <ul className="mt-2 space-y-2 sm:mt-4">
                          {item.attributes.Features.split("\n").map(
                            (feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-1"
                              >
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
                            )
                          )}
                        </ul>
                        <div className="mt-8 flex border-t border-gray-100 pt-8">
                          <div className="w-full space-y-4">
                            <dl className="space-y-0.5 text-sm text-gray-700">
                              <div className="flex justify-between">
                                <dt>Price</dt>
                                <dd>${item.attributes.Price}</dd>
                              </div>

                              <div className="flex justify-between">
                                <dt>VAT</dt>
                                <dd>
                                  ${Math.ceil(item.attributes.Price * 0.05)}
                                </dd>
                              </div>

                              <div className="flex justify-between">
                                <dt>Discount</dt>
                                <dd>
                                  ${Math.ceil(item.attributes.Price * 0.2)}
                                </dd>
                              </div>

                              <div className="flex justify-between !text-base font-medium border-t">
                                <dt>Total</dt>
                                <dd>
                                  $
                                  {Math.ceil(
                                    item.attributes.Price +
                                      item.attributes.Price * 0.05 -
                                      item.attributes.Price * 0.2
                                  )}
                                </dd>
                              </div>
                            </dl>
                            {/* payment */}
                            <div className="block pt-8">
                              <h4 className="text-xl mb-4 font-medium tex-black">
                                Payments:
                              </h4>
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="Name"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Name
                                  </label>

                                  <input
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    className="mt-1 px-4 py-2 w-full rounded-md border border-gray-200 bg-white text-gray-700 capitalize shadow-sm"
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="Phone"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Phone
                                  </label>

                                  <input
                                    type="tel"
                                    id="Phone"
                                    name="Phone"
                                    className="mt-1 px-4 py-2 w-full rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm"
                                  />
                                </div>

                                <div className="col-span-6">
                                  <label
                                    htmlFor="Email"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Email
                                  </label>

                                  <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 px-4 py-2 w-full rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm"
                                  />
                                </div>
                              </div>
                              {/* method */}
                              <div className="col-span-12 py-6 flex gap-4 items-centerc flex-wrap">
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="cash"
                                    name="payment"
                                    className=""
                                  />
                                  <label
                                    htmlFor="cash"
                                    className="block font-medium text-gray-700"
                                  >
                                    Cash
                                  </label>
                                </div>
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="debit"
                                    name="payment"
                                    className=""
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="debit"
                                    className="block font-medium text-gray-700"
                                  >
                                    Debit Card
                                  </label>
                                </div>
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="master"
                                    name="payment"
                                    className=""
                                  />
                                  <label
                                    htmlFor="master"
                                    className="block font-medium text-gray-700"
                                  >
                                    Master Card
                                  </label>
                                </div>
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="credit"
                                    name="payment"
                                    className=""
                                  />
                                  <label
                                    htmlFor="credit"
                                    className="block font-medium text-gray-700"
                                  >
                                    Credit Card
                                  </label>
                                </div>
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="paypal"
                                    name="payment"
                                    className=""
                                  />
                                  <label
                                    htmlFor="paypal"
                                    className="block font-medium text-gray-700"
                                  >
                                    PayPal
                                  </label>
                                </div>
                                <div className="radogrup flex gap-2 items-center">
                                  <input
                                    type="radio"
                                    id="applepay"
                                    name="payment"
                                    className=""
                                  />
                                  <label
                                    htmlFor="applepay"
                                    className="block font-medium text-gray-700"
                                  >
                                    Apple Pay
                                  </label>
                                </div>
                              </div>
                              <div className="flex justify-end mb-1">
                                <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                                  <p className="whitespace-nowrap text-xs">
                                    {Math.floor(item.attributes.Price * 0.1) !==
                                    0 ? (
                                      <p className="flex items-center">
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="-ms-1 me-1.5 h-4 w-4"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                            />
                                          </svg>
                                        </span>
                                        <span>Discounts Applied</span>
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </p>
                                </span>
                              </div>
                              <div className="flex justify-end">
                                <Link
                                  to={"/thankU"}
                                  onClick={handleCheckout}
                                  className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                >
                                  Confirm Order
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    )
                )
              ) : (
                <h2 className="text-xl font-medium text-red-600 text-center">
                  Ops...!{" "}
                  <span className="text-yellow-400">
                    no Product Available in your Cart 🛒
                  </span>
                </h2>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
