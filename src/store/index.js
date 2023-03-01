import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";

import postsReducer from '../features/postsSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});
export const useAppDispatch = ()=> useDispatch();
export const useAppSelector = useSelector;