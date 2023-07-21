import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateAppointments = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [updatedAppointment, setUpdatedAppointment] = useState({
    assigned_date_time: "",
    ofpatient: null,
    ofdoctor: null,
  });
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchAppointment();
    fetchPatients();
    fetchDoctors();
  }, [userId]);

  const fetchAppointment = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/appointment-list/${userId}`
      );
      setAppointment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/patient-list"
      );
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/doctor-list");
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateAppointment = async (event) => {
    event.preventDefault();

    try {
      const updatedFields = Object.keys(updatedAppointment).reduce(
        (acc, key) => {
          if (
            updatedAppointment[key] !== "" &&
            updatedAppointment[key] !== null
          ) {
            acc[key] = updatedAppointment[key];
          }
          return acc;
        },
        {}
      );

      await axios.put(
        `http://127.0.0.1:8000/api/appointment-update/${userId}`,
        updatedFields
      );

      console.log("Update successful");
      alert("Update Successful!");
      fetchAppointment();
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        console.error(error);
      }
    }
  };

  const deleteAppointment = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/appointment-delete/${userId}`
      );
      console.log("Delete successful");
      alert("Delete Successful!");
      navigate("/admin-home/appointment-manage");
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setUpdatedAppointment({
      ...updatedAppointment,
      [evt.target.name]: value,
    });
  }

  if (!appointment || !patients.length || !doctors.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Appointment Details</h2>
      <form onSubmit={updateAppointment}>
        <label>
          Assigned Date & Time:
          <input
            type="datetime-local"
            name="assigned_date_time"
            value={updatedAppointment.assigned_date_time}
            onChange={handleChange}
          />
        </label>
        <label>
          Patient:
          <select
            name="ofpatient"
            value={
              updatedAppointment.ofpatient !== null
                ? updatedAppointment.ofpatient
                : appointment.ofpatient
                ? appointment.ofpatient.id
                : ""
            }
            onChange={handleChange}
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.username}
              </option>
            ))}
          </select>
        </label>
        <label>
          Doctor:
          <select
            name="ofdoctor"
            value={
              updatedAppointment.ofdoctor !== null
                ? updatedAppointment.ofdoctor
                : appointment.ofdoctor
                ? appointment.ofdoctor.id
                : ""
            }
            onChange={handleChange}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.username}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Update</button>
        <button type="button" onClick={deleteAppointment}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default UpdateAppointments;
