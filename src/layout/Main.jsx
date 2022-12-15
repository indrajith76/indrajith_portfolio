import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
