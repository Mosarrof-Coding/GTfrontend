/* eslint-disable react/prop-types */
export default function UserComments({
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  user,
}) {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <button className="text-base sm:text-sm md:text-lg font-semibold text-gray-950 tracking-wide uppercase flex items-center gap-1">
          <IoIosArrowRoundBack size={24} className="mb-0.5" />
          <span> Next Post</span>
        </button>
        <button className="text-base sm:text-sm md:text-lg font-semibold text-gray-950 tracking-wide uppercase flex items-center gap-1">
          <span> Preev Post</span>
          <IoIosArrowRoundForward size={24} className="mb-0.5" />
        </button>
      </div>
      <div className="">
        <h4 className="text-base sm:text-sm md:text-lg xl:text-xl font-semibold py-2 sm:py-3 lg:pb-4 border-b-2 border-gray-300">
          <span className="text-red-600">{2}</span> Comments
        </h4>
        <div className="flex gap-2 lg:gap-4 pt-4 lg:pt-8">
          <picture>
            <img
              src={user}
              alt=""
              className="w-12 md:w-20 aspect-square rounded-lg bg-pink-400"
            />
          </picture>
          {/* user comments */}
          <div className="">
            <ul className="flex flex-col gap-2 lg:gap-4 border-b-2 border-gray-200 pb-4 lg:pb-8">
              <li className="font-bold text-base sm:text-sm lg:text-lg">
                Name: {"Texas"}
              </li>
              <small>date: {"September 12, 2023 at 10:35 am"}</small>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex
                magni sunt cumque modi accusamus totam cupiditate necessitatibus
                corrupti voluptatem!
              </p>
              <button className="pt-1 pb-0.5 px-2 sm:px-3 lg:px-4 bg-green-950 rounded-sm sm:rounded w-fit text-xs lg:base font-medium text-white hover:bg-green-900 transition-all duration-300 leading-[1] sm:leading-[1.2] lg:leading-[1.5]">
                REPLY
              </button>
            </ul>
            <div className="flex gap-2 lg:gap-4 pt-4 lg:pt-8">
              <picture>
                <img
                  src={user}
                  alt=""
                  className="w-8 lg:w-10 aspect-square rounded bg-rose-400"
                />
              </picture>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li className="font-bold text-base sm:text-sm lg:text-lg">
                  Name: {"Moss"}
                </li>
                <small>date: {"September 12, 2023 at 2:35 pm"}</small>
                <p className="text-gray-500">Thanks</p>
                <button className="pt-1 pb-0.5 px-2 sm:px-3 lg:px-4 bg-green-950 rounded-sm sm:rounded w-fit text-xs lg:base font-medium text-white hover:bg-green-900 transition-all duration-300 leading-[1] sm:leading-[1.2] lg:leading-[1.5]">
                  REPLY
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Leave a Reply */}
      <div className="leave">
        <h4 className="text-base sm:text-sm md:text-lg xl:text-xl font-semibold text-red-800 py-4 lg:py-8">
          Leave a Reply
        </h4>
        <h6 className="text-xs text-gray-400 mb-2">
          Your emLeave a Reply ail address will not be published. Required
          fields are marked *
        </h6>
        <form action="" className="flex flex-col gap-4">
          <div className="field">
            <h6 className="block text-sm lg:text-base font-normal">
              Comment *
            </h6>
            <textarea
              name=""
              required
              id=""
              rows={4}
              placeholder="Leave your comment"
              className="p-1 sm:p-1.2 lg:p-2 border focus:outline-blue-400 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="field w-full">
              <label
                htmlFor="name"
                className="block text-sm lg:text-base font-normal"
              >
                Name *
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="name"
                className="p-1 sm:p-1.2 lg:p-2 border focus:outline-blue-400 w-full"
              />
            </div>
            <div className="field w-full">
              <label
                htmlFor="email"
                className="block text-sm lg:text-base font-normal"
              >
                Email *
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="email"
                className="p-1 sm:p-1.2 lg:p-2 border focus:outline-blue-400 w-full"
              />
            </div>
          </div>
          <div className="field">
            <label
              htmlFor=""
              className="block text-sm lg:text-base font-normal"
            >
              Website
            </label>
            <input
              type="url"
              name="website"
              placeholder="Enter your website URL"
              className="p-1 sm:p-1.2 lg:p-2 border focus:outline-blue-400 w-full"
            />
          </div>
          <div className="field flex gap-3 mt-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value="checkbox"
              required
              className="mb-[1px]"
            />
            <label htmlFor="checkbox" className="cursor-pointer">
              Your email address will not be published. Required fields are
              marked *
            </label>
          </div>

          <input
            type="submit"
            value={"Post Comment"}
            className="inline-block w-full sm:w-auto py-1 md:py-2 lg:py-3 px-4 mt-4 md:mt-8 lg:mt-10 text-sm font-medium text-white bg-rose-600 border border-rose-600 rounded-md transition duration-300 hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-600 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
