import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const ReceptionistSidebarData = [
  {
    title: "Receptionist Home",
    path: "/receptionist-home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "View Patients",
    path: "/receptionist-home/patient-view",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "View Doctors",
    path: "/receptionist-home/doctor-view",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "View Appointments",
    path: "/receptionist-home/appointment-view",
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
