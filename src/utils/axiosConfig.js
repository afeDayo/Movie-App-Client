import axios from "axios"; //step 45 then go back to authcontext

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export default axiosInstance;
