import axios from "axios";
import { getCookie } from "./helper";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = getCookie("token");
    if (token) request.headers["Authorization"] = `Bearer ${token}`;

    return request;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
