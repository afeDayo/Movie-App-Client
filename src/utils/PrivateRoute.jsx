import React, { useContext, useEffect } from "react"; //step 68 then go to app.jsx to nest the privateroutes
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      toast.error("You have to login first", {
        id: "zzz",
      });
    }
  }, []);

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
