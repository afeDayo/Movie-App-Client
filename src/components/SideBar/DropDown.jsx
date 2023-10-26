import React from "react"; // step 202
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./SideBar.css";

const DropDown = () => {
  const { token, handleLogOutUser } = useAuth();

  return (
    <div className="position-absolute mt-3 my-dropdown">
      {token ? (
        <div>
          <button
            onClick={() => {
              handleLogOutUser();
            }}
            className="btn btn-danger text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2">
          <Link to="/signup" className="btn btn-danger text-white">
            SignUp
          </Link>
          <Link to="/signin" className="btn btn-danger text-white">
            SignIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
