import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SideBar from "./SideBar";
import NavBar from "./Navbar";

const AdminHome = () => {
  return (
    <div className="common">
      <NavBar />
      <SideBar />
      <h1>ADMIN HOME</h1>
    </div>
  );
};

export default AdminHome;
