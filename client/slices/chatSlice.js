import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  mainChatList: [],
  supportersChatList: [],
  chatListByGenre: [],
  loadMainChatLoading: false,
  loadMainChatDone: false,
  loadMainChatError: null,
  loadChatByGenreLoading: false,
  loadChatByGenreDone: false,
  loadChatByGenreError: null,
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

export const loadMainChat = createAsyncThunk("LOAD_MAIN_CHAT", async () => {
  try {
    const response = await axios.get("http://localhost:3065/api/chats");

    response.data.forEach((v) => {
      v.member = v.member.length;
      v.current = v.current.length;
    });

    const supportersChats = response.data.filter((v) => v.supporters === true);

    return {
      chats: response.data,
      supportersChats,
    };
  } catch (error) {
    throw error.response.data.errors.message;
  }
});

export const loadChatByGenre = createAsyncThunk("LOAD_CHAT_BY_GENRE", async ({ genre }) => {
  try {
    const response = await axios.get("http://localhost:3065/api/genres", {
      params: {
        genre,
      },
    });

    response.data.forEach((v) => {
      v.member = v.member.length;
      v.current = v.current.length;
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
    [loadMainChat.pending]: (state) => {
      state.loadMainChatLoading = true;
      state.loadMainChatDone = false;
      state.loadMainChatError = null;
    },
    [loadMainChat.fulfilled]: (state, action) => {
      state.loadMainChatLoading = false;
      state.loadMainChatDone = true;
      state.mainChatList = action.payload.chats;
      state.supportersChatList = action.payload.supportersChats;
    },
    [loadMainChat.rejected]: (state, action) => {
      state.loadMainChatLoading = false;
      state.loadMainChatError = action.error.message;
    },
    [loadChatByGenre.pending]: (state) => {
      state.loadChatByGenreLoading = true;
      state.loadChatByGenreDone = false;
      state.loadChatByGenreError = null;
    },
    [loadChatByGenre.fulfilled]: (state, action) => {
      state.loadChatByGenreLoading = false;
      state.loadChatByGenreDone = true;
      state.chatListByGenre = action.payload;
    },
    [loadChatByGenre.rejected]: (state, action) => {
      state.loadChatByGenreLoading = false;
      state.loadChatByGenreError = action.error.message;
    },
    [createChat.pending]: (state) => {
      state.createChatLoading = true;
      state.createChatDone = false;
      state.createChatError = null;
    },
    [createChat.fulfilled]: (state, action) => {
      state.createChatLoading = false;
      state.createChatDone = true;
      state.mainChatList.unshift(action.payload);
    },
    [createChat.rejected]: (state, action) => {
      state.createChatLoading = false;
      state.createChatError = action.error.message;
    },
  },
});

export default chatSlice;
