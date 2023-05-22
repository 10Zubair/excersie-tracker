import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashBoard from "../pages/dashBoard";
import CreateUser from "../pages/createUser";
import CreateExcercise from "../pages/createExercise";

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/createExcercise" element={<CreateExcercise />} />
      </Route>
    </Routes>
  );
}
