import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AppointmentListItem = ({ object }) => {
  const [patient, setPatient] = useState(null);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchPatient();
    fetchDoctor();
  }, []);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/patient-list/${object.ofpatient}`
      );
      setPatient(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/doctor-list/${object.ofdoctor}`
      );
      setDoctor(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDateTime = (dateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  };

  return (
    <Link to={`/admin-home/appointment-manage/${object.id}`}>
      <React.Fragment key={object.id}>
        <div className="list-item">
          <ul className="list">
            <li className="link-info">
              Assigned Date and Time:{" "}
              {formatDateTime(object.assigned_date_time)}
            </li>
            <li className="link-info">
              Patient:{" "}
              {patient
                ? `${patient.first_name} ${patient.last_name}`
                : "Loading..."}
            </li>
            <li className="link-info">
              Doctor:{" "}
              {doctor
                ? `${doctor.first_name} ${doctor.last_name}`
                : "Loading..."}
            </li>
            <br />
          </ul>
        </div>
      </React.Fragment>
    </Link>
  );
};

export default AppointmentListItem;
