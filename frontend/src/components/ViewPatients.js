import React, { useState, useEffect } from "react";
import axios from "axios";
import ReceptionistSideBar from "./ReceptionistSideBar";
import PatientViewListItem from "./PatientViewListItem";
// import PatientAddButton from "./PatientAddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Navbar";

const ViewPatients = () => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    getObjects();
  }, []);

  const getObjects = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/patient-list"
      );
      let data = response.data;
      setObjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="common">
      <NavBar />
      <ReceptionistSideBar />
      <div className="common-border">
        <h1 className="display-4">
          <b>Patient Records</b>
          <hr />
        </h1>
        <h2>Count : {objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <PatientViewListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ViewPatients;
