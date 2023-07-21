import React, { useState, useEffect } from "react";
import axios from "axios";

const PrescriptionViewListItem = ({ object }) => {
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
    <React.Fragment key={object.id}>
      <div className="list-item">
        <ul className="list-group">
          <li className="list-group-item">Patient: {patientName}</li>
          <li className="list-group-item">Doctor: {doctorName}</li>
          <li className="list-group-item">Content: {object.content}</li>
          <br />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PrescriptionViewListItem;
