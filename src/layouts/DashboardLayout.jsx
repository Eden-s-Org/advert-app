import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import ScrollTop from "../components/ScrollTop";
// import DashNav from "../components/DashNav";

const DashboardLayout = () => {
  return (
    <>
    <div className="">
      <Sidebar />
      <div className="ml-60 flex flex-col">
        {/* <DashNav /> */}
      </div>
      <Outlet />
    </div>
    <ScrollTop/>
    </>
  );
};

export default DashboardLayout;
