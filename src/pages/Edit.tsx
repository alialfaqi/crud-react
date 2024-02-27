import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/userSlice";

const Edit = () => {
  const { userID } = useParams();
  const [user, setUser] = useState({
    username: "",
    age: 0,
    favourite_music_genre: "",
    preferred_programming_language: "",
    best_frontend_framework: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitFormData = (e) => {
    e.preventDefault();
    dispatch(updateUser({ userID, updatedData: user }));
    navigate("/");
  };
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-primary text-white p-5">
          <h3>Create User</h3>
          <form onSubmit={submitFormData}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    username: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    age: +e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label htmlFor="musicGenre">Music Genre:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    favourite_music_genre: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label htmlFor="programmingLang">Programming Language:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    preferred_programming_language: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label htmlFor="frontFramwork">Frontend Framework:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUser((prevUser) => ({
                    ...prevUser,
                    best_frontend_framework: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-info text-center mt-2 mx-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
