import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// default middleware of redux toolkit itself has
// thunk installed in it
import thunk from 'redux-thunk';

const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

// one way overwrite default middleware is
// middleware: middlewares

// there are three default middleware
// 1.Redux thunk -> we don't need use it in customizable middleware
// 2.serializableCheck
// 3.immutablityCheck

// Second way to use default middleware and customized middleware
// using a function which gives us array
// middleware: (getDefaultMiddleware) => getDefaultMiddleware({
// serializableCheck: false
// }).concat(middlewares)

// the serilizable middleware stops us to create user or check user
// because the user comes with the value that we needed plus
// extra values so it thinks we have many values to check
// to stop it we can use the above two ways.
// by nonseralizing it.

// but we can also seralize it by doing the below one
// const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);
// dispatch(setCurrentUser(pickedUser));

export const persistor = persistStore(store);
