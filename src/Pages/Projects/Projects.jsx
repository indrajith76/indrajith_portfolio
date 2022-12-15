import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaTasks } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const { isDark } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://indrajith-portfolio-server-side.vercel.app/projects")
      .then((data) => setProjects(data.data));
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="mb-40">
      <h2 className="text-4xl md:text-6xl font-semibold text-slate-700">
        Projects
      </h2>
      <p className="border-b-8 w-28 ml-5 md:ml-[108px] border-primary"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projects?.map((project) => (
          <div
            key={project._id}
            className={`border rounded-lg shadow-lg p-5 ${
              isDark ? "border-primary hover:shadow-primary" : ""
            }`}
          >
            <div className="h-44 mb-5 overflow-hidden">
              <img
                className="hover:cursor-pointer hover:scale-y-125 hover:scale-x-125 duration-500"
                src={project.cardImg}
                alt=""
              />
            </div>
            <h4
              className={`text-xl font-semibold ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {project.projectName} - <small>{project.type}</small>
            </h4>
            <div className="flex gap-2 flex-wrap mt-2">
              <p
                className={`text-md ${
                  isDark ? "text-slate-300" : "text-slate-700"
                } font-semibold`}
              >
                Technology :
              </p>
              {project?.technology?.map((tech) => (
                <span
                  className={`border px-2 py-1 rounded-xl text-xs  ${
                    isDark ? "border-primary text-slate-300" : "text-slate-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
              <a href={project?.liveLink}>
                <button className="w-full justify-center flex items-center gap-3 py-2 rounded-lg bg-primary text-white">
                  <FaRegEye />
                  Live Website
                </button>
              </a>
              <Link to={`/projects/${project?._id}`}>
                <button className="w-full justify-center flex items-center gap-3 py-2 rounded-lg bg-primary text-white">
                  <FaTasks />
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
