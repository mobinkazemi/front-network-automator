import axios from "axios";

// ----------------------------------------------------------------------

// TODO change base url process.env.NODE_ENV===

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) request.headers["Authorization"] = `Bearer ${token}`;

    return request;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
