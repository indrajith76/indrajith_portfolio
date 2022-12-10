import React from "react";
import profile from "../../assest/profile.png";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="">
      {/* Banner section */}
      <section className="flex justify-between items-center">
        <div className="w-[60%]">
          <h1 className="text-6xl font-bold text-slate-700">
            <p>Hi, I'm</p>
            <Typewriter
              cursor
              cursorColor="red"
              options={{
                strings: [
                  '<span><span style="color: #678ad0;">Indrajith Goswami</span></span>',
                  '<span><span style="color: #678ad0;">Front End Developer</span></span>',
                  '<span><span style="color: #678ad0;">ReactJS Developer</span></span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
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
        <div className="w-[40%] mt-8">
          <img src={profile} alt="" />
        </div>
      </section>

      {/* About Me section */}
      <About></About>

      {/* skill set */}
      <Skills></Skills>

      {/* Projects section */}
      <Projects></Projects>
    </div>
  );
};

export default Home;
