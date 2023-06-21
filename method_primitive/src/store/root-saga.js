import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.saga';
import { shopSagas } from './shop/shop.sagas';

export function* rootSaga() {
  yield all([
    call(categoriesSaga),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
