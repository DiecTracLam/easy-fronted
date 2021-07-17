import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: ["an com ","uong nuoc"],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = todoSlice;
console.log(todoSlice)
export const { addPost, removePost } = actions;
export default reducer;
