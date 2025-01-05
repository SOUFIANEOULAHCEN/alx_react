// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./CounterSlice";
// import themeRducer from "./ThemeSlice";
// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     theme: themeRducer,
//   },
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import themeReducer from './ThemeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  }
});


export default store;
