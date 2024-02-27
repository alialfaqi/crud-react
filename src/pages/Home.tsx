import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/userSlice";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import Create from "./Create";

const Home = () => {
  const { data, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [data]);

  return (
    <>
      <div className="container">
        <h1>Crud App with JSON Server</h1>
        <Link className="btn btn-success my-3" to="/create">
          Create +
        </Link>
        <Table data={data} />
      </div>
    </>
  );
};

export default Home;
