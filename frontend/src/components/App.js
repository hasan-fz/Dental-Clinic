import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import About from "./About";
import LandingPage from "./LandingPage";
// Admin Dashboard
import AdminHome from "./AdminHome";
import ManagePatients from "./ManagePatients";
import UpdatePatients from "./UpdatePatients";
import ManageDoctors from "./ManageDoctors";
import UpdateDoctors from "./UpdateDoctors";
import ManageAppointments from "./ManageAppointments";
import UpdateAppointments from "./UpdateAppointments";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Doctor Dashboard
import DoctorHome from "./DoctorHome";
import Prescriptions from "./Prescriptions";
import ViewAppointments from "./ViewAppointments";
import CreatePrescription from "./CreatePrescription";
// Receptionist Dashboard
import ReceptionistHome from "./ReceptionistHome";
import ViewAppointments_r from "./ViewAppointments_r";
import ViewDoctors from "./ViewDoctors";
import ViewPatients from "./ViewPatients";
// Patient Dashboard
import ViewAppointments_p from "./ViewAppointments_p";
import ViewPrescriptions from "./ViewPrescriptions";
import PatientHome from "./PatientHome";
import PrivateRoute from "./utils/PrivateRoute.js";

function App() {
  return (
    <Routes>
      {/* PrivateRoute */}
      <PrivateRoute path="/admin-home" element={<AdminHome />} />
      {/* Main Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/about" element={<About />} />
      {/* Admin Dashboard */}
      {/* <Route path="/admin-home" element={<AdminHome />} /> */}
      <Route path="/admin-home/patient-manage" element={<ManagePatients />} />
      <Route
        path="/admin-home/patient-manage/:userId"
        element={<UpdatePatients />}
      />
      <Route path="/admin-home/doctor-manage" element={<ManageDoctors />} />
      <Route
        path="/admin-home/doctor-manage/:userId"
        element={<UpdateDoctors />}
      />
      <Route
        path="/admin-home/appointment-manage"
        element={<ManageAppointments />}
      />
      <Route
        path="/admin-home/appointment-manage/:userId"
        element={<UpdateAppointments />}
      />
      {/* Doctor's Dashboard */}
      <Route path="/doctor-home" element={<DoctorHome />} />
      <Route
        path="/doctor-home/prescription-manage"
        element={<Prescriptions />}
      />
      <Route
        path="/doctor-home/prescription-create"
        element={<CreatePrescription />}
      />
      <Route
        path="/doctor-home/appointment-view"
        element={<ViewAppointments />}
      />
      {/* Receptionist Dashboard */}
      <Route path="/receptionist-home" element={<ReceptionistHome />} />
      <Route
        path="/receptionist-home/patient-view"
        element={<ViewPatients />}
      />
      <Route path="/receptionist-home/doctor-view" element={<ViewDoctors />} />
      <Route
        path="/receptionist-home/appointment-view"
        element={<ViewAppointments_r />}
      />
      {/* Patient's Dashboard */}
      <Route path="/patient-home" element={<PatientHome />} />
      <Route
        path="/patient-home/prescription-view"
        element={<ViewPrescriptions />}
      />
      <Route
        path="/patient-home/appointment-view"
        element={<ViewAppointments_p />}
      />
    </Routes>
  );
}

export default App;
