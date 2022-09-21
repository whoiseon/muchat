import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice;
