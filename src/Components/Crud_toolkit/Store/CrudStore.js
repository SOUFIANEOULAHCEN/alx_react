import { configureStore } from "@reduxjs/toolkit";
import CrudReducer from "../features/CrudSlice";
export const CrudStore = configureStore({
  reducer: {
    crud: CrudReducer,
  },
});
