import axios from "axios"; //step 45 then go back to authcontext

const axiosInstance = axios.create({
  baseURL: "https://movie-app-action-ek2m.onrender.com",
});

export default axiosInstance;
