import React, { useContext, useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import ShowEye from "../../components/ShowEye/ShowEye";
import { useForm } from "react-hook-form"; //step 16
import AuthContext from "../../context/AuthContext";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // step 8
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //step 17
  // go to signup for step 18

  const { handleSignInUser, authenticating } = useAuth(); // step 48 & step 53 for authenticating & step 78 to update from "useContext(AuthContext);" do same for signup"

  const btnText = authenticating ? <Spinner /> : "Login to your account"; // step 57 updated from "Loading" to spinner from utils //step 60

  const onSubmit = (data) => {
    // console.log(data);
    handleSignInUser(data); // step 49
  };

  return (
    <div className="signin text-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="d-flex flex-column gap-3 custom-bg-light-grey p-4 p-sm-5 rounded-3"
      >
        <h2>Login</h2>
        <div className="position-relative">
          <input
            type="text"
            placeholder="Email address"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.email ? "error" : ""
            }`}
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-4">
              Can't be empty
            </span>
          ) : null}
        </div>
        <div className="position-relative">
          {/* step 9 */}
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.password ? "error" : ""
            }`}
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-4">
              Can't be empty
            </span>
          ) : null}
          {/* <ShowEye eyeState={passwordVisible} updateEye={setPasswordVisible} /> */}
        </div>
        <button
          disabled={authenticating} //step 54 then go back to authcontext
          className="custom-bg-red border-0 py-3 rounded-2 my-4"
        >
          {btnText}{" "}
          {/*step 58 updated from "Login to your account" then create a new file for spinners under utils */}
        </button>
        <p className="text-center">
          Don't have an account?
          <Link
            to="/signup"
            className="text-decoration-none custom-text-red ps-2"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

// create a new folder in component and call it AuthContext and create a corrsponding jsx file in it for step 10

export default SignIn;
