import { Link } from "react-router-dom";
import artImg from "../../assets/page-banner.png";
import mnn from "../../assets/blogs/shop/shop1.png";
import mnn1 from "../../assets/blogs/shop/shop2.png";
import mnn2 from "../../assets/blogs/shop/shop3.png";
import mnn3 from "../../assets/blogs/shop/shop4.png";
export default function Shope() {
  return (
    <section className="section bg-emerald-50">
      <div className="contizer">
        {/* art */}
        <div className="artPortion grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
          <div className="w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Shop
            </h2>
            <ul className="flex gap-4 items-center sm:py-2">
              <Link
                to="/"
                className="text-sm font-medium text-[#000] hover:text-[#868c19]"
              >
                Home
              </Link>
              <li className="text-[6px] text-[#868c19]">⚫</li>
              <li className="text-sm font-medium text-[#868c19]">Shop</li>
            </ul>
          </div>
          <div className="w-full">
            <img src={artImg} alt="" />
          </div>
        </div>

        {/* contents */}
        <div className="products grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-10 pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-12">
          <div className="md:col-span-8">
            {/* sort */}
            <div className="productSort flex justify-between items-center gap-4 flex-wrap">
              <div className="result text-base md:text-xl font-semibold">
                Showing all {"(6)"} Result
              </div>
              <select
                name=""
                id=""
                className="p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg border focus:outline-none"
              >
                <option value=" Default Sorting">Default Sorting</option>
                <option value="Sort by Avarage Rating">
                  Sort by Avarage Rating
                </option>
                <option value="Sort by Popularity">Sort by Popularity</option>
                <option value="Sort by Latest">Sort by Latest</option>
                <option value="Sort by Price: Low to High">
                  Sort by Price: Low to High
                </option>
                <option value="Sort by Price: High to Low">
                  Sort by Price: High to Low
                </option>
              </select>
            </div>
            {/* products */}
            <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 sm:mt-4 md:mt-6 lg:mt-8 gap-2">
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn1} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn1} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn1} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="cards rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-full">
                  <img src={mnn1} alt="" className="border-2" />
                </div>
                <div className="p-2 sm:p-3 lg:p-4">
                  <h4 className="name">Name: Ball</h4>
                  <h3 className="name">Price: 120$</h3>
                  <button className="w-fit mx-auto mt-1 sm:mt-3 md:mt-4 rounded bg-red-600 px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 text-xs lg:text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 leading-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="search w-full flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Products"
                className="w-full p-1 sm:p-2 lg:p-3 rounded-l-lg border-none focus:outline-none"
              />
              <input
                type="button"
                name=""
                id=""
                value="Search"
                className="p-1 sm:p-2 lg:p-3 px-4 sm:w-[100px] md:w-28 lg:w-32 xl:w-36 text-white shadow bg-red-600 hover:bg-red-700 focus:outline-none active:bg-red-500 cursor-pointer rounded-r-lg"
              />
            </div>
            {/* categories  */}
            <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Categories
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>
              <li className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base">
                <span className="inline-block cursor-pointer">Golf Balls</span>
                <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
                  1
                </span>
              </li>
              <li className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base">
                <span className="inline-block cursor-pointer">Golf Club</span>
                <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
                  1
                </span>
              </li>
              <li className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base">
                <span className="inline-block cursor-pointer">Putters</span>
                <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
                  1
                </span>
              </li>
              <li className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base">
                <span className="inline-block cursor-pointer">T-Shirt</span>
                <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
                  1
                </span>
              </li>
              <li className="p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base">
                <span className="inline-block cursor-pointer">
                  Uncategorized
                </span>
                <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
                  1
                </span>
              </li>
            </ul>
            {/* price fiter */}
            <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Filter by price
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>
              <div className="p-1 sm:p-2 lg:p-3">
                <input type="range" name="" id="" className="w-full" />
              </div>
              <div className="flex justify-between items-center p-1 sm:p-2 lg:p-3">
                <button className="px-4 sm:px-5 md:px-6 lg:px-6 py-1 sm:py-1.5 bg-black text-xs sm:text-sm text-white">
                  Filter
                </button>{" "}
                <p>Price: $60 — $100</p>
              </div>
            </ul>
            <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
                Top rated products
                <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-center p-1 sm:p-2 lg:p-3 gap-2 sm:gap-4">
                  <Link>
                    <img src={mnn1} alt="img" className="w-16 lg:w-20" />
                  </Link>
                  <div className="texst">
                    <li className="pName">{"Golf Clubs"}</li>
                    <li className="rating">⭐⭐⭐⭐</li>
                    <ul className="Valu flex items-center gap-4">
                      <li className="faceValue inline-block">${"120"}</li>
                      <li className="saleValue inline-block">${"100"}</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center p-1 sm:p-2 lg:p-3 gap-2 sm:gap-4">
                  <Link>
                    {" "}
                    <img src={mnn2} alt="img" className="w-16 lg:w-20" />
                  </Link>
                  <div className="texst">
                    <li className="pName">{"Golf Gloves"}</li>
                    <li className="rating">⭐⭐⭐⭐</li>
                    <ul className="Valu flex items-center gap-4">
                      <li className="faceValue inline-block">${"120"}</li>
                      <li className="saleValue inline-block">${"100"}</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center p-1 sm:p-2 lg:p-3 gap-2 sm:gap-4">
                  <Link>
                    {" "}
                    <img src={mnn3} alt="img" className="w-16 lg:w-20" />
                  </Link>
                  <div className="texst">
                    <li className="pName">{"Sports T-Shirt"}</li>
                    <li className="rating">⭐⭐⭐⭐</li>
                    <ul className="Valu flex items-center gap-4">
                      <li className="faceValue inline-block">${"120"}</li>
                      <li className="saleValue inline-block">${"100"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
