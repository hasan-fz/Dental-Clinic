import React from "react";
import { Link } from "react-router-dom";

const DoctorListItem = ({ object }) => {
  return (
    <Link to={`/admin-home/doctor-manage/${object.id}`}>
      <React.Fragment key={object.id}>
        <div className="list">
          <ul>
            <li className="link-info">Patient Name : {object.username}</li>
            <li className="link-info">Email : {object.email}</li>
            <li className="link-info">First Name : {object.first_name}</li>
            <li className="link-info">Last Name : {object.last_name}</li>
            <li className="link-info">Department : {object.department}</li>
            <br />
          </ul>
        </div>
      </React.Fragment>
    </Link>
  );
};

export default DoctorListItem;
