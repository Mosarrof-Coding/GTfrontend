/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import artImg from "../assets/page-banner.png";
import Newes_letter from "../components/Newes_letter/Newes_letter";
import { TiLocationOutline } from "react-icons/ti";
import { TbMessage2Check } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

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
    <>
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
        <div className="flex flex-col gap-6 lg:gap-8 xl:gap-12">
          <div className="contizer grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="col-span-5 lg:col-span-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Contact Us
              </h2>
              <ul className="flex gap-4 items-center sm:py-2">
                <Link
                  to="/"
                  className="text-sm font-medium text-[#000] hover:text-[#868c19]"
                >
                  Home
                </Link>
                <li className="text-[6px] text-[#868c19]">⚫</li>
                <li className="text-sm font-medium text-[#868c19]">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="col-span-5 lg:col-span-3">
              <img src={artImg} alt="" />
            </div>
          </div>
          <div className="cntcImg py-4 lg:py-12 flex flex-col gap-4 lg:gap-8 xl:gap-14">
            <div className="contizer location grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-2 xl:gap-6">
              <div className="locCard flex flex-col bg-gray-100 lg:gap-5 border rounded-lg text-center p-4 md:p-2 lg:p-8">
                <span className="bg-blue-950 p-2 w-fit rounded-full mx-auto">
                  <TiLocationOutline size={28} color="white" />
                </span>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium">
                  Our Location
                </h3>
                <address>45/15 New alsala Avenew Booston town, Austria</address>
              </div>
              <div className="locCard flex flex-col bg-gray-100 lg:gap-5 border rounded-lg text-center p-4 md:p-2 lg:p-8">
                <span className="bg-blue-950 p-2 w-fit rounded-full mx-auto">
                  <TbMessage2Check size={28} color="white" />
                </span>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium">
                  Our Location
                </h3>
                <address>supportinfo@vesper.com contact@info.com</address>
              </div>
              <div className="locCard flex flex-col bg-gray-100 lg:gap-5 border rounded-lg text-center p-4 md:p-2 lg:p-8">
                <span className="bg-blue-950 p-2 w-fit rounded-full mx-auto">
                  <LuPhoneCall size={28} color="white" />
                </span>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium">
                  Our Location
                </h3>
                <address>
                  <span>+(002) 0106-8710-595 </span>{" "}
                  <span className="block">+(002) 0106-8710-584</span>
                </address>
              </div>
              <div className="locCard flex flex-col bg-gray-100 lg:gap-5 border rounded-lg text-center p-4 md:p-2 lg:p-8">
                <span className="bg-blue-950 p-2 w-fit rounded-full mx-auto">
                  <FaWhatsapp size={28} color="white" />
                </span>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium">
                  Our Location
                </h3>
                <address>
                  <span>+(002) 0106-8710-595 </span>{" "}
                  <span className="block">+(002) 0106-8710-584</span>
                </address>
              </div>
            </div>
            <div className="contizer grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
              <div className="col-span-5 lg:col-span-2">
                <div className="rounded-lg bg-white/90 p-2 lg:p-4">
                  <p className="max-w-xl text-base sm:text-lg">
                    Have Questions About Your Golf Game? We're Here to Help.
                    Reach Out to Our Golf Experts for Assistance and Support.
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
              </div>

              <div className=" col-span-5 lg:col-span-3">
                <form
                  className="space-y-4 rounded-lg md:bg-white/90  md:shadow-lg md:p-4 lg:p-6"
                  onSubmit={postContactData}
                >
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
                        className="w-full p-2 lg:p-3 text-sm border border-gray-200 outline-none focus:border-green-200"
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
                    <button type="submit" className="cmnBtn1 w-full sm:w-fit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newes_letter />
    </>
  );
}
