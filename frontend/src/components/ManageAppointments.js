import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import AppointmentListItem from "./AppointmentListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Navbar";

const ManageAppointments = () => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    getObjects();
  }, []);

  const getObjects = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/appointment-list"
      );
      let data = response.data;
      setObjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="common">
      <NavBar />
      <SideBar />
      <div className="common-border">
        <h1 className="display-4">Appointments</h1>
        <hr />
        <h2> Count : {objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <AppointmentListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ManageAppointments;
