import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DoctorSideBar from "./DoctorSideBar";
import NavBar from "./Navbar";

const DoctorHome = () => {
  return (
    <div className="common">
      <NavBar />
      <DoctorSideBar />
      <h1>Doctor HOME</h1>
    </div>
  );
};

export default DoctorHome;
