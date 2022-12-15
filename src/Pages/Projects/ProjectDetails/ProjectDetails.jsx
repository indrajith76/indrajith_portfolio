import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./ProjectDetails.css";
import { CgEditBlackPoint } from "react-icons/cg";
import { FaCode, FaRegEye } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProjectDetails = () => {
  const {
    liveLink,
    serverLink,
    clientLink,
    projectName,
    type,
    technology,
    features,
    cardImg,
    othersImg,
  } = useLoaderData();

  const { isDark } = useContext(AuthContext);

  return (
    <div className="mt-5">
      <h2 className="text-4xl font-semibold text-slate-700">Project Details</h2>
      <p className="border-b-8 w-28 ml-[123px] border-primary"></p>
      <div className="mt-3">
        <h2
          className={`block md:hidden text-2xl font-bold ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {projectName} - <span className="text-lg">{type}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 ">
        <div className="h-96 overflow-scroll mainCardImg border">
          <img src={cardImg} alt="" />
        </div>
        <div>
          <h2
            className={`text-3xl hidden md:block font-bold ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {projectName} - <span className="text-xl">{type}</span>
          </h2>
          <div className="mt-6">
            <h4
              className={`text-xl font-semibold ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Technology :
            </h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {technology.map((tech) => (
                <div
                  className={`border px-3 rounded-lg font-semibold ${
                    isDark
                      ? "text-slate-300 border-primary shadow-primary shadow-sm"
                      : "text-slate-700 shadow-lg"
                  }`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h4
              className={`text-xl font-semibold ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Features :
            </h4>
            <ul>
              {features.map((feature) => (
                <li
                  className={`${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  <CgEditBlackPoint className="inline text-primary" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mt-6">
            <a href={liveLink}>
              <button className="w-full py-1 flex items-center justify-center gap-2 bg-primary text-white rounded-lg">
                <FaRegEye /> Live Website
              </button>
            </a>
            <a href={clientLink}>
              <button className="w-full py-1 flex items-center justify-center gap-2 bg-primary text-white rounded-lg">
                <FaCode /> Client Code
              </button>
            </a>
            <a href={serverLink}>
              <button className="w-full py-1 flex items-center justify-center gap-2 bg-primary text-white rounded-lg">
                <FaCode /> Server Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <h4
        className={`text-3xl font-semibold ${
          isDark ? "text-slate-300" : "text-slate-700"
        } mt-5 mb-5`}
      >
        Other views :
      </h4>
      <div className="grid grid-cols-3 gap-5">
        {othersImg.map((img) => (
          <img className="border" src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
