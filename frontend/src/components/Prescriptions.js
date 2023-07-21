import React from "react";
import CreatePrescription from "./CreatePrescription";
import ManagePrescriptions from "./ManagePrescriptions";
import DoctorSideBar from "./DoctorSideBar";
import NavBar from "./Navbar";

const Prescriptions = () => {
  return (
    <div className="common">
      <NavBar />
      <DoctorSideBar />
      <div className="prescriptions">
        <ManagePrescriptions />
        <CreatePrescription />
      </div>
    </div>
  );
};

export default Prescriptions;
