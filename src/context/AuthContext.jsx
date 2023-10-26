// Direction 2, step 10 all logic for login and signup will be here

import { createContext, useState } from "react"; //step 11

import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";

const AuthContext = createContext(); //step 12

export default AuthContext; //step 13

// Context Provider
// step 14
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  }); //step 44 then create a new folder called utils in clinet for step 45

  const [authenticating, setAuthenticating] = useState(false); //step 51

  const navigate = useNavigate(); // step37

  // Sign Up
  //   register
  const handleRegisterUser = async (formData) => {
    // register logic goes here
    setAuthenticating(true); //step 61
    // step 30 then go to signup to continue
    setTimeout(async () => {
      try {
        const { data } = await axiosInstance.post(
          "/api/auth/register", // step 46 formally axios.post and http://localhost:3000/api/auth/register
          formData
        ); //change response to {data}
        // console.log(response);
        toast.success("Registration Successful"); // step 36 formally (data.message)
        localStorage.setItem("token", JSON.stringify(data.token)); //step 41
        setToken(data.token); //step 42
        setUser({ id: data.id }); //step 43
        // console.log(data); // step 39
        navigate("/"); //step 38
      } catch (error) {
        // Nest Destructuring
        // const {
        // response: {data},
        // } = error
        // console.log(data.message)

        // console.log(error.response.data.message);
        // toast.error(error.response.data.message); // step 35

        if (error.response) {
          // console.log(error.response.data.message);
          return toast.error(error.response.data.message); // step 40
        }
        toast.error("Something went wrong");
      } finally {
        setAuthenticating(false); //step 62
      }
    }, 2000); // step 63 for settimeout then go to signup for 64
  };

  // Sign In step 47 then go to signin.jsx for step 48 & 49
  // Login
  const handleSignInUser = async (formData) => {
    // do the login logic in here
    setAuthenticating(true); // step 55
    setTimeout(async () => {
      //step 50
      try {
        const { data } = await axiosInstance.post("/api/auth/login", formData);
        toast.success("Welcome Back!");
        localStorage.setItem("token", JSON.stringify(data.token));
        setToken(data.token);
        setUser({ id: data.id });
        // console.log(data);
        navigate("/");
      } catch (error) {
        if (error.response) {
          // console.log(error.response.data.message);
          return toast.error(error.response.data.message);
        }
        toast.error("Something went wrong");
      } finally {
        // step 56 go back to signin
        setAuthenticating(false);
      }
    }, 2000);
  };

  // step 121
  const handleGetUser = async () => {
    try {
      const { data } = await axiosInstance.post(
        "/api/auth/user",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);
      setUser(data); // step 125 after coming back from server side
    } catch (error) {
      // console.log(error);
      if (error.message === "Network Error") {
      }
    }
  };

  const handleLogOutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("See you soon");
    navigate("/");
  }; //step 203

  const contextData = {
    user,
    token,
    handleRegisterUser,
    handleSignInUser,
    authenticating, //step 52 then import in signin
    handleGetUser, // 122 then go to roolayout
    handleLogOutUser, // step 203
  };

  // step 15
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

//go back to signin.jsx and install react hook form for step 16
