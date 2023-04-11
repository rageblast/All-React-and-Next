import { combineReducers } from 'redux';

import userSlice from './user/user.slice';
import categorySlice from './categories/category.slice';
import cartSlice from './cart/cart.slice';

export const rootReducer = combineReducers({
  user: userSlice,
  categories: categorySlice,
  cart: cartSlice,
});
