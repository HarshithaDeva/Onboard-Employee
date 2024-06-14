import React from "react";
import NavBar from "../assets/images/EmployeesNavBar.svg";
import { Box } from "@mui/material";

function SideBar() {
  return <Box component="img" src={NavBar} sx={{ height: "110vh" }} />;
}

export default SideBar;
