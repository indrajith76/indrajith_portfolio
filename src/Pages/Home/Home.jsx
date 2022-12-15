import React from "react";
import profile from "../../assest/profile.png";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import reactjs from "../../assest/icons/reactjs.png";
import Tailwind from "../../assest/icons/Tailwind.png";
import nodejs from "../../assest/icons/nodejs.png";
import mongodb from "../../assest/icons/mongodb.png";
import Certifications from "../Certifications/Certifications";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="">
      {/* Banner section */}
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="lg:w-[60%]">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-700">
            <p>Hi, I'm</p>
            <p className="mb-5">Indrajith Goswami</p>
            <p className="text-2xl md:text-4xl">
              <Typewriter
                className="text-2xl md:text-4xl"
                cursor
                cursorColor="red"
                options={{
                  strings: [
                    '<span><span style="color: #678ad0;">Front End Developer</span></span>',
                    '<span><span style="color: #678ad0;">ReactJS Developer</span></span>',
                    '<span><span style="color: #678ad0;">MERN Stack Developer</span></span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </h1>
          <p className="text-slate-700 my-5">
            React Front End developer, also Diploma Engineering graduate of
            Computer Technology
            <br /> and passionate about MERN stack with hungriness for learning
            and explore new technology.
          </p>
          <Link to="Resume_Of_Indrajith_Goswami.pdf" target="_blank" download>
            <button className=" border-2 border-primary px-5 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white duration-500 flex items-center gap-1">
              <FaDownload /> Download CV
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-[40%] mt-8 relative">
          <img
            className="w-14 absolute animate-spin md:top-40 md:-left-7"
            style={{ animationDuration: "3s" }}
            src={reactjs}
            alt=""
          />
          <img
            className="w-14 absolute animate-bounce bottom-3 md:bottom-8 right-2 md:right-10"
            style={{ animationDuration: "3s" }}
            src={nodejs}
            alt=""
          />
          <img
            className="w-14 absolute animate-bounce bottom-5 -left-3 md:-left-8"
            style={{ animationDuration: "3s" }}
            src={mongodb}
            alt=""
          />
          <img
            className="w-14 absolute animate-bounce right-1 "
            style={{ animationDuration: "3s" }}
            src={Tailwind}
            alt=""
          />
          <img src={profile} alt="" />
        </div>
      </section>

      {/* About Me section */}
      <About></About>

      {/* skill set */}
      <Skills></Skills>

      {/* Projects section */}
      <Projects></Projects>

      <Contact></Contact>
    </div>
  );
};

export default Home;
