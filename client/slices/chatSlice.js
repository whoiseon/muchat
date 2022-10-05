import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chatList: [],
  supportersChatList: [],
  createChatLoading: false,
  createChatDone: false,
  createChatError: null,
};

export const createChat = createAsyncThunk("CREATE_CHAT", async ({ manager, title, genre, introduce, token }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/create", {
      code: Math.random().toString(36).substr(2, 6),
      manager,
      title,
      genre,
      introduce,
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

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: {
    [createChat.pending]: (state) => {
      state.createChatLoading = true;
      state.createChatDone = false;
      state.createChatError = null;
    },
    [createChat.fulfilled]: (state, action) => {
      state.createChatLoading = false;
      state.createChatDone = true;
      state.chatList.unshift(action.payload);
    },
    [createChat.rejected]: (state, action) => {
      state.createChatLoading = false;
      state.createChatError = action.error.message;
    },
  },
});

export default chatSlice;
