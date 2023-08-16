import { createSlice } from '@reduxjs/toolkit';

import { fetchCategoriesStartAsync } from './category.action';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

// reducers: {
// setCategories(state, action) {
// state.categories = action.payload;
// }
// }

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategoriesStartAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesStartAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesStartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state, action) => {
        return state;
      });
  },
});

export default categorySlice.reducer;
