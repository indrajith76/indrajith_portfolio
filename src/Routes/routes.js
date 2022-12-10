import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
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
    ],
  },
]);

export default routes;
