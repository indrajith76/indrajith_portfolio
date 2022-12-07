import React from "react";
import profile from "../../assest/profile.png";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <h1 className="text-6xl font-bold">
            <Typewriter
              cursor
              cursorColor="red"
              options={{
                strings: [
                  '<span><span style="color: #678ad0;">Welcome</span> Here</span>',
                  '<span><span style="color: #678ad0;">Hello</span> I</span>',
                  "World",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="w-[40%] mt-8">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
