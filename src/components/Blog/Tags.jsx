/* eslint-disable react/prop-types */
export default function Tags({ tag }) {
  return (
    <>
      <h6 className="inline-block px-4 bg-[#4490a1] text-white capitalize rounded cursor-pointer">
        {tag?.name}
      </h6>
    </>
  );
}
