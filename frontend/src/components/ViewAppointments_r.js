import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentViewListItem from "./AppointmentViewListItem";
import ReceptionistSideBar from "./ReceptionistSideBar";
import NavBar from "./Navbar";

const ViewAppointments_r = () => {
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
      <ReceptionistSideBar />
      <div className="common-border">
        <h1 className="display-4">
          <b>Appointment Records</b>
        </h1>
        <hr />
        <h2>Count : {objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <AppointmentViewListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointments_r;
