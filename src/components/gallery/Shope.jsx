import { Link } from "react-router-dom";
import artImg from "../../assets/page-banner.png";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import RangeSlider from "../Range_slider/RangeSlider";
import ShopFilterPart from "./ShopFilterPart";

export default function Shope() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/shops?populate=*`
  );

  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("Default");

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      // Ensure data is not null
      let sorted;
      if (sortOrder === "Low_to_High") {
        sorted = [...data].sort(
          (a, b) => a.attributes.Price - b.attributes.Price
        );
      } else if (sortOrder === "High_to_Low") {
        sorted = [...data].sort(
          (a, b) => b.attributes.Price - a.attributes.Price
        );
      } else {
        sorted = data;
      }
      setSortedData(sorted);
    }
  }, [sortOrder, data]);

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

  // Ensure sortedData is initialized correctly
  const categoryCounts = sortedData.reduce((acc, datam) => {
    const categoryName = datam.attributes.Category;
    if (acc[categoryName]) {
      acc[categoryName] += 1;
    } else {
      acc[categoryName] = 1;
    }
    return acc;
  }, {});

  return (
    <section className="pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-16 bg-[#fff]">
      {/* art */}
      <div className="contizer artPortion grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 pb-4 lg:pb-12">
        <div className="w-full sm:ml-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Shop
          </h2>
          <ul className="flex gap-4 items-center sm:py-2 text-sm lg:test-base">
            <Link
              to="/"
              className="font-medium text-[#000] hover:text-[#868c19]"
            >
              Home
            </Link>
            <li className="text-[6px] text-[#868c19]">⚫</li>
            <li className="font-medium text-[#868c19]">Shop</li>
          </ul>
        </div>
        <div className="w-full">
          <img src={artImg} alt="" className="" />
        </div>
      </div>
      <div className="bg-rose-50 sectionart">
        {/* contents */}
        <div className="contizer products grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-10">
          <div className="md:col-span-8">
            {/* sort */}
            <div className="productSort flex justify-between items-center gap-4 flex-wrap">
              <div className="result text-base md:text-xl font-semibold">
                Showing all{" "}
                <span className="text-rose-500">{data?.length || 0}</span>{" "}
                Result
              </div>
              <select
                name=""
                id=""
                className="p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg border focus:outline-none"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="Default">Default Sorting</option>
                <option value="Low_to_High">Sort by Price: Low to High</option>
                <option value="High_to_Low">Sort by Price: High to Low</option>
              </select>
            </div>
            {/* products */}
            <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 sm:mt-4 md:mt-6 lg:mt-8 gap-4">
              {sortedData.map((datam) => {
                const price = datam.attributes.Price;
                const isOnSale = price > 90;

                return (
                  <div
                    className="cards rounded-md lg:rounded-lg overflow-hidden transition-all duration-300 bg-white flex flex-col justify-between group"
                    key={datam.id}
                  >
                    <div className="relative">
                      <Link
                        to={`products/${datam.id}`}
                        className="w-full scale-75 group-hover:scale-[.9] transition-all duration-300 cursor-cell grid place-items-center"
                      >
                        <img
                          src={datam.attributes.image.data?.attributes.url}
                          alt={datam.attributes.name}
                          className=""
                        />
                      </Link>
                      {/*  */}
                      {isOnSale && (
                        <span className="px-4 sm:py-[2px] bg-gray-800 text-white absolute left-2 top-2 rounded-md">
                          Sale
                        </span>
                      )}
                    </div>

                    <div className="p-2 sm:p-3 lg:p-4 bg-gray-400">
                      <h4 className="name capitalize ">
                        <small>Name:</small>{" "}
                        <span className="capitalize text-white">
                          {datam.attributes.name}
                        </span>
                      </h4>
                      <h3 className="name">
                        <small>Price:</small> {datam.attributes.Price}$
                      </h3>
                      <button className="cmnBtn mt-2">Add to Cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-4">
            <ShopFilterPart
              categoryCounts={categoryCounts}
              RangeSlider={RangeSlider}
              data={data}
              Link={Link}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
