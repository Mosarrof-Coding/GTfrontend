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
      const url = `${import.meta.env.VITE_APP_URL}/api/auth/local`;
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
      <div className="contizer">
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-[576px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Login
            </h1>
            <form className="mt-4 flex flex-col gap-4" onSubmit={handleLogin}>
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
                  className="mt-1 py-1 md:py-1.5 lg:py-2 px-2 md:px-3 xl:px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.identifier}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={eye ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Type your password"
                    className="mt-1 py-1 md:py-1.5 lg:py-2 px-2 md:px-3 xl:px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center">
                    <span
                      className="view cursor-pointer h-full flex items-center px-2"
                      onClick={eyeChange}
                    >
                      {eye ? (
                        <FaRegEyeSlash size={18} />
                      ) : (
                        <FaRegEye size={18} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-right text-sm">
                <Link to="#" className="text-blue-600">
                  Forgot Password?
                </Link>
              </p>
              <button type="submit" className="cmnBtn1">
                Login
              </button>
              <p className="my-2 text-sm text-center">
                If no account, click{" "}
                <strong>
                  <Link to="/signup" className="text-blue-600">
                    Here
                  </Link>
                </strong>{" "}
                for registration.
              </p>
              <div className="w-full flex flex-col gap-4 mt-4">
                <p className="text-sm">Or login using</p>
                <div className="flex gap-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-500 to-purple-500 text-white">
                    <FaFacebookF size={18} />
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-500 to-purple-500 text-white">
                    <FaTwitter size={18} />
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-500 to-purple-500 text-white">
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
