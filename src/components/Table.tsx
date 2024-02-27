import React from "react";
import DelBtn from "./DelBtn";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>Name</th>
          <th>Age</th>
          <th>Music Genre</th>
          <th>Programming Language</th>
          <th>Frontend Framework</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.favourite_music_genre}</td>
            <td>{user.preferred_programming_language}</td>
            <td>{user.best_frontend_framework}</td>
            <td className="d-flex gap-2">
              <Link to={`/edit/${user.id}`} className="btn btn-warning">
                Edit
              </Link>
              <DelBtn userID={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
