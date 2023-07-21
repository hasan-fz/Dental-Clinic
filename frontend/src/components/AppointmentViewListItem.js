import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentViewListItem = ({ object }) => {
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // Fetch the name of the assigned doctor
    axios
      .get(`http://127.0.0.1:8000/api/doctor-list/${object.ofdoctor}`)
      .then((response) => {
        const doctor = response.data;
        setDoctorName(`${doctor.first_name} ${doctor.last_name}`);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch the name of the patient
    axios
      .get(`http://127.0.0.1:8000/api/patient-list/${object.ofpatient}`)
      .then((response) => {
        const patient = response.data;
        setPatientName(`${patient.first_name} ${patient.last_name}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [object.ofdoctor, object.ofpatient]);
  const formattedDateTime = new Date(
    object.assigned_date_time
  ).toLocaleString();
  return (
    <React.Fragment key={object.id}>
      <div className="list-item">
        <ul className="list-group">
          <li className="list-group-item">
            Assigned Date and Time: {formattedDateTime}
          </li>
          <li className="list-group-item">Patient: {patientName}</li>
          <li className="list-group-item">Doctor: {doctorName}</li>
          <br />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AppointmentViewListItem;
