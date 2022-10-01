import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: null,
  userSignUpLoading: false,
  userSignUpDone: true,
  userSignUpError: null,
};

export const userSignUp = createAsyncThunk("USER_SIGNUP", async ({ nickname, email, password }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/register", {
      nickname,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state) => {
      state.userSignUpLoading = true;
      state.userSignUpDone = false;
      state.userSignUpError = null;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.userSignUpLoading = false;
      state.userSignUpDone = true;
    },
    [userSignUp.rejected]: (state, action) => {
      state.userSignUpLoading = false;
      state.userSignUpError = action.error.message;
    },
  },
});

export default userSlice;
