import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReceptionistSideBar from "./ReceptionistSideBar";

const ReceptionistHome = () => {
  return (
    <>
      <ReceptionistSideBar />
      <div className="home">
        <h1>Receptionist HOME</h1>
      </div>
    </>
  );
};

export default ReceptionistHome;
