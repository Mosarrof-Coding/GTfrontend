import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";
import toast, { Toaster } from "react-hot-toast";

export default function Checkout() {
  const { cart, setCart } = cartState();
  const [isLoading, setIsLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "debit",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:1337/api/orders", {
        data: {
          items: cart.map((item) => ({
            id: item.id,
            packageType: item.attributes.Package_type,
            serviceName: item.attributes.Service_name,
            features: item.attributes.Features.split("\n"),
            price: item.attributes.Price,
          })),
          total: cart.reduce((acc, item) => acc + item.attributes.Price, 0),
          name: customerDetails.name,
          phone: customerDetails.phone,
          email: customerDetails.email,
          paymentMethod: customerDetails.paymentMethod,
        },
      });
      if (response.status === 200) {
        setCart([]);
        toast.success("Order placed successfully!");
      } else {
        throw new Error("Failed to process order");
      }
    } catch (error) {
      toast.error("Failed to process order. Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="section">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <header className="text-center">
              <h1 className="text-xl font-bold text-green-500 sm:text-3xl">
                Checkout
              </h1>
            </header>

            <form className="mt-8 w-full mx-auto">
              {cart.length !== 0 ? (
                cart.map((item) => (
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
                            <dd>${Math.ceil(item.attributes.Price * 0.05)}</dd>
                          </div>

                          <div className="flex justify-between">
                            <dt>Discount</dt>
                            <dd>${Math.ceil(item.attributes.Price * 0.2)}</dd>
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
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Name
                              </label>

                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={customerDetails.name}
                                onChange={handleInputChange}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-200 bg-white text-gray-700 capitalize shadow-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Phone
                              </label>

                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={customerDetails.phone}
                                onChange={handleInputChange}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Email
                              </label>

                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={customerDetails.email}
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="cash"
                                checked={
                                  customerDetails.paymentMethod === "cash"
                                }
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="debit"
                                checked={
                                  customerDetails.paymentMethod === "debit"
                                }
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="master"
                                checked={
                                  customerDetails.paymentMethod === "master"
                                }
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="credit"
                                checked={
                                  customerDetails.paymentMethod === "credit"
                                }
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="paypal"
                                checked={
                                  customerDetails.paymentMethod === "paypal"
                                }
                                onChange={handleInputChange}
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
                                name="paymentMethod"
                                value="applepay"
                                checked={
                                  customerDetails.paymentMethod === "applepay"
                                }
                                onChange={handleInputChange}
                              />
                              <label
                                htmlFor="applepay"
                                className="block font-medium text-gray-700"
                              >
                                Apple Pay
                              </label>
                            </div>
                          </div>
                          <button
                            onClick={handleCheckout}
                            disabled={isLoading}
                            className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {isLoading ? "Placing Order..." : "Place Order"}
                          </button>
                          <p className="text-center text-gray-500 text-xs mt-3">
                            or{" "}
                            <Link
                              to="/service"
                              className="text-indigo-600 hover:text-indigo-700 underline"
                            >
                              continue shopping
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </ul>
                ))
              ) : (
                <div className="text-center">
                  <p className="text-xl font-bold text-red-600">
                    Your cart is empty!
                  </p>
                  <Link
                    to="/service"
                    className="text-indigo-600 hover:text-indigo-700 underline"
                  >
                    Browse Services
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
