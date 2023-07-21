import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateDoctors = () => {
  const departments = [
    "Cardiologist",
    "Dermatologists",
    "Emergency Medicine Specialists",
    "Allergists/Immunologists",
    "Anesthesiologists",
    "Colon and Rectal Surgeons",
  ];
  const { userId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [updatedDoctor, setUpdatedDoctor] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    department: "", // Add the 'department' field
    // Add other fields you want to update
  });

  useEffect(() => {
    fetchDoctor();
  }, [userId]);

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/doctor-list/${userId}`
      );
      setDoctor(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateDoctor = async (event) => {
    event.preventDefault();
    try {
      const updatedFields = Object.keys(updatedDoctor).reduce((acc, key) => {
        if (updatedDoctor[key] !== "" && updatedDoctor[key] !== null) {
          acc[key] = updatedDoctor[key];
        }
        return acc;
      }, {});
      console.log(updatedFields);
      await axios.put(
        `http://127.0.0.1:8000/api/doctor-update/${userId}`,
        updatedFields
      );
      console.log("Update successful");
      fetchDoctor(); // Fetch updated doctor details again after successful update
    } catch (error) {
      console.error(error);
      // Handle error during update
    }
  };

  const deleteDoctor = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/doctor-delete/${userId}`
      );
      console.log(response.data);
      alert("Successfully deleted!");
      navigate("/admin-home/doctor-manage");
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setUpdatedDoctor({
      ...updatedDoctor,
      [evt.target.name]: value,
    });
  }

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={updateDoctor}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={updatedDoctor.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={updatedDoctor.email}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={updatedDoctor.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={updatedDoctor.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <select
            name="department"
            value={updatedDoctor.department}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Update Doctor</button>
        <button type="button" onClick={deleteDoctor}>
          Delete Doctor
        </button>
      </form>
    </div>
  );
};

export default UpdateDoctors;
