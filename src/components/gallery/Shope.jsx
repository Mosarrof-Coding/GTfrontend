import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import RangeSlider from "../Range_slider/RangeSlider";
import Art from "../ArtPage/Art";
import LoadingDots from "../LoadingDots";

export default function Shope() {
  const pgShop = "Shop";
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/shops?populate=*`
  );

  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("Default");
  const [search, setSearch] = useState("");

  const showProducts = () => {
    // Filter data based on the search input
    const filteredProducts = data?.filter((product) =>
      product.attributes.name.toLowerCase().includes(search.toLowerCase())
    );
    setSortedData(filteredProducts || []);
  };

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let sorted;
      if (sortOrder === "Low_to_High") {
        sorted = [...data].sort(
          (a, b) => a.attributes.Price - b.attributes.Price
        );
      } else if (sortOrder === "High_to_Low") {
        sorted = [...data].sort(
          (a, b) => b.attributes.Price - a.attributes.Price
        );
      } else if (sortOrder === "A to Z") {
        sorted = [...data].sort((a, b) =>
          a.attributes.name.localeCompare(b.attributes.name)
        );
      } else if (sortOrder === "Z to A") {
        sorted = [...data].sort((a, b) =>
          b.attributes.name.localeCompare(a.attributes.name)
        );
      } else {
        sorted = data;
      }
      setSortedData(sorted);
    }
  }, [sortOrder, data]);

  if (loading)
    return (
      <div className="contizer mt-16">
        <LoadingDots />
      </div>
    );
  if (error)
    return (
      <div className="contizer mt-16 text-2xl text-red-600">
        Something went wrong!
      </div>
    );

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
    <>
      <Art pgShop={pgShop} />
      <section className="padd bg-yellow-200">
        <div className="contizer products grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-10">
          <div className="md:col-span-8">
            {/* sort */}
            <div className="productSort flex justify-between items-center gap-4 flex-wrap">
              <div className="result text-base md:text-xl font-semibold">
                Showing all{" "}
                <span className="text-rose-500">{sortedData.length || 0}</span>{" "}
                Result
              </div>
              <select
                name=""
                id=""
                className="p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg border focus:outline-none"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option className="font-semibold " value="Default">
                  Default Sorting
                </option>
                <option className="font-semibold " value="Low_to_High">
                  Sort by Price: Low to High
                </option>
                <option className="font-semibold " value="High_to_Low">
                  Sort by Price: High to Low
                </option>
                <option className="font-semibold " value="A to Z">
                  Sort by Name: A to Z
                </option>
                <option className="font-semibold " value="Z to A">
                  Sort by Name: Z to A
                </option>
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
                      <Link
                        to={`/shopingCart/${datam.id}`}
                        className="cmnBtn mt-2"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-4">
            {/* search functionality */}
            <div className="search w-full flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Products"
                className="w-full p-1 sm:p-2 lg:p-3 rounded-l-lg border-none focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <input
                type="button"
                name=""
                id=""
                value="Search"
                className="p-1 sm:p-2 lg:p-3 px-4 sm:w-[100px] md:w-28 lg:w-32 xl:w-36 text-white shadow bg-red-600 hover:bg-red-700 focus:outline-none active:bg-red-500 cursor-pointer rounded-r-lg"
                onClick={showProducts}
              />
            </div>

            {/* categories */}
            <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Categories
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>
              {Object.entries(categoryCounts).map(([categoryName, count]) => (
                <li
                  className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base"
                  key={categoryName}
                >
                  <span className="inline-block cursor-pointer">
                    {categoryName}
                  </span>
                  <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center text-xs">
                    {count}
                  </span>
                </li>
              ))}
            </ul>

            {/* pricing */}
            <div className="range mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Price Range
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>
              <RangeSlider />
            </div>

            <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Top rated products
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>
              <div className="flex flex-col gap-4">
                {/* Top by high price */}
                {data.map((datam) => {
                  const price = datam.attributes.Price;
                  const isOnSale = price > 90;
                  const rating = () => {
                    if (price > 90 && price < 100) {
                      return "⭐⭐";
                    } else if (price > 100 && price < 150) {
                      return "⭐⭐⭐";
                    } else if (price > 150 && price < 200) {
                      return "⭐⭐⭐⭐";
                    } else {
                      return "⭐⭐⭐⭐⭐";
                    }
                  };
                  return (
                    isOnSale && (
                      <div
                        className="flex items-center p-1 sm:p-2 lg:p-3 gap-2 sm:gap-4"
                        key={datam.id}
                      >
                        <Link to={`/shop/products/${datam.id}`}>
                          <img
                            src={datam.attributes.image.data?.attributes.url}
                            alt={datam.attributes.name}
                            className="w-16 lg:w-20 border hover:border-gray-400 p-1"
                          />
                        </Link>
                        <div className="texst">
                          <li className="pName capitalize">
                            {datam.attributes.name}
                          </li>
                          <li className="rating">{rating()}</li>
                          <ul className="Valu flex items-center gap-4">
                            <li className="faceValue inline-block text-rose-500 font-medium">
                              <del>
                                {price} <small>$</small>
                              </del>
                            </li>
                            <li className="saleValue inline-block text-blue-600">
                              {(price - price * 0.18).toFixed(0)}
                              <small>$</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
