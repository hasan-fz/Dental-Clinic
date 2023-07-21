import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const PatientSidebarData = [
  {
    title: "Patient Home",
    path: "/patient-home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "View Prescriptions",
    path: "/patient-home/prescription-view",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "View Appointments",
    path: "/patient-home/appointment-view",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
