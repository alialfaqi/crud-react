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
  createUser: (userData: object) => axiosInstance.post("/users", userData),
  updateUser: (userID: string, updatedData: object) =>
    axiosInstance.patch(`/users/${userID}`, updatedData),
  deleteUser: (userID: string) => axiosInstance.delete(`/users/${userID}`),
};

export default API;
