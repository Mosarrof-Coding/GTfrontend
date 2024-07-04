/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
export default function Login() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-center lg:col-span-7 xl:col-span-6">
          <div className="w-full sm:w-[576px]">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login
            </h1>

            <form action="#" className="mt-8 min-w-full flex flex-col gap-4">
              <div className="">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  username
                </label>

                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Type your user name"
                  className="mt-1 py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Type your user password"
                  className="mt-1 py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                />
              </div>
              <p className="text-right">forgot Password?</p>

              <button className="inline-block rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Login
              </button>

              <div className="w-full flex flex-col gap-4 mt-6 justify-center">
                <p>Or Login using</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white"
                  >
                    <FaGoogle size={18} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
