import { useState, useEffect, useRef } from "react";
const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const priceGap = 30;
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minValue / 1000) * 100}%`;
      progressRef.current.style.right = `${100 - (maxValue / 1000) * 100}%`;
    }
  }, [minValue, maxValue]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.className.includes("range-min")) {
      if (maxValue - value <= priceGap) {
        setMinValue(maxValue - priceGap);
      } else {
        setMinValue(value);
      }
    } else {
      if (value - minValue <= priceGap) {
        setMaxValue(minValue + priceGap);
      } else {
        setMaxValue(value);
      }
    }
  };

  useEffect(() => {
    const slide = Array.from(document.querySelectorAll(".inputContiser input"));
    const handleMouseEnterMin = () => {
      slide[0].style.zIndex = "999";
      slide[1].style.zIndex = "9";
      slide[0].classList.add("red");
      slide[1].classList.remove("red");
    };
    const handleMouseEnterMax = () => {
      slide[1].style.zIndex = "999";
      slide[1].style.zIndex = "999";
      slide[0].style.zIndex = "9";
      slide[0].classList.remove("red");
      slide[1].classList.add("red");
    };
    slide[0].addEventListener("mouseenter", handleMouseEnterMin);
    slide[1].addEventListener("mouseenter", handleMouseEnterMax);
    // Cleanup function to remove event listeners
    return () => {
      slide[0].removeEventListener("mouseenter", handleMouseEnterMin);
      slide[1].removeEventListener("mouseenter", handleMouseEnterMax);
    };
  }, []);

  return (
    <>
      <div className="p-1 sm:p-2 lg:p-3 my-4 flex gap-4 items-center">
        <div className="h-1 w-full bg-gray-200 rounded relative">
          <div
            ref={progressRef}
            className="progressBar h-full bg-[#3d26bd] absolute left-0 right-0 rounded"
          />
          <div className="inputContiser relative bg-white">
            <input
              type="range"
              min="0"
              max="1000"
              value={minValue}
              onChange={handleInputChange}
              className="inputRacer range-min w-full h-1 pointer-events-auto appearance-none absolute z-10"
              style={{ zIndex: minValue >= maxValue ? "999" : "9" }}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={maxValue}
              onChange={handleInputChange}
              className="inputRacer input-max w-full h-1 pointer-events-auto appearance-none absolute z-10"
              style={{ zIndex: maxValue <= minValue ? "999" : "9" }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm sm:text-base p-1 sm:p-2 lg:p-3">
        <button className="px-4 sm:py-1 bg-black text-white">Filter</button>
        <div className="flex gap-8">
          {" "}
          <span>{minValue}$</span>
          <span>{maxValue}$</span>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
