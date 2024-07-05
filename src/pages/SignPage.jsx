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
      const url = `http://localhost:1337/api/auth/local/register`;
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
      <div className="container">
        <div className="flex items-center justify-center lg:col-span-7 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Create an account
            </h1>
            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleSignUp}
            >
              <div className="col-span-6">
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
                  className="mt-1 py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.name}
                  onChange={handleUser}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 py-2 px-4 w-full rounded-md border focus:outline-blue-200 bg-white text-gray-700 shadow-sm"
                  value={user.email}
                  onChange={handleUser}
                />
              </div>

              <div className="col-span-6">
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
                    onChange={handleUser}
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

              <div className="col-span-6">
                <label htmlFor="marketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="marketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md bg-white shadow-sm"
                  />
                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates, and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline">
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
