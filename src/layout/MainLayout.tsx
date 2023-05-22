import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
}
