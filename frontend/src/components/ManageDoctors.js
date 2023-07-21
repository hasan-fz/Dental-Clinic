import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import DoctorListItem from "./DoctorListItem";
import NavBar from "./Navbar";

const ManageDoctors = () => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    getObjects();
  }, []);

  const getObjects = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/doctor-list");
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
        <h1>Doctor Records</h1>
        <hr />
        <h2> Count : {objects.length}</h2>
        {objects.map((object) => (
          <React.Fragment key={object.id}>
            <DoctorListItem object={object} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ManageDoctors;
