import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PrescriptionListItem = ({ object }) => {
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // Fetch the name of the assigned doctor
    axios
      .get(`http://127.0.0.1:8000/api/doctor-list/${object.prescribed_by}`)
      .then((response) => {
        const doctor = response.data;
        setDoctorName(`${doctor.first_name} ${doctor.last_name}`);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch the name of the patient
    axios
      .get(`http://127.0.0.1:8000/api/patient-list/${object.prescribed_to}`)
      .then((response) => {
        const patient = response.data;
        setPatientName(`${patient.first_name} ${patient.last_name}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [object.prescribed_by, object.prescribed_to]);

  return (
    <>
      <Link to="/doctor-home/prescription-create">
        <h1>Create Prescription</h1>
      </Link>
      <React.Fragment key={object.id}>
        <div className="list-item">
          <ul>
            <li>Patient: {patientName}</li>
            <li>Doctor: {doctorName}</li>
            <li>Content: {object.content}</li>
          </ul>
        </div>
      </React.Fragment>
    </>
  );
};

export default PrescriptionListItem;
