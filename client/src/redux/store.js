import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

const sagasMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagasMiddleware];
if (process.env.NODE_ENV === 'development') {
            middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagasMiddleware.run(rootSaga)

export const persistor = persistStore(store);
