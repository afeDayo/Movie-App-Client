// step 77 then go to sighin and signup and update with useAuth
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
