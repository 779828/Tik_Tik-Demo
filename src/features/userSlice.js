import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=100";

// Fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(API_URL);
  return response.data.results.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.thumbnail,
  }));
});

// Delete a user
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Edit a user
export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      });
  },
});

export default userSlice.reducer;
