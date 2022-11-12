import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";

const initialState = {
  mainChatList: [],
  chatListByGenre: [],
  searchedChatList: [],
  nowConnectedChat: null,
  chatAccessLoading: false,
  chatAccessDone: false,
  chatAccessError: null,
  chatClosedLoading: false,
  chatClosedDone: false,
  chatClosedError: null,
  loadMainChatLoading: false,
  loadMainChatDone: false,
  loadMainChatError: null,
  loadSupporterChatsLoading: false,
  loadSupporterChatsDone: false,
  loadSupporterChatsError: null,
  loadChatByGenreLoading: false,
  loadChatByGenreDone: false,
  loadChatByGenreError: null,
  createChatLoading: false,
  createChatDone: false,
  createChatError: null,
  loadChatDataLoading: false,
  loadChatDataDone: false,
  loadChatDataError: null,
  searchedChatLoading: false,
  searchedChatDone: false,
  searchedChatError: null,
};

export const createChat = createAsyncThunk("CREATE_CHAT", async ({ code, manager, title, genre, introduce, token }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/create", {
      code,
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

    await response.data.forEach((v) => {
      v.member = v.member.length;
      v.current = v.current.length;
    });

    const normalChat = response.data.filter((v) => v.supporters === false);
    const supporterChat = response.data.filter((v) => v.supporters === true);

    const chatData = [...supporterChat, ...normalChat];

    return chatData;
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

    await response.data.forEach((v) => {
      v.member = v.member.length;
      v.current = v.current.length;
    });

    const normalChat = response.data.filter((v) => v.supporters === false);
    const supporterChat = response.data.filter((v) => v.supporters === true);

    const chatData = [...supporterChat, ...normalChat];

    return chatData;
  } catch (error) {
    throw error.response.data.errors.message;
  }
});

export const loadChatData = createAsyncThunk("LOAD_CHAT_DATA", async ({ code }) => {
  try {
    const response = await axios.get('http://localhost:3065/api/chat', {
      params: {
        code,
      },
    });

    response.data.createdAt = dayjs(response.data.createdAt).format("YY.MM.DD");

    return response.data;
  } catch (error) {
    throw error.response.data.errors.message;
  }
});

export const chatAccess = createAsyncThunk("CHAT_ACCESS", async ({ token, code, title }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/chat/access", {
      code,
      title,
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

export const chatClosed = createAsyncThunk("CHAT_CLOSED", async ({ token, code }) => {
  try {
    const response = await axios.post("http://localhost:3065/api/chat/closed", {
      code,
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

export const searchedChat = createAsyncThunk("SEARCHED_CHAT", async ({ keyword }) => {
  try {
    const response = await axios.get(`http://localhost:3065/api/chat/search`, {
      params: {
        keyword,
      },
      withCredentials: true,
    });

    await response.data.forEach((v) => {
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
      state.mainChatList = action.payload;
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
    },
    [createChat.rejected]: (state, action) => {
      state.createChatLoading = false;
      state.createChatError = action.error.message;
    },
    [loadChatData.pending]: (state) => {
      state.loadChatDataLoading = true;
      state.loadChatDataDone = false;
      state.loadChatDataError = null;
    },
    [loadChatData.fulfilled]: (state, action) => {
      state.loadChatDataLoading = false;
      state.loadChatDataDone = true;
      state.nowConnectedChat = action.payload;
    },
    [loadChatData.rejected]: (state, action) => {
      state.loadChatDataLoading = false;
      state.loadChatDataError = action.error.message;
    },
    [chatAccess.pending]: (state) => {
      state.chatAccessLoading = true;
      state.chatAccessDone = false;
      state.chatAccessError = null;
    },
    [chatAccess.fulfilled]: (state, action) => {
      state.chatAccessLoading = false;
      state.chatAccessDone = true;
    },
    [chatAccess.rejected]: (state, action) => {
      state.chatAccessLoading = false;
      state.chatAccessError = action.error.message;
    },
    [chatClosed.pending]: (state) => {
      state.chatAccessLoading = true;
      state.chatAccessDone = false;
      state.chatAccessError = null;
    },
    [chatClosed.fulfilled]: (state, action) => {
      state.chatAccessLoading = false;
      state.chatAccessDone = true;
    },
    [chatClosed.rejected]: (state, action) => {
      state.chatAccessLoading = false;
      state.chatAccessError = action.error.message;
    },
    [searchedChat.pending]: (state) => {
      state.searchedChatLoading = true;
      state.searchedChatDone = false;
      state.searchedChatError = null;
    },
    [searchedChat.fulfilled]: (state, action) => {
      state.searchedChatLoading = false;
      state.searchedChatDone = true;
      state.searchedChatList = action.payload;
    },
    [searchedChat.rejected]: (state, action) => {
      state.searchedChatLoading = false;
      state.searchedChatError = action.error.message;
    },
  },
});

export default chatSlice;
