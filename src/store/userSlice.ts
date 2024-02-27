import API from "../../services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], loading: false, error: "" };

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await API.getUsers();
  return data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const { data } = await API.createUser(userData);
    return data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userID, updatedData }) => {
    const { data } = await API.updateUser(userID, updatedData);
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    let { data } = await API.deleteUser(userId);
    return data;
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createUser.fulfilled);
    builder.addCase(deleteUser.fulfilled);
    builder.addCase(updateUser.fulfilled);
  },
});
