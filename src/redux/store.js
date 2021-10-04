// 단일 스토어

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './modules/todos';
import users from './modules/users';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { todoSaga } from './modules/todos';

const rootReducer = combineReducers({ todos, users });
export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([todoSaga()]);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
