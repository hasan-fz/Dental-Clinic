import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/admin-home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Manage Patients",
    path: "/admin-home/patient-manage",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "Manage Appointments",
    path: "/admin-home/appointment-manage",
    icon: <AiIcons.AiFillEdit />,
    cName: "nav-text",
  },
  {
    title: "Manage Doctors",
    path: "/admin-home/doctor-manage",
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
