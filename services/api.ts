// api.js

import axios from "axios";

const baseURL = "http://localhost:4000"; // Replace this with your API base URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // You can add any common headers here
  },
});

// Define functions or classes for each API endpoint
const API = {
  getUsers: () => axiosInstance.get("/users"),
  createUser: (userData) => axiosInstance.post("/users", userData),
  updateUser: (userID, updatedData) =>
    axiosInstance.patch(`/users/${userID}`, updatedData),
  deleteUser: (userID) => axiosInstance.delete(`/users/${userID}`),
};

export default API;
