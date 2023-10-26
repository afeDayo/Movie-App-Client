import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import ShowEye from "../../components/ShowEye/ShowEye";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";
// i mport { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"; this was taken to showEye.jsx

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); //step 1
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false); //step 2
  // create a new folder and call it showeye and give it the corresponding file in jsx // step3

  const { handleRegisterUser, authenticating } = useAuth(); //step 31 & step 64 for including authenticating & step 79 then create a new file in hooks called useFetch

  const btnText = authenticating ? <Spinner /> : "Create an account"; //step 65

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //step 18

  const onSubmit = (data) => {
    // console.log(data); //step 22
    handleRegisterUser(data); //step 32 then install react hot toast and go to app.jsx to import
  };

  return (
    <div className="signin text-start">
      <form
        onSubmit={handleSubmit(onSubmit)} //step 23
        action=""
        className="d-flex flex-column gap-3 custom-bg-light-grey p-4 p-sm-5 rounded-3"
      >
        <h2>Sign Up</h2>
        <div className="position-relative">
          <input
            type="text"
            placeholder="Email Address"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.email ? "error" : ""
            }`} //step 27
            {...register("email", { required: true })} //step 19 you can add minlenght: 12 to limit the text
          />
          {errors.email && errors.email.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-4">
              Can't be empty
            </span>
          ) : null}{" "}
          {/*step 24 */}
        </div>
        <div className="position-relative">
          {/* step 6 */}
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.password ? "error" : ""
            }`} //step 28
            {...register("password", { required: true })} //step 20
          />
          {errors.password && errors.password.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-4">
              Can't be empty
            </span>
          ) : null}{" "}
          {/*step 25 */}
          {/* <ShowEye eyeState={passwordVisible} updateEye={setPasswordVisible} /> */}
        </div>

        <div className="position-relative">
          {/* step 7 */}
          <input
            type={passwordRepeatVisible ? "text" : "password"}
            placeholder="Repeat Password"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.repeatPassword ? "error" : ""
            }`} //step 29 go to signup and do the same then go to authcontext for step 30
            {...register("repeatPassword", { required: true })} //step 21
          />
          {errors.repeatPassword &&
          errors.repeatPassword.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-4">
              Can't be empty
            </span>
          ) : null}{" "}
          {/* step 26 */}
          {/* <ShowEye
            eyeState={passwordRepeatVisible}
            updateEye={setPasswordRepeatVisible}
          /> */}
        </div>
        <button
          disabled={authenticating} // step 67  then create a new file in utils called privateroute
          className="custom-bg-red border-0 py-3 rounded-2 my-4"
        >
          {btnText} {/*step 66 updated from "create an account" */}
        </button>
        <p className="text-center">
          Already have an account?
          <Link
            to="/signin"
            className="text-decoration-none custom-text-red ps-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

// go to signin.jsx for step 8

export default SignUp;
