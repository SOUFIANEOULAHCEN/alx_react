import { createSlice } from "@reduxjs/toolkit";

const CrudSlice = createSlice({
  name: "crud",
  initialState: {
    users: [
      {
        id: 1,
        userName: "soufiane",
        age: 25,
        email: "soufiane.oulahcen@gamil.com",
      },
    ],
  },
  reducers: {
    Add: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    Delete: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});
export const { Add, Delete } = CrudSlice.actions;
export default CrudSlice.reducer;
