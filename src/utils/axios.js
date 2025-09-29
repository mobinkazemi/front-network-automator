import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm11c3RDaGFuZ2VQYXNzd29yZCI6ZmFsc2UsInJvbGVJZCI6MSwiZXhwIjoxNzU5MTYyNDc2fQ.Y9hffeqTW7u-buB1iSSYeSYGeL6AI0DCjusmqrn9cuw",
  },
});

export default axiosInstance;
