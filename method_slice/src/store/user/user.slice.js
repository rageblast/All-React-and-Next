import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
