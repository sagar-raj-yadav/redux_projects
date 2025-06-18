
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const fetchUsers = createAsyncThunk(
  'users/fetchusers',
  async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data;
  },
);


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
          state.loading = true,
          state.error=null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false,
          state.data=action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false,
          state.error = 'failed to fetch users'
      })
  },
});

export default usersSlice.reducer;