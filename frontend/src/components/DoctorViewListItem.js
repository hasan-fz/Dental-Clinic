import React from "react";
import { Link } from "react-router-dom";

const DoctorViewListItem = ({ object }) => {
  return (
    <React.Fragment key={object.id}>
      <div className="list-item">
        <ul className="list-group">
          <li className="list-group-item">Patient Name : {object.username}</li>
          <li className="list-group-item">Email : {object.email}</li>
          <li className="list-group-item">First Name : {object.first_name}</li>
          <li className="list-group-item">Last Name : {object.last_name}</li>
          <li className="list-group-item">Department : {object.department}</li>
          <br />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default DoctorViewListItem;
