import axios from "axios";
import { v4 } from "uuid";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    clientId: v4(),
  },
});

export default apiClient;
