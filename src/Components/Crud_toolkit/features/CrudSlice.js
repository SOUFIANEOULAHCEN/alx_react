import { createSlice } from "@reduxjs/toolkit";

const CrudSlice = createSlice({
  name: "crud",
  initialState: {
    users: [
      // {
      //   id: '1',
      //   userName: "soufiane",
      //   age: 25,
      //   email: "soufiane.oulahcen@gamil.com",
      // },
    ],
  },
  reducers: {
    Add: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    Delete: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    Edit: (state, action) => {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        // user = action.payload;
        user.userName = action.payload.userName;
        user.age = action.payload.age;
        user.email = action.payload.email;
      }
    },
  },
});
export const { Add, Delete, Edit } = CrudSlice.actions;
export default CrudSlice.reducer;
