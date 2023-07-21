import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PatientSideBar from "./PatientSideBar";
import NavBar from "./Navbar";

const PatientHome = () => {
  return (
    <div className="common">
      <NavBar />
      <PatientSideBar />
      <h1>Patient HOME</h1>
    </div>
  );
};

export default PatientHome;
