import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import StaffLoginForm from "./StaffLoginForm";

const StaffLogin = () => {
  return (
    <>
      <button
        className="btn-nav"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Staff Login
      </button>
      <div className="modal fade" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <StaffLoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffLogin;
