import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
      value: 0,
    },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    incAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
  }  }
});
export const { inc, dec, incAmount , reset } = counterSlice.actions;
export default counterSlice.reducer;
