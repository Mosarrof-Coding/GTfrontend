/* eslint-disable react/prop-types */
export default function ShopFilterPart({
  data,
  categoryCounts,
  RangeSlider,
  Link,
}) {
  return (
    <>
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
        {Object.entries(categoryCounts).map(([categoryName, count]) => (
          <li
            className="border-b p-1 sm:p-2 lg:p-3 flex items-center justify-between text-sm sm:text-base"
            key={categoryName}
          >
            <span className="inline-block cursor-pointer">{categoryName}</span>
            <span className="bg-gray-100 w-6 sm:w-7 lg:w-8 aspect-square rounded-full grid place-items-center min-w-fit">
              {count}
            </span>
          </li>
        ))}
      </ul>
      {/* price fiter */}
      <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
        <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
          Filter by price
          <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
        </h3>
        <RangeSlider />
      </ul>
      <ul className="Categorie mt-2 sm:mt-4 md:mt-6 lg:mt-8 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-lg">
        <h3 className="text-sm sm:text-base lg:text-xl font-semibold p-1 sm:p-2 lg:p-3 inline-block relative">
          Top rated products
          <span className="w-[60%] h-[2px] lg:h-1 bg-black absolute left-1 sm:left-2 lg:left-3 bottom-1"></span>
        </h3>
        <div className="flex flex-col gap-4">
          {/* Top by high price */}
          {data.map((datam) => {
            const price = datam.attributes.Price;
            const isOnSale = price > 90; // Condition for the sale
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
                        <del>${price} </del>
                      </li>
                      <li className="saleValue inline-block text-blue-600">
                        {(price - price * 0.18).toFixed(0)}$
                      </li>
                    </ul>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </ul>
    </>
  );
}
