import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorSideBar from "./DoctorSideBar";
import PrescriptionListItem from "./PrescriptionListItem";
// import PatientAddButton from "./PatientAddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ManagePrescriptions = () => {
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
    <>
      <div className="prescription-manage">
        <h1 className="display-4">
          <b>Prescriptions</b>
        </h1>
        <h2>Count :{objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <PrescriptionListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ManagePrescriptions;
