// import API from "../../services/api";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = { data: [], loading: false, error: "" };

// export const getUsers = createAsyncThunk("users/getUsers", async () => {
//   const { data } = await API.getUsers();
//   return data;
// });

// export const createUser = createAsyncThunk(
//   "users/createUser",
//   async (userData) => {
//     const { data } = await API.createUser(userData);
//     return data;
//   }
// );

// export const updateUser = createAsyncThunk(
//   "users/updateUser",
//   async ({ userID, updatedData }) => {
//     const { data } = await API.updateUser(userID, updatedData);
//     return data;
//   }
// );

// export const deleteUser = createAsyncThunk(
//   "users/deleteUser",
//   async (userId) => {
//     let { data } = await API.deleteUser(userId);
//     return data;
//   }
// );
// export const userSlice = createSlice({
//   name: "users",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getUsers.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(getUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(createUser.fulfilled);
//     builder.addCase(deleteUser.fulfilled);
//     builder.addCase(updateUser.fulfilled);
//   },
// });

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../services/api";

interface User {
  username?: string;
  age?: number;
  favourite_music_genre?: string;
  preferred_programming_language?: string;
  best_frontend_framework?: string;
}

interface UserState {
  data: User[];
  loading: boolean;
  error: string;
}

const initialState: UserState = { data: [], loading: false, error: "" };

export const getUsers = createAsyncThunk<[]>("users/getUsers", async () => {
  const { data } = await API.getUsers();
  return data;
});

export const createUser = createAsyncThunk<User, User>(
  "users/createUser",
  async (userData) => {
    const { data } = await API.createUser(userData);
    return data;
  }
);

export const updateUser = createAsyncThunk<
  User,
  { userID: string; updatedData: User }
>("users/updateUser", async ({ userID, updatedData }) => {
  const { data } = await API.updateUser(userID, updatedData);
  return data;
});

export const deleteUser = createAsyncThunk<User, string>(
  "users/deleteUser",
  async (userId) => {
    let { data } = await API.deleteUser(userId);
    return data;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
      });
  },
});
