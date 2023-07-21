import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientListItem = ({ object }) => {
  const [assignedDoctor, setAssignedDoctor] = useState(null);

  useEffect(() => {
    fetchAssignedDoctor();
  }, []);

  const fetchAssignedDoctor = async () => {
    try {
      if (object.assigned_doctor) {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/doctor-list/${object.assigned_doctor}`
        );
        setAssignedDoctor(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Link to={`/admin-home/patient-manage/${object.id}`}>
      <React.Fragment key={object.id}>
        <div className="list">
          <ul>
            <li className="link-info">Username: {object.username}</li>
            <li className="link-info">Email: {object.email}</li>
            <li className="link-info">First Name: {object.first_name}</li>
            <li className="link-info">Last Name: {object.last_name}</li>
            <li className="link-info">Age: {object.age}</li>
            <li className="link-info">Ailment: {object.ailment}</li>
            <li className="link-info">
              Assigned Doctor:{" "}
              {assignedDoctor
                ? `${assignedDoctor.first_name} ${assignedDoctor.last_name}`
                : "Not assigned"}
            </li>
            <br />
          </ul>
        </div>
      </React.Fragment>
    </Link>
  );
};

export default PatientListItem;
