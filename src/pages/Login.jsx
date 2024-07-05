/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const initialUser = { identifier: "", password: "" };
  const [user, setUser] = useState(initialUser);
  const [eye, setEye] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:1337/api/auth/local`;
      if (user.identifier && user.password) {
        const res = await axios.post(url, {
          identifier: user.identifier,
          password: user.password,
        });
        console.log("post", res.data);
        toast.success("Login successful!");
        // Redirect to a different page or save the user data
      } else {
        toast.error("All fields are required!");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        "This didn't work. Error: " +
          (error.response ? error.response.data.error.message : error.message)
      );
    }
  };

  const eyeChange = () => {
    setEye(!eye);
  };

  return (
    <section className="section">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="container">
        <div className="flex items-center justify-center lg:col-span-7 xl:col-span-6">
          <div className="w-full sm:w-[576px]">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login
            </h1>
            <form
              action="#"
              className="mt-8 min-w-full flex flex-col gap-4"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="identifier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="identifier"
                  name="identifier"
                  placeholder="Type your email or username"
                  className="mt-1 py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.identifier}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={eye ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Type your password"
                    className="py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <div className="absolute right-0 top-0 min-h-full w-6 flex items-center">
                    <span className="view cursor-pointer" onClick={eyeChange}>
                      {eye ? (
                        <FaRegEyeSlash size={18} />
                      ) : (
                        <FaRegEye size={18} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-right">Forgot Password?</p>
              <button
                type="submit"
                className="inline-block rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Login
              </button>
              <p className="my-2">
                If no account, click{" "}
                <strong>
                  <Link to={"/signup"} className=" text-blue-600">
                    Here
                  </Link>
                </strong>{" "}
                for registration.
              </p>
              <div className="w-full flex flex-col gap-4 mt-6 justify-center">
                <p>Or login using</p>
                <div className="flex gap-2">
                  <span className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white">
                    <FaFacebookF size={18} />
                  </span>
                  <span className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white">
                    <FaTwitter size={18} />
                  </span>
                  <span className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 flex items-center justify-center text-white">
                    <FaGoogle size={18} />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
