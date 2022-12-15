import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Certifications from "../Pages/Certifications/Certifications";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://indrajith-portfolio-server-side.vercel.app/projects/${params?.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
