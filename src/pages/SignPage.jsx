/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignPage() {
  const [eye, setEye] = useState(false);
  const eyeChange = () => {
    setEye(!eye);
  };

  // form data
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleUser = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  // data post to strapi
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_APP_URL}/api/auth/local/register`;
      if (user.name && user.email && user.password) {
        const res = await axios.post(url, {
          username: user.name,
          email: user.email,
          password: user.password,
        });
        toast.success("Account created successfully!");
        console.log("post", res);
      } else {
        toast.error("All fields are required!");
      }
    } catch (error) {
      toast.error("This didn't work. Error: " + error.message);
      console.error("Error:", error);
    }
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
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Create an account
            </h1>
            <form
              className="mt-4 grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-6"
              onSubmit={handleSignUp}
            >
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 py-1 md:py-1.5 lg:py-2 px-2 md:px-3 xl:px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.name}
                  onChange={handleUser}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 py-1 md:py-1.5 lg:py-2 px-2 md:px-3 xl:px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.email}
                  onChange={handleUser}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
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
                    onChange={handleUser}
                    required
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

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="marketingAccept"
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="marketingAccept"
                    name="marketing_accept"
                    className="rounded-md bg-white shadow-sm"
                  />
                  <span>
                    I want to receive emails about events, product updates, and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <Link to="#" className="text-blue-600 underline">
                    {" "}
                    terms and conditions{" "}
                  </Link>
                  and{" "}
                  <Link to="#" className="text-blue-600 underline">
                    privacy policy
                  </Link>
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:justify-between">
                <button type="submit" className="cmnBtn1">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="ml-2 text-blue-600 underline">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
