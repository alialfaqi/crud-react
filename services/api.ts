import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const API = {
  getUsers: () => axiosInstance.get("/users"),
  createUser: (userData) => axiosInstance.post("/users", userData),
  updateUser: (userID, updatedData) =>
    axiosInstance.patch(`/users/${userID}`, updatedData),
  deleteUser: (userID) => axiosInstance.delete(`/users/${userID}`),
};

export default API;
