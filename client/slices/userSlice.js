import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: null,
  userSignUpLoading: false,
  userSignUpDone: false,
  userSignUpError: null,
  userLoginLoading: false,
  userLoginDone: false,
  userLoginError: null,
  userLogoutLoading: false,
  userLogoutDone: false,
  userLogoutError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  updateMyNicknameLoading: false,
  updateMyNicknameDone: false,
  updateMyNicknameError: null,
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

    axios.defaults.headers.common.Authorization = response.data.token;

    return response.data.token;
  } catch (error) {
    throw error.response.data.errors.message;
  }
});

export const userLogout = createAsyncThunk("USER_LOGOUT", async ({ token }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/logout", {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const loadMyInfo = createAsyncThunk("LOAD_MY_INFO", async ({ token }) => {
  try {
    const response = await axios.get("http://localhost:3065/api/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      data: response.data,
      token,
    };
  } catch (error) {
    console.log(error);
  }
});

export const updateMyNickname = createAsyncThunk("UPDATE_MY_NICKNAME", async ({ nickname, password, token }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/update/nickname", {
      nickname,
      password,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error.response.data.errors.message;
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
    [userLogout.pending]: (state) => {
      state.userLogoutLoading = true;
      state.userLogoutDone = false;
      state.userLogoutError = null;
    },
    [userLogout.fulfilled]: (state, action) => {
      state.userLogoutLoading = false;
      state.userLogoutDone = true;
      state.userLoginDone = false;
      state.userInfo = null;
    },
    [userLogout.rejected]: (state, action) => {
      state.userLogoutLoading = false;
      state.userLogoutError = action.error.message;
    },
    [loadMyInfo.pending]: (state) => {
      state.loadMyInfoLoading = true;
      state.loadMyInfoDone = false;
      state.loadMyInfoError = null;
    },
    [loadMyInfo.fulfilled]: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoDone = true;
      state.userInfo = action.payload.data;
      state.userInfo.token = action.payload.token;
    },
    [loadMyInfo.rejected]: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoError = action.error;
    },
    [updateMyNickname.pending]: (state) => {
      state.updateMyNicknameLoading = true;
      state.updateMyNicknameDone = false;
      state.updateMyNicknameError = null;
    },
    [updateMyNickname.fulfilled]: (state, action) => {
      state.updateMyNicknameLoading = false;
      state.updateMyNicknameDone = true;
    },
    [updateMyNickname.rejected]: (state, action) => {
      state.updateMyNicknameLoading = false;
      state.updateMyNicknameError = action.error;
    },
  },
});

export default userSlice;
