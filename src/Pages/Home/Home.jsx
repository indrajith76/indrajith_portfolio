import React from "react";
import profile from "../../assest/profile.png";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

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
              <FaDownload/> Download CV
            </button>
          </Link>
        </div>
        <div className="w-[40%] mt-8">
          <img src={profile} alt="" />
        </div>
      </section>

      {/* About Me section */}
      <section className="grid grid-cols-2 items-center my-36">
        <div>
          <h2 className="text-6xl font-semibold text-slate-700">About Me</h2>
          <p className="border-b-8 w-28 ml-40 border-primary"></p>
          <div className="mt-10 w-80 text-slate-700">
            <p className="text-lg border-b-2 mb-3 border-primary ">Name: Indrajith Goswami</p>
            <p className="text-lg border-b-2 mb-3 border-primary ">Email: indrajithgoswami@gmail.com</p>
            <p className="text-lg border-b-2 mb-3 border-primary ">Age: 23</p>
            <p className="text-lg border-b-2 mb-3 border-primary ">Nationality: Bangladesh</p>
            <p className="text-lg border-b-2 mb-3 border-primary ">Language: Bangla, English, Hindi.</p>
            <p className="text-lg border-b-2 mb-3 border-primary ">From: Chittagong, Bangladesh.</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-700">
            I'm <span className="text-primary">Indrajith Goswami</span>, <br />A
            Front End Web Developer!
          </h2>
          <p className="text-slate-700 my-5">
            I completed my Diploma Engineering in Computer Technology in 2022
            also I have 3 month's of internship experience. I am able to solve
            front end and mern stack related problems of web development. I have
            a knowledge of how JavaScript, HTML, and CSS work. I worked on some
            intermediate level projects. I am comfortable with Html, CSS,
            Bootstrap, Tailwind, JavaScript, ES6, and React-Bootstrap, and also
            familiar with Php, Firebase, ExpressJS, NodeJS, MongoDB, and Figma.
            I have intermediate knowledge of these tools like VS code, Git,
            Github, Adobe Photoshop, Adobe Illustrator, and Camtasia. I also
            have some interpersonal skills like Communication skills, Team
            Player, Time management, and Leadership.
          </p>
          <p className="text-slate-700">
            My favorite in this programming sector is to fix ‍any Errors.
            Because in every error there is hope to learn something new. I won't
            quit until I can fix the error. In this programming life, I have
            tried to solve all kinds of problems and have succeeded. My policy
            is to stick with it until the problem is solved.
          </p>
        </div>
      </section>

      {/* skill set */}
      <section>
        
      </section>
    </div>
  );
};

export default Home;
