import { all, call, takeLatest, put } from 'redux-saga/effects';

import { clearCart } from './cart.action';
import { USER_ACTION_TYPES } from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
