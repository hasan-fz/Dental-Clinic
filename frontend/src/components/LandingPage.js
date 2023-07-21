import React from "react";
import Login from "./Login";
import NavBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function LandingPage() {
  return (
    <div className="lp-container">
      <NavBar />
      <div className="lp-component">
        <Login />
      </div>
      <div className="lp-component lp-footer">All Rights Reserved</div>
    </div>
  );
}

export default LandingPage;
