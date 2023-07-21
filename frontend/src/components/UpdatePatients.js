import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";

const UpdatePatients = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    age: "",
    address: "",
    ailment: "",
    assigned_doctor: null,
  });
  const [doctors, setDoctors] = useState([]); // State to store the list of doctors

  useEffect(() => {
    fetchUser();
    fetchDoctors(); // Fetch the list of doctors when the component mounts
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/patient-list/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/doctor-list");
      setDoctors(response.data); // Save the list of doctors in the state
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const updatedFields = Object.keys(updatedUser).reduce((acc, key) => {
        if (updatedUser[key] !== "" && updatedUser[key] !== null) {
          acc[key] = updatedUser[key];
        }
        return acc;
      }, {});
      console.log(updatedFields);
      await axios.put(
        `http://127.0.0.1:8000/api/patient-update/${userId}`,
        updatedFields
      );

      console.log("Update successful");
      alert("Update Successful!");
      fetchUser();
      // Handle successful update
    } catch (error) {
      if (error.response && error.response.data) {
        // Display the error message returned from the server
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        // console.error(error); // Fallback for other errors
      }
      // Handle error during update
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/patient-delete/${userId}`
      );
      console.log(response.data);
      alert("Successfully Deleted!");
      // Handle successful deletion
      navigate("/admin-home/patient-manage"); // Redirect to the doctor management page after deletion
    } catch (error) {
      console.error(error);
      // Handle error during deletion
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setUpdatedUser({
      ...updatedUser,
      [evt.target.name]: value,
    });
  }

  if (!user || !doctors.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update User Details</h2>
      <form onSubmit={updateUser}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={updatedUser.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={updatedUser.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={updatedUser.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={updatedUser.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={updatedUser.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Ailment:
          <input
            type="text"
            name="ailment"
            value={updatedUser.ailment}
            onChange={handleChange}
          />
        </label>
        <label>
          Assigned Doctor:
          <select
            name="assigned_doctor"
            value={
              updatedUser.assigned_doctor !== null
                ? updatedUser.assigned_doctor
                : user.assigned_doctor
                ? user.assigned_doctor.id
                : ""
            }
            onChange={handleChange}
          >
            <option value="">Select an assigned doctor</option>
            {/* Fetch the list of doctors and map them to options */}
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.username}
              </option>
            ))}
          </select>
        </label>

        <button type="Submit">Update</button>
        <button type="Delete" onClick={deleteUser}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default UpdatePatients;
