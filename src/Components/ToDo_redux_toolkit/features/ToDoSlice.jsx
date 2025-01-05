import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
  name: "ToDo",
  initialState: {
    items: [
      {
        id: 1,
        title: "Faire les courses",
        completed: false,
      },
    ],
  },
  // reducers: {
  //   addTodo: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //   },
  //   completTodo: (state, action) => {
  //     const item = state.items.find((item) => item.id === action.payload.id); // Added return
  //     if (item) {
  //       item.completed = action.payload.isCompleted;
  //     }
  //   }
  // },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    completTodo: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.completed = action.payload.completed;
      }
    },
  },
});
export const { addTodo, completTodo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
