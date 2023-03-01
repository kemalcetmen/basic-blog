import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 1,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export default counterSlice.reducer;