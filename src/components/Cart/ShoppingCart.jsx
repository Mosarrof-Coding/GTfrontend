/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiDelete, FiMinus, FiPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ShoppingCart = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/shops/${id}?populate=*`
  );
  const datam = data?.attributes;
  const [count, setCount] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 1 ? count - 1 : 1);
  };

  const sbtotal = datam?.Price * count;
  const couponDiscount = isCouponApplied ? sbtotal * 0.2 : 0;
  const finalPrice = sbtotal - couponDiscount;

  const handleApplyCoupon = () => {
    if (couponCode === "moss") {
      setIsCouponApplied(true);
    }
  };

  return (
    <section className="bg-gray-100 padd">
      <div className="contizer">
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Shopping Cart</h1>
        <form action="">
          <div className="bg-white shadow-md rounded-lg p-6">
            <table className="min-w-full text-left border-y border-gray-300">
              <thead>
                <tr className="">
                  <th className="py-2">Image</th>
                  <th className="py-2">Products</th>
                  <th className="py-2">Unit Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                  <td className="py-2 text-red-400">Delete</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">
                    <img
                      src={
                        datam?.image?.data?.attributes?.url ||
                        "https://via.placeholder.com/100"
                      }
                      alt={datam?.name || "Product Image"}
                      className="w-12 py-4"
                    />
                  </td>

                  <td className="py-2">{datam?.name}</td>
                  <td className="py-2">${datam?.Price}</td>
                  <td className="py-2">
                    <ul className="flex items-center border w-fit">
                      <li
                        className="py-2 px-4 bg-gray-50 border-r cursor-pointer"
                        onClick={decrement}
                      >
                        <FiMinus />
                      </li>
                      <li className="py-2 px-4 bg-gray-50 border-r">{count}</li>
                      <li
                        className="py-2 px-4 bg-gray-50 cursor-pointer"
                        onClick={increment}
                      >
                        <FiPlus />
                      </li>
                    </ul>
                  </td>
                  <td className="py-2">${sbtotal.toFixed(2)}</td>
                  <td className="py-2">
                    <FiDelete color="red" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
              <div className="coupon flex gap-4 items-center">
                <input
                  type="text"
                  className="border rounded py-2 px-4 w-fit"
                  placeholder={`Enter coupon = ${"moss"}`}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <input
                  type="button"
                  className="text-white border rounded px-4 py-2 w-fit bg-blue-500 hover:bg-blue-600"
                  value="Apply Coupon Code"
                  onClick={handleApplyCoupon}
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Update Cart
              </button>
            </div>
          </div>

          <div className="subtotal w-[280px] sm:w-[480px] lg:w-[540px] bg-white rounded-xl mt-4 lg:mt-8 p-2 lg:p-6 shadow-lg flex flex-col gap-8 ms-auto">
            <ul className="flex gap-4 justify-between border-b">
              <li>Subtotal</li>
              <li>${sbtotal.toFixed(2)}</li>
            </ul>
            <ul className="flex gap-4 justify-between border-b">
              <li>Total</li>
              <li>${finalPrice.toFixed(2)}</li>{" "}
            </ul>
            <Link
              to={`/checkout`}
              className="text-white border rounded px-4 py-2 w-fit bg-blue-500 hover:bg-blue-600 ms-auto"
            >
              Proceed to Checkout
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShoppingCart;
