import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './CreateSlice';
const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
// console.log(store)
export default store