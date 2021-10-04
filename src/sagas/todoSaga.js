import { call, put } from '@redux-saga/core/effects';
import { loadTodos } from '../redux/modules/todos';
import * as todoAPI from '../api/todos';

export function* loadListSaga(action) {
  // put은 특정 action을 dispatch 해줍니다.
  console.log(action);
  // yield put(loadTodos());

  try {
    // const todos = yield call(todoAPI.reqList);
    // yield put()
  } catch (e) {}
}

export function* addListSaga(action, request) {}

export function* deleteListSaga(action, request) {}
