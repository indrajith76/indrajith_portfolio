import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const Contact = () => {
  const form = useRef();
  const { isDark } = useContext(AuthContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dxcy1y7",
        "template_rcc6u5e",
        form.current,
        "tkHhC4dMFhrhrwXaE"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error(error.text);
          console.log(error);
        }
      )
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-semibold text-slate-700">
        Contact Me
      </h2>
      <p className="border-b-8 w-28 ml-20 md:ml-[200px] border-primary"></p>
      <div className="flex justify-center mt-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`w-full md:w-[80%] lg:w-[40%] border p-5 md:p-10 rounded-md shadow-md ${
            isDark ? "border-primary shadow-primary" : ""
          }`}
        >
          <label className={`block ${isDark ? "text-slate-300" : "text-slate-700"}`} htmlFor="user_name">
            Name
          </label>
          <input
            className="block border w-full h-10 rounded-lg my-3 px-3"
            type="text"
            id="user_name"
            name="user_name"
            required
            placeholder="Enter you name"
          />
          <label className={`block ${isDark ? "text-slate-300" : "text-slate-700"}`} htmlFor="user_email">
            Email
          </label>
          <input
            className="block border w-full h-10 rounded-lg my-3 px-3"
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Enter your email"
          />
          <label
            className={`block ${isDark ? "text-slate-300" : "text-slate-700"}`}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="block border w-full my-3 rounded-lg pt-2 px-2"
            name="message"
            id="message"
            placeholder="Write your message ..."
            rows="5"
          />
          <div className="flex justify-center"></div>
          <input
            className="block mx-auto mt-4 bg-primary text-2xl py-2 px-5 rounded-lg text-white"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
