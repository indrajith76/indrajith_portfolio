import React, { useContext } from "react";
import html from "../../assest/icons/html.png";
import css from "../../assest/icons/css.png";
import Bootstrap from "../../assest/icons/Bootstrap.png";
import Tailwind from "../../assest/icons/Tailwind.png";
import mui from "../../assest/icons/mui.png";
import javascript from "../../assest/icons/javascript.png";
import reactjs from "../../assest/icons/reactjs.png";
import php from "../../assest/icons/php.png";
import reactBootstrap from "../../assest/icons/reactBootstrap.png";
import firebase from "../../assest/icons/firebase.png";
import expressjs from "../../assest/icons/expressjs.png";
import nodejs from "../../assest/icons/nodejs.png";
import mongodb from "../../assest/icons/mongodb.png";
import Figma from "../../assest/icons/Figma.png";
import git from "../../assest/icons/git.png";
import gitHub from "../../assest/icons/gitHub.png";
import vscode from "../../assest/icons/vscode.png";
import ps from "../../assest/icons/ps.png";
import ai from "../../assest/icons/ai.png";
import camtasia from "../../assest/icons/camtasia.png";
import { AuthContext } from "../../contexts/AuthProvider";

const skills = [
  { name: "Html", image: html },
  { name: "Css", image: css },
  { name: "Bootstrap", image: Bootstrap },
  { name: "Tailwind", image: Tailwind },
  { name: "Material UI", image: mui },
  { name: "React Bootstrap", image: reactBootstrap },
  { name: "Javascript", image: javascript },
  { name: "React js", image: reactjs },
  { name: "php", image: php },
  { name: "firebase", image: firebase },
  { name: "express js", image: expressjs },
  { name: "node js", image: nodejs },
  { name: "mongodb", image: mongodb },
  { name: "Figma", image: Figma },
  { name: "git", image: git },
  { name: "gitHub", image: gitHub },
  { name: "vscode", image: vscode },
  { name: "Photoshop", image: ps },
  { name: "illustrator", image: ai },
  { name: "camtasia", image: camtasia },
];

const Skills = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <section className="select-none pointer-events-none mb-40">
      <h2 className="text-4xl md:text-6xl font-semibold text-slate-700">
        My Skills
      </h2>
      <p className="border-b-8 w-28 ml-8 md:ml-32 border-primary"></p>
      <div className="mt-10 grid lg:flex flex-wrap justify-center grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 ">
        {skills.map((skill, idx) => (
          <div className="hover:shadow-lg p-3" key={idx}>
            <img className="mx-auto lg:w-[100px]" src={skill.image} alt="" />
            <h4 className={`text-center hidden md:block font-semibold ${isDark ? "text-slate-300":"text-slate-800"}`}>
              {skill.name.toUpperCase()}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
