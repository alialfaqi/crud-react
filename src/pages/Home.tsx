import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/userSlice";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

const Home = () => {
  const { data, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [data]);

  const queryClient = useQueryClient();
  // Fetch users data when the component mounts or when the data cache is invalidated
  useQuery(
    "users",
    async () => {
      await dispatch(getUsers()); // Dispatch the Redux action created with createAsyncThunk
    },
    {
      // Invalidate and refetch data when the 'users' query changes
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

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
