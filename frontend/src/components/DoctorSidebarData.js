import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const DoctorSidebarData = [
  {
    title: "Doctor Home",
    path: "/doctor-home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Manage Prescriptions",
    path: "/doctor-home/prescription-manage",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "View Appointments",
    path: "/doctor-home/appointment-view",
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
