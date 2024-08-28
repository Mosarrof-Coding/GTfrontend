/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const postContactData = (e) => {
    e.preventDefault();
    const contactData = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    };
    axios
      .post(`${import.meta.env.VITE_APP_URL}/api/contacts`, contactData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.success("Form Submitted Successfully");
        }
      })
      .catch(function (error) {
        toast.error("Something went wrong! Please try again.");
        console.error(error);
      });
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-8">
              Contact Us
            </h2>
            <p className="max-w-xl text-base sm:text-lg">
              Have Questions About Your Golf Game? We're Here to Help. Reach Out
              to Our Golf Experts for Assistance and Support.
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="text-lg sm:text-xl lg:2xl font-bold text-pink-600"
              >
                0151 475 4450
              </a>
              <address className="block lg:mt-2 text-base sm:text-lg not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg md:bg-white md:p-8 md:shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={postContactData}>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-200"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-200"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-200"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-1 md:py-2 lg:py-3 px-5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition duration-300 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
