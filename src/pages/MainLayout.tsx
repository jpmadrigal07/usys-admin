import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
