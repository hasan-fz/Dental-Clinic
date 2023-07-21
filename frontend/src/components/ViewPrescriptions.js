import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientSideBar from "./PatientSideBar";
import PrescriptionViewListItem from "./PrescriptionViewListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Navbar";

const ViewPrescriptions = () => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    getObjects();
  }, []);

  const getObjects = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/prescription-list"
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
      <PatientSideBar />
      <div className="common-border">
        <h1 className="display-4">
          <b>Prescriptions</b>
        </h1>
        <hr />
        <h2>Count : {objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <PrescriptionViewListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ViewPrescriptions;
