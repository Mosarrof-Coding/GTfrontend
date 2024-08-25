/* eslint-disable react/prop-types */
export default function Tags({ tag }) {
  return (
    <>
      <h6 className="inline-block py-0.5 px-1.5 lg:px-2 bg-[#4490a18d] hover:bg-[#4490a1] text-white capitalize rounded cursor-pointer font-medium text-xs sm:text-sm md:text-base transition-all duration-300">
        {tag?.name}
      </h6>
    </>
  );
}
