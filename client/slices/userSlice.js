import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: null,
  userSignUpLoading: false,
  userSignUpDone: false,
  userSignUpError: null,
  userLoginLoading: false,
  userLoginDone: false,
  userLoginToken: null,
  userLoginError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
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
    throw error.response.data.errors.message;
  }
});

export const userLogin = createAsyncThunk("USER_LOGIN", async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/login", {
      email,
      password,
    }, {
      withCredentials: true,
    });

    return response.data.token;
  } catch (error) {
    throw error.response.data.errors.message;
  }
});

export const loadMyInfo = createAsyncThunk("LOAD_MY_INFO", async ({ token }) => {
  try {
    const response = await axios.get("http://localhost:3065/api/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    [userLogin.pending]: (state) => {
      state.userLoginLoading = true;
      state.userLoginDone = false;
      state.userLoginError = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userLoginLoading = false;
      state.userLoginDone = true;
    },
    [userLogin.rejected]: (state, action) => {
      state.userLoginLoading = false;
      state.userLoginError = action.error.message;
    },
    [loadMyInfo.pending]: (state) => {
      state.loadMyInfoLoading = true;
      state.loadMyInfoDone = false;
      state.loadMyInfoError = null;
    },
    [loadMyInfo.fulfilled]: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoDone = true;
      state.userInfo = action.payload;
    },
    [loadMyInfo.rejected]: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoError = action.error;
    },
  },
});

export default userSlice;
