import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  //step 74 for the bootstrap and the internal div

  const { handleGetUser } = useAuth(); //step 123

  useEffect(() => {
    // console.log("Run when visited");
    handleGetUser(); //step 124
  }, []); // step 120 then go to authcontext

  return (
    <div className="py-md-4 d-xl-flex">
      <SideBar />
      <div className="w-100">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
