import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePrescription = () => {
  const [content, setContent] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");

  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/doctor-list");
      setDoctors(response.data);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!content || !doctorId || !patientId) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const prescriptionData = {
        content: content,
        prescribed_by: doctorId,
        prescribed_to: patientId,
      };

      await axios.post(
        "http://127.0.0.1:8000/api/prescription-create",
        prescriptionData
      );

      alert("Prescription created successfully.");
      // Clear the form after successful creation
      setContent("");
      setDoctorId(null);
      setPatientId(null);
    } catch (error) {
      console.error(error);
      alert("Failed to create prescription.");
    }
  };

  return (
    <div className="prescription-create">
      <h2 className="display-4">
        <b>Create New Prescription</b>
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Prescription Content:
          <textarea
            className="md-textarea form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <label className="form-label">
          Select Doctor:
          <select
            className="form-select"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.username}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Select Patient:
          <select
            className="form-select"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.username}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Create Prescription</button>
      </form>
    </div>
  );
};

export default CreatePrescription;
