import { call, put } from '@redux-saga/core/effects';
import * as todoAPI from '../api/todos';

export function* loadListSaga(action) {
  try {
    const res = yield call(todoAPI.reqList);

    // put은 특정 action을 dispatch
    yield put({
      type: `${action.type}_SUCCESS`,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: `${action.type}_FAILURE`,
      payload: e,
    });
  }
}

export function* addListSaga(action) {
  try {
    const newItem = yield call(todoAPI.addList, action.payload);

    yield put({
      type: `${action.type}_SUCCESS`,
      payload: newItem.data,
    });
  } catch (e) {
    yield put({
      type: `${action.type}_FAILURE`,
      payload: e,
    });
  }
}

export function* deleteListSaga(action) {
  try {
    yield call(todoAPI.deleteList, action.payload);
    yield put({
      type: `${action.type}_SUCCESS`,
      payload: action.payload,
    });
  } catch (e) {
    yield put({
      type: `${action.type}_FAILURE`,
      payload: e,
    });
  }
}
