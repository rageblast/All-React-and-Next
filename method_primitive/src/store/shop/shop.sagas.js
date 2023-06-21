import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import ShopActionTypes from './shop.types';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.action';

export function* fetchCollectionsAsync() {
  try {
    const collectionsMap = yield call(getCategoriesAndDocuments);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
