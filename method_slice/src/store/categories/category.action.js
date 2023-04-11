import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStartAsync = createAsyncThunk(
  'products/fetchproducts',
  async () => {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    return categoriesArray;
  }
);
