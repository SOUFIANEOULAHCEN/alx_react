// import { createSlice } from "@reduxjs/toolkit";
// const themeSLice = createSlice({
//   name: "theme",
//   initialState: {
//     value: "light",
//   },
//   reducers: {
//     toggle: (state) => {
//       state.value = state.value === "light" ? "dark" : "light";
//     },
//   },
// });

// export const { toggleTheme } = themeSLice.actions;
// export default themeSLice.reducer;



import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: false
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark
    }
  }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer