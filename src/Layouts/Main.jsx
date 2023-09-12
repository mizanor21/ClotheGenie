import React from "react";
import Navbar from "../components/SharedPages/Navbar/Navbar";
import Footer from "../components/SharedPages/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
