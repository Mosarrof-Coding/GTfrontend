/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom";
import artImg from "../../assets/page-banner.png";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Product_details() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/shops/${id}?populate=*`
  );
  // counter
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 1 ? count - 1 : 1);
  };

  // reviews
  const [activeTab, setActiveTab] = useState("description");
  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // browser result
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

  const datam = data?.attributes;
  const price = datam?.Price;
  const isOnSale = price > 90;
  const imageUrl = datam?.image?.data?.attributes?.url || "placeholder.png";
  // Handling category count
  const categoryCounts = datam?.Category ? { [datam.Category]: 1 } : {};
  const calculateSalePrice = (price) => (price + price * 0.14).toFixed(0);

  const getRating = (price) => {
    if (price > 90 && price < 100) return "⭐⭐";
    else if (price > 100 && price < 150) return "⭐⭐⭐";
    else if (price > 150 && price < 200) return "⭐⭐⭐⭐";
    return "⭐⭐⭐⭐⭐";
  };

  return (
    <section className="bg-[#fff] pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-16">
      {/* Art Portion */}
      <div className="contizer artPortion grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 pb-4 lg:pb-12">
        <div className="w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold capitalize">
            {datam?.name ? datam?.name : "Shop"}
          </h2>
          <ul className="flex gap-4 items-center sm:py-2 text-sm lg:test-base">
            <Link
              to="/"
              className="font-medium text-[#000] hover:text-[#868c19]"
            >
              Home
            </Link>
            <li className="text-[6px] text-[#868c19]">⚫</li>
            <Link
              to={"/shop"}
              className="font-medium text-[#000] hover:text-[#868c19]"
            >
              Shop
            </Link>
            <li className="text-[6px] text-[#868c19]">⚫</li>
            <li className="font-medium text-[#868c19] capitalize">
              {datam?.name ? datam?.name : ""}
            </li>
          </ul>
        </div>
        <div className="w-full">
          <img src={artImg} alt="Shop Banner" />
        </div>
      </div>
      <div className="bg-green-50 sectionart">
        <div className="contizer grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-10 ">
          <div className="col-span-6 md:col-span-8">
            {/* Products List */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="cards rounded-md lg:rounded-lg overflow-hidden transition-all duration-300 col-span-6 sm:col-span-4">
                <div className="relative bg-white shadow-md border border-rose-600 rounded-lg">
                  <div className="w-full p-4 transition-all duration-300 cursor-cell grid place-items-center">
                    <a
                      href={imageUrl}
                      download={datam?.name || "Product_Image"}
                      target="_blunk"
                    >
                      <img
                        src={imageUrl}
                        alt={datam?.name || "Product Image"}
                      />
                    </a>
                  </div>
                  {isOnSale && (
                    <span className="px-4 sm:py-[2px] bg-gray-800 text-white absolute left-2 top-2 rounded-md">
                      Sale
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-8 flex flex-col gap-2">
                <p>⭐⭐⭐⭐⭐ (1 Customer Review)</p>
                <h4 className="capitalize text-blue-900 text-sm md:text-base lg:text-2xl font-medium">
                  {datam?.name}
                </h4>
                <h3 className="name">
                  <ul className="inline-flex items-center gap-3 text-sm md:text-base lg:text-xl font-medium">
                    <del className="text-gray-400">
                      {(datam?.Price + price * 0.14).toFixed(0)}.00$
                    </del>
                    <li>{datam?.Price}.00$</li>
                  </ul>
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {datam?.Description}
                </p>
                <h3 className="text-sm md:text-base lg:text-lg font-medium">
                  Availability: N/A
                </h3>
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-blue-400">
                  Category: {datam?.Category}
                </h3>
                {/* cart btn */}
                <div className="flex items-center flex-wrap gap-4 sm:gap-6">
                  <div className="border flex items-center gap-2 bg-gray-200">
                    <span
                      className="grid place-items-center w-5 md:w-9 aspect-square cursor-pointer"
                      onClick={decrement}
                    >
                      <FiMinus />
                    </span>
                    <input
                      type="digit"
                      name=""
                      id=""
                      value={count}
                      className="pValue text-center w-5 md:w-9 aspect-square bg-transparent border-none focus:border-none focus:outline-none"
                    />

                    <span
                      className="grid place-items-center w-5 md:w-9 aspect-square cursor-pointer"
                      onClick={increment}
                    >
                      <FiPlus />
                    </span>
                  </div>

                  <button className="w-fit rounded bg-red-600 px-4 py-1 sm:py-2 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div>
                {/* Tab Buttons */}
                <div className="flex gap-8 flex-wrap my-2 sm:my-4 lg:my-6">
                  <button
                    className={`tab-button cursor-pointer  ${
                      activeTab === "description"
                        ? "border-b-2 border-blue-600"
                        : "border-gray-600 hover:border-b-2"
                    }`}
                    onClick={() => handleTabClick("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`tab-button cursor-pointer ${
                      activeTab === "review"
                        ? "border-b-2 border-blue-600"
                        : "border-gray-600 hover:border-b-2"
                    }`}
                    onClick={() => handleTabClick("review")}
                  >
                    Reviews (1)
                  </button>
                </div>

                {/* Conditional Content Rendering */}
                <div>
                  {activeTab === "description" && (
                    <p className="description">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, ab vel explicabo culpa, aperiam distinctio
                      doloremque voluptatum nisi voluptatem deserunt voluptas
                      porro, sed voluptatibus. Ea minus tempora iure, delectus
                      deserunt debitis ut corrupti consequuntur! Aspernatur
                      laborum laudantium, neque soluta atque a assumenda error
                      praesentium dolorum temporibus inventore tempore ut sunt
                      aliquid molestiae, illum deserunt eaque provident fugit
                      iure quam veniam.
                    </p>
                  )}
                  {activeTab === "review" && (
                    <div className="review">
                      <p className="leading-5 lg:leading-10">
                        There are no reviews yet.
                      </p>{" "}
                      <form action="" className="flex flex-col gap-2 lg:gap-4">
                        <h5>{`Be the first to review ${"“Jersey”"}`}</h5>
                        <span>
                          Your email address will not be published. Required
                          fields are marked *
                        </span>
                        <div>
                          <p>Rate this item</p>
                          <article>⭐⭐⭐⭐⭐</article>
                        </div>
                        <textarea
                          name=""
                          id=""
                          placeholder="Write a Review"
                          rows={6}
                          className="w-full border p-1 lg:p-2 border-gray-300 focus:outline-cyan-600"
                        ></textarea>
                        <div className="flex flex-col md:flex-row justify-between gap-2 lg:gap-6 items-center w-full">
                          <input
                            type="text"
                            name="text"
                            id=""
                            placeholder="Name"
                            className="w-full md:basis-1/2 p-1 lg:p-2 border border-gray-300 focus:outline-cyan-600"
                          />
                          <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="email"
                            className="w-full md:basis-1/2 p-1 lg:p-2 border border-gray-300 focus:outline-cyan-600"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="inline-block mb-1"
                          />
                          <p>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </p>
                        </div>
                        <input
                          type="submit"
                          value={"Submit"}
                          className="px-4 lg:px-8 py-0.5 lg:py-1 bg-rose-600 hover:bg-rose-800 text-white text-sm lg:text-lg cursor-pointer rounded w-fit"
                        />
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Categories and Top Rated */}
          <div className="col-span-6 md:col-span-4">
            {/* Categories */}
            <ul className="Categorie mt-2 bg-white rounded-lg">
              <h3 className="text-sm font-semibold p-1 relative">Categories</h3>
              {Object.entries(categoryCounts).map(([categoryName, count]) => (
                <li
                  className="border-b p-1 flex items-center justify-between"
                  key={categoryName}
                >
                  <span className="cursor-pointer">{categoryName}</span>
                  <span className="bg-gray-100 w-6 rounded-full grid place-items-center">
                    {count}
                  </span>
                </li>
              ))}
            </ul>

            {/* Top Rated Products */}
            {isOnSale && (
              <ul className="Categorie mt-2 bg-white rounded-lg">
                <h3 className="text-sm font-semibold p-1 relative">
                  Top Rated Products
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center p-2 gap-4">
                    <Link to={`/products/${data.id}`}>
                      <img src={imageUrl} alt={datam?.name} className="w-16" />
                    </Link>
                    <div>
                      <li className="pName capitalize">{datam?.name}</li>
                      <li className="rating">{getRating(price)}</li>
                      <ul className="flex items-center gap-4">
                        <li className="line-through">
                          {calculateSalePrice(price)}.00$
                        </li>
                        <li className="text-lg text-red-600">{price}.00$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
